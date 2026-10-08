import { wedding } from '../data/wedding';

export function Thoranam({ className = '' }) {
  return <div className={`thoranam ${className}`} aria-hidden="true">
    <img src={wedding.thoranamArtwork} alt="" decoding="async" />
  </div>;
}

export function Kolam({ className = '' }) {
  return <svg className={`kolam ${className}`} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <g className="kolam-thread" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {[0, 90, 180, 270].map((angle) => <path key={angle} transform={`rotate(${angle} 60 60)`}
        d="M60 10 C77 10 86 26 74 38 L38 74 C26 86 10 77 10 60 C10 43 26 34 38 46 L74 82 C86 94 77 110 60 110" />)}
      <path d="M60 24 Q82 38 96 60 Q82 82 60 96 Q38 82 24 60 Q38 38 60 24Z" />
    </g>
    <g fill="currentColor">
      {[36, 60, 84].flatMap((x) => [36, 60, 84].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />))}
    </g>
  </svg>;
}

export function TempleFrame({ className = '' }) {
  return <div className={`temple-frame ${className}`} aria-hidden="true">
    <div className="temple-frame-line" />
    {['tl', 'tr', 'bl', 'br'].map((corner) => <svg key={corner} className={`temple-corner temple-${corner}`} viewBox="0 0 70 70" fill="none">
      <path d="M4 62V18H18V4H62M10 62V24H24V10H62M4 38H10M38 4V10" stroke="currentColor" strokeWidth=".9" />
      <path d="M23 43C23 31 31 23 43 23C43 35 35 43 23 43ZM25 41L40 26" stroke="currentColor" strokeWidth=".8" />
      <path d="M34 48C36 38 42 34 51 36C49 45 43 50 34 48Z" stroke="currentColor" strokeWidth=".7" />
      <circle cx="18" cy="18" r="2" fill="currentColor" />
    </svg>)}
    <span className="temple-seal temple-seal-top" /><span className="temple-seal temple-seal-bottom" />
  </div>;
}

export function Lamps({ className = '' }) {
  return <div className={`traditional-lamps ${className}`} aria-hidden="true">
    {['left', 'right'].map((side) => <div key={side} className={`lamp lamp-${side}`}>
      <img src={wedding.lampArtwork} alt="" loading="lazy" decoding="async" />
    </div>)}
  </div>;
}
