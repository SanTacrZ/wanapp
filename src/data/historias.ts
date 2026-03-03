export interface Historia {
  id: string;
  titulo: string;
  subtitulo?: string;
  contenido: string;
  tipo: 'ley_origen' | 'mito' | 'cuento' | 'ritual';
  imagen?: string;
  region?: string;
}

export const historias: Historia[] = [
  {
    id: 'h1',
    titulo: 'La Ley de Origen - Pamiri Mahsë',
    subtitulo: 'El origen del pueblo Wanano',
    tipo: 'ley_origen',
    region: 'Vaupés, Colombia',
    contenido: `En el principio de los tiempos, cuando el mundo aún estaba siendo creado, los primeros ancestros Wanano emergieron de las aguas sagradas del río Vaupés. 

El Creador, Pamiri Mahsë, moldeó a los primeros seres de barro de la tierra rojiza de las riberas. Les infundió vida con su aliento sagrado y les dio el don del lenguaje para que pudieran comunicarse con la naturaleza y entre ellos.

Los primeros Wanano recibieron cuatro dones fundamentales:
• La palabra sagrada - para honrar a los ancestros
• El conocimiento de las plantas - para curar y alimentarse  
• La danza y el canto - para celebrar la vida
• La ley del territorio - para vivir en armonía con la selva

Desde entonces, el pueblo Wanano ha sido guardián del río Vaupés, protector de sus aguas y sus peces, conocedor de cada árbol de la selva y guardián de los saberes ancestrales transmitidos de generación en generación.`
  },
  {
    id: 'h2',
    titulo: 'Yuruparí - El Espíritu de la Selva',
    subtitulo: 'El ritual sagrado de los hombres',
    tipo: 'ritual',
    region: 'Alto Río Negro, Vaupés',
    contenido: `Yuruparí es el ser espiritual más poderoso del universo Wanano. Es el guardián de los conocimientos sagrados que solo pueden ser transmitidos a los hombres iniciados.

La ceremonia de Yuruparí marca el paso de los jóvenes a la adultez. Durante la iniciación, los ancestros revelan los secretos del cosmos, las leyes que rigen la vida en la selva y los compromisos sagrados con la comunidad.

Los instrumentos de Yuruparí son fabricados con maderas especiales de la selva y están prohibidos para las mujeres y los no iniciados. Su sonido es la voz de los ancestros que hablan desde el más allá.

Esta tradición ha sido transmitida sin interrupciones por más de dos mil años, representando uno de los patrimonios inmateriales más importantes de la Amazonia colombiana.`
  },
  {
    id: 'h3',
    titulo: 'El Pirú - La Casa Grande',
    subtitulo: 'La maloca como centro del universo',
    tipo: 'mito',
    region: 'Vaupés',
    contenido: `La maloca, llamada "Pirú" en Wanano, no es simplemente una casa. Es el centro del universo, el lugar donde los mundos se encuentran y donde los vivos y los ancestros conviven.

Su estructura circular representa el cosmos: el techo es el cielo estrellado, el suelo es la tierra fértil, y los pilares centrales son los árboles sagrados que conectan los tres mundos: el cielo, la tierra y el inframundo.

En el Pirú se celebran todas las ceremonias importantes: los nacimientos son bienvenidos aquí, los jóvenes son iniciados entre estas paredes, los ancianos transmiten sus saberes en sus espacios sagrados, y los muertos son despedidos en rituales que duran varios días.

Cada elemento de la maloca tiene un significado: los colores de las pinturas representan el mundo espiritual, los ornamentos de plumas conectan con los espíritus de los animales, y los cantos rituales mantienen el equilibrio cósmico.`
  },
  {
    id: 'h4',
    titulo: 'El Pescador y el Delfín Rosado',
    subtitulo: 'Mito del boto - guardián del río',
    tipo: 'cuento',
    region: 'Río Vaupés',
    contenido: `Cuentan los abuelos que en las aguas profundas del Vaupés vive el boto, el delfín rosado, que es el dueño y señor del río. Los Wanano lo llaman "Mahsë Wirá" - el espíritu del agua.

Un joven pescador llamado Wirako, conocido por su destreza con las flechas, se adentró un día en las aguas prohibidas del raudal sagrado. Allí encontró peces enormes que nadie había visto antes.

Pero al tirar la primera flecha, el boto rosado emergió de las profundidades y le habló: "Joven, estas aguas son sagradas. Los peces que ves son los guardianes del río. Si los pescas, el río perderá su alma y sus aguas se volverán amargas."

Wirako, asustado pero curioso, preguntó: "¿Cómo sé qué peces puedo pescar?" El boto respondió: "Pesca solo lo que necesitas. Devuelve al río los más pequeños. Ofrece siempre las primeras capturas al agua. Así el río será generoso contigo y con tus hijos."

Desde ese día, los Wanano respetan la ley del boto y el río siempre les brinda alimento abundante.`
  },
];
