import { useState } from 'react';
import IntroVideo from './components/IntroVideo';
import Opening from './components/Opening';
import Hero from './components/Hero';
import WeddingDetails from './components/WeddingDetails';
import Venue from './components/Venue';
import Footer from './components/Footer';
import Petals from './components/Petals';
import Navigation from './components/Navigation';

export default function App() {
  const [entered, setEntered] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  return <>
    {!introFinished && <IntroVideo onEnter={() => { window.scrollTo(0, 0); setEntered(true); }} onExit={() => setIntroFinished(true)} />}
    {entered && <div className="invitation" inert={!introFinished}>
      <Petals />
      <main><Opening /><Hero /><WeddingDetails /><Venue /></main>
      <Footer />
      <Navigation />
    </div>}
  </>;
}
