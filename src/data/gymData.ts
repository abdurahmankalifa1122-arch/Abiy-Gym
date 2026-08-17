import {
  ServiceProgram,
  MembershipPlan,
  TrainerProfile,
  GalleryItem,
  TestimonialItem,
  FaqItem,
} from '../types';

export const GYM_INFO = {
  name: 'Abiy Gym',
  tagline: 'BUILD STRENGTH. BUILD YOURSELF.',
  logoUrl: `${import.meta.env.BASE_URL}logo.png`,
  logoCdnUrl: 'https://i.ibb.co/3Yywtgfn/Gemini-Generated-Image-erryp0erryp0erry-clean.png',
  location: 'Bole, Addis Ababa, Ethiopia',
  city: 'Addis Ababa',
  neighborhood: 'Bole',
  country: 'Ethiopia',
  phone: '+251 91 214 30 91',
  phoneRaw: '+251912143091',
  currency: 'ETB (Ethiopian Birr)',
  googleMapsQuery: 'Abiy+Gym+Bole+Addis+Ababa+Ethiopia',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Abiy+Gym+Bole+Addis+Ababa+Ethiopia',
  operatingHours: {
    weekdays: 'Monday – Friday: 6:00 AM – 10:00 PM',
    saturday: 'Saturday: 6:00 AM – 9:00 PM',
    sunday: 'Sunday: 8:00 AM – 8:00 PM',
    note: '[Editable: Gym owner can customize exact operating hours]',
  },
};

export const SERVICES_DATA: ServiceProgram[] = [
  {
    id: 'strength-training',
    title: 'Heavy Strength & Powerlifting',
    category: 'Strength',
    tagline: 'Build pure raw power and progressive overload',
    description:
      'Engineered for serious lifters seeking maximum compound power. Our strength zone is equipped with competition-grade Olympic barbells, calibrated iron plates, and heavy-duty power racks.',
    features: [
      'Squat racks & dedicated deadlift platforms',
      'Olympic barbells and calibrated cast-iron weight plates',
      'Safety spotter arms and chalk station access',
      'Progressive overload tracking guidance',
    ],
    equipment: ['Power Racks', 'Olympic Barbells', 'Deadlift Platforms', 'Bumper Plates'],
    targetAudience: 'Lifters looking to increase squat, bench press, deadlift, and overall raw physical strength.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80',
    isEditable: true,
  },
  {
    id: 'muscle-building',
    title: 'Hypertrophy & Muscle Building',
    category: 'Hypertrophy',
    tagline: 'Targeted resistance training for lean mass',
    description:
      'Comprehensive isolation and multi-angle selectorized machine systems designed to maximize muscle tension, progressive resistance, and athletic physique development.',
    features: [
      'Complete dumbbell collection up to heavy loads',
      'Adjustable cable crossovers and multi-pulley stations',
      'Ergonomic incline, flat, and decline bench setups',
      'Plate-loaded chest press, hack squat, and leg press units',
    ],
    equipment: ['Heavy Dumbbell Racks', 'Cable Towers', 'Incline/Flat Benches', 'Hack Squat'],
    targetAudience: 'Athletes focused on hypertrophy, structural balance, and upper/lower body symmetry.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
    isEditable: true,
  },
  {
    id: 'cardio-conditioning',
    title: 'Cardio & Endurance Deck',
    category: 'Conditioning',
    tagline: 'Stamina, cardiovascular power, and metabolic conditioning',
    description:
      'High-performance cardio equipment calibrated for stamina, heart health, and high-intensity interval conditioning in a climate-controlled zone.',
    features: [
      'Commercial grade treadmills with customizable incline',
      'Low-impact elliptical trainers and stationary bikes',
      'Concept2 style rowing machines for full-body conditioning',
      'Heart rate monitoring and pace tracking displays',
    ],
    equipment: ['Treadmills', 'Stationary Cycles', 'Rowers', 'Stair Climbers'],
    targetAudience: 'Anyone aiming to boost lung capacity, burn calories, and build endurance.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    isEditable: true,
  },
  {
    id: 'functional-fitness',
    title: 'Functional Athletic Conditioning',
    category: 'Functional',
    tagline: 'Full-body agility, mobility, and explosive athleticism',
    description:
      'Open turf and functional zone for dynamic movement, core stability, kettlebell circuits, and high-energy athletic drills.',
    features: [
      'Heavy battle ropes and plyometric jump boxes',
      'Full cast-iron kettlebell and medicine ball sets',
      'Agility ladders, resistance bands, and pull-up stations',
      'Spacious open functional turf area',
    ],
    equipment: ['Battle Ropes', 'Kettlebells', 'Plyo Boxes', 'Medicine Balls'],
    targetAudience: 'Those wanting functional strength, core power, and real-world athletic durability.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80',
    isEditable: true,
  },
  {
    id: 'personal-coaching',
    title: '1-on-1 Personal Training',
    category: 'Coaching',
    tagline: 'Direct customized guidance from dedicated male trainers',
    description:
      'Work one-on-one with experienced male fitness trainers who tailor lifting biomechanics, form refinement, workout progression, and accountability to your individual targets.',
    features: [
      'Comprehensive baseline assessment and goal setting',
      'Customized workout program structured to your goals',
      'Real-time form correction, spotting, and injury prevention',
      'Nutritional & lifestyle guidance to accelerate progress',
    ],
    equipment: ['Personal Coaching Area', 'Assessment Tools', 'Dedicated Training Slots'],
    targetAudience: 'Beginners needing a solid foundation or experienced lifters pushing through plateaus.',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1000&q=80',
    isEditable: true,
  },
  {
    id: 'weight-training',
    title: 'General Fitness & Free Weights',
    category: 'General Fitness',
    tagline: 'All-around strength maintenance and health optimization',
    description:
      'Balanced full-body fitness for everyday professionals in Bole looking to maintain peak energy, joint health, posture, and consistent physical discipline.',
    features: [
      'Broad selection of pin-select machines for safe, controlled lifts',
      'Assisted chin-up and dip machines',
      'Stretching and recovery mats with foam rollers',
      'Supportive community of disciplined members',
    ],
    equipment: ['Selectorized Machines', 'Dumbbells', 'Stretching Station', 'Dip/Pull Stations'],
    targetAudience: 'Busy professionals in Bole Addis Ababa maintaining daily vitality and wellness.',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80',
    isEditable: true,
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'monthly-standard',
    title: 'Monthly Membership',
    duration: '1 Month Full Access',
    priceDisplay: 'Price: Contact Gym',
    subtext: 'Billed in Ethiopian Birr (ETB)',
    features: [
      'Full access to gym floor & free weights',
      'Full access to cardio & functional zone',
      'Locker room & shower amenities',
      'Orientation and equipment walkthrough',
      'Flexible month-to-month commitment',
    ],
    isEditable: true,
  },
  {
    id: 'quarterly-commitment',
    title: '3-Month Membership',
    duration: 'Quarterly Package',
    priceDisplay: 'Price: Contact Gym',
    subtext: 'Billed in Ethiopian Birr (ETB)',
    badge: 'MOST POPULAR',
    popular: true,
    features: [
      'Unlimited full facility access',
      'Ideal for establishing consistent lifting habits',
      'Free locker room & changing facility access',
      'Complimentary initial fitness assessment',
      'Special discounted rate over monthly option',
    ],
    isEditable: true,
  },
  {
    id: 'half-year-annual',
    title: '6-Month / Annual Membership',
    duration: 'Long-Term Transformation',
    priceDisplay: 'Price: Contact Gym',
    subtext: 'Billed in Ethiopian Birr (ETB)',
    badge: 'BEST VALUE',
    features: [
      'Maximum long-term savings in ETB',
      'Priority access to peak-hour training facilities',
      'Locker & towel privileges',
      'Periodic progress & body metric reviews',
      'Complimentary guest pass passes (subject to gym terms)',
    ],
    isEditable: true,
  },
  {
    id: 'personal-coaching-pkg',
    title: '1-on-1 Personal Training',
    duration: 'Custom Session Packages',
    priceDisplay: 'Price: Contact Gym',
    subtext: 'Billed in Ethiopian Birr (ETB)',
    badge: 'DEDICATED COACHING',
    features: [
      'Tailored 1-on-1 coaching with male trainer',
      'Custom workout & progression programming',
      'Direct form analysis & lifting technique drills',
      'Nutritional guidance and accountability check-ins',
      'Flexible scheduling around your calendar',
    ],
    isEditable: true,
  },
];

export const TRAINERS_DATA: TrainerProfile[] = [
  {
    id: 'trainer-1',
    name: 'Head Coach [Editable Name]',
    role: 'Head Strength & Conditioning Coach',
    specialties: ['Powerlifting', 'Compound Movements', 'Athletic Conditioning'],
    bio: 'Dedicated to teaching proper lifting biomechanics, progressive overload principles, and building unshakeable physical discipline for male athletes and members.',
    experience: '8+ Years Coaching [Editable]',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    isEditablePlaceholder: true,
  },
  {
    id: 'trainer-2',
    name: 'Coach [Editable Name]',
    role: 'Hypertrophy & Physique Specialist',
    specialties: ['Muscle Building', 'Body Recomposition', 'Nutritional Protocols'],
    bio: 'Focused on targeted resistance training, hypertrophy programming, and helping members achieve peak aesthetic condition with consistent gym habits.',
    experience: '5+ Years Coaching [Editable]',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    isEditablePlaceholder: true,
  },
  {
    id: 'trainer-3',
    name: 'Coach [Editable Name]',
    role: 'Functional Fitness & Endurance Coach',
    specialties: ['Functional Movement', 'Cardio Stamina', 'Mobility & Recovery'],
    bio: 'Passionate about high-intensity interval training, full-body agility, core stabilization, and building functional stamina that lasts.',
    experience: '6+ Years Coaching [Editable]',
    image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&w=800&q=80',
    isEditablePlaceholder: true,
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Heavy Free Weights Zone',
    category: 'weights',
    description: 'Olympic barbells, precision iron plates, and heavy dumbbell racks.',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-2',
    title: 'Power Racks & Squat Stations',
    category: 'interior',
    description: 'Heavy-duty power cages engineered for squats, presses, and pull-ups.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-3',
    title: 'Male Athlete Conditioning',
    category: 'male-training',
    description: 'Focused male athlete training with heavy kettlebells and functional movements.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-4',
    title: 'Cardio & Conditioning Floor',
    category: 'cardio',
    description: 'Modern treadmills, rowers, and endurance machines for stamina building.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-5',
    title: 'Machine & Cable Crossover Arena',
    category: 'machines',
    description: 'Ergonomic plate-loaded units and multi-station cable towers.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-6',
    title: 'Strength & Deadlift Floor',
    category: 'weights',
    description: 'Reinforced lifting platforms with chalk stations for heavy deadlifts.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-7',
    title: 'Male Strength Athlete Barbell Lift',
    category: 'male-training',
    description: 'Dedicated male lifter performing compound barbell lifts.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-8',
    title: 'Young Athlete Strength Training',
    category: 'male-training',
    description: 'Dedicated young athlete building foundation, discipline, and physical power in the gym.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1000&q=80',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Add verified member testimonial here. (e.g. "Abiy Gym is the best place in Bole for serious strength training. The equipment quality and focused atmosphere made a massive difference in my daily consistency.")',
    author: '[Editable Member Name]',
    role: 'Strength Training Member · Bole, Addis Ababa',
    duration: 'Member since 2023 [Editable]',
    rating: 5,
    isEditablePlaceholder: true,
  },
  {
    id: 'test-2',
    quote:
      'Add verified member testimonial here. (e.g. "The coaching and male personal trainers are attentive to form and discipline. Clean gym floor, great iron plates, and conveniently located in Bole.")',
    author: '[Editable Member Name]',
    role: 'Personal Training Client · Addis Ababa',
    duration: 'Member since 2024 [Editable]',
    rating: 5,
    isEditablePlaceholder: true,
  },
  {
    id: 'test-3',
    quote:
      'Add verified member testimonial here. (e.g. "If you want a no-nonsense, high-energy environment to lift heavy and stay consistent in Addis Ababa, Abiy Gym is the standard.")',
    author: '[Editable Member Name]',
    role: 'Fitness Enthusiast · Bole District',
    duration: 'Member since 2023 [Editable]',
    rating: 5,
    isEditablePlaceholder: true,
  },
];

export const WHY_CHOOSE_REASONS = [
  {
    title: 'Prime Bole Location',
    description:
      'Strategically situated in Bole, Addis Ababa, providing convenient access for professionals, residents, and athletes in the area.',
    iconName: 'MapPin',
  },
  {
    title: 'Heavy Iron & Quality Equipment',
    description:
      'Extensive selection of barbells, heavy dumbbells, power racks, and selectorized machines built for serious progression.',
    iconName: 'Dumbbell',
  },
  {
    title: 'Strength & Discipline Atmosphere',
    description:
      'An energizing, distraction-free environment that prioritizes hard work, consistency, and athletic self-improvement.',
    iconName: 'Flame',
  },
  {
    title: 'Dedicated Male Trainers',
    description:
      'Experienced male fitness coaches ready to provide lifting form cues, spotter support, and structured training guidance.',
    iconName: 'Users',
  },
  {
    title: 'Clean & Well-Maintained',
    description:
      'High hygiene standards, sanitized equipment, organized weight trees, and well-ventilated training floors.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Flexible Training Schedules',
    description:
      'Open early morning to late evening to accommodate busy workday schedules across Addis Ababa.',
    iconName: 'Clock',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Where is Abiy Gym located in Addis Ababa?',
    answer:
      'Abiy Gym is located in Bole, Addis Ababa, Ethiopia. You can use the Google Maps button on this page or call +251 91 214 30 91 for immediate landmark directions.',
  },
  {
    question: 'How do I inquire about membership prices and payment in ETB?',
    answer:
      'All membership fees are in Ethiopian Birr (ETB). Because prices and promotional rates can change, please call or contact the gym directly at +251 91 214 30 91 to get today’s exact rate sheet.',
  },
  {
    question: 'Are there male personal trainers available for 1-on-1 coaching?',
    answer:
      'Yes, dedicated male personal trainers are available to provide individualized coaching, form correction, and workout programming tailored to your fitness goals.',
  },
  {
    question: 'Can I visit Abiy Gym for a walkthrough before joining?',
    answer:
      'Absolutely. You are welcome to visit our facility in Bole during operating hours to inspect the equipment, meet the trainers, and experience the training atmosphere firsthand.',
  },
  {
    question: 'What are the gym operating hours?',
    answer:
      'Standard hours are Monday through Friday 6:00 AM – 10:00 PM, Saturday 6:00 AM – 9:00 PM, and Sunday 8:00 AM – 8:00 PM. (Please confirm with the gym for holiday schedules).',
  },
];
