"use client";

import { useEffect, useRef } from "react";

const ROW_A = ["Manicuría", "Pedicuría", "Depilación", "Semipermanente"];
const ROW_B = ["Balayage", "Alisado", "Novias", "Quinceañeras"];

// Dos filas de texto grande que se desplazan en sentidos opuestos según el scroll.
export default function BigMarquee() {
  const root = useRef<HTMLDivElement>(null);
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = root.current;
      if (!el || !a.current || !b.current) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      a.current.style.transform = `translate3d(${-p * 35}%,0,0)`;
      b.current.style.transform = `translate3d(${-35 + p * 35}%,0,0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const row = (words: string[]) =>
    Array.from({ length: 3 }).flatMap((_, rep) =>
      words.map((w) => (
        <span key={`${rep}-${w}`}>
          {w} <i>✦</i>
        </span>
      )),
    );

  return (
    <div className="bigmq" ref={root} aria-hidden="true">
      <div className="bigmq__row bigmq__row--fill" ref={a}>
        {row(ROW_A)}
      </div>
      <div className="bigmq__row bigmq__row--line" ref={b}>
        {row(ROW_B)}
      </div>
    </div>
  );
}
