const petals = Array.from({ length: 9 }, (_, i) => ({
  left: `${(i * 37 + 8) % 100}%`,
  duration: `${18 + (i % 4) * 4}s`,
  delay: `${-i * 3}s`,
  drift: `${i % 2 ? 45 : -45}px`,
}));

export default function Petals() {
  return <div className="petals" aria-hidden="true">{petals.map((p, i) => (
    <span key={i} className="petal" style={{ left: p.left, '--duration': p.duration, '--delay': p.delay, '--drift': p.drift }} />
  ))}</div>;
}
