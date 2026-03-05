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
}

export const services: Service[] = [
  {
    slug: 'emergency-locksmith',
    slugEs: 'cerrajero-de-emergencia',
    name: 'Emergency Locksmith (24/7)',
    nameEs: 'Cerrajero de Emergencia (24/7)',
    shortDesc: 'Locked out? We respond fast, day or night, anywhere within 10 miles of Aledo.',
    shortDescEs: '¿Encerrado afuera? Respondemos rápido, de día o de noche, dentro de 10 millas de Aledo.',
    description: 'When you\'re locked out or facing a lock emergency, every minute counts. Our emergency locksmith team is available around the clock to help residents and businesses in Aledo, TX and nearby areas. We arrive fast — typically within 20-30 minutes — and resolve your issue on the spot with professional tools and honest pricing. Whether it\'s a late-night home lockout, a broken key in your door, or a jammed lock, we\'re the team Aledo trusts for rapid, reliable help.',
    descriptionEs: 'Cuando está encerrado o enfrenta una emergencia con cerraduras, cada minuto cuenta. Nuestro equipo de cerrajería de emergencia está disponible las 24 horas para ayudar a residentes y negocios en Aledo, TX y áreas cercanas. Llegamos rápido — generalmente en 20-30 minutos — y resolvemos su problema en el lugar con herramientas profesionales y precios honestos.',
    icon: 'Siren',
  },
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
  },
  {
    slug: 'residential-lockout',
    slugEs: 'apertura-residencial',
    name: 'Residential Lockout',
    nameEs: 'Apertura Residencial',
    shortDesc: 'Locked out of your home? We help Aledo homeowners get back inside safely.',
    shortDescEs: '¿Encerrado fuera de casa? Ayudamos a propietarios en Aledo a entrar de forma segura.',
    description: 'Being locked out of your home can happen to anyone. Whether you lost your keys, the lock is jammed, or you simply left them inside, our residential lockout service gets you back in without damage to your door or lock. We serve homeowners throughout Aledo, TX and nearby communities with fast, friendly, professional service at fair prices.',
    descriptionEs: 'Quedarse encerrado fuera de casa le puede pasar a cualquiera. Ya sea que perdió sus llaves, la cerradura está atorada, o simplemente las dejó adentro, nuestro servicio de apertura residencial le ayuda a entrar sin dañar su puerta o cerradura. Servimos a propietarios en todo Aledo, TX y comunidades cercanas.',
    icon: 'Home',
  },
  {
    slug: 'commercial-lockout',
    slugEs: 'apertura-comercial',
    name: 'Commercial Lockout',
    nameEs: 'Apertura Comercial',
    shortDesc: 'Locked out of your business? We help you get back to work with minimal downtime.',
    shortDescEs: '¿Encerrado fuera de su negocio? Le ayudamos a volver al trabajo rápidamente.',
    description: 'A commercial lockout can mean lost revenue and productivity. Our team understands the urgency and provides fast, discrete lockout services for offices, retail stores, and commercial spaces in the Aledo area. We work with all types of commercial locks and can have you back inside and operational quickly.',
    descriptionEs: 'Un cierre comercial puede significar pérdida de ingresos y productividad. Nuestro equipo entiende la urgencia y proporciona servicios rápidos y discretos de apertura para oficinas, tiendas y espacios comerciales en el área de Aledo.',
    icon: 'Building2',
  },
  {
    slug: 'rekey-locks',
    slugEs: 'cambio-de-combinacion-rekey',
    name: 'Rekey Locks',
    nameEs: 'Cambio de Combinación (Rekey)',
    shortDesc: 'New home or lost a key? We rekey your locks so only your new keys work.',
    shortDescEs: '¿Casa nueva o llave perdida? Cambiamos la combinación para que solo sus nuevas llaves funcionen.',
    description: 'Rekeying is a cost-effective way to secure your property without replacing the entire lock hardware. It\'s ideal when you move into a new home, lose a key, or want to restrict access after a tenant or employee change. We rekey all standard residential and commercial locks in the Aledo, TX area, giving you fresh keys and renewed peace of mind.',
    descriptionEs: 'El rekey es una forma económica de asegurar su propiedad sin reemplazar todo el hardware de la cerradura. Es ideal cuando se muda a una casa nueva, pierde una llave, o quiere restringir el acceso. Hacemos rekey de todas las cerraduras estándar residenciales y comerciales en el área de Aledo, TX.',
    icon: 'KeyRound',
  },
  {
    slug: 'lock-change',
    slugEs: 'cambio-de-cerradura',
    name: 'Lock Change / Replace',
    nameEs: 'Cambio de Cerradura',
    shortDesc: 'Upgrade or replace your locks for better security and peace of mind.',
    shortDescEs: 'Mejore o reemplace sus cerraduras para mayor seguridad y tranquilidad.',
    description: 'Whether your locks are old, damaged, or you simply want an upgrade, our lock change service provides professional installation of high-quality locks for your home or business. We carry a range of trusted lock brands and can advise on the best option for your security needs in Aledo, TX.',
    descriptionEs: 'Ya sea que sus cerraduras estén viejas, dañadas, o simplemente quiera una mejora, nuestro servicio de cambio de cerradura proporciona instalación profesional de cerraduras de alta calidad para su hogar o negocio en Aledo, TX.',
    icon: 'Lock',
  },
  {
    slug: 'lock-installation',
    slugEs: 'instalacion-de-cerradura',
    name: 'Lock Installation',
    nameEs: 'Instalación de Cerradura',
    shortDesc: 'New construction or adding security? We install locks for any door type.',
    shortDescEs: '¿Construcción nueva o más seguridad? Instalamos cerraduras para cualquier tipo de puerta.',
    description: 'From new construction projects to adding deadbolts for extra security, our lock installation service covers it all. We install residential and commercial locks on all door types, ensuring proper alignment, smooth operation, and maximum security. Serving Aledo, TX and nearby areas.',
    descriptionEs: 'Desde proyectos de construcción nueva hasta agregar cerrojos para seguridad adicional, nuestro servicio de instalación de cerraduras lo cubre todo. Instalamos cerraduras residenciales y comerciales en todos los tipos de puertas en Aledo, TX y áreas cercanas.',
    icon: 'Drill',
  },
  {
    slug: 'mailbox-locks',
    slugEs: 'cerraduras-de-buzon',
    name: 'Mailbox Locks',
    nameEs: 'Cerraduras de Buzón',
    shortDesc: 'Lost your mailbox key? We replace and install mailbox locks quickly.',
    shortDescEs: '¿Perdió la llave del buzón? Reemplazamos e instalamos cerraduras de buzón rápidamente.',
    description: 'A broken or lost mailbox key can leave your mail vulnerable. We provide mailbox lock replacement and installation for residential and community mailboxes in Aledo, TX. Quick service, affordable pricing, and we bring the parts to you.',
    descriptionEs: 'Una llave de buzón perdida o rota puede dejar su correo vulnerable. Proporcionamos reemplazo e instalación de cerraduras de buzón para buzones residenciales y comunitarios en Aledo, TX.',
    icon: 'Mail',
  },
  {
    slug: 'broken-key-extraction',
    slugEs: 'extraccion-de-llave-rota',
    name: 'Broken Key Extraction',
    nameEs: 'Extracción de Llave Rota',
    shortDesc: 'Key snapped in the lock? We extract it without damaging your lock.',
    shortDescEs: '¿Se le rompió la llave en la cerradura? La extraemos sin dañar su cerradura.',
    description: 'A key breaking inside a lock is more common than you think, and trying to remove it yourself can cause further damage. Our broken key extraction service uses specialized tools to safely remove the broken piece and get your lock working again. We serve Aledo, TX and nearby areas with prompt, professional service.',
    descriptionEs: 'Una llave que se rompe dentro de una cerradura es más común de lo que piensa, e intentar sacarla usted mismo puede causar más daño. Nuestro servicio de extracción de llave rota usa herramientas especializadas para remover la pieza rota de forma segura en Aledo, TX y áreas cercanas.',
    icon: 'Wrench',
  },
]

export const serviceOptionsEn = [
  'Emergency Locksmith (24/7)',
  'Car Lockout',
  'Residential Lockout',
  'Commercial Lockout',
  'Rekey Locks',
  'Lock Change / Replace',
  'Lock Installation',
  'Mailbox Locks',
  'Broken Key Extraction',
]

export const serviceOptionsEs = [
  'Cerrajero de Emergencia (24/7)',
  'Apertura de Auto',
  'Apertura Residencial',
  'Apertura Comercial',
  'Cambio de Combinación (Rekey)',
  'Cambio de Cerradura',
  'Instalación de Cerradura',
  'Cerraduras de Buzón',
  'Extracción de Llave Rota',
]
