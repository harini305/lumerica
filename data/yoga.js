// /yoga/ content, verbatim from docs/source-audit/content/yoga.md (visible sections only).

export const promise = [
  'Create a safe and loving space for everyone to experience the path of yoga.',
  'Invite teachers, healers, visionaries and wisdom keepers to share their knowledge with integrity and authenticity.',
  'Share the tools, techniques and traditions upholding the lineages from their origins.',
];

export const timetableIntro =
  'If you prefer to book your spot on the go, browse our classes and make online reservation below. Class times shown are set according to the time zone of your device. To view the class times in Bali time zone, convert the shown class time on your device to the GMT +8.';

export const policies = [
  { title: 'Please arrive on time', text: 'No late entry past 10 minutes allowed – no exceptions.' },
  { title: 'No phones policy', text: 'We have a strict no phones policy. No phones and no filming is allowed during class.' },
  { title: 'Ages 13 and over', text: 'Children under 13 years old are not allowed to join public classes. We do not offer babysitting services.' },
  { title: 'In English', text: 'All classes are taught in English.' },
];

// Seven styles have no description on the original page; they are listed by name only.
export const classes = [
  { name: 'Ashtanga-Inspired', text: 'Based on the principles of Ashtanga-Vinyasa Yoga, this dynamic class will begin with Sun Salutations followed by energetic sequencing of postures & breath. Very similar to a Vinyasa Flow & Power Yoga class, be ready to flow, sweat and breath!' },
  { name: 'Bhakti Yoga', text: 'A heart-centered class focusing on devotion to your authentic Self, this practice will begin with some Breathwork to open energy centers, followed by postures to build strength and balance, ending with a restorative savasana. Expect to feel more centered, connected and grounded in pure devotion to the divine with yourself and all beings.' },
  { name: 'Breathwork & Sound Healing' },
  { name: 'Chakra Balancing & Sound Healing', text: 'A holistic experience designed to harmonize the body’s energy centers (chakras) using the power of sound as participants are guided through deep relaxation using various instruments such as crystal bowls, shamanic drum and chimes, use to produce healing vibrations. These sound frequencies resonate with each 7 main chakras, clearing blockages, restoring balance and promote physical, emotional and spiritual well-being. This session may also include guided meditation & breathwork to further deepen the healing process. This session is suitable for anyone looking to restore balance, release emotions, reduce stress, feel more inner peace and promote overall holistic healing.' },
  { name: 'Gentle Flow' },
  { name: 'Gong Sound Healing' },
  { name: 'Hatha Flow', text: 'Hatha Flow is great practice to start every morning. We will practice the traditional style of Surya Namaskara (Sun Salutation) followed by basic, gentle yoga poses connecting breath to movement in a slow and controlled manner. This class is meant to create vitality, immunity and overall improved health in the cardiovascular, muscular and nervous systems and is suitable for all levels, especially beginners who are new to yoga.' },
  { name: 'Healing Sound Massage', text: 'Healing Sound Massage is a soothing meditative experience designed to release stagnant energy and promote deep relaxation and inner peace. In this session, participants will be guided through a combination of meditation techniques, energy work and sacred sound. These techniques will help release trapped energy stored within the body through the strategic use of Tibetan Singing Bowls that will be placed on specific areas of the body, targeting those in need of healing and balance. The sound waves of the Tibetan Bowls will be directed into the body, massaging the cells and releasing tension. The bowls, made from various metals, produce a range of frequencies that have a calming effect on the brain, leading to a meditative state. This shift in brain frequency will facilitate deep relaxation, slowing the heart rate down and allowing the body to rejuvenate.' },
  { name: 'Inside Flow', text: 'Inside Flow is a dynamic and creative style of Vinyasa yoga where movement, breath, and music become one. Each class takes you on a journey of building a choreographed sequence, step by step, in harmony with the rhythm of the music. It’s more than a physical practice – it’s an emotional experience that invites you to express yourself fully. This is yoga like you’ve never felt before: creative, fluid, and deeply connective.' },
  { name: 'Kundalini Yoga & Meditation' },
  { name: 'Myofascial Yin', text: 'Myofascial Yin blends the restorative practice of Yin yoga with targeted myofascial release, working directly with the fascia (connective tissue) by using props & myofascial balls with long-held passive poses (typically 3-5 minutes each). Through gentle, sustained pressure, this class aims to release deeply held tension, restore mobility and ease patterns of tightness that stretching alone doesn’t reach. Postures are sequenced along the body’s connective tissue lines and, where relevant, follow Traditional Chinese Medicine (TCM) meridian pathways, supporting both physical release and a settling of the nervous system. No flexibility or experience is required — this is a practice of patience and presence, ideal for anyone carrying tension from sitting, training, or simply daily life. Expect to leave feeling loosened, spacious, and calm.' },
  { name: 'Power Yoga' },
  { name: 'Qi Gong' },
  { name: 'Restorative Yoga & Nidra', text: 'Wind down your day with a soothing combination of restorative yoga & yoga nidra. We will begin with gentle stretches to release stress in the mind & body, moving slowly through postures with support of props to prepare for a guided yoga nidra meditation. Feel tension slowly melt away and leave feeling completely relaxed, restored and more balanced in this soft & subtle yoga & meditation class.' },
  { name: 'Sound Healing' },
  { name: 'Vinyasa Flow', text: 'Vinyasa Flow is a dynamic, energetically and physically demanding class that incorporates breath, body, movement, all set to a fun music playlist. By connecting breath to movement in this class, you’ll deepen your ujjayi breath, learn creative sequencing, practice getting into “peak” poses and feel simply amazing after a long savasana. Be ready to flow, sweat and breath!' },
  { name: 'Yin Yang Yoga', text: 'Yin Yang Yoga blends two styles of yoga into one practice – bringing together the benefits of passively holding yoga poses with more dynamic sequences and standing postures. Yin and Yang are the Taoist concepts which describe the two relative qualities present in everything. In this practice, we’ll bring equilibrium to both sides, creating balance between stronger, more physical poses directly followed by softer, longer-held poses. Open for all levels.' },
  { name: 'Yin Yoga', text: 'Yin Yoga is a slow-paced style of yoga as exercise, incorporating principles of traditional Chinese medicine with poses that are held for longer periods of time than in other styles, typically staying for 3-5 minutes in each pose. The sequences of postures are meant to stimulate the channels of the subtle body known as meridians in Chinese medicine. Yin Yoga poses apply moderate stress to the connective tissues of the body—the tendons, fascia and ligaments—with the aim of increasing circulation in the joints and improving flexibility.' },
];

// Class rates from the desktop rates table. `url` is a Momence purchase page.
// Unresolved audit findings (08 C2–C4):
//  - Local / KITAS yoga-only drop-in: the table says IDR 120,000, a mobile-only note
//    says 100K. Price withheld until the owner confirms.
//  - Local / KITAS Yoga + Sauna: desktop and mobile tables link different Momence
//    services (33441 vs 20952), so no purchase link is shown.
//  - The non-local yoga-only drop-in links to the class timetable, as on the original.
export const rates = [
  {
    name: '1 Drop-in (Local / KITAS)',
    yoga: { price: null, note: 'Ask at reception' },
    combo: { price: 'IDR 350,000', note: 'Purchase at reception' },
  },
  {
    name: '1 Drop-in',
    yoga: { price: 'IDR 180,000', href: '#timetable', note: 'Book a class' },
    combo: { price: 'IDR 400,000', url: 'https://momence.com/Lumeria-Yoga/appointment-reservation/32556?boardId=8783&serviceId=20952&venueId=13134' },
  },
  {
    name: '3 Pack',
    yoga: { price: 'IDR 500,000', url: 'https://momence.com/Lumeria-Yoga/membership/3-Class-Pack/111546' },
    combo: { price: 'IDR 1,100,000', url: 'https://momence.com/Lumeria-Yoga/membership/3-Pack---Yoga-%2B-Sauna-Detox/115280' },
  },
  {
    name: '5 Pack',
    yoga: { price: 'IDR 750,000', url: 'https://momence.com/Lumeria-Yoga/membership/5-Class-Pack/111547' },
    combo: { price: 'IDR 1,600,000', url: 'https://momence.com/Lumeria-Yoga/membership/5-Pack---Yoga-%2B-Sauna-Detox/115281' },
  },
  {
    name: '10 Pack',
    yoga: { price: 'IDR 1,200,000', url: 'https://momence.com/Lumeria-Yoga/membership/10-Class-Pack/111548' },
    combo: { price: 'IDR 2,700,000', url: 'https://momence.com/Lumeria-Yoga/membership/10-Pack---Yoga-%2B-Sauna-Detox/115282' },
  },
  {
    name: '1 Week Unlimited',
    yoga: { price: 'IDR 1,000,000', url: 'https://momence.com/Lumeria-Yoga/membership/1-Week-Unlimited-Pack/111550' },
    combo: { price: 'IDR 2,000,000', url: 'https://momence.com/Lumeria-Yoga/membership/1-Week-Unlimited-Pack---Yoga-%2B-Sauna-Detox/115283' },
  },
  {
    name: '1 Month Unlimited',
    yoga: { price: 'IDR 2,500,000', url: 'https://momence.com/Lumeria-Yoga/membership/1-Month-Unlimited-Pack/111551' },
    combo: { price: 'IDR 5,500,000', url: 'https://momence.com/Lumeria-Yoga/membership/1-Month-Unlimited-Pack---Yoga-%2B-Sauna-Detox/115284' },
  },
];

export const rateTerms =
  'All purchases are final, non-refundable, non-transferrable, and non-returnable. All Packs purchases are valid for 30 Days from first use and valid for one person only.';

export const teachers = [
  {
    name: 'Adam DiMarco',
    styles: 'Yin Yoga, Yoga Nidra, Meditation, Sound Healing',
    image: 'adam',
    bio: [
      'With over a decade of experience in yoga, sound healing, meditation, and breathwork, Adam is a 500HR+ ERYT. His journey into yoga began during a challenging period in his life, leading him to discover the transformative power of these practices.',
      'Adam is passionate about making yoga accessible to everyone, regardless of their background or experience level. His mission is to empower individuals through mindful movement, breath awareness, and the healing vibrations of sound, fostering a nurturing and uplifting environment for all participants.',
      'Through his teachings, Adam aims to create a holistic experience that promotes physical, mental, and emotional well-being, helping others to navigate life’s challenges with resilience and grace.',
    ],
  },
  {
    name: 'Ben',
    styles: 'Hatha & Vinyasa',
    image: 'avrilnathaniell-00229',
    bio: ['My yoga journey began with meditation and it wasn’t until later that I found yoga as a holistic path integrating mind, body and breath. Through my own experiences of transformation through yoga, I’m able to support others to view the world and themselves in a brand new way. My classes are mostly Vinyasa & Hatha Yoga, with deep emphasis on grounding, expansion, strength and surrender.'],
  },
  {
    name: 'Constanza Quintana',
    origin: 'Mexico',
    styles: 'Holistic Therapist, Sound Healer',
    image: 'constanza-square',
    bio: [
      'Holistic therapist with over a decade of experience integrating modalities like ThetaHealing, Biomagnetism, Sound Healing, Breathwork, Energy work and Yoga, She support clients to release emotions, balance the nervous system, reduce stress, and unlock their potential for growth.',
      'Through her nuturing sessions, workshops, and retreats, Constanza creates safe spaces for transformation, guiding individuals towards healing, peace and self-discovery.',
    ],
  },
  {
    name: 'Dominika Kerekesova',
    origin: 'Slovakia',
    styles: 'Inside Flow, Vinyasa, Power Yoga',
    image: 'dominika-square2',
    bio: [
      'Yoga changed my life from the very first moment I stepped onto the mat. I knew right away this was my path – something that brings true meaning and balance to my life. In my classes, I guide you to connect deeply with your body, mind, and breath through Vinyasa and Power Yoga – dynamic, powerful, and grounding practices. My greatest passion is Inside Flow, a unique blend of movement, breath and music.',
      'Together we build a sequence and finish flowing as one to a special song, a deeply emotional and meditative experience that lets you truly express yourself.',
    ],
  },
  {
    name: 'Eric Leto',
    origin: 'Luxembourg',
    styles: 'Ashtanga, Hatha, Vinyasa, Breathwork, Reiki Master & Sound Healer',
    image: 'avl01301-1',
    bio: [
      'E-RYT700 Yoga teacher trained in Kundalini, Ashtanga, Hatha & Vinyasa Yoga. He is a Reiki Energy Master, Sound Healer, Breathwork & Ceremony facilitator. He is passionate about self-development and guiding people towards their inner well-being.',
      'Eric found his passion in yoga and spirituality, 8 years ago after being internationally active as a professional Fitness Athlete, Model & Health Coach for over a decade. It brought him an inner peace and profound calmness that no activity has ever generated. After intense practice and hundreds of hours of training, his objective is to share this gift of blissfulness and deep profound inner peace that comes with the appropriated practices of yoga and other energy healing modalities.',
    ],
  },
  {
    name: 'Hannah Pfeffer',
    origin: 'Germany',
    styles: 'Yin Yoga, Myofascial Yin, Hatha Flow, Soundhealing, Nervous System Health',
    image: 'hannah-1',
    bio: [
      'Yoga found Hannah at a moment when she needed to reconnect with her body, breath, and herself. What started as a practice on the mat became her true path, opening her into a deeper journey of nervous system health, bodywork, and the mind-body connection. Today she holds space for students who are stressed or simply craving stillness, guiding them to slow down, release tension, and come home to their bodies. Her classes move between Yin, Myofascial Yin, Hatha Flow, and Soundhealing — slow, grounded, and designed to help the nervous system truly rest.',
      'Hannah is an E-RYT 500 Yoga Teacher, Certified Holistic Health Coach, and Stress Management Trainer, trained in Yin Yoga, Myofascial Yin and Sound Healing.',
    ],
  },
  {
    name: 'Nina Karina',
    origin: 'Indonesia',
    styles: 'Hatha Yoga, Gentle Flow, Yin Yoga, Pilates',
    image: 'nina-square2',
    bio: ['Yoga has been a way for me to return to myself — to quiet the mind, listen, and understand my body on a deeper level. What began as simple curiosity gradually unfolded into a practice of awareness, healing, and self-discovery. As both a student and teacher, I believe yoga is not about pushing limits, but about building an honest relationship with your body and breath. My classes are gentle yet intentional, offering space to move mindfully, explore sensations, and reconnect with the strength that already lives within.'],
  },
  {
    name: 'Yohanes Reiza',
    styles: 'Hatha & Vinyasa',
    image: 'avrilnathaniell-00078',
    bio: ['Yoga is a deeply transformative journey for me, one that has taught me the values of inner peace, mindfulness, and physical well-being. I am deeply passionate about practicing and teaching yoga, as I love seeing the growth in my students and watching them transform with more confidence and body awareness. My classes are vinyasa-based with a strong emphasis on connecting breath to movement, building both strength and flexibility in body, mind and spirit.'],
  },
];
