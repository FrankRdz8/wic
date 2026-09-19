import { img, type Img } from "@/lib/images";

/* ---------- Tipos ---------- */

export type GalleryItem = {
  img: Img;
  alt: string;
  /** Fondo del recuadro; útil para logos con transparencia. */
  bg?: "black" | "ink" | "white";
  /** Reduce la imagen dentro del recuadro (logos). */
  pad?: boolean;
  /** Proporción del recuadro si difiere de la de la imagen. */
  ratio?: number;
};

export type GalleryRow = {
  items: GalleryItem[];
  /** Alto máximo (px) de la fila en escritorio, para no ampliar imágenes chicas. */
  maxH?: number;
};

/* ---------- Navegación ---------- */

export const nav = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#equipo", label: "Equipo" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

/* ---------- Secciones 01–04 ---------- */

export const intro = {
  title: "Introducción",
  text: "Bienvenidos al portafolio de WIC. Nos enorgullece presentar una selección de nuestros trabajos más representativos, que muestran la creatividad y profesionalismo de nuestro equipo. A través de estos proyectos, esperamos transmitir nuestra pasión por el diseño y nuestra dedicación a ofrecer soluciones visuales efectivas e inspiradoras.",
};

export const about = {
  tagline: "Magia visual para un impacto real",
  text: "En WIC, transformamos ideas en hechizos visuales y estrategias encantadoras que hacen brillar a las marcas. Somos una agencia de diseño gráfico y marketing digital inspirada en la magia de lo extraordinario, dedicada a crear soluciones innovadoras que generan resultados reales. Cada proyecto es un conjuro único, diseñado con pasión, detalle y un toque mágico que conecta con tus objetivos y cautiva a tu audiencia.",
};

export const team = [
  {
    name: "Juan Pablo Flores",
    roles: ["Editor Audiovisual", "Producción de Contenido"],
    photo: img.teamJuanPablo,
  },
  {
    name: "Ariana Rodriguez",
    roles: ["Dirección Creativa", "Diseñadora Gráfica & Paid Media"],
    photo: img.teamAriana,
  },
  {
    name: "Frank Rodriguez",
    roles: ["Ingeniero en Sistemas", "Diseño UX/UI"],
    photo: img.teamFrank,
  },
];

export const services = [
  "Diseño gráfico",
  "Diseño de identidad",
  "Gestión de redes sociales",
  "Creación de contenido digital",
  "Producción y edición de videos",
  "Desarrollo web",
  "Mantenimiento web",
];

/* ---------- 05 · Proyectos ---------- */

export const logofolio = [
  {
    id: "el-pana",
    name: "Barbershop El Pana",
    dark: true,
    concepts: ["Excelencia", "Autenticidad"],
    text: "En este proyecto los conceptos a trabajar fueron “excelencia y autenticidad”. Se usó una tipografía cursiva para representar la firma ya que el reto fue transformar una marca personal en una marca comercial como lo es “El Pana”, que es el apodo que recibe nuestro cliente dedicado a la barbería.",
    rows: [
      {
        items: [
          { img: img.panaCard, alt: "Tarjeta dorada de Barbershop El Pana sobre fondo negro" },
          { img: img.panaLogo, alt: "Isologo de El Pana sobre una fotografía de la barbería" },
          { img: img.panaCap, alt: "Gorra negra con el logo de El Pana bordado" },
        ],
      },
    ] satisfies GalleryRow[],
  },
  {
    id: "almaq",
    name: "Almaq SRL",
    dark: false,
    concepts: ["Familiar", "Compromiso"],
    text: "Almaq SRL es una empresa familiar dedicada a la construcción y excavaciones con muchos años de experiencia, los conceptos a representar fueron “familiar y compromiso” y querían mantener en su logo la figura de una excavadora, por lo cual se realiza un isotipo con la morfología de la maquinaria y también se hace alusión a la figura de una casa para representar lo familiar del negocio.",
    rows: [
      {
        items: [
          { img: img.almaqField, alt: "Excavadora trabajando en un terreno de tierra" },
          { img: img.almaqHelmet, alt: "Casco amarillo con el isotipo de Almaq" },
          { img: img.almaqCup, alt: "Vaso térmico negro con el logo de Almaq grabado" },
          { img: img.almaqWorker, alt: "Operario con casco amarillo en una obra" },
        ],
      },
    ] satisfies GalleryRow[],
  },
  {
    id: "mileydy-nails",
    name: "Mileydy Nails",
    dark: true,
    concepts: ["Feminidad", "Delicadeza", "Durabilidad"],
    text: "Este isologotipo de un salón de uñas especializado, une la feminidad y la delicadeza, resaltando en la morfología del isologo la forma de una uña y a su vez pretende evocar a los pétalos de una flor de loto, haciendo alusión a un concepto de durabilidad en los servicios de la marca.",
    rows: [
      {
        items: [
          { img: img.mileydyWindow, alt: "Logo de Mileydy Nails en la vidriera del local" },
          { img: img.mileydyGift, alt: "Gift card de Mileydy Nails" },
          { img: img.mileydyStickers, alt: "Stickers con el logo de Mileydy Nails en versión clara y oscura" },
          { img: img.mileydyStore, alt: "Frente del local con el cartel de Mileydy Nails" },
        ],
      },
    ] satisfies GalleryRow[],
  },
  {
    id: "jucunajo",
    name: "Jucunajo SA",
    dark: false,
    concepts: ["Modernidad", "Eficacia"],
    text: "Jucunajo SA es una empresa de logística a granel que nos pidió un diseño de su imagen para renovarse, los conceptos trabajados fueron “modernidad y eficacia”, en la que logramos un resultado más profesional y poder transmitir el dinamismo con el que se renueva la empresa en su rubro.",
    rows: [
      {
        items: [
          { img: img.jucunajoCard, alt: "Tarjeta personal de Jucunajo SA en la mano de un ejecutivo" },
          { img: img.jucunajoField, alt: "Camión de Jucunajo cargando grano en un campo" },
          { img: img.jucunajoTruck, alt: "Camión con la marca de Jucunajo SA sobre fondo azul" },
        ],
      },
    ] satisfies GalleryRow[],
  },
  {
    id: "wj-refrigeracion",
    name: "WJ Refrigeración",
    dark: true,
    concepts: ["Frío", "Calor"],
    text: "WJ es una empresa que recientemente pasa de ser una marca personal de servicio técnico a domicilio a una empresa comercial que brinda servicios y además fabrica insumos de refrigeración, se unen los conceptos de “frío-calor” para representar lo abarcativo de sus servicios y a su vez se trabaja en la unidad del isotipo para representar la cercanía con la que se atienden los casos que reciben.",
    rows: [
      {
        items: [
          { img: img.wjTee, alt: "Remera blanca con el isotipo de WJ Refrigeración" },
          { img: img.wjPaper, alt: "Papelería con el logo de WJ Refrigeración" },
          { img: img.wjMug, alt: "Taza turquesa con el isotipo de WJ" },
        ],
      },
    ] satisfies GalleryRow[],
  },
];

export const clients = {
  title: "Nuestros clientes",
  soles: {
    id: "soles",
    name: "Soles ONG",
    logo: img.logoSoles,
    logoAlt: "Logo de Soles",
    instagram: "https://www.instagram.com/soles.ong/?hl=es",
    paragraphs: [
      "Se brinda un servicio integral de comunicación y marketing digital para Soles ONG, asociación civil dedicada al acompañamiento de niños con cáncer y sus familias.",
      "El servicio incluye la planificación estratégica y calendarización de contenidos, la gestión de redes sociales, la creación de piezas gráficas, la edición de videos y la implementación y optimización de campañas publicitarias en Meta Business Suite.",
      "Además, se realiza el diseño, desarrollo y mantenimiento de su sitio web institucional.",
      "La gestión comprende las plataformas Instagram, Facebook y YouTube, trabajando de manera articulada con el área de Comunicación de la institución para garantizar una estrategia alineada con sus objetivos y acciones.",
      "Asimismo, se brinda dirección creativa y asesoramiento estratégico para el desarrollo y la gestión de otros canales de comunicación, como LinkedIn y Google, además del acompañamiento en el diseño y desarrollo de toda la comunicación gráfica impresa e institucional.",
    ],
    tags: [
      "Estrategia y calendarización",
      "Instagram · Facebook · YouTube",
      "Piezas gráficas",
      "Edición de video",
      "Meta Business Suite",
      "Sitio web institucional",
      "Dirección creativa",
    ],
    rows: [
      { items: [{ img: img.solesTeam, alt: "Equipo de voluntarios de Soles con chalecos amarillos en una plaza" }] },
      {
        items: [
          { img: img.solesFeed, alt: "Grilla de publicaciones de Instagram de Soles" },
          { img: img.solesStand, alt: "Stand de Soles en un evento" },
        ],
      },
    ] satisfies GalleryRow[],
    campaigns: {
      title: "Campañas Business Suite",
      rows: [
        {
          items: [
            { img: img.solesAd, alt: "Anuncio de Facebook de la campaña navideña de Soles" },
            { img: img.solesMetrics1, alt: "Gráfico de clientes potenciales en Facebook e importe gastado" },
            { img: img.solesMetrics2, alt: "Distribución de resultados por sexo y edad" },
          ],
        },
      ] satisfies GalleryRow[],
    },
    reports: {
      title: "Calendarización y reportes",
      text: "Como parte del servicio, se realiza un seguimiento estratégico mediante reportes mensuales de desempeño, en los que se analizan el crecimiento de las redes sociales, el alcance de las acciones implementadas y los principales indicadores de rendimiento. Estos resultados se presentan en una reunión mensual con la institución, complementada con visitas presenciales cuando resulta necesario, para evaluar la relevancia comunicacional de la asociación, definir nuevas oportunidades y ajustar la estrategia de acuerdo con los objetivos planteados.",
      image: { img: img.solesCalendar, alt: "Calendario mensual de contenidos de Soles" } satisfies GalleryItem,
    },
  },
  npp: {
    id: "npp",
    name: "NPP ONG",
    logo: img.logoNpp,
    logoAlt: "Logo de Nuestra Primera Página, 10 años",
    instagram: "https://www.instagram.com/ongnpp/",
    paragraphs: [
      "Se brinda un servicio integral de comunicación digital para Asociación Civil Nuestra Primera Página, organización dedicada a la defensa del derecho a la identidad de origen mediante el uso de herramientas de genética. Debido a que la institución tiene sede en Rosario, Santa Fe, todo el servicio se desarrolla de manera remota, manteniendo una comunicación permanente y una planificación coordinada con su equipo.",
      "El servicio comprende la planificación y calendarización mensual de contenidos, la gestión de Instagram y Facebook, el diseño de piezas gráficas y la producción y edición de contenido audiovisual, desarrollando una estrategia de comunicación alineada con los objetivos de la institución.",
      "Asimismo, se diseñan, implementan y optimizan campañas publicitarias en Meta Business Suite, orientadas tanto al fortalecimiento de la comunicación institucional como a la promoción y comercialización de los Kits de ADN Ancestral, buscando maximizar su alcance y conversión.",
      "Como parte del acompañamiento estratégico, se elaboran reportes mensuales de resultados que permiten analizar el rendimiento de las redes sociales y las campañas publicitarias, evaluando indicadores de crecimiento, alcance e interacción para optimizar continuamente la estrategia de comunicación y el cumplimiento de los objetivos planteados.",
    ],
    tags: [
      "Servicio 100% remoto",
      "Estrategia y calendarización",
      "Instagram · Facebook",
      "Piezas gráficas",
      "Contenido audiovisual",
      "Campañas en Meta",
      "Reportes mensuales",
    ],
    rows: [
      { items: [{ img: img.nppKit, alt: "Kit de ADN Ancestral de Nuestra Primera Página" }] },
      { items: [{ img: img.nppFeed, alt: "Grilla de publicaciones de Instagram de Nuestra Primera Página" }] },
    ] satisfies GalleryRow[],
  },
  almaq: {
    id: "almaq-cliente",
    name: "Almaq SRL",
    logo: null,
    logoAlt: "",
    instagram: "https://www.instagram.com/almaqsrl/",
    paragraphs: [
      "Se brinda un servicio integral de comunicación digital para Almaq SRL, una empresa familiar especializada en movimiento de suelo y construcción. El servicio comprende la planificación y calendarización mensual de contenidos, la gestión de Instagram, Facebook y LinkedIn, el diseño de piezas gráficas y la producción y edición de contenido audiovisual, desarrollando una estrategia de comunicación orientada a fortalecer el posicionamiento de la empresa y dar visibilidad a sus proyectos y servicios.",
      "Además, se realizan coberturas en obra para la generación de material audiovisual, registrando los avances de los proyectos y produciendo contenido que refleja la capacidad operativa, el equipamiento y la experiencia de la empresa. Asimismo, se desarrolló su sitio web corporativo y se brinda el servicio de mantenimiento y actualización del mismo.",
      "Como parte del acompañamiento estratégico, se elaboran reportes mensuales de resultados para analizar el crecimiento de las redes sociales y evaluar el desempeño de la estrategia de comunicación, permitiendo optimizar las acciones implementadas y potenciar la presencia digital de la empresa.",
    ],
    tags: [
      "Estrategia y calendarización",
      "Instagram · Facebook · LinkedIn",
      "Piezas gráficas",
      "Coberturas en obra",
      "Contenido audiovisual",
      "Sitio web corporativo",
      "Reportes mensuales",
    ],
    rows: [
      { items: [{ img: img.almaqFeed, alt: "Grilla de publicaciones de Instagram de Almaq" }] },
      {
        items: [
          { img: img.almaqEvent, alt: "El equipo de Almaq en la Semana de la Construcción" },
          { img: img.logoAlmaq, alt: "Logo de Almaq S.R.L.", bg: "black", pad: true, ratio: 1 },
        ],
      },
    ] satisfies GalleryRow[],
  },
};

export const webVideo = [
  {
    id: "web",
    title: "Diseño y desarrollo web",
    cta: "Ver portfolio web",
    href: "https://frankrdz.com/",
    bg: img.webBg,
  },
  {
    id: "video",
    title: "Producción y edición de videos",
    cta: "Ver catálogo de videos",
    href: "https://drive.google.com/drive/folders/1Gr_1kpmQ1L8Ul6Ixh5Jjq96CowFIK3pe?usp=drive_link",
    bg: img.videoBg,
  },
];

export const print = {
  title: "Diseño para impresión",
  blocks: [
    {
      title: "Diseño de calendarios y etiquetas de stock",
      rows: [
        {
          maxH: 340,
          items: [
            { img: img.printCalendar, alt: "Calendarios de escritorio 2022 sobre fondo verde" },
            { img: img.printStock, alt: "Etiqueta de clasificación de stock" },
          ],
        },
      ] satisfies GalleryRow[],
    },
    {
      title: "Diseño de tapas de libros",
      rows: [
        {
          items: [
            { img: img.book1, alt: "Tapa completa de “El último retorno” en rojo" },
            { img: img.book2, alt: "Tapa de “Encuentro de almas” sobre fondo bordó" },
          ],
        },
        {
          items: [
            { img: img.book3, alt: "Tapa de “Encuentro de almas” en verde" },
            { img: img.book4, alt: "Tapa completa de “El último retorno” en negro" },
          ],
        },
      ] satisfies GalleryRow[],
    },
    {
      title: "Diseño de etiquetas",
      rows: [
        {
          maxH: 560,
          items: [
            { img: img.cresfoodPack, alt: "Pizza envasada con la etiqueta de Cresfood" },
            { img: img.cresfoodLabel, alt: "Etiqueta de Cresfood para pizza de mozzarella" },
          ],
        },
      ] satisfies GalleryRow[],
    },
  ],
};

export const marquee = [
  "Diseño gráfico",
  "Diseño de identidad",
  "Redes sociales",
  "Contenido digital",
  "Producción de video",
  "Desarrollo web",
];

export const contact = {
  email: "wic.design.0@gmail.com",
  instagram: { handle: "@wic.dis", href: "https://www.instagram.com/wic.dis/" },
  phone: { label: "+54 9 351 235-9775", href: "https://wa.me/5493512359775" },
};
