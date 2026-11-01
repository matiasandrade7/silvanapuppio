import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import ScrollTop from "@/components/ScrollTop";
import Testimonials from "@/components/Testimonials";
import { CARDS, PHOTOS, SERVICES, SITE, WORKS, whatsappLink } from "@/lib/site";

const MARQUEE = ["Realzá tu belleza", "Cuidate con tiempo", "Tu momento"];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="hero__bg" aria-hidden="true" />
          <div className="hero__photo">
            <Photo
              src={PHOTOS.hero}
              alt="Silvana Puppio sonriendo, con sus herramientas de manicura en las manos"
              tone="deep"
            />
          </div>
          <div className="hero__content">
            <h1 className="hero__title">
              <span>Silvana</span> <span>Puppio</span>
            </h1>
            <p className="hero__role">Técnica en belleza</p>
            <p className="hero__text">
              Cuidado personal con dedicación y detalle: manos, pies, rostro, cejas y pestañas. Un
              momento para vos, en un espacio pensado para que te sientas cómoda.
            </p>
            <div className="hero__actions">
              <a href="#servicios" className="btn btn--pink">
                Servicios
              </a>
              <a href="#contacto" className="btn btn--white">
                Contacto
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="about">
          <div className="about__inner">
            <Reveal className="about__copy">
              <h2 className="display display--pink">Sobre mí</h2>
              <p>
                Soy Silvana, técnica en belleza. Me dedico a que cada clienta salga del turno
                sintiéndose bien con su imagen y con su piel.
              </p>
              <p>
                Trabajo con productos de calidad, materiales siempre limpios y mucho cuidado en los
                detalles. Cada servicio lo adapto a lo que necesitás y a lo que te queda bien.
              </p>
              <p>
                Si no sabés por dónde empezar, escribime y lo vemos juntas.
              </p>
              <a href={whatsappLink("Hola Silvana, quiero hacerte una consulta.")} className="btn btn--pink" target="_blank" rel="noreferrer">
                Escribime
              </a>
            </Reveal>
            <Reveal className="about__photo-wrap" delay={120}>
              <Photo src={PHOTOS.about} alt="Silvana Puppio, técnica en belleza" tone="soft" className="tilt about__photo" />
            </Reveal>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {Array.from({ length: 2 }).map((_, group) => (
              <div className="marquee__group" key={group}>
                {Array.from({ length: 4 }).flatMap((_, rep) =>
                  MARQUEE.map((text) => (
                    <span key={`${rep}-${text}`}>
                      {text} <i>/</i>
                    </span>
                  )),
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SERVICIOS (tarjetas) */}
        <section id="servicios" className="explore">
          <div className="explore__bg" aria-hidden="true">
            {PHOTOS.explore && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={PHOTOS.explore} alt="" />
            )}
          </div>
          <Reveal>
            <h2 className="display explore__title">Tiempo de brillar</h2>
          </Reveal>
          <div className="cards">
            {CARDS.map((card, i) => (
              <Reveal key={card.id} delay={i * 120}>
                <a href="#detalle" className="card">
                  <div className="card__img">
                    <Photo src={card.photo} alt={card.label} tone={i === 1 ? "deep" : "soft"} />
                  </div>
                  <span className="card__label">{card.label}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SERVICIOS (detalle) */}
        <section id="detalle" className="detail">
          <div className="detail__inner">
            <Reveal className="detail__head">
              <h2 className="display display--pink">Lo que hago</h2>
              <p>
                Escribime por WhatsApp para consultar precios, disponibilidad y combinar el servicio
                que mejor se adapte a vos.
              </p>
              <a href={whatsappLink()} className="btn btn--pink" target="_blank" rel="noreferrer">
                Reservar turno
              </a>
            </Reveal>
            <ol className="detail__list">
              {SERVICES.map((s, i) => (
                <li key={s.title}>
                  <Reveal delay={i * 60}>
                    <div className="detail__row">
                      <span className="detail__num">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{s.title}</h3>
                        <p>{s.text}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TRABAJOS */}
        <section id="trabajos" className="works">
          <div className="works__inner">
            <Reveal>
              <h2 className="display works__title">Mis trabajos</h2>
            </Reveal>

            {WORKS.slice(0, 1).map((work) => (
              <article className="work-feature" key={work.title}>
                <Reveal className="work-feature__photo-wrap">
                  <Photo src={work.image} alt={work.alt} className="tilt work-feature__photo" />
                </Reveal>
                <Reveal className="work-feature__copy" delay={120}>
                  <span className="work-feature__tag">{work.category}</span>
                  <h3 className="display">{work.title}</h3>
                  <p>{work.text}</p>
                  <a href={whatsappLink(work.message)} className="btn btn--white" target="_blank" rel="noreferrer">
                    Quiero algo así
                  </a>
                </Reveal>
              </article>
            ))}

            {WORKS.length > 1 && (
              <ul className="work-grid">
                {WORKS.slice(1).map((work, i) => (
                  <li key={work.title}>
                    <Reveal delay={i * 80}>
                      <figure className="work-card">
                        <div className="work-card__img">
                          <Photo src={work.image} alt={work.alt} />
                        </div>
                        <figcaption>
                          <span>{work.category}</span>
                          {work.title}
                        </figcaption>
                      </figure>
                    </Reveal>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* OPINIONES */}
        <section id="opiniones" className="opinions">
          <Reveal>
            <Testimonials />
          </Reveal>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="cta">
          <div className="cta__inner">
            <Reveal className="cta__photo-wrap">
              <Photo src={PHOTOS.cta} alt="Trabajo de Silvana Puppio" tone="deep" className="tilt cta__photo" />
            </Reveal>
            <Reveal className="cta__card" delay={120}>
              <h2 className="display display--pink">¿Lista para tu momento?</h2>
              <p>
                Reservá tu turno por WhatsApp. Te respondo para coordinar día y horario, y para
                contarte todo lo que necesites antes de venir.
              </p>
              <a href={whatsappLink()} className="btn btn--pink" target="_blank" rel="noreferrer">
                Reservar por WhatsApp
              </a>
              <p className="cta__note">
                También podés escribirme por{" "}
                <a href={SITE.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
