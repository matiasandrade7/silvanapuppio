"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICES, whatsappLink } from "@/lib/site";
import ServiceArt from "./ServiceArt";

const pad = (n: number) => String(n).padStart(2, "0");

// Vitrina de servicios: a la izquierda una imagen fija que cambia según el servicio
// que está en el centro de la pantalla; a la derecha la lista que se desplaza.
export default function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number(e.target.getAttribute("data-i")));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (i: number) =>
    items.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className="showcase">
      <div className="showcase__stage" aria-hidden="true">
        <div className="stage__frame">
          {SERVICES.map((s, i) => (
            <div className="stage__slide" data-active={i === active} key={s.title}>
              <ServiceArt art={s.art} photo={s.photo} pos={s.pos} alt="" />
            </div>
          ))}
          <span className="stage__num">
            {pad(active + 1)}
            <small>/{pad(SERVICES.length)}</small>
          </span>
        </div>
        <div className="stage__dots">
          {SERVICES.map((s, i) => (
            <button
              key={s.title}
              type="button"
              tabIndex={-1}
              data-active={i === active}
              onClick={() => go(i)}
              aria-label={s.title}
            />
          ))}
        </div>
      </div>

      <ol className="showcase__list">
        {SERVICES.map((s, i) => (
          <li
            key={s.title}
            data-i={i}
            data-active={i === active}
            ref={(el) => {
              items.current[i] = el;
            }}
            className="svc"
          >
            <div className="svc__art">
              <ServiceArt art={s.art} photo={s.photo} pos={s.pos} alt={s.title} />
            </div>
            <span className="svc__num">{pad(i + 1)}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {s.href ? (
              <a className="svc__link" href={s.href}>
                {s.cta ?? "Ver más"} <span aria-hidden="true">→</span>
              </a>
            ) : (
              <a
                className="svc__link"
                href={whatsappLink(`Hola Silvana, quiero consultar por ${s.title.toLowerCase()}.`)}
                target="_blank"
                rel="noreferrer"
              >
                Consultar este servicio <span aria-hidden="true">→</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
