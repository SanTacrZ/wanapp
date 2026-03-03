import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, History, Map, Flower2, ChevronRight, Leaf } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const modules = [
  {
    path: '/lengua',
    title: 'Lengua Wanano',
    subtitle: 'Aprende el idioma ancestral',
    description: 'Lecciones, vocabulario y frases en Wanano. Escucha la pronunciación y practica con ejercicios interactivos.',
    icon: BookOpen,
    gradient: 'from-rio-700 to-rio-500',
    iconBg: 'bg-rio-800',
  },
  {
    path: '/historias',
    title: 'Historias Ancestrales',
    subtitle: 'Ley de origen y mitos',
    description: 'Las historias que definen al pueblo Wanano: su origen, sus rituales sagrados y los mitos que explican el universo.',
    icon: History,
    gradient: 'from-tierra-700 to-tierra-500',
    iconBg: 'bg-tierra-800',
  },
  {
    path: '/encarta',
    title: 'Encarta Cultural',
    subtitle: 'Atlas • Historia • Arte',
    description: 'Una enciclopedia del mundo Wanano: geografía, historia, arte, territorio y más. El saber organizado.',
    icon: Map,
    gradient: 'from-selva-700 to-selva-500',
    iconBg: 'bg-selva-800',
  },
  {
    path: '/botanica',
    title: 'Botánica Ancestral',
    subtitle: 'Plantas de la selva del Vaupés',
    description: 'El conocimiento botánico tradicional: plantas medicinales, alimenticias, rituales y de construcción.',
    icon: Flower2,
    gradient: 'from-sol-700 to-sol-500',
    iconBg: 'bg-sol-800',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-16 mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-selva-900 via-selva-800 to-rio-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 text-8xl">🌿</div>
          <div className="absolute top-10 right-20 text-6xl">🦜</div>
          <div className="absolute bottom-8 left-1/4 text-7xl">🌺</div>
          <div className="absolute bottom-4 right-10 text-5xl">🐆</div>
        </div>
        <div className="relative text-center px-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="w-24 h-24 bg-gradient-to-br from-sol-400 to-sol-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <Leaf className="w-12 h-12 text-selva-950" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-sol-300 mb-4"
          >
            Wanapp
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-selva-200 mb-2"
          >
            Saberes Ancestrales del Pueblo Wanano
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-selva-400 text-sm max-w-2xl mx-auto"
          >
            Preservando la lengua, las historias y el conocimiento ancestral del pueblo Wanano del Vaupés, Amazonia colombiana
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Link
              to="/lengua"
              className="px-8 py-3 bg-sol-500 hover:bg-sol-400 text-selva-950 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-sol-500/30 hover:scale-105"
            >
              Comenzar a aprender
            </Link>
            <Link
              to="/historias"
              className="px-8 py-3 border border-selva-500 hover:border-sol-400 text-selva-200 hover:text-sol-300 font-medium rounded-full transition-all duration-300"
            >
              Ver historias
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-selva-200 mb-8"
        >
          🗂️ Módulos de Conocimiento
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <motion.div key={mod.path} variants={itemVariants}>
                <Link to={mod.path} className="block group">
                  <div className="bg-selva-900 border border-selva-700 rounded-2xl p-6 hover:border-selva-500 transition-all duration-300 hover:shadow-xl hover:shadow-selva-900/50 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 ${mod.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-sol-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-selva-100 group-hover:text-sol-300 transition-colors">
                            {mod.title}
                          </h3>
                          <ChevronRight className="w-5 h-5 text-selva-500 group-hover:text-sol-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-sol-500 text-sm font-medium mt-0.5">{mod.subtitle}</p>
                        <p className="text-selva-400 text-sm mt-2 leading-relaxed">{mod.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Cultural quote */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 bg-gradient-to-r from-tierra-900 to-selva-900 rounded-2xl p-8 border border-tierra-700 text-center"
      >
        <p className="text-2xl text-sol-300 font-medium italic mb-3">
          "Wame, ñame?"
        </p>
        <p className="text-selva-300 text-lg mb-1">Hola, ¿cómo estás?</p>
        <p className="text-selva-500 text-sm">— Saludo tradicional Wanano</p>
      </motion.section>
    </PageTransition>
  );
}
