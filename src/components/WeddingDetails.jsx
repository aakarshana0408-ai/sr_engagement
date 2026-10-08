import { Clock3 } from 'lucide-react';
import Countdown from './Countdown';
import Reveal from './Reveal';
import { wedding } from '../data/wedding';
import { Kolam, Lamps, TempleFrame } from './TraditionalDecor';
import InvitationBackdrop from './InvitationBackdrop';

export default function WeddingDetails() {
  return <section id="wedding" className="details-section section-space" aria-labelledby="date-title">
    <InvitationBackdrop scene="date" />
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="small-label">The Engagement</p>
      <h2 id="date-title" className="section-title">Save the Date</h2>
      <div className="calendar-date mx-auto" aria-label={wedding.date}>
        <TempleFrame className="calendar-frame" />
        <p className="small-label calendar-day">{wedding.weekday}</p>
        <span className="calendar-number">{wedding.day}</span>
        <span className="calendar-month">{wedding.month}</span>
        <span className="calendar-year">{wedding.year}</span>
      </div>
      <p className="event-time flex items-center justify-center gap-3"><Clock3 size={17} strokeWidth={1.3} />{wedding.time}</p>
      <Countdown />
    </Reveal>
    <Lamps className="date-lamps" />
    <Kolam className="section-kolam kolam-left" />
    <Kolam className="section-kolam kolam-right" />
  </section>;
}
