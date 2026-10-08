import { MapPin } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import Reveal from './Reveal';
import { TempleFrame, Thoranam } from './TraditionalDecor';
import { wedding, mapsUrl } from '../data/wedding';
import InvitationBackdrop from './InvitationBackdrop';

export default function Venue() {
  return <section id="venue" className="venue-section section-space" aria-labelledby="venue-title">
    <InvitationBackdrop scene="venue" />
    <div className="venue-layout mx-auto grid items-center gap-10 md:grid-cols-2">
      <Reveal className="venue-heading text-center md:text-left">
        <p className="small-label">Where Our Forever Begins</p>
        <h2 id="venue-title" className="section-title">The Venue</h2>
        <p className="script-accent">See you in Chennai</p>
        <div className="venue-city-line" aria-hidden="true" />
      </Reveal>
      <Reveal className="venue-details text-center" delay={150}>
        <address className="venue-address">{wedding.venue.map((line) => <span key={line}>{line}</span>)}</address>
        <div className="venue-qr-card relative mx-auto">
          <TempleFrame className="venue-qr-frame" />
          <Thoranam className="venue-qr-garland" />
          <div className="relative z-10">
            <MapPin className="venue-qr-pin mx-auto" size={24} strokeWidth={1.2} aria-hidden="true" />
            <a className="venue-qr-link" href={mapsUrl} target="_blank" rel="noopener noreferrer"
              aria-label="Open engagement venue in Google Maps" aria-describedby="venue-qr-hint">
              <QRCodeSVG id="venue-map-qr" value={mapsUrl} size={256} level="Q" marginSize={4}
                bgColor="#fffdf7" fgColor="#352c27" title="Google Maps QR code for the engagement venue" role="img" />
            </a>
            <p className="venue-qr-caption">Scan to find the venue</p>
            <p id="venue-qr-hint" className="venue-qr-hint">Tap the QR code to open Google Maps</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;
}
