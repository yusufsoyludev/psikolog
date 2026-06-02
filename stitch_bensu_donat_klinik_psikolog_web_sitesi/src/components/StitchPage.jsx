import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { extractStitchPage } from "../lib/stitch";

function StitchPage({ html }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const page = useMemo(() => extractStitchPage(html), [html]);

  useEffect(() => {
    window.tailwind?.refresh?.();
  }, [page.markup]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const handleClick = (event) => {
      const anchor = event.target.closest("a[data-router-link='true']");

      if (!anchor) {
        return;
      }

      event.preventDefault();
      navigate(anchor.getAttribute("href"));
    };

    const handleSubmit = (event) => {
      const form = event.target.closest("form");

      if (!form) {
        return;
      }

      event.preventDefault();

      const submitButton = form.querySelector("button[type='submit']");

      if (!submitButton) {
        return;
      }

      const originalContent = submitButton.innerHTML;
      submitButton.innerHTML =
        "<span class='material-symbols-outlined animate-spin'>refresh</span> Gönderiliyor...";
      submitButton.setAttribute("disabled", "true");

      window.setTimeout(() => {
        submitButton.innerHTML = "Mesajınız alındı";
      }, 900);

      window.setTimeout(() => {
        submitButton.innerHTML = originalContent;
        submitButton.removeAttribute("disabled");
        form.reset();
      }, 2400);
    };

    container.addEventListener("click", handleClick);
    container.addEventListener("submit", handleSubmit);

    return () => {
      container.removeEventListener("click", handleClick);
      container.removeEventListener("submit", handleSubmit);
    };
  }, [navigate, page.markup]);

  return (
    <>
      {page.styles ? (
        <style dangerouslySetInnerHTML={{ __html: page.styles }} />
      ) : null}
      <div
        ref={containerRef}
        className="stitch-page-content"
        dangerouslySetInnerHTML={{ __html: page.markup }}
      />
    </>
  );
}

export default StitchPage;
