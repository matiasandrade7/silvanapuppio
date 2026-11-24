import type { ArtKey } from "@/components/ServiceArt";

// Datos editables del sitio. Todo lo marcado con TODO es un valor provisorio
// que hay que confirmar con Silvana antes de publicar.

export const SITE = {
  name: "Silvana Puppio",
  role: "Técnica en belleza",
  url: "https://silvanapuppio.uy",
  // Celular 095 277 927 en formato internacional (Uruguay +598, sin el 0 inicial)
  whatsapp: "59895277927",
  instagram: "https://www.instagram.com/silvanapuppiotecnicaenbelleza/",
  // Tomado de la bio de Instagram. TODO: confirmar dirección exacta si quiere publicarla.
  location: "Zona Nuevocentro Shopping",
  // De la destacada "Medios de Pago". Se omite el número de apartamento a propósito.
  // TODO: confirmar con Silvana que quiere publicar la dirección.
  address: "Torres Nuevocentro · Luis Alberto de Herrera 3355",
  whatsappMessage: "Hola Silvana, quiero reservar un turno.",
};

// Horario tomado de la historia destacada "Horario" de su Instagram (publicada hace ~6 meses).
// TODO: confirmar con Silvana que sigue vigente.
export const HOURS = [
  { days: "Lunes, miércoles y viernes", time: "Desde las 13:30" },
  { days: "Martes y jueves", time: "Hasta las 14:00" },
  { days: "Sábados", time: "Fiestas y eventos" },
];

// De la destacada "Medios de Pago" (publicada hace ~1 año). TODO: confirmar que sigue igual.
export const PAYMENTS = [
  "Efectivo",
  "Transferencia (Itaú o Santander)",
  "Mercado Pago (12 cuotas con 10% de recargo)",
];

export const whatsappLink = (message: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

// Fotos: dejar el archivo en /public/img y poner la ruta acá.
// Mientras sea null se muestra un fondo rosa de relleno.
export const PHOTOS = {
  hero: "/img/silvana.jpg" as string | null,
  about: "/img/silvana.jpg" as string | null, // TODO: segunda foto para variar
  explore: null as string | null, // /img/fondo-servicios.jpg
  cta: "/img/silvana.jpg" as string | null, // TODO: foto de manos/trabajos
};

// Servicios tomados de la destacada "Servicios" de su Instagram (historias de 2020 a 2024).
// TODO: confirmar con Silvana que la lista sigue vigente y sumar precios si quiere publicarlos.
export const CARDS: { id: string; label: string; art?: ArtKey; photo?: string }[] = [
  { id: "manicuria", label: "Manicuría", photo: "/img/trabajos/unas-amarillo.jpg" },
  { id: "pedicuria", label: "Pedicuría", photo: "/img/servicios/pedicuria-flores.jpg" },
  { id: "peluqueria", label: "Peluquería y balayage", photo: "/img/trabajos/balayage-capas.jpg" },
];

// Imagen de cada servicio: una ilustración (`art`) o una foto real (`photo` + `pos` para el recorte).
// Para usar una foto: copiarla a /public/img y reemplazar `art` por `photo: "/img/archivo.jpg"`.
// Las fotos de /img/trabajos salen de las publicaciones de su Instagram.
// Las de /img/servicios (pedicuría y depilación) son fotos de stock de Unsplash (licencia libre, uso comercial):
// photo-1519415510236-718bdfcd89c8 (tarjeta de pedicuría) y photo-1581003250898-36050e78fcd3 (depilación).
// La pedicuría de la lista y la de novias y quinceañeras son de su Instagram (/p/DCm6bzESA92 y /p/DLPxhMHsrzk).
// TODO: confirmar permiso de la familia para publicar la foto de la quinceañera (es menor de edad).
// TODO: reemplazar las de stock por fotos propias de Silvana cuando las tenga.
export type Service = {
  title: string;
  text: string;
  art?: ArtKey;
  photo?: string;
  pos?: string;
  /** Si se define, el botón del servicio lleva a esta dirección en vez de a WhatsApp. */
  href?: string;
  cta?: string;
};

export const SERVICES: Service[] = [
  {
    title: "Manicuría tradicional",
    text: "Base de tratamiento, esmalte, top coat y secante rápido, con guantes emolientes. Dura aproximadamente 7 días.",
    photo: "/img/trabajos/unas-amarillo.jpg",
  },
  {
    title: "Esmaltado semipermanente y kapping gel",
    text: "Esmaltado semipermanente, kapping gel y dipping, con una buena preparación previa de la uña. El semipermanente dura entre 15 y 20 días, según tu cuidado y el crecimiento de tus uñas.",
    photo: "/img/trabajos/unas-diseno.jpg",
  },
  {
    title: "Pedicuría",
    text: "Bomba efervescente hidratante o botas hidratantes según el caso, exfoliante, bisturí, torno y esmaltado tradicional o semipermanente.",
    photo: "/img/servicios/pedicuria-sandalias.jpg",
  },
  {
    title: "Depilación con cera",
    text: "Depilación tradicional con cera, incluida la facial: cejas, bozo y mentón.",
    photo: "/img/servicios/depilacion-cejas.jpg",
  },
  {
    title: "Balayage y color",
    text: "Rubios con luces naturales, raíz difuminada y un resultado que crece lindo.",
    photo: "/img/trabajos/balayage-luces.jpg",
  },
  {
    title: "Cortes y peinados",
    text: "Cortes en capas o bob y peinados, pensados para tu tipo de cabello y tu estilo.",
    photo: "/img/trabajos/peinado-recogido.jpg",
  },
  {
    title: "Peinado y maquillaje para novias y quinceañeras",
    text: "Hace muchos años acompaño a novias y quinceañeras. Cada una es única, y me encanta estar en ese momento tan íntimo y lleno de ilusión.",
    photo: "/img/servicios/novias-quinceaneras.jpg",
  },
  {
    title: "Alisado progresivo con queratina",
    text: "Con Alfaparf Milano, libre de formol. Brillo, recuperación de la fibra y disciplina hasta por 3 meses.",
    photo: "/img/trabajos/alisado-largo.jpg",
  },
  {
    title: "Tratamientos capilares",
    text: "Botox capilar y ampollas de nutrición Salerm 21 Boost, ideales para cabellos sensibilizados.",
    photo: "/img/trabajos/alisado-brillo.jpg",
  },
  {
    title: "Gift card",
    text: "Regalá un servicio o un monto: te mando el voucher por WhatsApp.",
    art: "gift",
    href: "#gift-card",
    cta: "Armá tu gift card",
  },
];

// Trabajos realizados. El primero se muestra grande; los demás van en grilla.
// Para sumar uno: copiar la foto a /public/img y agregar un objeto acá.
export const WORKS = [
  {
    image: "/img/trabajo-cabello.jpg",
    alt: "Cabello largo rubio con luces y corte en capas, visto de espalda",
    category: "Cabello",
    title: "Rubio luminoso con capas",
    text: "Raíz natural, luces que se funden hacia las puntas y un corte en capas que da movimiento y volumen.",
    message: "Hola Silvana, vi el trabajo de rubio con capas y quiero consultar por algo similar.",
  },
  {
    image: "/img/trabajos/peinado-trenzas.jpg",
    alt: "Peinado con dos trenzas y cola, visto desde arriba",
    category: "Peinados",
    title: "Trenzas con cola",
    text: "",
    message: "Hola Silvana, vi el peinado de trenzas y quiero consultar.",
  },
  {
    image: "/img/trabajos/unas-corazon.jpg",
    alt: "Uñas esmaltadas en gris y rosa con un corazón dorado",
    category: "Uñas",
    title: "Diseño con corazón",
    text: "",
    message: "Hola Silvana, vi el diseño de uñas con corazón y quiero consultar.",
  },
  {
    image: "/img/trabajos/peinado-trenzado.jpg",
    alt: "Recogido trenzado en tono rubio, visto desde atrás",
    category: "Peinados",
    title: "Recogido trenzado",
    text: "",
    message: "Hola Silvana, vi el recogido trenzado y quiero consultar.",
  },
  {
    image: "/img/trabajos/balayage-capas.jpg",
    alt: "Cabello largo con balayage rubio y capas, visto de espalda",
    category: "Cabello",
    title: "Balayage con capas",
    text: "",
    message: "Hola Silvana, vi el balayage con capas y quiero consultar.",
  },
];

// Opiniones reales: comentarios públicos de clientas en las publicaciones de su Instagram.
// Se copian sin emojis y se muestra solo el nombre de pila (el que figura público en su perfil).
// Primera frase: el original decía "te pintaste"; se corrigió a "me pintaste" por pedido de Silvana/Matías.
// TODO: avisar a las clientas antes de publicar su comentario con su nombre y confirmar la corrección.
export const TESTIMONIALS = [
  {
    quote: "Me pintaste para mi cumple de mi color, objetivo cumplido.",
    author: "Charlotte",
    context: "manicuría",
  },
  {
    quote: "Están hermosas, gracias.",
    author: "Belu",
    context: "uñas esculpidas",
  },
  {
    quote: "Qué belleza!!!",
    author: "Elena",
    context: "peinado",
  },
  {
    quote: "Un éxito!!!",
    author: "Andre",
    context: "alisado",
  },
  {
    quote: "Hermosas!!!",
    author: "LG G.",
    context: "esmaltado semipermanente",
  },
];

export const NAV = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
];
