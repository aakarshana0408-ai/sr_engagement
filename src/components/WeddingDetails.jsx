import { Clock3 } from 'lucide-react';
import Countdown from './Countdown';
import Reveal from './Reveal';
import { wedding } from '../data/wedding';
import './WeddingDetails.css';

function DateOrnament({ flourish = false }) {
  return <svg className={`date-panel-ornament${flourish ? ' date-panel-flourish' : ''}`} viewBox="0 0 300 44" fill="none" aria-hidden="true">
    {flourish ? <>
      <path d="M2 12C21 43 92 7 132 10C145 11 158 30 150 36C142 30 155 11 168 10C208 7 279 43 298 12M150 25C135 13 133 0 143 2C148 3 150 8 150 11C150 8 152 3 157 2C167 0 165 13 150 25Z" />
      <path d="M150 35L145 40L150 43L155 40Z" />
    </> : <>
      <path d="M0 22H129M171 22H300M150 3C141 14 140 20 150 22C160 20 159 14 150 3ZM150 41C159 30 160 24 150 22C140 24 141 30 150 41ZM131 22C141 13 147 12 150 22C147 32 141 31 131 22ZM169 22C159 31 153 32 150 22C153 12 159 13 169 22Z" />
      <circle cx="150" cy="22" r="2" />
    </>}
  </svg>;
}

export default function WeddingDetails() {
  return <section id="wedding" className="details-section engagement-date-section" aria-labelledby="date-title">
    <Reveal className="date-poster mx-auto text-center">
      <img className="date-poster-art" src="/assets/engagement-date-frame-v2.webp" width="1122" height="1402" alt="" loading="lazy" decoding="async" />
      <p className="date-panel-kicker">The Engagement</p>
      <div className="date-panel-heading-divider"><DateOrnament /></div>
      <h2 id="date-title" className="date-panel-title"><span>Save</span><em>the</em><span>Date</span></h2>
      <div className="date-panel-title-flourish"><DateOrnament flourish /></div>
      <div className="date-panel-calendar" aria-label={wedding.date}>
        <p className="date-panel-weekday">{wedding.weekday}</p>
        <span className="date-panel-day">{wedding.day}</span>
        <span className="date-panel-month">{wedding.month}</span>
        <span className="date-panel-year">{wedding.year}</span>
      </div>
      <p className="event-time date-panel-time"><Clock3 strokeWidth={1.3} aria-hidden="true" />{wedding.time}</p>
    </Reveal>
    <div className="date-countdown-shell">
      <Reveal className="mx-auto max-w-3xl text-center"><Countdown /></Reveal>
    </div>
  </section>;
}
