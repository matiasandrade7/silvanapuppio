"use client";

import { useCallback, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { GALLERY, whatsappLink, workMessage } from "@/lib/site";
import CardDeckCarousel from "./CardDeckCarousel";
import Lightbox from "./Lightbox";

// En escritorio las cartas son anchas (la foto se recorta y se acerca); en celular quedan verticales.
const WIDE = "(min-width: 900px)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(WIDE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const useWide = () =>
  useSyncExternalStore(
    subscribe,
    () => window.matchMedia(WIDE).matches,
    () => false,
  );


// "Mis trabajos": botones para cambiar de categoría (color, cortes, peinados, alisado, uñas)
// y un mazo de cartas por categoría que se puede arrastrar o pasar con las flechas.
export default function WorksGallery() {
  const [active, setActive] = useState(GALLERY[0].id);
  const [shown, setShown] = useState(0); // carta que se está viendo en el mazo
  const [opened, setOpened] = useState<number | null>(null); // carta abierta en el visor
  const wide = useWide();
  const current = GALLERY.find((c) => c.id === active) ?? GALLERY[0];
  const item = current.items[Math.min(shown, current.items.length - 1)];
  const onChange = useCallback((i: number) => setShown(i), []);
  const onOpen = useCallback((i: number) => setOpened(i), []);
  const closeViewer = useCallback(() => setOpened(null), []);
  const pick = (id: string) => {
    setActive(id);
    setShown(0);
  };

  // Flechas izquierda/derecha entre pestañas (patrón de tabs accesibles).
  const onTabKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const i = GALLERY.findIndex((c) => c.id === active);
    const next = GALLERY[(i + (e.key === "ArrowRight" ? 1 : GALLERY.length - 1)) % GALLERY.length];
    pick(next.id);
    document.getElementById(`gtab-${next.id}`)?.focus();
    e.preventDefault();
  };

  return (
    <div className="gallery">
      <div className="gallery__inner">
        <div className="gtabs" role="tablist" aria-label="Tipos de trabajo" onKeyDown={onTabKey}>
          {GALLERY.map((cat) => (
            <button
              key={cat.id}
              id={`gtab-${cat.id}`}
              type="button"
              role="tab"
              className="gtab"
              aria-selected={cat.id === active}
              aria-controls="gallery-panel"
              tabIndex={cat.id === active ? 0 : -1}
              onClick={() => pick(cat.id)}
            >
              {cat.label}
              <span aria-hidden="true">{String(cat.items.length).padStart(2, "0")}</span>
            </button>
          ))}
        </div>

        <div id="gallery-panel" role="tabpanel" aria-labelledby={`gtab-${current.id}`} className="gallery__panel" key={current.id}>
          <CardDeckCarousel
            slides={current.items.map((item) => ({
              image: item.image,
              title: item.title,
              caption: current.hint,
              alt: item.alt,
              pos: item.pos ?? current.pos,
            }))}
            aspect={wide ? "16 / 10" : current.aspect}
            cardWidth={wide ? "min(88vw, 880px)" : "min(72vw, 400px)"}
            height="auto"
            scatter={wide ? 4 : 8}
            autoplay={opened === null ? 5200 : 0}
            onChange={onChange}
            onOpen={onOpen}
            background="transparent"
            ink="#fff"
            ariaLabel={`Trabajos de ${current.label.toLowerCase()}`}
          />
          <a href={whatsappLink(workMessage(item.title, current.label, item.image))} className="btn btn--white" target="_blank" rel="noreferrer">
            Quiero algo así
          </a>
        </div>
      </div>
      {opened !== null && current.items[opened] && (
        <Lightbox
          image={current.items[opened].image}
          alt={current.items[opened].alt}
          title={current.items[opened].title}
          tag={current.label}
          ctaLabel="Quiero algo así"
          ctaHref={whatsappLink(workMessage(current.items[opened].title, current.label, current.items[opened].image))}
          onClose={closeViewer}
        />
      )}
    </div>
  );
}
