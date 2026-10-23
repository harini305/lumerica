// Verified business details (docs/source-audit/03-content-inventory.md §1 and the
// original footer). Anything not published on the original site is left out.

export const site = {
  name: 'Lumeria',
  tagline: 'Space to Shine',
  url: 'https://lumeriayoga.com',
  email: 'info@lumeriayoga.com',
  trainingsEmail: 'trainings@lumeriayoga.com',
  whatsapp: { display: '+62 823 4191 3414', url: 'https://wa.me/6282341913414' },
  address: {
    lines: ['Lumeria Yoga', 'Jl. Raya Pengosekan, Ubud', 'Bali, Indonesia 80571'],
    // One of three short links on the original footer; the other two were duplicates.
    mapUrl: 'https://maps.app.goo.gl/UbU2YXB8q9GKbW369',
  },
  socials: [
    { label: 'Instagram', handle: '@lumeriayoga', url: 'https://www.instagram.com/lumeriayoga/' },
    { label: 'Facebook', url: 'https://web.facebook.com/profile.php?id=100095672345703' },
    { label: 'Pinterest', url: 'https://www.pinterest.co.uk/lumeriayoga/' },
  ],
  airbnbHost: 'https://www.airbnb.com/users/show/563005550',
  momence: {
    hostId: '32556',
    // Appointment board used for sauna detox (and the drop-in yoga + sauna combo).
    board: 'https://momence.com/Lumeria-Yoga/appointment-reservation/32556?boardId=8783',
  },
  newsletterForm: 'https://api.leadconnectorhq.com/widget/form/oEINkNSpITBlUUMhkDNC',
};

// Sitewide notice from the original announcement popup. It stops rendering once
// `until` has passed (Bali time). Set `until` to null to switch it off.
export const announcement = {
  until: '2026-11-01T00:00',
  id: 'closure-2026-10-31',
  text: 'Lumeria will be closed on 31st October 2026 for a Special Team-Building Day. Our standard hours of operation will resume on 1st November 2026. Thank you for your understanding and support!',
};

// Primary navigation. Event children are added at render time from data/events.js.
export const nav = [
  {
    label: 'Accommodation',
    href: '/accommodation/',
    children: [
      { label: 'King Bungalow', href: '/accommodation/king-bungalow/' },
      { label: 'Loft Bungalow', href: '/accommodation/loft-bungalow/' },
    ],
  },
  { label: 'Yoga', href: '/yoga/' },
  { label: 'Sauna & Detox', href: '/sauna-detox/' },
  {
    label: 'Healing',
    href: '/healing/',
    children: [
      { label: 'Private Healing', href: '/private-healing/' },
      { label: 'Healing Spa', href: '/healing-spa/' },
      { label: 'Acupuncture', href: '/acupuncture/' },
    ],
  },
  { label: 'Events', href: '/events/', events: true },
  { label: 'Host Your Retreat', href: '/host-your-retreat/' },
];

export const footerLinks = [
  { label: 'Yoga', href: '/yoga/' },
  { label: 'Sauna & Detox', href: '/sauna-detox/' },
  { label: 'Healing', href: '/healing/' },
  { label: 'Accommodation', href: '/accommodation/' },
  { label: 'Events', href: '/events/' },
  { label: 'Host Your Retreat', href: '/host-your-retreat/' },
  { label: 'Contact', href: '/contact/' },
];
