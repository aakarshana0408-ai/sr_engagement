import { useEffect, useRef, useState } from 'react';
import { Music2, Pause } from 'lucide-react';
import { wedding } from '../data/wedding';

export default function MusicButton() {
  const audio = useRef(null);
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    // Vite returns HTML for unknown paths; a 200 response alone does not mean music exists.
    fetch(wedding.music, { method: 'HEAD', signal: controller.signal }).then((response) => {
      const type = response.headers.get('content-type') || '';
      setAvailable(response.ok && /audio\/|application\/octet-stream/.test(type));
    }).catch(() => {});
    return () => controller.abort();
  }, []);
  async function toggle() {
    if (playing) { audio.current.pause(); setPlaying(false); }
    else {
      try { await audio.current.play(); setPlaying(true); setError(false); }
      catch { setPlaying(false); setError(true); }
    }
  }
  if (!available) return null;
  return <div className="music-control">
    <audio ref={audio} src={wedding.music} loop preload="none" onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setError(true); }} />
    <button type="button" className={`music-button icon-button ${playing ? 'music-playing' : ''}`} onClick={toggle}
      aria-label={playing ? 'Pause engagement music' : 'Play engagement music'} aria-pressed={playing} title={playing ? 'Pause engagement music' : 'Play engagement music'}>
      {playing ? <Pause size={18} /> : <Music2 size={18} />}
    </button>
    {error && <span className="music-error" role="status">Music is unavailable</span>}
  </div>;
}
