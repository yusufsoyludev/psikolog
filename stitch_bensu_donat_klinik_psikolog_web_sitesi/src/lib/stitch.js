import { assetMap } from "../data/assets";

const exactLabelRoutes = {
  "Ana Sayfa": "/",
  "Hakkımda": "/hakkimda",
  "Terapiler": "/terapiler",
  "Atölyeler": "/atolyeler",
  "İletişim": "/iletisim",
  "Randevu Al": "/iletisim",
  "Randevu Oluştur": "/iletisim",
  "Soru Sor": "/iletisim",
  "Soru Sorun": "/iletisim",
  "İletişime Geç": "/iletisim",
  "Danışmanlık Al": "/iletisim",
  "Hizmetlerimi Gör": "/terapiler",
  "Online Randevu": "/iletisim",
  "Atölyeye Katıl": "/iletisim",
  "Seans Detaylarını Sor": "/iletisim",
  "İlişkiniz İçin Adım Atın": "/iletisim",
  "Teknolojiyle İyileşin": "/iletisim",
  "Hemen Randevu Al": "/iletisim",
  "WhatsApp'tan Yazın": "/iletisim",
  "Gizlilik Politikası": "#",
  "KVKK Aydınlatma": "#",
  "KVKK Aydınlatma Metni": "#",
  "Kullanım Şartları": "#",
};

const startsWithRoutes = [
  ["Detaya Git", "/terapiler"],
  ["Atölyeye Katıl", "/iletisim"],
  ["Randevu Oluştur", "/iletisim"],
  ["İletişime Geç", "/iletisim"],
  ["Online Randevu", "/iletisim"],
  ["Danışmanlık Al", "/iletisim"],
  ["Hizmetlerimi Gör", "/terapiler"],
  ["Yol Tarifi Al", "#"],
  ["Gönder", "#"],
  ["Abone Ol", "#"],
];

const internalHashRoutes = {
  "#iletisim": "/iletisim",
  "#terapiler": "/terapiler",
  "#workshops": "/atolyeler",
};

function replaceMappedAssets(source) {
  return Object.entries(assetMap).reduce(
    (current, [remoteUrl, localUrl]) => current.split(remoteUrl).join(localUrl),
    source,
  );
}

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function resolveRoute(text, href) {
  if (exactLabelRoutes[text]) {
    return exactLabelRoutes[text];
  }

  if (internalHashRoutes[href]) {
    return internalHashRoutes[href];
  }

  for (const [label, route] of startsWithRoutes) {
    if (text.startsWith(label)) {
      return route;
    }
  }

  return null;
}

function removeBodyChrome(doc) {
  const body = doc.body;
  const main = body.querySelector("main");

  if (main) {
    return main;
  }

  const firstSection = body.querySelector("section");

  if (firstSection) {
    let reachedContent = false;

    Array.from(body.children).forEach((child) => {
      if (child === firstSection) {
        reachedContent = true;
        return;
      }

      if (!reachedContent) {
        child.remove();
      }
    });
  }

  return body;
}

function rewriteLinks(root) {
  root.querySelectorAll("a").forEach((link) => {
    const text = normalizeText(link.textContent || "");
    const href = link.getAttribute("href") || "";
    const route = resolveRoute(text, href);

    if (route) {
      link.setAttribute("href", route);

      if (route.startsWith("/")) {
        link.setAttribute("data-router-link", "true");
      }
    }
  });
}

export function extractStitchPage(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const styles = replaceMappedAssets(
    Array.from(doc.querySelectorAll("style"))
      .map((styleTag) => styleTag.textContent || "")
      .join("\n"),
  );

  doc.querySelectorAll("script").forEach((node) => node.remove());

  const root = removeBodyChrome(doc);

  root.querySelectorAll("footer").forEach((node) => node.remove());
  rewriteLinks(root);

  const markup = replaceMappedAssets(root.innerHTML);

  return {
    markup,
    styles,
  };
}
