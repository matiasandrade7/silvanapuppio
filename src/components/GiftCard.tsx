"use client";

import { useRef, useState } from "react";
import { SITE, whatsappLink } from "@/lib/site";

const IDEAS = ["Esmaltado semipermanente", "Manicuría tradicional", "Pedicuría", "Balayage", "Alisado progresivo"];

// Simulador de gift card: la tarjeta se completa en vivo y se pide por WhatsApp ya armada.
export default function GiftCard() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = useState("Esmaltado semipermanente");
  const card = useRef<HTMLDivElement>(null);

  const move = (e: React.PointerEvent) => {
    const el = card.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${((0.5 - y) * 12).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * 16).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
  };

  const leave = () => {
    const el = card.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--gx", "30%");
    el.style.setProperty("--gy", "20%");
  };

  const message = [
    "Hola Silvana, quiero pedir una gift card.",
    from.trim() && `De: ${from.trim()}.`,
    to.trim() && `Para: ${to.trim()}.`,
    value.trim() && `Vale por: ${value.trim()}.`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="gift__grid">
      <div className="gift__copy">
        <h2 className="display gift__title">Regalá un momento</h2>
        <p>
          La gift card es ideal para cumpleaños, el Día de la Madre o cualquier ocasión. Podés regalar un
          servicio o un monto, y te mando el voucher por WhatsApp. Armala acá y mirá cómo queda.
        </p>

        <form className="gift__form" onSubmit={(e) => e.preventDefault()}>
          <label>
            <span>De</span>
            <input value={from} onChange={(e) => setFrom(e.target.value)} maxLength={22} placeholder="Quien regala" autoComplete="off" />
          </label>
          <label>
            <span>Para</span>
            <input value={to} onChange={(e) => setTo(e.target.value)} maxLength={22} placeholder="Quien recibe" autoComplete="off" />
          </label>
          <label className="gift__wide">
            <span>Vale por (servicio o monto)</span>
            <input value={value} onChange={(e) => setValue(e.target.value)} maxLength={30} placeholder="Ej.: Pedicuría o $1.500" autoComplete="off" />
          </label>
        </form>

        <div className="gift__chips" role="group" aria-label="Ideas de servicio">
          {IDEAS.map((idea) => (
            <button key={idea} type="button" data-on={value === idea} onClick={() => setValue(idea)}>
              {idea}
            </button>
          ))}
        </div>

        <a href={whatsappLink(message)} className="btn btn--white" target="_blank" rel="noreferrer">
          Pedir mi gift card
        </a>
      </div>

      <div className="gift__stage" onPointerMove={move} onPointerLeave={leave}>
        <div className="gift__back" aria-hidden="true" />
        <div className="giftcard" ref={card} role="img" aria-label={`Gift card de ${from || "…"} para ${to || "…"}, vale por ${value || "…"}`}>
          <span className="giftcard__glare" aria-hidden="true" />
          <svg className="giftcard__spark" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M60 4 C64 34 68 44 116 60 C68 76 64 86 60 116 C56 86 52 76 4 60 C52 44 56 34 60 4Z" fill="currentColor" />
          </svg>
          <header className="giftcard__head">
            <span className="giftcard__sig">{SITE.name}</span>
            <span className="giftcard__role">Técnica en belleza</span>
          </header>
          <p className="giftcard__title" aria-hidden="true">
            <b>Gift</b>
            <i>Card</i>
          </p>
          <dl className="giftcard__fields">
            <div>
              <dt>De</dt>
              <dd data-empty={!from.trim()}>{from.trim() || "Tu nombre"}</dd>
            </div>
            <div>
              <dt>Para</dt>
              <dd data-empty={!to.trim()}>{to.trim() || "Su nombre"}</dd>
            </div>
            <div className="giftcard__value">
              <dt>Vale por</dt>
              <dd data-empty={!value.trim()}>{value.trim() || "Un servicio a elección"}</dd>
            </div>
          </dl>
          <footer className="giftcard__foot">
            <span>@silvanapuppiotecnicaenbelleza</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.9 5 6.2 5c2 0 3.2 1 3.8 2 .6-1 1.8-2 3.8-2 3.3 0 5.3 3.4 3.8 6.8C19.5 16.4 12 21 12 21Z" fill="currentColor" />
            </svg>
          </footer>
        </div>
      </div>
    </div>
  );
}
