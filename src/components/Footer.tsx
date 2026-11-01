import { NAV, SITE, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsappIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <p className="footer__logo">{SITE.name}</p>
        <nav className="footer__nav" aria-label="Pie de página">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer__social">
          <a href={whatsappLink()} aria-label="WhatsApp" target="_blank" rel="noreferrer">
            <WhatsappIcon size={20} />
          </a>
          <a href={SITE.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
            <InstagramIcon size={20} />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} {SITE.name} · {SITE.role}
        </span>
        <a
          className="footer__credit"
          href="https://sevenflow.uy"
          target="_blank"
          rel="noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/seven-flow.png" alt="" width={26} height={23} />
          <span>
            Creado por <strong>Seven Flow</strong>
          </span>
        </a>
      </div>
    </footer>
  );
}
