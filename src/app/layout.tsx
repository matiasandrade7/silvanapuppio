import type { Metadata, Viewport } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const DESCRIPTION =
  "Silvana Puppio, técnica en belleza. Manos y pies, rostro, cejas y pestañas con dedicación y detalle. Reservá tu turno por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | ${SITE.role}`,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.role}`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.role}`,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#d2236f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-UY" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
