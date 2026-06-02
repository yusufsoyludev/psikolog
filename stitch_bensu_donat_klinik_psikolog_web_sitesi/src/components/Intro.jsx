import { useEffect, useMemo, useState } from "react";

const PETAL_COUNT = 14;

function Intro({ onComplete }) {
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, index) => ({
        id: index,
        left: `${(index * 7.3) % 100}%`,
        size: `${18 + ((index * 9) % 26)}px`,
        delay: `${(index % 5) * 0.6}s`,
        duration: `${8 + (index % 4) * 2.2}s`,
        color: index % 3 === 0 ? "rgba(126, 160, 109, 0.28)" : "rgba(215, 181, 191, 0.34)",
      })),
    [],
  );

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      setIsActive(true);
      window.tailwind?.refresh?.();
    });

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, 3300);

    const finishTimer = window.setTimeout(() => {
      onComplete();
    }, 4700);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={[
        "intro-overlay fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-surface",
        isExiting ? "is-exiting" : "",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="absolute inset-0 pointer-events-none">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="intro-petal rounded-full blur-[1px]"
            style={{
              left: petal.left,
              bottom: "-40px",
              width: petal.size,
              height: `calc(${petal.size} * 0.72)`,
              background: petal.color,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              borderRadius: "70% 30% 65% 35% / 50% 60% 40% 50%",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className={[
            "intro-floral intro-floral-background",
            isActive ? "is-active" : "",
          ].join(" ")}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-gutter text-center">
        <h1
          className={[
            "intro-fade font-headline-lg text-[40px] text-primary md:text-headline-lg",
            isActive ? "is-active" : "",
          ].join(" ")}
        >
          Ruhunuzda
        </h1>
        <h2
          className={[
            "intro-fade font-headline-md text-headline-sm italic text-primary md:text-headline-md",
            isActive ? "is-active" : "",
          ].join(" ")}
        >
          çiçekler açsın
        </h2>
        <div
          className={[
            "intro-bloom mt-10 text-primary/40",
            isActive ? "is-active" : "",
          ].join(" ")}
        >
          <span className="material-symbols-outlined text-[48px] md:text-[64px]">
            local_florist
          </span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
