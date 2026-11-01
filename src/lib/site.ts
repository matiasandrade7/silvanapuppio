// Datos editables del sitio. Todo lo marcado con TODO es un valor provisorio
// que hay que confirmar con Silvana antes de publicar.

export const SITE = {
  name: "Silvana Puppio",
  role: "Técnica en belleza",
  url: "https://silvanapuppio.uy",
  // Celular 095 277 927 en formato internacional (Uruguay +598, sin el 0 inicial)
  whatsapp: "59895277927",
  instagram: "https://www.instagram.com/silvanapuppiotecnicaenbelleza/",
  whatsappMessage: "Hola Silvana, quiero reservar un turno.",
};

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

// TODO: confirmar los servicios reales y sumar precios si Silvana quiere publicarlos.
export const CARDS = [
  { id: "manos-y-pies", label: "Manos y pies", photo: null as string | null },
  { id: "rostro", label: "Rostro", photo: null as string | null },
  { id: "cejas-y-pestanas", label: "Cejas y pestañas", photo: null as string | null },
];

export const SERVICES = [
  {
    title: "Manicura y esmaltado",
    text: "Limado, cuidado de cutículas y esmaltado tradicional o semipermanente, con el diseño que prefieras.",
  },
  {
    title: "Pedicura",
    text: "Cuidado completo de los pies: limado, cutículas, hidratación y esmaltado.",
  },
  {
    title: "Limpieza facial",
    text: "Limpieza profunda e hidratación según el tipo de piel, para que se vea descansada y pareja.",
  },
  {
    title: "Perfilado de cejas",
    text: "Diseño a medida de tu rostro, respetando tu forma natural.",
  },
  {
    title: "Lifting de pestañas",
    text: "Levanta y define la pestaña natural, con efecto que dura semanas.",
  },
  {
    title: "Depilación",
    text: "Depilación profesional con cuidado de la piel antes y después.",
  },
  {
    title: "Color y corte",
    text: "Rubios con luces, raíz natural y cortes en capas pensados para tu tipo de cabello.",
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
];

// TODO: reemplazar por reseñas reales de clientas (Google o WhatsApp) con su permiso.
export const TESTIMONIALS = [
  {
    quote: "Salí del turno sintiéndome renovada. Todo prolijo, a horario y con muchísima atención.",
    author: "Nombre de clienta",
  },
  {
    quote: "Se nota que le pone dedicación a cada detalle. Ya no me atiendo con nadie más.",
    author: "Nombre de clienta",
  },
  {
    quote: "Un lugar tranquilo donde te sentís cómoda desde que llegás. Súper recomendable.",
    author: "Nombre de clienta",
  },
];

export const NAV = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
];
