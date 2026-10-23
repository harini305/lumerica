// Healing content, verbatim from docs/source-audit/content/private-healing.md,
// healing-spa.md, acupuncture.md and raw/private-healing-bio-popups.json.
//
// Private healing: only the 5 treatments visible on the original page are listed.
// The other 11 are hidden on all devices (audit C10/D1) and the appointment form
// offers only these 5, so they are treated as inactive until the owner confirms.
// Acupuncture packages are hidden on the original (C11) and are not listed.

export const privateTreatments = [
  {
    name: 'Amerta Sound Meditation Healing',
    facilitator: 'Galih Naga Seno',
    image: 'healing-amerta',
    price: '2,100,000 IDR / hour',
    note: 'Each session can be for 1 person or couple.',
    text: 'Experience a deeply restorative sound meditation in this uniquely potent sound journey with a combination of Tibetan Singing Bowls, Crystal Singing Bowls, Gongs, Crystal Therapy and Mantras to recalibrate and tune the layers of our subtle body back to resonance. Begin the sessions with sage smudge followed by chakra balancing assessment. Then experience sound meditation as a cosmic celebration, entering multi-dimensional portals to new worlds, resulting in profound restorative effects for the mind, nervous system and body. Finally, end with Oracle Card Reading and affirmations for moving forward. Leave this journey feeling fully rested and drop back into reality with new resonance and recalibration.',
    bio: {
      title: 'Galih Naga Seno S.Sn, M.Sn, Indonesia',
      role: 'Sound Composer & Ethnomusicologist',
      paragraphs: [
        'Galih is a gifted Composer & Ethnomusicologist with a MA in music from Arts institute Surakarta. As CEO of Taman Hutan Lemah Putih (Art space and Cultural exchange), his work spans 23+ years of training and exploring the healing power of Sound. For the past 15 years he has worked in temples, beaches and sacred mountains surrounding Indonesia and has guided hundreds in sound activation.',
        'Most notably, Galih Naga Seno offers Amerta Sound Meditations in Multi-instrument Toning Sessions, Sound Circles & Intimate Concerts which weave a deep tapestry of powerful vibration with intention, awareness, transformation and healing for all involved. Amerta Sound Meditations are beyond this plane of consciousness, illuminating the unseen, activating the unconscious realms and dropping deeper into celestial layers of ancestral wisdom.',
      ],
    },
  },
  {
    name: 'Astrology Birth Chart Reading',
    facilitator: 'Eric Leto',
    image: 'avl01301-e1738921293417',
    price: '1,820,000 IDR / hour',
    text: 'Your birth chart is a cosmic blueprint, revealing your strengths, challenges, and life’s purpose. Through the alignment of the stars at your birth, gain deep insights into your personality, relationships, and destiny. Discover the wisdom the universe has written just for you!',
    bio: 'eric',
  },
  {
    name: 'Tarot Cards Reading',
    facilitator: 'Eric Leto',
    image: 'avl01322-2',
    price: '1,820,000 IDR / hour',
    text: 'Curious about what the universe has in store for you? A tarot reading offers gentle guidance, fresh perspectives, and a little divine magic to help you navigate life’s twists and turns. Let’s pull some cards and see what messages await you!',
    bio: 'eric',
  },
  {
    name: 'Reiki Energy Healing',
    facilitator: 'Eric Leto',
    image: 'avl01236-1-e1741599956960',
    price: '1,820,000 IDR / hour',
    text: 'Reiki is a Japanese energy healing technique for stress reduction and emotional harmony that also promotes holistic healing. It is administered by “laying on hands” facilitating the Qi (life force) energy flow through the human energy channels of the body. A treatment feels like a wonderful glowing radiance that flows through and around you. Reiki energy treats the whole person including body, emotions, mind and spirit creating many beneficial effects that include relaxation and feelings of peace, calmness, harmony and wellbeing.',
    bio: 'eric',
  },
  {
    name: 'Biomagnetic Therapy',
    facilitator: 'Adam DiMarco',
    image: 'adam-private',
    price: '2,230,000 IDR / hour',
    text: 'Biomagnetic treatment, also known as magnetic therapy, involves using magnets to potentially alleviate pain, promote healing and balance the body’s pH. It’s a type of complementary and alternative medicine that applies magnets to the body, affecting the body’s “energy field” or molecules to correct imbalances. Magnets may improve circulation, remove biofilm from cells, reduce inflammation, or enhance cell function.',
    bio: {
      title: 'Adam DiMarco',
      role: 'Yin Yoga, Yoga Nidra, Meditation, Sound Healing',
      paragraphs: [
        'With over a decade of experience in yoga, sound healing, meditation, and breathwork, Adam is a 500HR+ ERYT. His journey into yoga began during a challenging period in his life, leading him to discover the transformative power of these practices.',
        'Adam is passionate about making yoga accessible to everyone, regardless of their background or experience level. His mission is to empower individuals through mindful movement, breath awareness, and the healing vibrations of sound, fostering a nurturing and uplifting environment for all participants.',
        'Through his teachings, Adam aims to create a holistic experience that promotes physical, mental, and emotional well-being, helping others to navigate life’s challenges with resilience and grace.',
      ],
    },
  },
];

export const ericBio = {
  title: 'Eric Leto',
  role: 'Ashtanga, Hatha, Vinyasa, Breathwork, Reiki Master & Sound Healer',
  paragraphs: [
    'E-RYT700 Yoga teacher trained in Kundalini, Ashtanga, Hatha & Vinyasa Yoga. He is a Reiki Energy Master, Sound Healer, Breathwork & Ceremony facilitator. He is passionate about self-development and guiding people towards their inner well-being.',
    'Eric found his passion in yoga and spirituality, 8 years ago after being internationally active as a professional Fitness Athlete, Model & Health Coach for over a decade. It brought him an inner peace and profound calmness that no activity has ever generated. After intense practice and hundreds of hours of training, his objective is to share this gift of blissfulness and deep profound inner peace that comes with the appropriated practices of yoga and other energy healing modalities.',
  ],
};

// Healing spa menu. Prices are as printed on the original (K = thousand IDR).
// Reflexology reuses the Balinese massage description word for word (C7); kept as published.
export const spaMenu = [
  {
    group: 'For the Body',
    items: [
      { name: 'Balinese Healing Massage', prices: ['60 mins 400K', '90 mins 600K'], text: 'This traditional healing massage is a very relaxing method, perfect for resting the mind, relaxing tense muscles, stimulating the lymphatic system and improving blood flow. Homemade pure coconut oil is used.' },
      { name: 'Deep Tissue Therapeutic Massage', prices: ['60 mins 500K', '90 mins 750K'], text: 'Deep tissue massage targets chronic tension in muscles that lie far below the body’s surface. Deep muscle techniques involve slower, deeper strokes, direct pressure or friction movements that go across the muscle grain. Homemade pure coconut oil is used.' },
      { name: 'Aromatherapy Massage', prices: ['60 mins 460K', '90 mins 680K'], text: 'Aromatherapy massage is a holistic blend of two ancient healing arts: massage therapy and aromatherapy. Essentially, aromatherapy massage is a massage therapy session enhanced with the use of therapeutic essential oils derived from various plants, flowers, and trees.' },
      { name: 'Shiatsu Massage', prices: ['60 mins 700K', '90 mins 1.05mil'], text: 'Shiatsu is a type of traditional therapy from Japan. The word “shiatsu” means “finger pressure”. In practice, a shiatsu massage therapist will apply pressure from one point to another (meridian) in a certain order. The goal is to facilitate the flow of chi or energy to promote healing. This method relieves imbalances, ranging from digestive disorders, depression, muscle tension, headaches and anxiety. This is a dry massage, no oil is used.' },
      { name: 'Back & Shoulder Tension Relief Massage', prices: ['60 mins 400K', '90 mins 600K'], text: 'This massage works to stimulate blood circulation and improves energy flow. The therapist focuses on the head, back, neck and shoulders to loosen muscles and ease tensions. The therapeutic touch helps to improve the central nervous system and relieve stress.' },
      { name: 'Lumeria Indulgence (Four Hands Massage)', prices: ['60 mins 1.2mil', '90 mins 1.3mil'], text: 'The ultimate body experience. Indulge in this 4-hands massage delivered by two therapists simultaneously, who synchronize their movements to create an extraordinary massage experience with deep relaxation and tension relief. Homemade pure coconut oil is used.' },
      { name: 'Remedial Therapy Bodywork', prices: ['60 mins 800K', '90 mins 1.2mil'], text: 'Remedial Therapy Bodywork is a therapeutic session aimed to relieve aches, pains and injuries to help the body repair and recover. It focuses on treating tense, damaged or knotted muscles and can help manage a number of health conditions, especially those affecting muscles, tendons and bones. While relaxation massages are intended to be soothing, remedial massages aim to relieve pain – assisting an individual to achieve a normal or increased level of functioning when performance is below expectations in a particular area.' },
      { name: 'Reflexology Foot Massage', prices: ['60 mins 420K', '90 mins 610K'], text: 'This traditional healing massage is a very relaxing method, perfect for resting the mind, relaxing tense muscles, stimulating the lymphatic system and improving blood flow. Homemade pure coconut oil is used.' },
      { name: 'Hot Stone Massage', prices: ['90 mins 800K'], text: 'Hot stone massage is a therapeutic massage that uses heated basalt stones to relax muscles and relieve pain. The therapist places the stones on specific points of the body or massage with stones themselves as extension of their hands to further relax muscles. The heat from the stones helps to ease tension, improve circulation, and induce a deep state of relaxation.' },
      { name: 'Body Scrub', prices: ['90 mins 900K'], text: 'Body Scrub treatment involves applying natural body scrub over the entire body to exfoliate dead skin cells, remove dirt and helps clean pores. This treatment begins with massage to relax the muscles followed by body scrub to exfoliate, moisturize and soften the skin, leaving your skin feeling softer, smoother, brighter and cleaner.' },
      { name: 'Hair Creambath', prices: ['60 mins 400K'], text: 'A nourishing hair treatment for dry and brittle hair, this hair treatment includes intensive deep conditioning treatment, scalp massage and hair mask.' },
    ],
  },
  {
    group: 'Facial',
    items: [
      { name: 'Signature Facial', prices: ['60 mins 500K'], text: 'Our Signature Facial cleanses, exfoliates and nourishes the skin to promote clean, healthy and well-hydrated skin, Includes facial massage to both relax and stimulate your skin and facial muscles.' },
      { name: 'Detox Facial', prices: ['60 mins 600K'], text: 'Designed for skins in need of regeneration and healing, removes toxins from the face to reveal natural, glowing skin. Includes cleansing, exfoliating, steam and extractions of blackheads for deeper detoxification.' },
    ],
  },
  {
    group: 'Packages',
    items: [
      { name: 'Balinese Healing Massage + Signature Facial', prices: ['120 mins 800K'], text: 'Relax with a Balinese Healing Massage followed by our Signature Facial to cleanse, exfoliate, and hydrate your skin. A perfect combo to unwind and rejuvenate.' },
      { name: 'Balinese Healing Massage + Reflexology Foot Massage', prices: ['120 mins 720K'], text: 'Enjoy a calming Balinese Healing Massage paired with a Reflexology Foot Massage to relieve tension and boost circulation, leaving you relaxed and revitalized.' },
    ],
  },
];

// Acupuncture practitioner is not named on the original page.
export const acupunctureMenu = [
  {
    group: 'Treatments',
    items: [
      { name: 'Cosmetic Acupuncture & Gua Sha', prices: ['1.499K / 60 mins'], text: 'A holistic facial treatment designed to enhance skin health and overall appearance. The session begins with a gentle Gua Sha massage to improve circulation, release muscle tension, and promote lymphatic drainage. This is followed by the application of fine acupuncture needles to stimulate collagen production, reduce the appearance of fine lines, and support a natural, radiant glow.' },
      { name: 'Acupuncture', prices: ['1.299K / 45-60 mins'], text: 'Acupuncture, an ancient Chinese healing practice, uses thin needles to stimulate energy flow (qi) at specific points on the body. It effectively alleviates conditions such as pain (headaches, back pain, arthritis), stress, insomnia, digestive issues, fertility, maternity, etc. By restoring energy balance, acupuncture promotes natural healing and overall well-being.' },
      { name: 'Fire Cupping', prices: ['899K / 30 mins'] },
      { name: 'Auricular Acupuncture', prices: ['899K / 30 mins'], text: 'Ear acupuncture, or auricular acupuncture, uses needles or ear seeds to treat various health issues, including pain, addiction, insomnia, digestive problems, and immunity. This distinct therapy has evolved with different techniques to provide lasting benefits.' },
    ],
  },
];

// Appointment terms, verbatim from the original Spanda form configuration (data-terms).
export const appointmentTerms = [
  'Private sessions are available by appointment only. Appointment is confirmed upon receipt of payment.',
  'Full payment must be received prior to the session.',
  'Once an appointment is confirmed and monies are received, no refunds, no credits and no transfers are allowed.',
  'If guest needs to reschedule, a new appointment must be made by the guest and original booking is considered null and void.',
  'All sessions take place at Lumeria located at Jl. Raya Pengosekan, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571.',
];
