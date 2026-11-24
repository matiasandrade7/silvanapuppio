import { SITE, TESTIMONIALS } from "@/lib/site";
import { InstagramIcon } from "./Icons";
import Reveal from "./Reveal";

const initial = (name: string) => name.charAt(0).toUpperCase();

// Muro de comentarios reales de Instagram: lo corto funciona mejor en varias tarjetas juntas.
export default function Testimonials() {
  return (
    <div className="wall">
      <Reveal className="wall__head">
        <p className="wall__kicker">Lo que dicen en su Instagram</p>
        <h2 className="display display--pink wall__title">Clientas contentas</h2>
      </Reveal>

      <ul className="wall__grid">
        {TESTIMONIALS.map((t, i) => (
          <li key={t.author} className="wall__item">
            <Reveal delay={i * 90}>
              <figure className="wcard">
                <header className="wcard__top">
                  <span className="wcard__avatar" data-v={i % 3} aria-hidden="true">
                    {initial(t.author)}
                  </span>
                  <span className="wcard__user">{t.author}</span>
                  <InstagramIcon size={16} />
                </header>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  Comentó en una publicación de {t.context}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.9 5 6.2 5c2 0 3.2 1 3.8 2 .6-1 1.8-2 3.8-2 3.3 0 5.3 3.4 3.8 6.8C19.5 16.4 12 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="wall__more">
        <a href={SITE.instagram} className="btn btn--pink" target="_blank" rel="noreferrer">
          Ver más en Instagram
        </a>
      </Reveal>
    </div>
  );
}
