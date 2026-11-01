"use client";

import { useEffect, useState } from "react";

const R = 20;
const C = 2 * Math.PI * R;

// Botón "volver arriba" con un anillo que se llena según el avance del scroll.
export default function ScrollTop() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setShow(window.scrollY > 400);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <button
      type="button"
      className="to-top"
      data-show={show}
      aria-label="Volver arriba"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle className="to-top__track" cx="24" cy="24" r={R} />
        <circle
          className="to-top__bar"
          cx="24"
          cy="24"
          r={R}
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress)}
          transform="rotate(-90 24 24)"
        />
        <path className="to-top__arrow" d="M24 31V18m0 0-6 6m6-6 6 6" />
      </svg>
    </button>
  );
}
