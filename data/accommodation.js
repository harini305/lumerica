// Accommodation content, verbatim from docs/source-audit/content/accommodation*.md.
// No nightly prices are published on the current pages; bookings go through Airbnb.
// The Airbnb link is the host profile: listing URLs per bungalow were not on the site (08 F).

const sharedInclusions = [
  { title: 'Unlimited Yoga Classes', image: 'single-bungalow-yoga', alt: 'A guest in a standing yoga pose in the garden' },
  {
    title: 'Access to Detox Area',
    image: 'single-bungalow-detox',
    alt: 'Two guests relaxing in the cold plunge pool',
    text: 'Enjoy unlimited access to our detox area, a sanctuary designed for your complete rejuvenation. This comprehensive space includes a hot sauna, steam sauna, cold plunge, and a relaxation area where you can unwind with a cup of hot tea. While this area is shared with the public, it offers a unique opportunity to connect with a like-minded community, fostering an atmosphere of wellness and camaraderie. To ensure you make the most of your detox experience, please check for session times on our website or inquire at reception.',
  },
  {
    title: 'Vegan Breakfast',
    image: 'single-bungalow-breakfast',
    alt: 'A fruit breakfast bowl',
    text: 'With your stay at Lumeria, begin each day on a nourishing note with our included vegan breakfast, offering a choice of one meal and one drink option tailored to energize and inspire. For other meals, our on-site restaurant awaits, serving a variety of delicious meals available for order. Our carefully curated menu is designed to cater to diverse tastes and dietary preferences, ensuring that every meal is a delightful experience.',
  },
];

const lumbung =
  'Made in traditional “lumbung” style, our wooden bungalows are built in alignment with nature, Balinese culture and locally-sourced products found only in Indonesia. Step into natural living surrounded by beautiful gardens, sounds of birds singing and fresh jungle air.';

const amenities = ['Aircon + fan', 'Hot water', 'Outdoor showers', 'Natural toiletries', 'Blowdryer', 'Robes', 'Slippers', 'Blackout curtains', 'Drinking water', 'Tea/coffee', 'Kettle'];

export const bungalows = {
  'king-bungalow': {
    name: 'King Bungalow',
    intro: 'Our King Bungalows offer king beds with complete privacy, peace and ultimate comfort enticing wonderful deep sleeps, rejuvenation and wellness.',
    lumbung,
    inclusions: sharedInclusions,
    room: {
      title: 'Private King Bungalow',
      image: 'single-bungalow',
      alt: 'Inside the King Bungalow: a wooden room with a king bed and garden doors',
      paragraphs: [
        'Crafted in the traditional “lumbung” style, our King Bungalows are havens of tranquility and comfort. Featuring a king-size bed, each bungalow is a private sanctuary designed to promote peace, wellness, and rejuvenating deep sleep.',
        'The unique architectural style not only pays homage to the local culture but also enhances the overall experience, inviting you into a world where ultimate comfort meets serene surroundings. Perfect for those seeking a personal space and spacious bed.',
      ],
    },
    amenities: ['1 King Sized Bed', ...amenities],
    other: ['Check-out time: 11am', 'Airport transfer available on request.'],
    gallery: [
      { image: 'in-house-retreat-accommodation-2', alt: 'King bed inside a wooden bungalow' },
      { image: 'in-house-retreat', alt: 'Wooden bungalow entrance among tropical plants' },
      { image: 'lumeria-maria-abz-01624', alt: 'A lounge terrace with cushions beside the garden' },
    ],
  },
  'loft-bungalow': {
    name: 'Loft Bungalow',
    intro: 'Our Loft Bungalows have 2 twin beds which can be prepared for one person or separated for roommates. The upstairs loft provides the perfect space for journaling, reading, writing, music composing or perhaps a restful afternoon nap.',
    lumbung,
    inclusions: sharedInclusions,
    room: {
      title: 'Loft Bungalow',
      image: 'in-house-retreat-accommodation-1',
      alt: 'Twin beds in the wooden Loft Bungalow',
      paragraphs: [
        'Our Loft Bungalows offer versatile sleeping arrangements with 2 twin beds that can be joined for a solitary retreat or separated for roommates, ensuring comfort for every type of stay. The unique feature of these bungalows is the upstairs loft, a cozy and inviting space designed for quiet reflection and creativity.',
        'Whether you wish to immerse yourself in journaling, lose yourself in a good book, find inspiration for writing or music composing, or simply enjoy a restful afternoon nap, the loft provides the perfect secluded spot. This additional space adds an element of privacy and tranquility, making it ideal for guests looking to enrich their retreat experience with moments of solitude and peace.',
      ],
    },
    // The amenities list says "1 Double Bed or 2 Single Beds" while the intro says
    // "2 twin beds" (audit C9). Both are shown as published.
    amenities: ['1 Double Bed or 2 Single Beds', ...amenities],
    other: ['Airport transfer available on request.'],
    gallery: [
      { image: 'loft-bungalow-lumeria-19', alt: 'Twin beds and wooden chairs in the Loft Bungalow' },
      { image: 'in-house-retreat', alt: 'Wooden bungalow entrance among tropical plants' },
      { image: 'lumeria-maria-abz-01624', alt: 'A lounge terrace with cushions beside the garden' },
    ],
  },
};
