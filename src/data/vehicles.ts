export interface VehicleModel {
  name: string;
  slug: string;
  years: number[];
}

export interface VehicleBrand {
  name: string;
  slug: string;
  country: string;
  models: VehicleModel[];
}

function yearRange(start: number, end: number): number[] {
  const years: number[] = [];
  for (let y = start; y <= end; y++) years.push(y);
  return years;
}

export const vehicleBrands: VehicleBrand[] = [
  {
    name: 'Toyota',
    slug: 'toyota',
    country: 'Japanese',
    models: [
      { name: 'Camry', slug: 'camry', years: yearRange(2012, 2025) },
      { name: 'Corolla', slug: 'corolla', years: yearRange(2012, 2025) },
      { name: 'RAV4', slug: 'rav4', years: yearRange(2013, 2025) },
      { name: 'Tacoma', slug: 'tacoma', years: yearRange(2012, 2025) },
      { name: 'Highlander', slug: 'highlander', years: yearRange(2014, 2025) },
      { name: 'Tundra', slug: 'tundra', years: yearRange(2014, 2025) },
      { name: '4Runner', slug: '4runner', years: yearRange(2014, 2025) },
      { name: 'Prius', slug: 'prius', years: yearRange(2012, 2025) },
    ],
  },
  {
    name: 'Honda',
    slug: 'honda',
    country: 'Japanese',
    models: [
      { name: 'Civic', slug: 'civic', years: yearRange(2012, 2025) },
      { name: 'Accord', slug: 'accord', years: yearRange(2012, 2025) },
      { name: 'CR-V', slug: 'cr-v', years: yearRange(2012, 2025) },
      { name: 'Pilot', slug: 'pilot', years: yearRange(2013, 2025) },
      { name: 'HR-V', slug: 'hr-v', years: yearRange(2016, 2025) },
      { name: 'Odyssey', slug: 'odyssey', years: yearRange(2014, 2025) },
      { name: 'Ridgeline', slug: 'ridgeline', years: yearRange(2017, 2025) },
    ],
  },
  {
    name: 'Ford',
    slug: 'ford',
    country: 'American',
    models: [
      { name: 'F-150', slug: 'f150', years: yearRange(2012, 2025) },
      { name: 'Escape', slug: 'escape', years: yearRange(2013, 2025) },
      { name: 'Explorer', slug: 'explorer', years: yearRange(2013, 2025) },
      { name: 'Mustang', slug: 'mustang', years: yearRange(2012, 2025) },
      { name: 'Edge', slug: 'edge', years: yearRange(2013, 2024) },
      { name: 'Fusion', slug: 'fusion', years: yearRange(2013, 2020) },
      { name: 'Bronco', slug: 'bronco', years: yearRange(2021, 2025) },
      { name: 'Ranger', slug: 'ranger', years: yearRange(2019, 2025) },
      { name: 'F-250', slug: 'f250', years: yearRange(2014, 2025) },
    ],
  },
  {
    name: 'Chevrolet',
    slug: 'chevrolet',
    country: 'American',
    models: [
      { name: 'Silverado', slug: 'silverado', years: yearRange(2012, 2025) },
      { name: 'Equinox', slug: 'equinox', years: yearRange(2013, 2025) },
      { name: 'Malibu', slug: 'malibu', years: yearRange(2013, 2024) },
      { name: 'Tahoe', slug: 'tahoe', years: yearRange(2014, 2025) },
      { name: 'Traverse', slug: 'traverse', years: yearRange(2014, 2025) },
      { name: 'Camaro', slug: 'camaro', years: yearRange(2012, 2024) },
      { name: 'Suburban', slug: 'suburban', years: yearRange(2014, 2025) },
      { name: 'Colorado', slug: 'colorado', years: yearRange(2015, 2025) },
    ],
  },
  {
    name: 'Nissan',
    slug: 'nissan',
    country: 'Japanese',
    models: [
      { name: 'Altima', slug: 'altima', years: yearRange(2013, 2025) },
      { name: 'Rogue', slug: 'rogue', years: yearRange(2014, 2025) },
      { name: 'Sentra', slug: 'sentra', years: yearRange(2013, 2025) },
      { name: 'Pathfinder', slug: 'pathfinder', years: yearRange(2014, 2025) },
      { name: 'Frontier', slug: 'frontier', years: yearRange(2014, 2025) },
      { name: 'Titan', slug: 'titan', years: yearRange(2016, 2025) },
      { name: 'Maxima', slug: 'maxima', years: yearRange(2013, 2023) },
    ],
  },
  {
    name: 'BMW',
    slug: 'bmw',
    country: 'German',
    models: [
      { name: '3 Series', slug: '3-series', years: yearRange(2014, 2025) },
      { name: '5 Series', slug: '5-series', years: yearRange(2014, 2025) },
      { name: 'X3', slug: 'x3', years: yearRange(2015, 2025) },
      { name: 'X5', slug: 'x5', years: yearRange(2014, 2025) },
      { name: 'X1', slug: 'x1', years: yearRange(2016, 2025) },
      { name: '7 Series', slug: '7-series', years: yearRange(2016, 2025) },
    ],
  },
  {
    name: 'Hyundai',
    slug: 'hyundai',
    country: 'Korean',
    models: [
      { name: 'Elantra', slug: 'elantra', years: yearRange(2013, 2025) },
      { name: 'Sonata', slug: 'sonata', years: yearRange(2013, 2025) },
      { name: 'Tucson', slug: 'tucson', years: yearRange(2014, 2025) },
      { name: 'Santa Fe', slug: 'santa-fe', years: yearRange(2014, 2025) },
      { name: 'Kona', slug: 'kona', years: yearRange(2018, 2025) },
      { name: 'Palisade', slug: 'palisade', years: yearRange(2020, 2025) },
    ],
  },
  {
    name: 'Kia',
    slug: 'kia',
    country: 'Korean',
    models: [
      { name: 'Forte', slug: 'forte', years: yearRange(2014, 2025) },
      { name: 'Optima', slug: 'optima', years: yearRange(2014, 2020) },
      { name: 'K5', slug: 'k5', years: yearRange(2021, 2025) },
      { name: 'Sorento', slug: 'sorento', years: yearRange(2014, 2025) },
      { name: 'Sportage', slug: 'sportage', years: yearRange(2014, 2025) },
      { name: 'Telluride', slug: 'telluride', years: yearRange(2020, 2025) },
      { name: 'Soul', slug: 'soul', years: yearRange(2014, 2025) },
    ],
  },
  {
    name: 'Dodge',
    slug: 'dodge',
    country: 'American',
    models: [
      { name: 'Ram 1500', slug: 'ram-1500', years: yearRange(2013, 2025) },
      { name: 'Charger', slug: 'charger', years: yearRange(2012, 2025) },
      { name: 'Challenger', slug: 'challenger', years: yearRange(2012, 2024) },
      { name: 'Durango', slug: 'durango', years: yearRange(2014, 2025) },
      { name: 'Ram 2500', slug: 'ram-2500', years: yearRange(2014, 2025) },
      { name: 'Grand Caravan', slug: 'grand-caravan', years: yearRange(2013, 2020) },
    ],
  },
  {
    name: 'Jeep',
    slug: 'jeep',
    country: 'American',
    models: [
      { name: 'Wrangler', slug: 'wrangler', years: yearRange(2012, 2025) },
      { name: 'Grand Cherokee', slug: 'grand-cherokee', years: yearRange(2013, 2025) },
      { name: 'Cherokee', slug: 'cherokee', years: yearRange(2014, 2025) },
      { name: 'Compass', slug: 'compass', years: yearRange(2017, 2025) },
      { name: 'Gladiator', slug: 'gladiator', years: yearRange(2020, 2025) },
      { name: 'Renegade', slug: 'renegade', years: yearRange(2015, 2025) },
    ],
  },
  {
    name: 'Lexus',
    slug: 'lexus',
    country: 'Japanese',
    models: [
      { name: 'RX', slug: 'rx', years: yearRange(2014, 2025) },
      { name: 'ES', slug: 'es', years: yearRange(2014, 2025) },
      { name: 'IS', slug: 'is', years: yearRange(2014, 2025) },
      { name: 'NX', slug: 'nx', years: yearRange(2015, 2025) },
      { name: 'GX', slug: 'gx', years: yearRange(2014, 2025) },
    ],
  },
  {
    name: 'Mercedes-Benz',
    slug: 'mercedes',
    country: 'German',
    models: [
      { name: 'C-Class', slug: 'c-class', years: yearRange(2014, 2025) },
      { name: 'E-Class', slug: 'e-class', years: yearRange(2014, 2025) },
      { name: 'GLC', slug: 'glc', years: yearRange(2016, 2025) },
      { name: 'GLE', slug: 'gle', years: yearRange(2016, 2025) },
      { name: 'A-Class', slug: 'a-class', years: yearRange(2019, 2025) },
      { name: 'S-Class', slug: 's-class', years: yearRange(2014, 2025) },
    ],
  },
  {
    name: 'Audi',
    slug: 'audi',
    country: 'German',
    models: [
      { name: 'A4', slug: 'a4', years: yearRange(2014, 2025) },
      { name: 'Q5', slug: 'q5', years: yearRange(2014, 2025) },
      { name: 'A3', slug: 'a3', years: yearRange(2015, 2025) },
      { name: 'Q7', slug: 'q7', years: yearRange(2015, 2025) },
      { name: 'A6', slug: 'a6', years: yearRange(2014, 2025) },
      { name: 'Q3', slug: 'q3', years: yearRange(2019, 2025) },
    ],
  },
  {
    name: 'Volkswagen',
    slug: 'volkswagen',
    country: 'German',
    models: [
      { name: 'Jetta', slug: 'jetta', years: yearRange(2013, 2025) },
      { name: 'Tiguan', slug: 'tiguan', years: yearRange(2014, 2025) },
      { name: 'Atlas', slug: 'atlas', years: yearRange(2018, 2025) },
      { name: 'Passat', slug: 'passat', years: yearRange(2013, 2022) },
      { name: 'Golf', slug: 'golf', years: yearRange(2013, 2025) },
      { name: 'Taos', slug: 'taos', years: yearRange(2022, 2025) },
    ],
  },
  {
    name: 'Mazda',
    slug: 'mazda',
    country: 'Japanese',
    models: [
      { name: 'Mazda3', slug: 'mazda3', years: yearRange(2014, 2025) },
      { name: 'CX-5', slug: 'cx-5', years: yearRange(2013, 2025) },
      { name: 'CX-9', slug: 'cx-9', years: yearRange(2014, 2023) },
      { name: 'CX-50', slug: 'cx-50', years: yearRange(2023, 2025) },
      { name: 'Mazda6', slug: 'mazda6', years: yearRange(2014, 2021) },
      { name: 'CX-30', slug: 'cx-30', years: yearRange(2020, 2025) },
    ],
  },
  {
    name: 'Subaru',
    slug: 'subaru',
    country: 'Japanese',
    models: [
      { name: 'Outback', slug: 'outback', years: yearRange(2013, 2025) },
      { name: 'Forester', slug: 'forester', years: yearRange(2013, 2025) },
      { name: 'Crosstrek', slug: 'crosstrek', years: yearRange(2014, 2025) },
      { name: 'Impreza', slug: 'impreza', years: yearRange(2013, 2025) },
      { name: 'WRX', slug: 'wrx', years: yearRange(2015, 2025) },
      { name: 'Ascent', slug: 'ascent', years: yearRange(2019, 2025) },
    ],
  },
  {
    name: 'Acura',
    slug: 'acura',
    country: 'Japanese',
    models: [
      { name: 'TLX', slug: 'tlx', years: yearRange(2015, 2025) },
      { name: 'MDX', slug: 'mdx', years: yearRange(2014, 2025) },
      { name: 'RDX', slug: 'rdx', years: yearRange(2014, 2025) },
      { name: 'ILX', slug: 'ilx', years: yearRange(2013, 2022) },
      { name: 'Integra', slug: 'integra', years: yearRange(2023, 2025) },
    ],
  },
  {
    name: 'Infiniti',
    slug: 'infiniti',
    country: 'Japanese',
    models: [
      { name: 'Q50', slug: 'q50', years: yearRange(2014, 2025) },
      { name: 'QX60', slug: 'qx60', years: yearRange(2014, 2025) },
      { name: 'QX80', slug: 'qx80', years: yearRange(2014, 2025) },
      { name: 'QX50', slug: 'qx50', years: yearRange(2014, 2025) },
      { name: 'Q60', slug: 'q60', years: yearRange(2017, 2024) },
    ],
  },
  {
    name: 'Volvo',
    slug: 'volvo',
    country: 'Swedish',
    models: [
      { name: 'XC90', slug: 'xc90', years: yearRange(2015, 2025) },
      { name: 'XC60', slug: 'xc60', years: yearRange(2014, 2025) },
      { name: 'XC40', slug: 'xc40', years: yearRange(2019, 2025) },
      { name: 'S60', slug: 's60', years: yearRange(2015, 2025) },
      { name: 'S90', slug: 's90', years: yearRange(2017, 2025) },
      { name: 'V60', slug: 'v60', years: yearRange(2019, 2025) },
    ],
  },
];

export const brandServiceCombinations = [
  'key-replacement',
  'key-programming',
  'key-fob-replacement',
  'lost-key',
  'lockout',
  'ignition-repair',
] as const;

export type BrandServiceType = (typeof brandServiceCombinations)[number];

export const brandServiceLabels: Record<BrandServiceType, string> = {
  'key-replacement': 'Key Replacement',
  'key-programming': 'Key Programming',
  'key-fob-replacement': 'Key Fob Replacement',
  'lost-key': 'Lost Key Service',
  'lockout': 'Lockout Service',
  'ignition-repair': 'Ignition Repair',
};

export function getAllBrandServicePages() {
  const pages: { brand: VehicleBrand; service: BrandServiceType; slug: string }[] = [];
  for (const brand of vehicleBrands) {
    for (const service of brandServiceCombinations) {
      pages.push({
        brand,
        service,
        slug: `${brand.slug}-${service}-aledo`,
      });
    }
  }
  return pages;
}

export function getAllModelPages() {
  const pages: {
    brand: VehicleBrand;
    model: VehicleModel;
    year: number;
    service: BrandServiceType;
    slug: string;
  }[] = [];

  const modelServices: BrandServiceType[] = ['key-replacement', 'key-programming', 'key-fob-replacement'];

  for (const brand of vehicleBrands) {
    for (const model of brand.models) {
      for (const year of model.years) {
        for (const service of modelServices) {
          pages.push({
            brand,
            model,
            year,
            service,
            slug: `${year}-${brand.slug}-${model.slug}-${service}-aledo`,
          });
        }
      }
    }
  }
  return pages;
}

export function countTotalPages() {
  const servicePages = 8;
  const brandServicePages = getAllBrandServicePages().length;
  const modelPages = getAllModelPages().length;
  const blogPages = 50;
  const staticPages = 5; // home, contact, about, areas, sitemap
  return {
    servicePages,
    brandServicePages,
    modelPages,
    blogPages,
    staticPages,
    total: servicePages + brandServicePages + modelPages + blogPages + staticPages,
  };
}
