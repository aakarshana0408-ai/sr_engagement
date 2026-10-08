import { wedding } from '../data/wedding';
import { TempleFrame, Thoranam } from './TraditionalDecor';

export default function FloralBackground({ variant = '', corners = ['tl', 'tr', 'bl', 'br'] }) {
  if (variant !== 'intro-florals') return <div className={`floral-background traditional-background ${variant}`} aria-hidden="true">
    <TempleFrame />
    <Thoranam />
  </div>;
  return (
    <div className={`floral-background ${variant}`} aria-hidden="true">
      {corners.map((corner) => (
        <div key={corner} className={`floral-corner floral-${corner}`}
          style={{ backgroundImage: `url(${wedding.floralArtwork})` }} />
      ))}
    </div>
  );
}
