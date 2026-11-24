# Silvana Puppio — técnica en belleza

Sitio estático hecho con Next.js. `npm run build` genera la carpeta `out/`.

## Desarrollo

```bash
npm install
npm run dev
```

## Publicar en Cloudflare Pages

1. En Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** y elegir este repositorio.
2. Configuración de build:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
3. Variable de entorno (opcional, ya hay un `.node-version`): `NODE_VERSION = 22`.
4. En **Custom domains** agregar `silvanapuppio.uy`.

El dominio de `src/lib/site.ts` (`SITE.url`) tiene que coincidir con el dominio real: de ahí salen las
imágenes y los datos para compartir el link (WhatsApp, Instagram).

## Contenido que se edita en un solo lugar

`src/lib/site.ts`: teléfono de WhatsApp, Instagram, servicios, fotos, trabajos, horarios, medios de
pago y comentarios de clientas. Las fotos van en `public/img/`.

Pendientes marcados como `TODO` en ese archivo (confirmar horarios y precios, permisos de fotos y
comentarios, reemplazar las fotos de stock).
