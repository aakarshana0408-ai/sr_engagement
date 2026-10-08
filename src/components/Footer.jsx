import FloralBackground from './FloralBackground';
import CoupleNames from './CoupleNames';
import Reveal from './Reveal';
import { wedding } from '../data/wedding';
import { Kolam, Lamps } from './TraditionalDecor';
import InvitationBackdrop from './InvitationBackdrop';

export default function Footer() {
  return <footer className="blessing invitation-page" aria-label="Final engagement invitation">
    <InvitationBackdrop scene="final" />
    <FloralBackground variant="blessing-florals" />
    <Reveal className="relative z-10 mx-auto text-center blessing-content">
      <p className="script-accent">With love</p>
      <p className="serif-copy blessing-copy">{wedding.blessing.map((line) => <span key={line}>{line}</span>)}</p>
      <div className="fine-divider" aria-hidden="true"><span /></div>
      <CoupleNames />
      <p className="small-label mt-8">{wedding.date}</p>
      <Kolam className="final-kolam" />
    </Reveal>
    <Lamps className="blessing-lamps" />
  </footer>;
}
