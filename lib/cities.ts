export interface City {
  slug: string
  slugEs: string
  name: string
  zip: string
  county: string
  descEn: string
  descEs: string
  landmarks: string[]
  landmarksEs: string[]
  lat: number
  lng: number
}

export const cities: City[] = [
  {
    slug: 'aledo',
    slugEs: 'aledo',
    name: 'Aledo',
    zip: '76008',
    county: 'Parker',
    descEn: 'Our home base. Aledo is a charming city in Parker County known for its top-rated school district, tight-knit community, and growing residential neighborhoods. As a locally based locksmith, we provide the fastest response times in Aledo — typically 15 to 20 minutes.',
    descEs: 'Nuestra base. Aledo es una ciudad encantadora en el condado de Parker conocida por su distrito escolar de primer nivel, comunidad unida y vecindarios residenciales en crecimiento. Como cerrajero local, proporcionamos los tiempos de respuesta más rápidos en Aledo — típicamente 15 a 20 minutos.',
    landmarks: ['Aledo ISD', 'Downtown Aledo', 'Aledo Town Center', 'Walsh Ranch', 'Parks of Aledo', 'Morningstar', 'Annetta Elementary area'],
    landmarksEs: ['Aledo ISD', 'Centro de Aledo', 'Aledo Town Center', 'Walsh Ranch', 'Parks of Aledo', 'Morningstar', 'Área de Annetta Elementary'],
    lat: 32.6960,
    lng: -97.6023,
  },
  {
    slug: 'willow-park',
    slugEs: 'willow-park',
    name: 'Willow Park',
    zip: '76087',
    county: 'Parker',
    descEn: 'Willow Park sits right next to Aledo along I-20 and is one of our most-served communities. With neighborhoods like Crown Pointe, Trinity Meadows, and the FM 5 corridor, we handle a high volume of calls here and can usually arrive within 15 to 25 minutes.',
    descEs: 'Willow Park se encuentra junto a Aledo a lo largo de la I-20 y es una de nuestras comunidades más atendidas. Con vecindarios como Crown Pointe, Trinity Meadows y el corredor FM 5, manejamos un alto volumen de llamadas aquí y usualmente llegamos en 15 a 25 minutos.',
    landmarks: ['Crown Pointe', 'Trinity Meadows', 'Willow Park North', 'FM 5 corridor', 'I-20 & Ranch House Rd', 'Squaw Creek Park', 'Willow Park Baptist area'],
    landmarksEs: ['Crown Pointe', 'Trinity Meadows', 'Willow Park North', 'Corredor FM 5', 'I-20 y Ranch House Rd', 'Squaw Creek Park', 'Área de Willow Park Baptist'],
    lat: 32.7632,
    lng: -97.6509,
  },
  {
    slug: 'annetta',
    slugEs: 'annetta',
    name: 'Annetta',
    zip: '76008',
    county: 'Parker',
    descEn: 'The Annetta communities — Annetta, Annetta North, and Annetta South — are fully within our service radius. These quiet, rural-suburban neighborhoods are home to many families who rely on us for automotive locksmith needs. Response time is typically 15 to 25 minutes.',
    descEs: 'Las comunidades de Annetta — Annetta, Annetta North y Annetta South — están completamente dentro de nuestro radio de servicio. Estos vecindarios tranquilos son hogar de muchas familias que confían en nosotros. Tiempo de respuesta típico de 15 a 25 minutos.',
    landmarks: ['Annetta Town Hall', 'Annetta North', 'Annetta South', 'Aledo ISD boundary', 'Bailey Ranch Rd area', 'Old Annetta Rd', 'FM 5 & Annetta'],
    landmarksEs: ['Ayuntamiento de Annetta', 'Annetta North', 'Annetta South', 'Límite de Aledo ISD', 'Área de Bailey Ranch Rd', 'Old Annetta Rd', 'FM 5 y Annetta'],
    lat: 32.7118,
    lng: -97.6425,
  },
  {
    slug: 'hudson-oaks',
    slugEs: 'hudson-oaks',
    name: 'Hudson Oaks',
    zip: '76087',
    county: 'Parker',
    descEn: 'Hudson Oaks is a small, friendly city located just west of Willow Park on I-20. The retail corridor and residential neighborhoods keep us busy with calls for car lockouts, key replacements, and fob programming. We typically arrive in 20 to 30 minutes.',
    descEs: 'Hudson Oaks es una ciudad pequeña y amigable ubicada justo al oeste de Willow Park en la I-20. El corredor comercial y los vecindarios residenciales nos mantienen ocupados con llamadas para aperturas, reemplazos de llaves y programación de controles. Llegamos típicamente en 20 a 30 minutos.',
    landmarks: ['Hudson Oaks Plaza', 'I-20 retail corridor', 'Hudson Oaks City Hall', 'Lakeshore Dr area', 'Shops at Hudson Oaks', 'Old Weatherford Rd', 'Bankhead Hwy'],
    landmarksEs: ['Hudson Oaks Plaza', 'Corredor comercial I-20', 'Ayuntamiento de Hudson Oaks', 'Área de Lakeshore Dr', 'Shops at Hudson Oaks', 'Old Weatherford Rd', 'Bankhead Hwy'],
    lat: 32.7476,
    lng: -97.6964,
  },
  {
    slug: 'walsh',
    slugEs: 'walsh',
    name: 'Walsh',
    zip: '76008',
    county: 'Parker',
    descEn: 'Walsh is one of the fastest-growing master-planned communities in the DFW metroplex, located just east of Aledo. New residents moving in regularly need car key duplicates, fob programming, and lockout help. We serve all of Walsh with a typical response time of 15 to 25 minutes.',
    descEs: 'Walsh es una de las comunidades planificadas de más rápido crecimiento en la metrópolis DFW, ubicada justo al este de Aledo. Los nuevos residentes regularmente necesitan duplicados de llaves, programación de controles y ayuda con aperturas. Servimos todo Walsh con un tiempo de respuesta típico de 15 a 25 minutos.',
    landmarks: ['Walsh Town Center', 'Walsh Elementary', 'Walsh Community', 'Walsh Ranch Rd', 'Morningstar at Walsh', 'Walsh Marketplace', 'Heritage Trail'],
    landmarksEs: ['Walsh Town Center', 'Walsh Elementary', 'Comunidad Walsh', 'Walsh Ranch Rd', 'Morningstar at Walsh', 'Walsh Marketplace', 'Heritage Trail'],
    lat: 32.7072,
    lng: -97.5572,
  },
  {
    slug: 'weatherford',
    slugEs: 'weatherford',
    name: 'Weatherford',
    zip: '76086',
    county: 'Parker',
    descEn: 'We serve the eastern portions of Weatherford that fall within our 10-mile radius, including areas near the I-20/US-180 interchange and the neighborhoods east of downtown. Weatherford is the Parker County seat, and we typically arrive within 25 to 35 minutes.',
    descEs: 'Servimos las porciones orientales de Weatherford dentro de nuestro radio de 10 millas, incluyendo áreas cerca del intercambio I-20/US-180 y los vecindarios al este del centro. Weatherford es la sede del condado de Parker, y típicamente llegamos en 25 a 35 minutos.',
    landmarks: ['I-20 & US-180 interchange', 'East Weatherford', 'Weatherford College area', 'Parker County Courthouse', 'Tin Top Rd area', 'Santa Fe Dr corridor', 'Brock ISD boundary'],
    landmarksEs: ['Intercambio I-20 y US-180', 'Este de Weatherford', 'Área de Weatherford College', 'Corte del Condado de Parker', 'Área de Tin Top Rd', 'Corredor Santa Fe Dr', 'Límite de Brock ISD'],
    lat: 32.7593,
    lng: -97.7972,
  },
  {
    slug: 'fort-worth-west',
    slugEs: 'fort-worth-oeste',
    name: 'Fort Worth (West)',
    zip: '76126',
    county: 'Tarrant',
    descEn: 'The western edge of Fort Worth — including areas near Walsh Ranch, the I-20/I-30 split, Benbrook Lake, and Lake Worth — falls within our coverage area. These neighborhoods are a short drive from our Aledo base, with a typical response time of 20 to 30 minutes.',
    descEs: 'El borde occidental de Fort Worth — incluyendo áreas cerca de Walsh Ranch, la división I-20/I-30, Benbrook Lake y Lake Worth — cae dentro de nuestra área de cobertura. Estos vecindarios están a corta distancia de nuestra base en Aledo, con tiempo de respuesta típico de 20 a 30 minutos.',
    landmarks: ['Walsh Ranch area', 'I-20/I-30 split', 'Benbrook Lake', 'Lake Worth', 'Western Hills', 'Ridglea area', 'Camp Bowie West'],
    landmarksEs: ['Área de Walsh Ranch', 'División I-20/I-30', 'Benbrook Lake', 'Lake Worth', 'Western Hills', 'Área de Ridglea', 'Camp Bowie Oeste'],
    lat: 32.7200,
    lng: -97.5000,
  },
]
