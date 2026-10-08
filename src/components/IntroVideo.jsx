import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import FloralBackground from './FloralBackground';
import { wedding } from '../data/wedding';

export default function IntroVideo({ onEnter, onExit }) {
  const video = useRef(null);
  const exitTimer = useRef(null);
  const finished = useRef(false);
  const [leaving, setLeaving] = useState(false);
  const [muted, setMuted] = useState(true);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    document.body.classList.add('intro-active');
    window.scrollTo(0, 0);
    video.current.play().catch(() => setBlocked(true));
    return () => {
      document.body.classList.remove('intro-active');
      clearTimeout(exitTimer.current);
    };
  }, []);

  function finish() {
    if (finished.current) return;
    finished.current = true;
    video.current.pause();
    onEnter();
    setLeaving(true);
    document.body.classList.remove('intro-active');
    exitTimer.current = setTimeout(onExit, 1100);
  }

  async function play() {
    try { await video.current.play(); setBlocked(false); }
    catch { setBlocked(true); }
  }

  return <section className={`intro-video ${leaving ? 'intro-leaving' : ''}`} aria-label="Engagement intro video" inert={leaving}>
    <video ref={video} src={wedding.introVideo} autoPlay muted={muted} playsInline preload="auto"
      onEnded={finish} onError={() => setBlocked(true)} onPlaying={() => setBlocked(false)} />
    <FloralBackground variant="intro-florals" />
    <div className="intro-controls flex items-center justify-center gap-3">
      {blocked && <button type="button" className="intro-icon" aria-label="Play intro video" title="Play intro video" onClick={play}><Play size={18} /></button>}
      <button type="button" className="intro-icon" aria-label={muted ? 'Unmute video' : 'Mute video'} title={muted ? 'Unmute video' : 'Mute video'}
        onClick={() => { setMuted(!muted); play(); }}>{muted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button>
      <button type="button" className="intro-enter flex items-center gap-3" onClick={finish}>Enter Invitation <ArrowRight size={16} /></button>
    </div>
  </section>;
}
