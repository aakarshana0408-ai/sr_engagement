import FloralBackground from './FloralBackground';
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
      <h2 id="wedding-title" className="script-accent">The Engagement</h2>
      <p className="couple-names hero-names">{wedding.date}</p>
      <p className="event-time mt-3">{wedding.time}</p>
      <div className="fine-divider" aria-hidden="true"><span /></div>
      <p className="serif-copy"><span>Join us as we celebrate</span><span>a beautiful new beginning.</span></p>
    </Reveal>
  </section>;
}
