"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SERVICES, whatsappLink } from "@/lib/site";
import Lightbox from "./Lightbox";
import ServiceArt from "./ServiceArt";

const pad = (n: number) => String(n).padStart(2, "0");

// Vitrina de servicios: a la izquierda una imagen fija que cambia según el servicio
// que está en el centro de la pantalla; a la derecha la lista que se desplaza.
export default function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const [viewing, setViewing] = useState<number | null>(null); // servicio abierto en el visor
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

  const closeViewer = useCallback(() => setViewing(null), []);
  const go = (i: number) =>
    items.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className="showcase">
      <div className="showcase__stage">
        <div className="stage__frame">
          {SERVICES.map((s, i) => (
            <div className="stage__slide" data-active={i === active} key={s.title}>
              <ServiceArt art={s.art} photo={s.photo} pos={s.pos} alt="" />
            </div>
          ))}
          {SERVICES[active].photo && (
            <button
              type="button"
              className="stage__open"
              aria-label={`Ver foto completa: ${SERVICES[active].title}`}
              onClick={() => setViewing(active)}
            />
          )}
          <span className="stage__num" aria-hidden="true">
            {pad(active + 1)}
            <small>/{pad(SERVICES.length)}</small>
          </span>
        </div>
        <div className="stage__dots" aria-hidden="true">
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
            {s.photo ? (
              <button
                type="button"
                className="svc__art svc__art--open"
                aria-label={`Ver foto completa: ${s.title}`}
                onClick={() => setViewing(i)}
              >
                <ServiceArt art={s.art} photo={s.photo} pos={s.pos} alt="" />
              </button>
            ) : (
              <div className="svc__art">
                <ServiceArt art={s.art} photo={s.photo} pos={s.pos} alt={s.title} />
              </div>
            )}
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

      {viewing !== null && SERVICES[viewing].photo && (
        <Lightbox
          image={SERVICES[viewing].photo!}
          alt={SERVICES[viewing].title}
          title={SERVICES[viewing].title}
          tag="Servicios"
          ctaLabel="Consultar este servicio"
          ctaHref={whatsappLink(`Hola Silvana, quiero consultar por ${SERVICES[viewing].title.toLowerCase()}.`)}
          onClose={closeViewer}
        />
      )}
    </div>
  );
}
