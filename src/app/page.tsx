import BigMarquee from "@/components/BigMarquee";
import Footer from "@/components/Footer";
import GiftCard from "@/components/GiftCard";
import Header from "@/components/Header";
import { PinIcon } from "@/components/Icons";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import ScrollTop from "@/components/ScrollTop";
import ServiceArt from "@/components/ServiceArt";
import ServicesShowcase from "@/components/ServicesShowcase";
import Testimonials from "@/components/Testimonials";
import Tilt from "@/components/Tilt";
import { CARDS, HOURS, PAYMENTS, PHOTOS, SITE, WORKS, whatsappLink } from "@/lib/site";

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
              Manos, pies, cabello, depilación y maquillaje con la atención personalizada que necesitás.
              Reservá tu turno con agenda previa.
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
                Soy Silvana, técnica en belleza y especialista en balayage. Me dedico a que cada
                clienta salga del turno sintiéndose bien con su imagen.
              </p>
              <p>
                Trabajo con agenda previa para darle a cada persona el tiempo y la atención
                personalizada que merece. Cada servicio lo adapto a lo que necesitás y a lo que te
                queda bien.
              </p>
              <p>
                También me encargo del peinado en las noticias de Canal 5, así que sé lo que es
                trabajar con detalle y a horario.
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

        {/* MARQUESINA (se mueve con el scroll) */}
        <BigMarquee />

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
                <Tilt>
                  <a href="#detalle" className="card">
                    <div className="card__img">
                      <ServiceArt art={card.art} photo={card.photo} pos="50% 30%" alt={card.label} />
                    </div>
                    <span className="card__label">{card.label}</span>
                  </a>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SERVICIOS (detalle) */}
        <section id="detalle" className="detail">
          <div className="detail__inner">
            <Reveal className="detail__head">
              <h2 className="display display--pink">Mis servicios</h2>
              <div className="detail__intro">
                <p>
                  Trabajo sola, por eso atiendo con agenda previa. Si querés un horario específico,
                  agendá con tiempo. Escribime por WhatsApp para consultar precios y disponibilidad.
                </p>
                <a href={whatsappLink()} className="btn btn--pink" target="_blank" rel="noreferrer">
                  Reservar turno
                </a>
              </div>
            </Reveal>
            <ServicesShowcase />
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

        {/* GIFT CARD */}
        <section id="gift-card" className="gift">
          <div className="gift__inner">
            <GiftCard />
          </div>
        </section>

        {/* OPINIONES */}
        <section id="opiniones" className="opinions">
          <Testimonials />
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
                Trabajo sola, así que si querés un horario específico, agendá con tiempo. Escribime
                por WhatsApp, coordinamos día y horario, y te cuento todo lo que necesites antes de
                venir.
              </p>
              <p className="cta__place">
                <PinIcon size={16} /> {SITE.address}
              </p>
              <dl className="cta__hours">
                {HOURS.map((h) => (
                  <div key={h.days}>
                    <dt>{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="cta__pay">
                <strong>Medios de pago:</strong> {PAYMENTS.join(" · ")}
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
