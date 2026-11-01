"use client";

import { useEffect, useState } from "react";
import { NAV, SITE, whatsappLink } from "@/lib/site";
import { InstagramIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header" data-scrolled={scrolled}>
      <a href="#inicio" className="header__logo" aria-label={`${SITE.name}, inicio`}>
        {SITE.name}
      </a>

      <nav className="header__nav" aria-label="Principal">
        {NAV.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header__right">
        <a href={SITE.instagram} aria-label="Instagram" className="header__social" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href={whatsappLink()} className="btn btn--outline header__cta" target="_blank" rel="noreferrer">
          Reservar turno
        </a>
        <button
          type="button"
          className="header__burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="menu-movil" className="mobile-menu" data-open={open} hidden={!open}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href={whatsappLink()} className="btn btn--white" target="_blank" rel="noreferrer">
          Reservar turno
        </a>
      </div>
    </header>
  );
}
