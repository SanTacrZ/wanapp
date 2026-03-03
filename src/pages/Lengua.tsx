import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, Volume2, Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { lecciones, Leccion } from '../data/lengua';

const nivelColors = {
  basico: 'bg-selva-700 text-selva-100',
  intermedio: 'bg-sol-800 text-sol-100',
  avanzado: 'bg-flor-800 text-flor-100',
};

const nivelLabels = {
  basico: 'Básico',
  intermedio: 'Intermedio',
  avanzado: 'Avanzado',
};

function LeccionCard({ leccion }: { leccion: Leccion }) {
  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <motion.div
      layout
      className="bg-selva-900 border border-selva-700 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-selva-800 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-selva-800 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-sol-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-selva-100">{leccion.titulo}</h3>
            <p className="text-selva-400 text-sm">{leccion.descripcion}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ml-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${nivelColors[leccion.nivel]}`}>
            {nivelLabels[leccion.nivel]}
          </span>
          <span className="text-selva-400 text-sm">{leccion.palabras.length} palabras</span>
          {open ? (
            <ChevronUp className="w-5 h-5 text-selva-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-selva-400" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-selva-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {leccion.palabras.map((palabra) => (
                  <motion.div
                    key={palabra.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setFlipped(flipped === palabra.id ? null : palabra.id)}
                    className="cursor-pointer"
                  >
                    <div className={`rounded-xl p-4 border transition-all duration-300 ${
                      flipped === palabra.id
                        ? 'bg-sol-900 border-sol-600'
                        : 'bg-selva-800 border-selva-700 hover:border-selva-500'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sol-300 font-bold text-lg">{palabra.wanano}</p>
                          <p className="text-selva-400 text-xs mt-0.5">{palabra.pronunciacion}</p>
                        </div>
                        <Volume2 className="w-4 h-4 text-selva-500 flex-shrink-0 mt-1" />
                      </div>
                      <AnimatePresence>
                        {flipped === palabra.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="mt-3 pt-3 border-t border-sol-800"
                          >
                            <p className="text-selva-200 font-medium">{palabra.espanol}</p>
                            {palabra.ejemplo && (
                              <p className="text-selva-400 text-sm mt-1 italic">"{palabra.ejemplo}"</p>
                            )}
                            <span className="inline-block mt-2 px-2 py-0.5 bg-selva-700 text-selva-300 text-xs rounded">
                              {palabra.categoria}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Lengua() {
  return (
    <PageTransition>
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-rio-800 rounded-2xl flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-sol-300" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-selva-100">Lengua Wanano</h1>
            <p className="text-rio-400">Aprende el idioma ancestral del pueblo Wanano</p>
          </div>
        </div>
        <div className="bg-rio-950 border border-rio-800 rounded-xl p-4 mt-4">
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-sol-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-selva-200 font-medium">¿Cómo aprender?</p>
              <p className="text-selva-400 text-sm mt-1">
                Haz clic en cada tarjeta de palabra para ver su traducción al español. 
                Las tarjetas muestran la palabra en Wanano, su pronunciación y un ejemplo de uso.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lecciones */}
      <div className="flex flex-col gap-4">
        {lecciones.map((leccion) => (
          <LeccionCard key={leccion.id} leccion={leccion} />
        ))}
      </div>
    </PageTransition>
  );
}
