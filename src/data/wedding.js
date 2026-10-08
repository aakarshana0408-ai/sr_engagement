export const wedding = {
  groom: 'P B Sudhagar',
  bride: 'C Renuka',
  initials: 'P & R',
  date: '25 October 2026',
  day: '25',
  month: 'October',
  year: '2026',
  weekday: 'Sunday',
  time: '10:00 AM \u2013 12:00 PM',
  startsAt: '2026-10-25T10:00:00+05:30',
  endsAt: '2026-10-25T12:00:00+05:30',
  venue: [
    'A2B VELACHERRY, SABTHAGIRI HALL',
    'Velachery, Chennai.',
  ],
  venueMapsQuery: 'A2B Velachery, Sabthagiri Hall, Velachery, Chennai',
  introVideo: '/assets/intro-wedding.mp4',
  music: '/assets/wedding-music.mp3',
  floralArtwork: '/assets/floral-frame.png',
  thoranamArtwork: '/assets/tamil-thoranam.png',
  lampArtwork: '/assets/tamil-kuthuvilakku.png',
  opening: ['Together with their families,', 'we invite you to celebrate', 'their special day.'],
  blessing: ['With love in our hearts,', 'we invite you to be a part', 'of our special day.'],
  // Add photo paths such as /assets/photo-1.jpg to replace the botanical placeholders.
  gallery: [
    { id: '01', src: null, alt: 'Sudhagar and Renuka, memory one', shape: 'portrait' },
    { id: '02', src: null, alt: 'Sudhagar and Renuka, memory two', shape: 'landscape' },
    { id: '03', src: null, alt: 'Sudhagar and Renuka, memory three', shape: 'landscape' },
    { id: '04', src: null, alt: 'Sudhagar and Renuka, memory four', shape: 'portrait' },
  ],
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wedding.venueMapsQuery)}`;
