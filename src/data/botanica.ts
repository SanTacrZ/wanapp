export interface Planta {
  id: string;
  nombre: string;
  nombreWanano: string;
  nombreCientifico: string;
  categoria: string;
  descripcion: string;
  usos: string[];
  preparacion?: string;
  precauciones?: string;
  habitat: string;
}

export const categoriasBotanica = [
  { id: 'medicinales', nombre: 'Plantas Medicinales', icono: '🌿', color: 'green' },
  { id: 'alimenticias', nombre: 'Plantas Alimenticias', icono: '🥬', color: 'lime' },
  { id: 'rituales', nombre: 'Plantas Rituales y Sagradas', icono: '🌺', color: 'purple' },
  { id: 'construccion', nombre: 'Plantas para Construcción', icono: '🌳', color: 'brown' },
  { id: 'tinturas', nombre: 'Plantas para Tinturas', icono: '🎨', color: 'red' },
];

export const plantas: Planta[] = [
  {
    id: 'b1',
    nombre: 'Ayahuasca',
    nombreWanano: 'Kahpi',
    nombreCientifico: 'Banisteriopsis caapi',
    categoria: 'rituales',
    descripcion: 'La liana sagrada de los pueblos amazónicos. Para los Wanano, el Kahpi es el vehículo que permite comunicarse con los ancestros y acceder al conocimiento espiritual.',
    usos: ['Ritual de sanación', 'Comunicación con ancestros', 'Diagnóstico espiritual', 'Iniciaciones'],
    preparacion: 'Solo puede ser preparada por el payé (chamán) bajo estrictos protocolos rituales. Se combina con otras plantas sagradas.',
    precauciones: 'Uso exclusivamente ritual bajo guía del payé. No debe usarse sin supervisión espiritual adecuada.',
    habitat: 'Selva húmeda tropical del Vaupés'
  },
  {
    id: 'b2',
    nombre: 'Carayurú',
    nombreWanano: 'Wirá Dëhko',
    nombreCientifico: 'Arrabidaea chica',
    categoria: 'tinturas',
    descripcion: 'Planta de la que se extrae un pigmento rojo sagrado usado en ceremonias, pinturas corporales y rituales de protección.',
    usos: ['Pintura corporal ceremonial', 'Protección espiritual', 'Tratamiento de enfermedades de piel'],
    preparacion: 'Las hojas se machacan y el jugo rojo se aplica directamente en el cuerpo o se mezcla con aceite de palma.',
    habitat: 'Bordes de bosque y zonas semi-abiertas del Vaupés'
  },
  {
    id: 'b3',
    nombre: 'Guayusa',
    nombreWanano: 'Yoco Wirá',
    nombreCientifico: 'Ilex guayusa',
    categoria: 'medicinales',
    descripcion: 'Árbol sagrado cuyas hojas se usan para preparar una bebida estimulante que acompaña las reuniones comunitarias al amanecer.',
    usos: ['Bebida energizante', 'Claridad mental', 'Reuniones del amanecer', 'Purificación del cuerpo'],
    preparacion: 'Las hojas frescas o secas se hierven en agua. Se bebe al amanecer antes de comenzar las actividades del día.',
    habitat: 'Bosque primario húmedo'
  },
  {
    id: 'b4',
    nombre: 'Yuca Brava',
    nombreWanano: 'Yãi Biro',
    nombreCientifico: 'Manihot esculenta',
    categoria: 'alimenticias',
    descripcion: 'Base fundamental de la alimentación Wanano. De la yuca brava se prepara el casabe, el mañoco y la chicha, alimentos sagrados de la cultura.',
    usos: ['Casabe', 'Mañoco', 'Chicha', 'Tapioca', 'Fariña'],
    preparacion: 'Debe ser pelada, rallada y exprimida para eliminar el ácido cianhídrico. Luego se cocina en budare para hacer casabe.',
    precauciones: 'Contiene ácido cianhídrico en estado crudo. Debe procesarse correctamente.',
    habitat: 'Cultivos tradicionales (chagras)'
  },
  {
    id: 'b5',
    nombre: 'Palma de Chontaduro',
    nombreWanano: 'Dohporo Turí',
    nombreCientifico: 'Bactris gasipaes',
    categoria: 'alimenticias',
    descripcion: 'La palma de chontaduro es uno de los árboles más importantes de la cultura Wanano. Sus frutos son la base de festines y celebraciones.',
    usos: ['Fruto alimenticio', 'Chicha de chontaduro', 'Aceite de palma', 'Corazón de palma comestible'],
    preparacion: 'Los frutos se cocinan en agua con sal. También se fermenta para chicha.',
    habitat: 'Chagras y bosques secundarios'
  },
  {
    id: 'b6',
    nombre: 'Ambil',
    nombreWanano: 'Yirí Mahsë',
    nombreCientifico: 'Nicotiana tabacum',
    categoria: 'rituales',
    descripcion: 'El tabaco sagrado. El ambil es una pasta de tabaco mezclada con sal vegetal usada en rituales de palabra, mambeaderos y ceremonias de sanación.',
    usos: ['Ritual de palabra', 'Mambeadero', 'Ofrenda a los espíritus', 'Protección espiritual'],
    preparacion: 'Las hojas de tabaco se cocinan con sal vegetal (Yarumo) hasta obtener una pasta densa.',
    precauciones: 'Uso ritual. Debe consumirse con conocimiento y en contexto apropiado.',
    habitat: 'Cultivado en chagras tradicionales'
  },
  {
    id: 'b7',
    nombre: 'Umarí',
    nombreWanano: 'Siro Turí',
    nombreCientifico: 'Poraqueiba sericea',
    categoria: 'alimenticias',
    descripcion: 'Árbol frutal amazónico de gran importancia en la dieta Wanano. Sus frutos aceitosos son muy nutritivos y apreciados.',
    usos: ['Consumo directo', 'Acompañante de casabe', 'Aceite vegetal'],
    preparacion: 'Se cocina en agua y se consume con casabe o mañoco.',
    habitat: 'Chagras y bosque primario'
  },
  {
    id: 'b8',
    nombre: 'Guarumo',
    nombreWanano: 'Yurí Mahkë',
    nombreCientifico: 'Cecropia peltata',
    categoria: 'medicinales',
    descripcion: 'Árbol de rápido crecimiento con múltiples usos medicinales en la tradición Wanano.',
    usos: ['Tratamiento de diabetes', 'Problemas respiratorios', 'Inflamaciones', 'Material para construcción liviana'],
    preparacion: 'Las hojas se preparan en infusión. La savia se usa directamente sobre heridas.',
    habitat: 'Bosques secundarios, orillas de ríos'
  },
];
