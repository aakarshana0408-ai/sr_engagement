import { wedding } from '../data/wedding';

export default function CoupleNames({ as: Tag = 'p', className = '', id }) {
  return <Tag id={id} className={`couple-names ${className}`}>
    <span>{wedding.groom}</span>
    <span className="couple-amp">&amp;</span>
    <span>{wedding.bride}</span>
  </Tag>;
}
