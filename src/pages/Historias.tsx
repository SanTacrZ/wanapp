import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Scroll } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { historias, Historia } from '../data/historias';

const tipoInfo = {
  ley_origen: { label: 'Ley de Origen', color: 'bg-sol-900 text-sol-300 border-sol-700', dot: 'bg-sol-400' },
  mito: { label: 'Mito', color: 'bg-flor-900 text-flor-300 border-flor-700', dot: 'bg-flor-400' },
  cuento: { label: 'Cuento', color: 'bg-rio-900 text-rio-300 border-rio-700', dot: 'bg-rio-400' },
  ritual: { label: 'Ritual', color: 'bg-tierra-900 text-tierra-300 border-tierra-700', dot: 'bg-tierra-400' },
};

function HistoriaModal({ historia, onClose }: { historia: Historia; onClose: () => void }) {
  const tipo = tipoInfo[historia.tipo];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-selva-900 border border-selva-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
      >
        <div className="sticky top-0 bg-selva-900 border-b border-selva-800 p-6 flex items-start justify-between">
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${tipo.color} mb-2`}>
              {tipo.label}
            </span>
            <h2 className="text-xl font-bold text-selva-100">{historia.titulo}</h2>
            {historia.subtitulo && <p className="text-selva-400 text-sm mt-1">{historia.subtitulo}</p>}
          </div>
          <button
            onClick={onClose}
            className="text-selva-400 hover:text-selva-200 ml-4 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          {historia.region && (
            <div className="flex items-center gap-2 text-selva-400 text-sm mb-4">
              <MapPin className="w-4 h-4" />
              {historia.region}
            </div>
          )}
          <div className="text-selva-300 leading-relaxed whitespace-pre-line">
            {historia.contenido}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Historias() {
  const [selected, setSelected] = useState<Historia | null>(null);
  const [filtroTipo, setFiltroTipo] = useState<string>('todos');

  const filtradas = filtroTipo === 'todos'
    ? historias
    : historias.filter((h) => h.tipo === filtroTipo);

  return (
    <PageTransition>
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-tierra-800 rounded-2xl flex items-center justify-center">
            <Scroll className="w-8 h-8 text-sol-300" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-selva-100">Historias Ancestrales</h1>
            <p className="text-tierra-400">Mitos, leyendas y ley de origen del pueblo Wanano</p>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['todos', 'ley_origen', 'mito', 'cuento', 'ritual'].map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFiltroTipo(tipo)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filtroTipo === tipo
                ? 'bg-sol-600 text-selva-950'
                : 'bg-selva-800 text-selva-300 hover:bg-selva-700'
            }`}
          >
            {tipo === 'todos' ? 'Todas' : tipoInfo[tipo as keyof typeof tipoInfo]?.label || tipo}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtradas.map((historia) => {
          const tipo = tipoInfo[historia.tipo];
          return (
            <motion.div
              key={historia.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(historia)}
              className="bg-selva-900 border border-selva-700 rounded-2xl p-6 cursor-pointer hover:border-selva-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full ${tipo.dot}`} />
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${tipo.color}`}>
                  {tipo.label}
                </span>
              </div>
              <h3 className="text-lg font-bold text-selva-100 mb-1">{historia.titulo}</h3>
              {historia.subtitulo && (
                <p className="text-selva-400 text-sm mb-3">{historia.subtitulo}</p>
              )}
              <p className="text-selva-400 text-sm leading-relaxed line-clamp-3">
                {historia.contenido.slice(0, 150)}...
              </p>
              {historia.region && (
                <div className="flex items-center gap-1 mt-4 text-selva-500 text-xs">
                  <MapPin className="w-3 h-3" />
                  {historia.region}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <HistoriaModal historia={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
