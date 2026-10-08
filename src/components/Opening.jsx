import { ArrowDown } from 'lucide-react';
import FloralBackground from './FloralBackground';
import CoupleNames from './CoupleNames';
import { wedding } from '../data/wedding';
import { Kolam } from './TraditionalDecor';
import InvitationBackdrop from './InvitationBackdrop';

export default function Opening() {
  return <section id="home" className="opening invitation-page" aria-labelledby="couple-title">
    <InvitationBackdrop scene="home" />
    <FloralBackground variant="opening-florals" />
    <div className="opening-content relative z-10 mx-auto text-center">
      <p className="small-label opening-label">A Beautiful Beginning</p>
      <Kolam className="opening-kolam" />
      <div className="fine-divider opening-divider" aria-hidden="true"><span /></div>
      <CoupleNames as="h1" id="couple-title" className="opening-names" />
      <p className="opening-copy serif-copy">{wedding.opening.map((line) => <span key={line}>{line}</span>)}</p>
      <p className="opening-date small-label">{wedding.date}</p>
      <a className="scroll-link inline-flex items-center justify-center" href="#wedding" aria-label="Continue to the engagement invitation" title="Continue to the engagement invitation"><ArrowDown size={20} strokeWidth={1} /></a>
    </div>
  </section>;
}
