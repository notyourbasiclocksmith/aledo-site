export interface Service {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  excerpt: string;
  heroHeading: string;
  heroSubheading: string;
}

export const services: Service[] = [
  {
    slug: 'car-key-replacement-aledo',
    name: 'Car Key Replacement',
    shortName: 'key-replacement',
    title: 'Car Key Replacement in Aledo TX',
    metaTitle: 'Car Key Replacement Aledo TX | Fast Mobile Locksmith Service',
    metaDescription: 'Need a car key replacement in Aledo Texas? Our mobile locksmith cuts and programs new keys on-site for all vehicle makes. Available 24/7 in Parker County. Call now!',
    icon: 'Key',
    excerpt: 'Lost or damaged car key? We cut and program replacement keys on-site for all vehicle makes and models throughout Aledo and Parker County.',
    heroHeading: 'Car Key Replacement in Aledo, Texas',
    heroSubheading: 'Professional mobile locksmith service delivering fast, reliable car key replacements directly to your location in Aledo and throughout Parker County.',
  },
  {
    slug: 'lost-car-key-aledo',
    name: 'Lost Car Key Service',
    shortName: 'lost-key',
    title: 'Lost Car Key Service in Aledo TX',
    metaTitle: 'Lost Car Key Aledo TX | Emergency Mobile Locksmith | 24/7 Service',
    metaDescription: 'Lost your car keys in Aledo Texas? Our mobile locksmith arrives fast to create new keys on the spot. Serving Aledo, Weatherford & Parker County. Call now!',
    icon: 'Search',
    excerpt: 'Lost your car keys in Aledo? Our mobile locksmith creates new keys on the spot so you can get back on the road fast.',
    heroHeading: 'Lost Car Key Service in Aledo, Texas',
    heroSubheading: 'Stranded without your car keys? Our emergency mobile locksmith team responds quickly across Aledo, delivering new keys right where you need them.',
  },
  {
    slug: 'key-fob-replacement-aledo',
    name: 'Key Fob Replacement',
    shortName: 'fob-replacement',
    title: 'Key Fob Replacement in Aledo TX',
    metaTitle: 'Key Fob Replacement Aledo TX | Program & Replace Car Remotes',
    metaDescription: 'Key fob not working? Get fast key fob replacement and programming in Aledo Texas. Mobile service for all vehicle brands. Serving Parker County. Call today!',
    icon: 'Smartphone',
    excerpt: 'Broken or lost key fob? We replace and program key fobs for all vehicle brands right at your Aledo location.',
    heroHeading: 'Key Fob Replacement in Aledo, Texas',
    heroSubheading: 'Expert key fob replacement and programming services delivered to your doorstep throughout Aledo and the greater Parker County area.',
  },
  {
    slug: 'car-key-programming-aledo',
    name: 'Car Key Programming',
    shortName: 'key-programming',
    title: 'Car Key Programming in Aledo TX',
    metaTitle: 'Car Key Programming Aledo TX | Transponder & Smart Key Experts',
    metaDescription: 'Professional car key programming in Aledo Texas. We program transponder keys, smart keys & remotes for all makes. Mobile service in Parker County. Call now!',
    icon: 'Cpu',
    excerpt: 'Need a car key programmed? Our mobile technicians program transponder keys, smart keys, and remotes for all makes and models in Aledo.',
    heroHeading: 'Car Key Programming in Aledo, Texas',
    heroSubheading: 'Advanced transponder key and smart key programming performed on-site by certified technicians serving Aledo drivers and Parker County motorists.',
  },
  {
    slug: 'ignition-repair-aledo',
    name: 'Ignition Repair',
    shortName: 'ignition-repair',
    title: 'Ignition Repair in Aledo TX',
    metaTitle: 'Ignition Repair Aledo TX | Car Ignition Fix & Replacement Service',
    metaDescription: 'Car ignition problems in Aledo Texas? We repair and replace faulty ignitions on-site. Fast mobile service for all vehicles in Parker County. Call today!',
    icon: 'Wrench',
    excerpt: 'Ignition won\'t turn? Our mobile locksmith diagnoses and repairs ignition problems on-site for Aledo drivers.',
    heroHeading: 'Ignition Repair Service in Aledo, Texas',
    heroSubheading: 'Expert ignition diagnosis, repair, and replacement services brought directly to your vehicle anywhere in Aledo and Parker County.',
  },
  {
    slug: 'car-lockout-service-aledo',
    name: 'Car Lockout Service',
    shortName: 'lockout',
    title: 'Car Lockout Service in Aledo TX',
    metaTitle: 'Car Lockout Service Aledo TX | Emergency Unlock | Fast Response',
    metaDescription: 'Locked out of your car in Aledo Texas? Our emergency lockout service gets you back in fast. 24/7 mobile locksmith serving Parker County. Call now!',
    icon: 'Lock',
    excerpt: 'Locked your keys in the car? Our emergency lockout service reaches you fast anywhere in Aledo to safely unlock your vehicle.',
    heroHeading: 'Car Lockout Service in Aledo, Texas',
    heroSubheading: 'Locked out of your vehicle? Our rapid-response mobile locksmith team provides safe, damage-free car unlocking throughout Aledo and Parker County.',
  },
  {
    slug: 'mobile-locksmith-aledo',
    name: 'Mobile Locksmith',
    shortName: 'mobile-locksmith',
    title: 'Mobile Locksmith in Aledo TX',
    metaTitle: 'Mobile Locksmith Aledo TX | We Come to You | All Auto Services',
    metaDescription: 'Mobile automotive locksmith serving Aledo Texas. We come to your location for key replacement, programming, lockouts & more. Parker County coverage. Call!',
    icon: 'Truck',
    excerpt: 'Our fully equipped mobile locksmith brings professional automotive locksmith services directly to your location anywhere in Aledo.',
    heroHeading: 'Mobile Locksmith Service in Aledo, Texas',
    heroSubheading: 'A fully equipped mobile locksmith workshop that comes directly to you—anywhere in Aledo, along Interstate 20, or throughout Parker County.',
  },
  {
    slug: 'emergency-locksmith-aledo',
    name: 'Emergency Locksmith',
    shortName: 'emergency',
    title: 'Emergency Locksmith in Aledo TX',
    metaTitle: 'Emergency Locksmith Aledo TX | 24/7 Auto Locksmith | Fast Service',
    metaDescription: '24/7 emergency automotive locksmith in Aledo Texas. Fast response for lockouts, lost keys & broken ignitions. Serving Parker County around the clock. Call!',
    icon: 'Siren',
    excerpt: 'Automotive emergency? Our 24/7 emergency locksmith provides immediate response for lockouts, lost keys, and broken ignitions across Aledo.',
    heroHeading: 'Emergency Locksmith in Aledo, Texas',
    heroSubheading: 'Round-the-clock emergency automotive locksmith services with rapid response times throughout Aledo, Parker County, and surrounding communities.',
  },
];

export const servicesSlugs = services.map((s) => s.slug);
