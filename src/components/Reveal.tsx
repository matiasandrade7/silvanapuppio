"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Entrada al hacer scroll. Se repite en ambas direcciones (sale y vuelve a entrar).
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setArmed(true);

    // Histéresis: el elemento se mueve (translateY) al aparecer/desaparecer, y si se observara a sí
    // mismo con un único umbral, cuando solo asoma un fragmento (por ejemplo bajo el menú fijo)
    // el movimiento lo sacaba y metía una y otra vez ("tilteo"). Por eso:
    //  - se muestra cuando entra al menos el 15% en la pantalla
    //  - se oculta recién cuando sale por completo de la pantalla ampliada 140px arriba y abajo
    // Así ninguna de las dos transiciones puede deshacer a la otra.
    const show = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.15) setVisible(true);
      },
      { threshold: 0.15 },
    );
    const hide = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setVisible(false);
      },
      { rootMargin: "140px 0px 140px 0px" },
    );
    show.observe(el);
    hide.observe(el);
    return () => {
      show.disconnect();
      hide.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${armed ? "reveal" : ""} ${className}`}
      data-in={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
