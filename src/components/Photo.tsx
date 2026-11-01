// Foto con relleno rosa mientras no haya imagen real (ver PHOTOS en lib/site.ts).
type PhotoProps = {
  src: string | null;
  alt: string;
  tone?: "deep" | "rose" | "soft";
  className?: string;
};

export default function Photo({ src, alt, tone = "rose", className = "" }: PhotoProps) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={`photo ${className}`} src={src} alt={alt} loading="lazy" />;
  }
  return <div className={`photo photo--${tone} ${className}`} role="img" aria-label={alt} />;
}
