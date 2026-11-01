"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/site";
import { StarIcon } from "./Icons";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const current = TESTIMONIALS[index];

  return (
    <div
      className="quote"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <figure key={index} className="quote__figure" aria-live="polite">
        <blockquote>“{current.quote}”</blockquote>
        <figcaption>— {current.author}</figcaption>
      </figure>
      <div className="quote__stars" aria-label="5 de 5 estrellas">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} size={16} />
        ))}
      </div>
      <div className="quote__dots">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ver opinión ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
