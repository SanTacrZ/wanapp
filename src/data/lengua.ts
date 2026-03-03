export interface Palabra {
  id: string;
  wanano: string;
  espanol: string;
  pronunciacion: string;
  categoria: string;
  ejemplo?: string;
}

export interface Leccion {
  id: string;
  titulo: string;
  descripcion: string;
  nivel: 'basico' | 'intermedio' | 'avanzado';
  palabras: Palabra[];
}

export const lecciones: Leccion[] = [
  {
    id: 'l1',
    titulo: 'Saludos y Presentaciones',
    descripcion: 'Aprende a saludar y presentarte en Wanano',
    nivel: 'basico',
    palabras: [
      { id: 'p1', wanano: 'Wame', espanol: 'Hola / Buenos días', pronunciacion: 'wa-me', categoria: 'saludo', ejemplo: 'Wame, ñame?' },
      { id: 'p2', wanano: 'Ñame', espanol: '¿Cómo estás?', pronunciacion: 'ña-me', categoria: 'saludo', ejemplo: 'Ñame, yai?' },
      { id: 'p3', wanano: 'Yai', espanol: 'Bien / Estoy bien', pronunciacion: 'ya-i', categoria: 'respuesta' },
      { id: 'p4', wanano: 'Dohporo', espanol: 'Gracias', pronunciacion: 'doh-po-ro', categoria: 'cortesia' },
      { id: 'p5', wanano: 'Ñekaro', espanol: 'De nada', pronunciacion: 'ñe-ka-ro', categoria: 'cortesia' },
      { id: 'p6', wanano: 'Siro', espanol: 'Adiós / Hasta luego', pronunciacion: 'si-ro', categoria: 'saludo' },
    ]
  },
  {
    id: 'l2',
    titulo: 'La Naturaleza - Yurí Heko',
    descripcion: 'Palabras relacionadas con la selva, ríos y naturaleza del Vaupés',
    nivel: 'basico',
    palabras: [
      { id: 'p7', wanano: 'Mahsë', espanol: 'Río', pronunciacion: 'mah-shë', categoria: 'naturaleza', ejemplo: 'Vaupés mahsë' },
      { id: 'p8', wanano: 'Yurí', espanol: 'Selva / Monte', pronunciacion: 'yu-rí', categoria: 'naturaleza' },
      { id: 'p9', wanano: 'Turí', espanol: 'Árbol', pronunciacion: 'tu-rí', categoria: 'naturaleza' },
      { id: 'p10', wanano: 'Waikã', espanol: 'Pez', pronunciacion: 'wai-kã', categoria: 'naturaleza' },
      { id: 'p11', wanano: 'Duhpiro', espanol: 'Lluvia', pronunciacion: 'duh-pi-ro', categoria: 'naturaleza' },
      { id: 'p12', wanano: 'Wekó', espanol: 'Sol', pronunciacion: 'we-kó', categoria: 'naturaleza' },
      { id: 'p13', wanano: 'Surí', espanol: 'Luna', pronunciacion: 'su-rí', categoria: 'naturaleza' },
    ]
  },
  {
    id: 'l3',
    titulo: 'La Familia - Wirá Dohko',
    descripcion: 'Los vínculos familiares y términos de parentesco en la cultura Wanano',
    nivel: 'basico',
    palabras: [
      { id: 'p14', wanano: 'Iró', espanol: 'Padre', pronunciacion: 'i-ró', categoria: 'familia' },
      { id: 'p15', wanano: 'Wiró', espanol: 'Madre', pronunciacion: 'wi-ró', categoria: 'familia' },
      { id: 'p16', wanano: 'Mihkó', espanol: 'Hijo/a', pronunciacion: 'mih-kó', categoria: 'familia' },
      { id: 'p17', wanano: 'Wirákë', espanol: 'Hermano', pronunciacion: 'wi-rá-kë', categoria: 'familia' },
      { id: 'p18', wanano: 'Mahkë', espanol: 'Hermana', pronunciacion: 'mah-kë', categoria: 'familia' },
      { id: 'p19', wanano: 'Turúkë', espanol: 'Abuelo', pronunciacion: 'tu-rú-kë', categoria: 'familia' },
    ]
  },
  {
    id: 'l4',
    titulo: 'Alimentos Tradicionales - Mëhkó',
    descripcion: 'Los alimentos ancestrales y la cocina tradicional Wanano',
    nivel: 'intermedio',
    palabras: [
      { id: 'p20', wanano: 'Mëhkó', espanol: 'Comida / Alimento', pronunciacion: 'mëh-kó', categoria: 'alimento' },
      { id: 'p21', wanano: 'Yãi', espanol: 'Yuca / Casabe', pronunciacion: 'yã-i', categoria: 'alimento', ejemplo: 'Yãi biro - yuca brava' },
      { id: 'p22', wanano: 'Duhpiko', espanol: 'Mañoco', pronunciacion: 'duh-pi-ko', categoria: 'alimento' },
      { id: 'p23', wanano: 'Wirá', espanol: 'Chicha', pronunciacion: 'wi-rá', categoria: 'alimento' },
      { id: 'p24', wanano: 'Waikã mëhkó', espanol: 'Pescado', pronunciacion: 'wai-kã mëh-kó', categoria: 'alimento' },
    ]
  },
];
