import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100% estático: `npm run build` genera la carpeta `out/` lista para Cloudflare Pages.
  output: "export",
  // Las fotos se sirven tal cual (ya vienen recortadas y comprimidas en /public/img).
  images: { unoptimized: true },
};

export default nextConfig;
