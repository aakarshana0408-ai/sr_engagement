import { useEffect, useState } from 'react';

const items = [{ id: 'home', label: 'Home' }, { id: 'wedding', label: 'Engagement' }, { id: 'venue', label: 'Venue' }];

export default function Navigation() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    function update() {
      const midpoint = window.scrollY + window.innerHeight * 0.45;
      let current = 'home';
      items.forEach(({ id }) => { if (document.getElementById(id).offsetTop <= midpoint) current = id; });
      setActive(current);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <nav className="floating-nav flex items-center justify-center" aria-label="Invitation sections">
    {items.map(({ id, label }) => <a key={id} href={`#${id}`} className={active === id ? 'nav-active' : ''} aria-current={active === id ? 'location' : undefined}>{label}</a>)}
  </nav>;
}
