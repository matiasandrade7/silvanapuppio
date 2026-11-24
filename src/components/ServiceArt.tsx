import { useId } from "react";

export type ArtKey = "polish" | "nails" | "bath" | "wax" | "straight" | "ampoule" | "gift";

type ArtProps = {
  art?: ArtKey;
  photo?: string | null;
  pos?: string;
  alt: string;
  className?: string;
};

const TONES: Record<ArtKey, [string, string]> = {
  polish: ["#f9b8cd", "#d2236f"],
  nails: ["#ffd3df", "#e0457f"],
  bath: ["#ffc7da", "#c21a64"],
  wax: ["#f7a6c3", "#a3124f"],
  straight: ["#f3b6cb", "#8e1250"],
  ampoule: ["#ffd3df", "#b8135c"],
  gift: ["#f9b8cd", "#a3124f"],
};

const STAR = "M0 -14 C2 -4 4 -2 14 0 C4 2 2 4 0 14 C-2 4 -4 2 -14 0 C-4 -2 -2 -4 0 -14Z";

function Sparkles({ spots }: { spots: [number, number, number][] }) {
  return (
    <g fill="#fff" opacity="0.9">
      {spots.map(([x, y, s], i) => (
        <path key={i} d={STAR} transform={`translate(${x} ${y}) scale(${s})`} />
      ))}
    </g>
  );
}

const NAIL_COLORS = ["#fdeeee", "#ffd3df", "#f06aa0", "#d2236f", "#a3124f", "#e8c4b8", "#ff8a7a", "#4e0a2c"];

function Foreground({ art }: { art: ArtKey }) {
  switch (art) {
    case "polish":
      return (
        <g>
          <rect x="172" y="96" width="56" height="130" rx="16" fill="#4e0a2c" />
          <rect x="182" y="108" width="8" height="104" rx="4" fill="#fff" opacity="0.25" />
          <rect x="178" y="222" width="44" height="30" fill="#fdeeee" />
          <rect x="132" y="248" width="136" height="170" rx="34" fill="#fff" opacity="0.95" />
          <rect x="144" y="290" width="112" height="116" rx="26" fill="#d2236f" />
          <rect x="154" y="262" width="10" height="130" rx="5" fill="#fff" opacity="0.5" />
          <path d="M200 440 C186 462 186 476 200 480 C214 476 214 462 200 440Z" fill="#fff" opacity="0.95" />
          <Sparkles spots={[[96, 170, 1.1], [320, 250, 0.8], [300, 120, 0.6]]} />
        </g>
      );
    case "nails":
      return (
        <g transform="translate(200 440)">
          {NAIL_COLORS.map((c, i) => (
            <g key={c} transform={`rotate(${-63 + i * 18})`}>
              <path d="M-22 0 L-22 -170 Q-22 -214 0 -214 Q22 -214 22 -170 L22 0 Z" fill="#fff" opacity="0.92" />
              <path d="M-22 -60 L-22 -170 Q-22 -214 0 -214 Q22 -214 22 -170 L22 -60 Z" fill={c} />
              <path d="M-12 -170 Q-12 -196 -6 -204" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
            </g>
          ))}
          <circle r="26" fill="#fff" />
          <circle r="14" fill="#d2236f" />
          <Sparkles spots={[[-150, -250, 1], [150, -230, 0.8], [0, -300, 0.6]]} />
        </g>
      );
    case "bath":
      return (
        <g>
          <path d="M70 300 H330 Q330 404 200 416 Q70 404 70 300Z" fill="#fff" opacity="0.95" />
          <ellipse cx="200" cy="300" rx="130" ry="26" fill="#ffd3df" />
          <ellipse cx="200" cy="304" rx="108" ry="16" fill="#f06aa0" opacity="0.55" />
          {[
            [140, 296, -20],
            [210, 306, 15],
            [262, 294, 35],
          ].map(([x, y, r], i) => (
            <ellipse key={i} cx={x} cy={y} rx="20" ry="9" fill="#d2236f" transform={`rotate(${r} ${x} ${y})`} />
          ))}
          {[
            [150, 230, 16],
            [196, 196, 24],
            [246, 236, 13],
            [226, 150, 11],
            [172, 150, 8],
            [275, 190, 8],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#fff" opacity="0.8" />
          ))}
          <Sparkles spots={[[96, 180, 0.9], [318, 130, 0.7]]} />
        </g>
      );
    case "wax":
      return (
        <g>
          <path d="M120 256 Q200 150 280 256Z" fill="#d2236f" />
          <path d="M200 232 C176 214 190 192 200 206 C210 192 224 214 200 232Z" fill="#fff" />
          <rect x="112" y="250" width="176" height="150" rx="30" fill="#f06aa0" />
          <rect x="126" y="262" width="10" height="120" rx="5" fill="#fff" opacity="0.35" />
          <circle cx="200" cy="330" r="28" fill="#fff" />
          <path d="M200 330 L214 314" stroke="#d2236f" strokeWidth="6" strokeLinecap="round" />
          <rect x="258" y="418" width="78" height="38" rx="10" fill="#f6d38a" transform="rotate(-8 258 418)" />
          <rect x="290" y="396" width="64" height="32" rx="9" fill="#ecc069" transform="rotate(6 290 396)" />
          <Sparkles spots={[[80, 200, 1], [330, 190, 0.7], [90, 330, 0.6]]} />
        </g>
      );
    case "straight":
      return (
        <g fill="none" stroke="#fff" strokeLinecap="round">
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 104 + i * 24;
            return (
              <path
                key={i}
                d={`M${x} 60 C${x + 16} 110 ${x - 16} 150 ${x} 200 L${x} 440`}
                strokeWidth={i % 2 ? 7 : 5}
                opacity={0.55 + (i % 3) * 0.15}
              />
            );
          })}
          <Sparkles spots={[[70, 330, 1.2], [334, 250, 0.9], [330, 110, 0.7]]} />
        </g>
      );
    case "ampoule":
      return (
        <g>
          <rect x="178" y="92" width="44" height="40" rx="8" fill="#4e0a2c" />
          <path d="M182 132 H218 V160 Q246 186 246 226 V382 Q246 420 200 420 Q154 420 154 382 V226 Q154 186 182 160Z" fill="#fff" opacity="0.95" />
          <path d="M154 290 H246 V382 Q246 420 200 420 Q154 420 154 382Z" fill="#f06aa0" />
          <rect x="168" y="190" width="10" height="150" rx="5" fill="#fff" opacity="0.6" />
          <path d="M290 250 C276 272 276 288 290 292 C304 288 304 272 290 250Z" fill="#fff" opacity="0.9" />
          <path d="M112 300 C100 320 100 332 112 336 C124 332 124 320 112 300Z" fill="#fff" opacity="0.8" />
          <Sparkles spots={[[300, 150, 1], [96, 200, 0.8], [320, 380, 0.6]]} />
        </g>
      );
    case "gift":
      return (
        <g>
          <rect x="104" y="248" width="192" height="150" rx="14" fill="#fdeeee" />
          <rect x="94" y="214" width="212" height="44" rx="12" fill="#fff" />
          <rect x="188" y="214" width="24" height="184" fill="#d2236f" />
          <g fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round">
            <path d="M200 206 C150 150 120 190 160 206 Z" />
            <path d="M200 206 C250 150 280 190 240 206 Z" />
          </g>
          <circle cx="200" cy="208" r="14" fill="#d2236f" />
          <Sparkles spots={[[84, 150, 1.1], [320, 170, 0.9], [330, 330, 0.6]]} />
        </g>
      );
  }
}

export default function ServiceArt({ art, photo, pos = "50% 50%", alt, className = "" }: ArtProps) {
  const id = useId();

  if (photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={`art art--photo ${className}`} src={photo} alt={alt} style={{ objectPosition: pos }} loading="lazy" />;
  }
  if (!art) return null;

  const [from, to] = TONES[art];
  return (
    <svg className={`art ${className}`} viewBox="0 0 400 500" role="img" aria-label={alt} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#${id}-bg)`} />
      <circle cx="330" cy="70" r="150" fill="#fff" opacity="0.14" />
      <circle cx="40" cy="460" r="170" fill="#fff" opacity="0.1" />
      <Foreground art={art} />
    </svg>
  );
}
