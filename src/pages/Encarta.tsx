import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Globe, BookOpen, Palette, Mountain, Video, X, Search } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { entradasEncarta, EntradaEncarta } from '../data/encarta';

const categorias = [
  { id: 'todos', label: 'Todo', icon: Globe },
  { id: 'atlas', label: 'Atlas', icon: Map },
  { id: 'historia', label: 'Historia', icon: BookOpen },
  { id: 'arte', label: 'Arte', icon: Palette },
  { id: 'territorio', label: 'Territorio', icon: Mountain },
  { id: 'video', label: 'Video', icon: Video },
];

const categoriaStyles: Record<string, string> = {
  atlas: 'bg-rio-900 text-rio-300 border-rio-700',
  historia: 'bg-tierra-900 text-tierra-300 border-tierra-700',
  video: 'bg-flor-900 text-flor-300 border-flor-700',
  arte: 'bg-sol-900 text-sol-300 border-sol-700',
  territorio: 'bg-selva-800 text-selva-300 border-selva-600',
};

function EntradaModal({ entrada, onClose }: { entrada: EntradaEncarta; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-selva-900 border border-selva-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-selva-900 border-b border-selva-800 p-6 flex justify-between items-start">
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${categoriaStyles[entrada.categoria]} mb-2`}>
              {entrada.categoria}
            </span>
            <h2 className="text-xl font-bold text-selva-100">{entrada.titulo}</h2>
            <p className="text-selva-400 text-sm mt-1">{entrada.descripcion}</p>
          </div>
          <button onClick={onClose} className="text-selva-400 hover:text-selva-200 ml-4">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="text-selva-300 leading-relaxed whitespace-pre-line">
            {entrada.contenido}
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {entrada.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-selva-800 text-selva-400 text-xs rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Encarta() {
  const [categoria, setCategoria] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  const [selected, setSelected] = useState<EntradaEncarta | null>(null);

  const filtradas = entradasEncarta.filter((e) => {
    const matchCategoria = categoria === 'todos' || e.categoria === categoria;
    const matchBusqueda = busqueda === '' ||
      e.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      e.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      e.tags.some((t) => t.toLowerCase().includes(busqueda.toLowerCase()));
    return matchCategoria && matchBusqueda;
  });

  return (
    <PageTransition>
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-selva-700 rounded-2xl flex items-center justify-center">
            <Globe className="w-8 h-8 text-sol-300" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-selva-100">Encarta Cultural</h1>
            <p className="text-selva-400">Enciclopedia del mundo Wanano</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-selva-500" />
        <input
          type="text"
          placeholder="Buscar en la encarta..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full bg-selva-900 border border-selva-700 rounded-xl pl-12 pr-4 py-3 text-selva-200 placeholder:text-selva-600 focus:outline-none focus:border-selva-500 transition-colors"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categorias.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setCategoria(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              categoria === id
                ? 'bg-sol-600 text-selva-950'
                : 'bg-selva-800 text-selva-300 hover:bg-selva-700'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtradas.map((entrada) => (
          <motion.div
            key={entrada.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(entrada)}
            className="bg-selva-900 border border-selva-700 rounded-2xl p-6 cursor-pointer hover:border-selva-500 hover:shadow-xl transition-all duration-300"
          >
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${categoriaStyles[entrada.categoria]} mb-3`}>
              {entrada.categoria}
            </span>
            <h3 className="text-lg font-bold text-selva-100 mb-2">{entrada.titulo}</h3>
            <p className="text-selva-400 text-sm leading-relaxed">{entrada.descripcion}</p>
            <div className="flex flex-wrap gap-1 mt-4">
              {entrada.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-selva-800 text-selva-500 text-xs rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {filtradas.length === 0 && (
        <div className="text-center py-16 text-selva-500">
          <Globe className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p>No se encontraron entradas para tu búsqueda</p>
        </div>
      )}

      <AnimatePresence>
        {selected && <EntradaModal entrada={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </PageTransition>
  );
}
