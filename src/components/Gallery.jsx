import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Reveal from './Reveal';
import FloralBackground from './FloralBackground';
import { wedding } from '../data/wedding';
import { Thoranam } from './TraditionalDecor';
import InvitationBackdrop from './InvitationBackdrop';

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const photos = wedding.gallery.filter((photo) => photo.src);

  useEffect(() => {
    if (selected !== null) dialog.current.showModal();
    else dialog.current.close();
  }, [selected]);

  function move(direction) {
    setSelected((index) => (index + direction + photos.length) % photos.length);
  }

  return <section id="gallery" className="gallery-section section-space" aria-labelledby="gallery-title">
    <InvitationBackdrop scene="gallery" />
    <Thoranam className="album-thoranam" />
    <Reveal className="text-center">
      <p className="small-label">Little Moments, Lasting Love</p>
      <h2 id="gallery-title" className="section-title">Memories</h2>
    </Reveal>
    <div className="gallery-grid mx-auto grid grid-cols-2 gap-3 md:gap-6">
      {[0, 1].map((column) => <div key={column} className="gallery-column flex flex-col gap-3 md:gap-6">
      {wedding.gallery.filter((_, i) => i % 2 === column).map((photo, i) => <Reveal key={photo.id} className={`gallery-item gallery-${photo.shape}`} delay={i * 80}>
        {photo.src ? <button type="button" className="gallery-photo" onClick={() => setSelected(photos.indexOf(photo))} aria-label={`View ${photo.alt}`}>
          <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
        </button> : <div className={`gallery-placeholder placeholder-${i}`} role="img" aria-label="Botanical placeholder for a future couple photo">
          <FloralBackground variant="gallery-florals" corners={i % 2 ? ['tr', 'bl'] : ['tl', 'br']} />
          <span className="placeholder-number">{photo.id}</span>
        </div>}
      </Reveal>)}
      </div>)}
    </div>
    <dialog ref={dialog} className="photo-dialog" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
      onKeyDown={(event) => { if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1); }} aria-label="Engagement photo">
      <button type="button" className="dialog-close icon-button" aria-label="Close photo" title="Close photo" onClick={() => setSelected(null)}><X size={22} /></button>
      {selected !== null && <img src={photos[selected].src} alt={photos[selected].alt} />}
      {photos.length > 1 && <div className="dialog-navigation flex justify-center gap-4">
        <button type="button" className="icon-button" title="Previous photo" aria-label="Previous photo" onClick={() => move(-1)}><ChevronLeft /></button>
        <button type="button" className="icon-button" title="Next photo" aria-label="Next photo" onClick={() => move(1)}><ChevronRight /></button>
      </div>}
    </dialog>
  </section>;
}
