"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type LightboxProps = {
  image: string;
  alt: string;
  title: string;
  /** Etiqueta chica sobre el título (categoría o sección). */
  tag: string;
  ctaLabel: string;
  ctaHref: string;
  onClose: () => void;
};

// Visor a pantalla completa: muestra la foto entera (sin el recorte de la carta o del marco).
// Se cierra con la X, tocando el fondo o la foto, o con Escape.
export default function Lightbox({ image, alt, title, tag, ctaLabel, ctaHref, onClose }: LightboxProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const html = document.documentElement;
    const overflow = html.style.overflow;
    html.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "Tab") {
        // el foco se queda dentro del visor (botón cerrar y enlace de WhatsApp)
        const items = boxRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      html.style.overflow = overflow;
      previous?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div ref={boxRef} className="lightbox" role="dialog" aria-modal="true" aria-label={`${title}, ${tag}`} onClick={onClose}>
      <button ref={closeRef} type="button" className="lightbox__close" aria-label="Cerrar" onClick={onClose}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      <figure className="lightbox__fig">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={alt} />
        <figcaption onClick={(e) => e.stopPropagation()}>
          <span className="lightbox__tag">{tag}</span>
          <strong className="display">{title}</strong>
          <a href={ctaHref} className="btn btn--white" target="_blank" rel="noreferrer">
            {ctaLabel}
          </a>
        </figcaption>
      </figure>
    </div>,
    document.body,
  );
}
