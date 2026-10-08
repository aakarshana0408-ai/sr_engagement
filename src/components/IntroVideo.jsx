import { useEffect, useRef, useState } from 'react';
import FloralBackground from './FloralBackground';
import { wedding } from '../data/wedding';

export default function IntroVideo({ onEnter, onExit }) {
  const video = useRef(null);
  const exitTimer = useRef(null);
  const finished = useRef(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let active = true;
    document.body.classList.add('intro-active');
    window.scrollTo(0, 0);
    video.current.play().catch(() => { if (active) finish(); });
    return () => {
      active = false;
      document.body.classList.remove('intro-active');
      clearTimeout(exitTimer.current);
    };
  }, []);

  function finish() {
    if (finished.current) return;
    finished.current = true;
    video.current?.pause();
    onEnter();
    setLeaving(true);
    document.body.classList.remove('intro-active');
    exitTimer.current = setTimeout(onExit, 1100);
  }

  return <section className={`intro-video ${leaving ? 'intro-leaving' : ''}`} aria-label="Engagement intro video" inert={leaving}>
    <video ref={video} src={wedding.introVideo} autoPlay muted playsInline preload="auto"
      onEnded={finish} onError={finish} />
    <FloralBackground variant="intro-florals" />
  </section>;
}
