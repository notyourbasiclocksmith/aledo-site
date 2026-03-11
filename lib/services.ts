export interface Service {
  slug: string
  slugEs: string
  name: string
  nameEs: string
  shortDesc: string
  shortDescEs: string
  description: string
  descriptionEs: string
  icon: string
  image: string
}

export const services: Service[] = [
  {
    slug: 'car-lockout',
    slugEs: 'apertura-de-auto',
    name: 'Car Lockout',
    nameEs: 'Apertura de Auto',
    shortDesc: 'Locked your keys in the car? We\'ll get you back on the road quickly and safely.',
    shortDescEs: '¿Dejó las llaves en el auto? Le ayudamos a regresar al camino rápido y sin daños.',
    description: 'Getting locked out of your car is stressful, but Aledo Locksmith makes it easy. Our trained technicians use professional, non-damaging tools to unlock your vehicle quickly — no scratches, no broken windows. We handle all car makes and models and are available 24/7 for emergencies in Aledo, TX and the surrounding 10-mile area. Call or text us and we\'ll be there fast.',
    descriptionEs: 'Quedarse encerrado fuera de su auto es estresante, pero Aledo Locksmith lo hace fácil. Nuestros técnicos capacitados usan herramientas profesionales que no dañan su vehículo para abrirlo rápidamente. Manejamos todas las marcas y modelos y estamos disponibles 24/7 para emergencias en Aledo, TX y el área de 10 millas.',
    icon: 'Car',
    image: '/images/car-lockout-service-aledo-tx.png',
  },
  {
    slug: 'car-key-replacement',
    slugEs: 'reemplazo-de-llave-de-auto',
    name: 'Car Key Replacement',
    nameEs: 'Reemplazo de Llave de Auto',
    shortDesc: 'Lost or broken car key? We cut and program new keys for all makes and models.',
    shortDescEs: '¿Perdió o se le rompió la llave del auto? Cortamos y programamos llaves nuevas para todas las marcas.',
    description: 'Whether you\'ve lost your only car key, broken it, or need a spare, our car key replacement service has you covered. We cut and program standard, transponder, and high-security car keys on-site for all major makes and models. Fast mobile service in Aledo, TX and within a 10-mile radius — we come to you so you don\'t need a tow.',
    descriptionEs: 'Ya sea que perdió su única llave del auto, se le rompió, o necesita una copia, nuestro servicio de reemplazo de llave de auto le tiene cubierto. Cortamos y programamos llaves estándar, de transponder y de alta seguridad en el lugar para todas las marcas principales. Servicio móvil rápido en Aledo, TX y dentro de un radio de 10 millas.',
    icon: 'KeyRound',
    image: '/images/new-car-keys-replacement-aledo-tx.png',
  },
  {
    slug: 'key-fob-programming',
    slugEs: 'programacion-de-control-remoto',
    name: 'Key Fob Programming',
    nameEs: 'Programación de Control Remoto',
    shortDesc: 'Need a new key fob or remote? We program fobs for most vehicle brands.',
    shortDescEs: '¿Necesita un control remoto nuevo? Programamos controles para la mayoría de marcas.',
    description: 'Modern vehicles rely on key fobs and smart remotes for keyless entry and push-button start. If your fob is lost, damaged, or stops working, we can program a new one on the spot. Our technicians carry the latest equipment to program key fobs for most vehicle brands including Ford, Chevy, Toyota, Honda, Nissan, and more. Serving Aledo, TX and nearby areas.',
    descriptionEs: 'Los vehículos modernos dependen de controles remotos y llaves inteligentes para entrada sin llave y encendido por botón. Si su control se perdió, se dañó o dejó de funcionar, podemos programar uno nuevo en el lugar. Nuestros técnicos llevan el equipo más reciente para programar controles remotos de la mayoría de marcas incluyendo Ford, Chevy, Toyota, Honda, Nissan y más. Servicio en Aledo, TX y áreas cercanas.',
    icon: 'Lock',
    image: '/images/key-fob-programming-service-aledo-tx.png',
  },
  {
    slug: 'transponder-key-programming',
    slugEs: 'programacion-de-llave-transponder',
    name: 'Transponder Key Programming',
    nameEs: 'Programación de Llave Transponder',
    shortDesc: 'We program transponder chip keys so your car recognizes and starts with the new key.',
    shortDescEs: 'Programamos llaves con chip transponder para que su auto reconozca e inicie con la nueva llave.',
    description: 'Most cars built after 1995 use transponder chip keys as an anti-theft measure. If the chip isn\'t programmed correctly, the car won\'t start. Our automotive locksmith team programs transponder keys on-site using professional-grade equipment. We work with all major vehicle brands and can have your new key working in minutes. Available in Aledo, TX and within 10 miles.',
    descriptionEs: 'La mayoría de autos fabricados después de 1995 usan llaves con chip transponder como medida antirrobo. Si el chip no está programado correctamente, el auto no enciende. Nuestro equipo de cerrajería automotriz programa llaves transponder en el lugar usando equipo profesional. Trabajamos con todas las marcas principales y podemos tener su nueva llave funcionando en minutos. Disponible en Aledo, TX y dentro de 10 millas.',
    icon: 'Siren',
    image: '/images/transponder-key-cutting-aledo-tx.png',
  },
  {
    slug: 'ignition-repair',
    slugEs: 'reparacion-de-ignicion',
    name: 'Ignition Repair & Replacement',
    nameEs: 'Reparación y Reemplazo de Ignición',
    shortDesc: 'Key won\'t turn in the ignition? We repair and replace ignition cylinders on-site.',
    shortDescEs: '¿La llave no gira en la ignición? Reparamos y reemplazamos cilindros de ignición en el lugar.',
    description: 'A faulty ignition cylinder can leave you stranded. Whether your key is stuck, the ignition won\'t turn, or the cylinder is worn out, our mobile locksmith team can diagnose and repair or replace your ignition on-site. We carry parts for most popular vehicle brands and get you back on the road fast. Serving Aledo, TX and the surrounding area.',
    descriptionEs: 'Un cilindro de ignición defectuoso puede dejarlo varado. Ya sea que su llave esté atorada, la ignición no gire, o el cilindro esté desgastado, nuestro equipo móvil de cerrajería puede diagnosticar y reparar o reemplazar su ignición en el lugar. Llevamos partes para las marcas de vehículos más populares y lo ponemos en el camino rápidamente. Servicio en Aledo, TX y el área circundante.',
    icon: 'Wrench',
    image: '/images/ignition-repair-replacement-aledo-tx.png',
  },
  {
    slug: 'emergency-car-locksmith',
    slugEs: 'cerrajero-automotriz-de-emergencia',
    name: 'Emergency Car Locksmith (24/7)',
    nameEs: 'Cerrajero Automotriz de Emergencia (24/7)',
    shortDesc: 'Stranded with a car key emergency? We respond 24/7, day or night.',
    shortDescEs: '¿Varado con una emergencia de llave de auto? Respondemos 24/7, de día o de noche.',
    description: 'Car key emergencies don\'t wait for business hours. Whether you\'re locked out at midnight, broke your key in the ignition, or lost your only key at a parking lot, our 24/7 emergency automotive locksmith service is here for you. We arrive fast — typically within 20-30 minutes in the Aledo area — with all the tools needed to solve your problem on the spot.',
    descriptionEs: 'Las emergencias de llaves de auto no esperan al horario de oficina. Ya sea que esté encerrado a medianoche, se le rompió la llave en la ignición, o perdió su única llave en un estacionamiento, nuestro servicio de cerrajería automotriz de emergencia 24/7 está aquí para usted. Llegamos rápido — generalmente en 20-30 minutos en el área de Aledo — con todas las herramientas necesarias para resolver su problema en el lugar.',
    icon: 'Siren',
    image: '/images/emergency-locksmith-technician-night-aledo-tx.png',
  },
  {
    slug: 'trunk-lockout',
    slugEs: 'apertura-de-cajuela',
    name: 'Trunk Lockout',
    nameEs: 'Apertura de Cajuela',
    shortDesc: 'Keys locked in the trunk? We open it without damage to your vehicle.',
    shortDescEs: '¿Llaves encerradas en la cajuela? La abrimos sin dañar su vehículo.',
    description: 'Accidentally locking your keys in the trunk is frustrating, especially when you\'re in a rush. Our technicians specialize in trunk lockout service and use non-destructive methods to access your trunk safely. We work with all vehicle types — sedans, SUVs, trucks — and arrive quickly in the Aledo, TX area. No damage, no hassle.',
    descriptionEs: 'Encerrar accidentalmente las llaves en la cajuela es frustrante, especialmente cuando tiene prisa. Nuestros técnicos se especializan en apertura de cajuela y usan métodos no destructivos para acceder a su cajuela de forma segura. Trabajamos con todo tipo de vehículos — sedanes, SUVs, camionetas — y llegamos rápido en el área de Aledo, TX. Sin daños, sin complicaciones.',
    icon: 'Car',
    image: '/images/emergency-car-lockout-night-aledo-tx.png',
  },
  {
    slug: 'broken-car-key-extraction',
    slugEs: 'extraccion-de-llave-de-auto-rota',
    name: 'Broken Car Key Extraction',
    nameEs: 'Extracción de Llave de Auto Rota',
    shortDesc: 'Key snapped in the door or ignition? We extract it safely and cut a new one.',
    shortDescEs: '¿Se le rompió la llave en la puerta o ignición? La extraemos y cortamos una nueva.',
    description: 'A car key breaking in the door lock or ignition cylinder is more common than you think. Trying to remove it yourself can push the broken piece further in and cause expensive damage. Our automotive locksmith team uses specialized extraction tools to safely remove the broken key fragment and can cut you a brand new key on the spot. Serving Aledo, TX and nearby areas.',
    descriptionEs: 'Una llave de auto que se rompe en la cerradura de la puerta o el cilindro de ignición es más común de lo que piensa. Intentar sacarla usted mismo puede empujar la pieza rota más adentro y causar daños costosos. Nuestro equipo de cerrajería automotriz usa herramientas de extracción especializadas para remover el fragmento de forma segura y puede cortarle una llave nueva en el lugar. Servicio en Aledo, TX y áreas cercanas.',
    icon: 'Wrench',
    image: '/images/car-key-cutting-machine-aledo-tx.png',
  },
  {
    slug: 'duplicate-car-keys',
    slugEs: 'duplicado-de-llaves-de-auto',
    name: 'Duplicate Car Keys',
    nameEs: 'Duplicado de Llaves de Auto',
    shortDesc: 'Need a spare car key? We make duplicates on-site for all vehicle types.',
    shortDescEs: '¿Necesita una copia de llave de auto? Hacemos duplicados en el lugar para todo tipo de vehículo.',
    description: 'Having a spare car key can save you from an expensive emergency lockout later. We provide on-site car key duplication for standard metal keys, transponder chip keys, and high-security keys. Our mobile unit comes to your location in Aledo, TX and nearby areas, equipped with professional key cutting and programming machines. Fast, affordable, and convenient.',
    descriptionEs: 'Tener una copia de llave de auto puede ahorrarle una apertura de emergencia costosa en el futuro. Proporcionamos duplicado de llaves de auto en el lugar para llaves metálicas estándar, llaves con chip transponder y llaves de alta seguridad. Nuestra unidad móvil va a su ubicación en Aledo, TX y áreas cercanas, equipada con máquinas profesionales de corte y programación. Rápido, accesible y conveniente.',
    icon: 'KeyRound',
    image: '/images/locksmith-delivering-car-keys-customer-aledo-tx.png',
  },
]

export const serviceOptionsEn = [
  'Car Lockout',
  'Car Key Replacement',
  'Key Fob Programming',
  'Transponder Key Programming',
  'Ignition Repair & Replacement',
  'Emergency Car Locksmith (24/7)',
  'Trunk Lockout',
  'Broken Car Key Extraction',
  'Duplicate Car Keys',
]

export const serviceOptionsEs = [
  'Apertura de Auto',
  'Reemplazo de Llave de Auto',
  'Programación de Control Remoto',
  'Programación de Llave Transponder',
  'Reparación y Reemplazo de Ignición',
  'Cerrajero Automotriz de Emergencia (24/7)',
  'Apertura de Cajuela',
  'Extracción de Llave de Auto Rota',
  'Duplicado de Llaves de Auto',
]
