import { useEffect, useState } from 'react';
import { wedding } from '../data/wedding';

function remaining() {
  const diff = Math.max(0, new Date(wedding.startsAt).getTime() - Date.now());
  return [Math.floor(diff / 86400000), Math.floor(diff / 3600000) % 24, Math.floor(diff / 60000) % 60, Math.floor(diff / 1000) % 60];
}

export default function Countdown() {
  const [time, setTime] = useState(remaining);
  useEffect(() => {
    const timer = setInterval(() => setTime(remaining()), 1000);
    return () => clearInterval(timer);
  }, []);
  const started = Date.now() >= new Date(wedding.startsAt).getTime();
  const ended = Date.now() >= new Date(wedding.endsAt).getTime();
  return <div className="countdown-wrap">
    <p className="countdown-caption">{ended ? 'A beautiful beginning, forever cherished' : started ? 'Our special day is here' : 'Counting the moments until we say forever'}</p>
    <div className="countdown grid grid-cols-4" role="timer" aria-label="Countdown to the engagement">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => <div key={label} className="countdown-unit">
        <span className="countdown-value">{String(time[i]).padStart(2, '0')}</span><span className="countdown-label">{label}</span>
      </div>)}
    </div>
  </div>;
}
