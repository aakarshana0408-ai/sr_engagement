import FloralBackground from './FloralBackground';
import CoupleNames from './CoupleNames';
import Reveal from './Reveal';
import { wedding } from '../data/wedding';
import { Kolam } from './TraditionalDecor';
import InvitationBackdrop from './InvitationBackdrop';

export default function Hero() {
  return <section id="wedding" className="hero invitation-page" aria-labelledby="wedding-title">
    <InvitationBackdrop scene="wedding" />
    <FloralBackground variant="hero-florals" />
    <Kolam className="section-kolam kolam-left" />
    <Kolam className="section-kolam kolam-right" />
    <Reveal className="relative z-10 mx-auto text-center hero-content">
      <p className="script-accent">A beautiful beginning</p>
      <p id="wedding-title" className="small-label mt-5">The Engagement</p>
      <CoupleNames as="h2" className="hero-names" />
      <div className="fine-divider" aria-hidden="true"><span /></div>
      <p className="hero-date">{wedding.date}</p>
      <p className="event-time mt-3">{wedding.time}</p>
    </Reveal>
  </section>;
}
