export interface EntradaEncarta {
  id: string;
  titulo: string;
  descripcion: string;
  contenido: string;
  categoria: 'atlas' | 'historia' | 'video' | 'arte' | 'territorio';
  imagen?: string;
  videoUrl?: string;
  tags: string[];
}

export const entradasEncarta: EntradaEncarta[] = [
  {
    id: 'e1',
    titulo: 'El Río Vaupés',
    categoria: 'atlas',
    descripcion: 'El gran río de la vida Wanano',
    tags: ['río', 'geografía', 'territorio'],
    contenido: `El río Vaupés (en portugués, Uaupés) es uno de los afluentes más importantes del río Negro, en la cuenca amazónica. Nace en Colombia y desemboca en Brasil.

Para el pueblo Wanano, el río Vaupés no es simplemente un accidente geográfico: es el eje central de su cosmología, el camino por el que viajaron los ancestros míticos y la fuente de vida que sustenta toda la comunidad.

**Características geográficas:**
- Longitud: aproximadamente 1,400 km
- Cuenca: 66,000 km²
- Afluentes principales: ríos Querari, Papurí, Uarí
- Raudales sagrados: Yuruparí, Araracuara y otros

**Importancia cultural:**
Los Wanano se autodenominan "gente del río" y su historia, mitología y subsistencia están íntimamente ligadas al Vaupés. Los raudales (cachiveras) son considerados lugares sagrados donde habitan los espíritus.`
  },
  {
    id: 'e2',
    titulo: 'Departamento del Vaupés',
    categoria: 'atlas',
    descripcion: 'El corazón de la Amazonia colombiana',
    tags: ['geografía', 'Colombia', 'Amazonia'],
    contenido: `El Vaupés es un departamento de Colombia ubicado en la región amazónica, uno de los menos habitados y más biodiversos del país.

**Datos generales:**
- Capital: Mitú
- Área: 54,135 km²
- Población: aproximadamente 50,000 habitantes
- Grupos étnicos: más de 27 pueblos indígenas

**Biodiversidad:**
El Vaupés alberga una extraordinaria riqueza biológica:
- Más de 3,000 especies de plantas
- Cientos de especies de aves
- Mamíferos amazónicos (danta, jaguar, manatí)
- Peces únicos del sistema del río Negro

**Pueblos indígenas:**
Entre los pueblos que habitan el Vaupés están los Wanano, Tukano, Desano, Pira-Tapuya, Carapana, y muchos más, cada uno con su propio idioma y tradiciones.`
  },
  {
    id: 'e3',
    titulo: 'Historia del Pueblo Wanano',
    categoria: 'historia',
    descripcion: 'Desde los tiempos ancestrales hasta hoy',
    tags: ['historia', 'Wanano', 'pueblo indígena'],
    contenido: `Los Wanano, también conocidos como Guanano o Uanano, son un pueblo indígena de la familia lingüística Tukano Oriental. Habitan principalmente en el río Vaupés, en zonas de Colombia y Brasil.

**Origen mítico:**
Según su tradición oral, los Wanano emergieron del río en canoas de culebra, conducidos por sus ancestros míticos desde el Este, el lugar donde el sol nace sobre las aguas.

**Organización social:**
Los Wanano se organizan en clanes patrilineales, cada uno asociado a un ancestro fundador específico. Los principales clanes son:
- Clan del guacamayo (Yibá)
- Clan del tucán (Suriá) 
- Clan del jaguar (Yaiá)

**Época colonial:**
El contacto con los europeos llegó principalmente a través de misioneros en el siglo XVII-XVIII, trayendo enfermedades y cambios profundos. Sin embargo, los Wanano lograron preservar gran parte de su cultura.

**Siglos XX-XXI:**
Con el establecimiento de internados misioneros, muchos Wanano fueron alejados de su territorio. Hoy, los líderes trabajan activamente en la revitalización cultural y lingüística.`
  },
  {
    id: 'e4',
    titulo: 'Arte y Artesanía Wanano',
    categoria: 'arte',
    descripcion: 'Expresiones artísticas del pueblo Wanano',
    tags: ['arte', 'artesanía', 'cultura material'],
    contenido: `El arte Wanano es una expresión profunda de su cosmovisión y conexión con la naturaleza. Cada objeto creado lleva consigo significados espirituales y conocimientos ancestrales.

**Cestería:**
La cestería es una de las artes más desarrolladas. Con fibras de palma, los Wanano crean canastos, sebucanes (para exprimir la yuca) y otros utensilios con patrones geométricos que representan elementos cosmológicos.

**Plumería:**
Los tocados de plumas son reservados para ceremonias especiales. Las plumas de tucán, guacamayo y otras aves tienen significados específicos y son consideradas conexiones con los espíritus.

**Pintura corporal:**
Usando carayurú (rojo) y otras plantas, los Wanano pintan sus cuerpos con diseños que identifican el clan, el ritual o la protección espiritual requerida.

**Instrumentos musicales:**
- Yuruparí: flautas sagradas de madera
- Maracas: para acompañar cantos
- Tambores rituales de cuero

**Orfebrería:**
Aunque menos común hoy, los Wanano trabajaban el oro y otros metales para ornamentos ceremoniales.`
  },
  {
    id: 'e5',
    titulo: 'El Territorio Sagrado',
    categoria: 'territorio',
    descripcion: 'La relación espiritual con la tierra y el agua',
    tags: ['territorio', 'espiritualidad', 'medio ambiente'],
    contenido: `Para los Wanano, el territorio no es simplemente tierra y agua: es un ser vivo lleno de significado espiritual, histórico y cultural.

**Lugares sagrados:**
Raudales o cachiveras: Son los lugares donde el velo entre el mundo visible e invisible se adelgaza. Los raudales son puertas al mundo espiritual.

Serranías: Las serranías del Vaupés son moradas de los dueños espirituales del territorio.

Lagos y lagunas: Habitados por seres del mundo espiritual, requieren permisos rituales para ser aprovechados.

**La chagra:**
La chagra (jardín tradicional) es el espacio donde la mujer ejerce su conocimiento ancestral. Es un sistema agroforestal sofisticado que mantiene la diversidad de cultivos tradicionales.

**Ley del territorio:**
La ley de origen establece normas precisas para el aprovechamiento del territorio:
- Periodos de veda para la pesca
- Espacios prohibidos para la cacería
- Rotación de la chagra
- Cuidado de los árboles frutales silvestres`
  },
];
