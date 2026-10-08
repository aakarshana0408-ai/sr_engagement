import { useId } from 'react';

const scenes = {
  home: '/assets/scene-home-entrance.webp',
  wedding: '/assets/scene-wedding-lamps.webp',
  date: '/assets/scene-date-kolam.webp',
  venue: '/assets/scene-venue-temple.webp',
  gallery: '/assets/paper-jasmine.png',
  final: '/assets/scene-final-mandapam.webp',
};

export default function InvitationBackdrop({ scene }) {
  const grainId = `paper-${useId().replaceAll(':', '')}`;
  return <div className={`invitation-backdrop scene-${scene}`} aria-hidden="true">
    <svg className="invitation-paper-grain" viewBox="0 0 700 900" preserveAspectRatio="none">
      <filter id={grainId} x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency=".78" numOctaves="3" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="700" height="900" filter={`url(#${grainId})`} />
    </svg>
    <img className="invitation-scene" src={scenes[scene]} alt="" loading="lazy" decoding="async" />
    <div className="invitation-text-wash" />
  </div>;
}
