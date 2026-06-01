import { Project, ServiceElement, Testimonial } from './types';

export const SERVICES_DATA: ServiceElement[] = [
  {
    id: 'luxury-residential',
    title: 'Luxury Residential',
    category: 'Residential',
    description: 'Bespoke apartments, sea-facing penthouses, and gated community villas designed for high-end luxury living.',
    iconName: 'HomeIcon',
    detailedPoints: [
      'Architect-designed architectural structures and floorplans',
      'Premium specifications with Italian marble and custom fits',
      'Smart home automated facilities and multi-tier security',
      'Strategic locations with proximity to top-tier schools and hubs'
    ]
  },
  {
    id: 'commercial-leasing',
    title: 'Commercial Leasing',
    category: 'Commercial',
    description: 'Grade-A office blocks, retail shopping arcades, and high-footfall business sites for rent or purchase.',
    iconName: 'Building2',
    detailedPoints: [
      'Strategic high-visibility locations across major cities',
      'Flexible open-layout office spaces with power backup',
      'Dedicated double-height lobbies and ample vehicle parking',
      'Compliance with international fire and structural safety codes'
    ]
  },
  {
    id: 'property-investment',
    title: 'Property Investment',
    category: 'Investment',
    description: 'High-yield investment programs, pre-leased properties, and structured real estate portfolios.',
    iconName: 'Milestone',
    detailedPoints: [
      'Detailed ROI and historical property appreciation analysis',
      'Pre-leased commercial options with immediate rental income',
      'Hassle-free documentation and title verification tracking',
      'Strategic joint development opportunities for high net-worth individuals'
    ]
  },
  {
    id: 'property-management',
    title: 'Property Management',
    category: 'Residential',
    description: 'End-to-end property upkeep, tenant management, and regular yield audits for domestic and NRI owners.',
    iconName: 'HardHat',
    detailedPoints: [
      'Professional listing management and tenant screening',
      'Timely maintenance checks and property upkeep coordination',
      'Legal tenancy agreement drafting and rental collection',
      'Quarterly asset condition reports sent straight to your dashboard'
    ]
  },
  {
    id: 'premium-plots',
    title: 'Premium Plots & Lands',
    category: 'Investment',
    description: 'Approved residential layout plots and prime commercial land plots ready for development.',
    iconName: 'Factory',
    detailedPoints: [
      'RERA approved layouts with clear marketable titles',
      'Wide internal black-top roads and integrated electricity grids',
      'Demarcated gated community layouts with active amenities',
      'High investment appreciation potential in fast-growing sub-markets'
    ]
  },
  {
    id: 'consultation-advisory',
    title: 'Real Estate Advisory',
    category: 'Commercial',
    description: 'Personalized consulting for asset acquisition, valuations, and market feasibility research.',
    iconName: 'HardHat',
    detailedPoints: [
      'Complimentary home buying consultation and site visits',
      'Certified asset valuation reports for investors',
      'Home loan assistance with leading financial partners',
      'Personalized property match notification based on parameters'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'jagdish-bhawan',
    title: 'Jagdish Bhawan',
    category: 'Residential',
    description: 'It’s an (S+5) story apartment situated at Jaydev Vihar square, Besides T.T.D Kalyan Mandap in prime location of Bhubaneswar. It has fifteen nos of Flat consist of 2BHK & 3BHK.',
    image: '/images/jagdish_bhawan.jpeg',
    images: [
      '/images/jagdish_bhawan.jpeg',
      '/images/jagdish_bhawan_2.jpeg'
    ],
    location: 'Jaydev Vihar square, Bhubaneswar',
    status: 'Completed',
    area: '2BHK & 3BHK',
    duration: 'Ready',
    highlights: [
      'Prime location beside T.T.D Kalyan Mandap',
      'Exclusive S+5 story apartment',
      'Spacious 2BHK and 3BHK flats'
    ]
  },
  {
    id: 'jagdish-home',
    title: 'Jagdish Home',
    category: 'Residential',
    description: 'It’s an (S+4) story apartment located at Jharpada jail Road 200mtr from Ganesh Mandap chhack. It has twelve Nos. of flats consisting of 2BHK & 3BHK.',
    image: '/images/jagdish_home.jpeg',
    images: [
      '/images/jagdish_home.jpeg',
      '/images/jagdish_home_2.jpeg',
      '/images/jagdish_home_3.jpeg',
      '/images/jagdish_home_4.jpeg'
    ],
    floorPlans: [
      '/images/jagdish_home_floor_plan.jpeg'
    ],
    location: 'Jharpada jail Road, Bhubaneswar',
    status: 'Completed',
    area: '2BHK & 3BHK',
    duration: 'Ready',
    highlights: [
      'Located 200mtr from Ganesh Mandap chhack',
      'Exclusive S+4 story boutique apartment',
      'Well-ventilated 2BHK and 3BHK configurations'
    ]
  },
  {
    id: 'jagdish-residency',
    title: 'Jagdish Residency',
    category: 'Residential',
    description: 'It’s an (S+4) story apartment situated near Hanshpal square close to NH16. It has 16 flats built with 2BHK.',
    image: '/images/jagdish_residency.jpeg',
    images: [
      '/images/jagdish_residency.jpeg',
      '/images/jagdish_residency_2.jpeg',
      '/images/jagdish_residency_3.jpeg',
      '/images/jagdish_residency_4.jpeg'
    ],
    floorPlans: [
      '/images/jagdish_residency_floor_plan.jpeg'
    ],
    location: 'Near Hanshpal square, NH16',
    status: 'Completed',
    area: '2BHK',
    duration: 'Ready',
    highlights: [
      'Prime connectivity close to NH16',
      'Modern S+4 story residential complex',
      '16 premium 2BHK units'
    ]
  },
  {
    id: 'jagdish-exotica',
    title: 'Jagdish Exotica',
    category: 'Residential',
    description: 'It’s an (S+4) story apartment situated in chakesiani, Mancheswar. It has 16 flats built with 2BHK.',
    image: '/images/jagdish_erotica.jpeg',
    images: [
      '/images/jagdish_erotica.jpeg'
    ],
    floorPlans: [
      '/images/jagdish_erotica_floor_plan.jpeg'
    ],
    location: 'Chakesiani, Mancheswar',
    status: 'Completed',
    area: '2BHK',
    duration: 'Ready',
    highlights: [
      'Located in the serene area of Chakesiani, Mancheswar',
      'S+4 story premium apartment',
      'Exclusive 2BHK residential community'
    ]
  },
  {
    id: 'jagdish-enclave',
    title: 'Jagdish Enclave',
    category: 'Residential',
    description: 'It’s an ongoing project situated at Raghunathpur 500mtr from Raghunathpur Bridge, Nandankan Road. It will be a (S+4) story Building consist of fifteen nos of 3BHK flats.',
    image: '/images/jagdish_enclave.jpeg',
    images: [
      '/images/jagdish_enclave.jpeg'
    ],
    floorPlans: [
      '/images/jagdish_enclave_floor_plan.jpeg'
    ],
    location: 'Raghunathpur, Nandankan Road',
    status: 'On Going',
    area: '3BHK',
    duration: 'Ongoing',
    highlights: [
      'Located 500mtr from Raghunathpur Bridge',
      'Spacious and luxurious 3BHK flats',
      'Modern (S+4) story ongoing development'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test1',
    author: 'Arjun Mohanty',
    role: 'Home Buyer',
    company: 'Jagdish Heights resident',
    text: 'Moving into Jagdish Heights has been an incredible experience. The booking process was super smooth, the property matches the exact details promised, and the smart home features are superb.',
    avatarChar: 'AM'
  },
  {
    id: 'test2',
    author: 'Prakash Sethi',
    role: 'VP Corporate Operations',
    company: 'Inventure Tech Labs',
    text: 'Our corporate office lease at Grandeur Business Plaza was managed seamlessly by the Jagdish team. The infrastructure capabilities and parking are excellent, making it the perfect workspace for our teams.',
    avatarChar: 'PS'
  },
  {
    id: 'test3',
    author: 'Suresh Das',
    role: 'Property Investor',
    company: 'East Coast Capital',
    text: 'I invested in three residential units through Jagdish Estates. The rental yields have been consistent and property appreciation reports show stable double-digit growth in Bhubaneswar.',
    avatarChar: 'SD'
  },
  {
    id: 'test4',
    author: 'Ananya Mishra',
    role: 'NRI Investor',
    company: 'Chicago, USA',
    text: 'Managing properties from overseas is a breeze with the Jagdish Property Management dashboard. They handle regular maintenance checks, screen tenants, and process rent directly to my account.',
    avatarChar: 'AM'
  }
];
