import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, X, Search, Leaf, AlertTriangle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { plantas, categoriasBotanica, Planta } from '../data/botanica';

function PlantaModal({ planta, onClose }: { planta: Planta; onClose: () => void }) {
  const categoria = categoriasBotanica.find((c) => c.id === planta.categoria);
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
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{categoria?.icono}</span>
              <span className="px-3 py-1 bg-selva-800 text-selva-300 text-xs rounded-full border border-selva-700">
                {categoria?.nombre}
              </span>
            </div>
            <h2 className="text-xl font-bold text-selva-100">{planta.nombre}</h2>
            <p className="text-sol-400 font-medium">{planta.nombreWanano}</p>
            <p className="text-selva-500 text-sm italic">{planta.nombreCientifico}</p>
          </div>
          <button onClick={onClose} className="text-selva-400 hover:text-selva-200 ml-4">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-selva-400 uppercase tracking-wider mb-2">Descripción</h3>
            <p className="text-selva-300 leading-relaxed">{planta.descripcion}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-selva-400 uppercase tracking-wider mb-2">Usos tradicionales</h3>
            <ul className="space-y-1">
              {planta.usos.map((uso, i) => (
                <li key={i} className="flex items-center gap-2 text-selva-300 text-sm">
                  <Leaf className="w-3 h-3 text-selva-500 flex-shrink-0" />
                  {uso}
                </li>
              ))}
            </ul>
          </div>
          {planta.preparacion && (
            <div>
              <h3 className="text-sm font-semibold text-selva-400 uppercase tracking-wider mb-2">Preparación</h3>
              <p className="text-selva-300 text-sm leading-relaxed">{planta.preparacion}</p>
            </div>
          )}
          {planta.precauciones && (
            <div className="bg-tierra-950 border border-tierra-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-tierra-400" />
                <h3 className="text-sm font-semibold text-tierra-400">Precauciones</h3>
              </div>
              <p className="text-tierra-300 text-sm">{planta.precauciones}</p>
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold text-selva-400 uppercase tracking-wider mb-2">Hábitat</h3>
            <p className="text-selva-400 text-sm">{planta.habitat}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Botanica() {
  const [categoria, setCategoria] = useState('todas');
  const [busqueda, setBusqueda] = useState('');
  const [selected, setSelected] = useState<Planta | null>(null);

  const filtradas = plantas.filter((p) => {
    const matchCategoria = categoria === 'todas' || p.categoria === categoria;
    const matchBusqueda = busqueda === '' ||
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.nombreWanano.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  return (
    <PageTransition>
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-sol-900 rounded-2xl flex items-center justify-center">
            <Flower2 className="w-8 h-8 text-sol-300" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-selva-100">Botánica Ancestral</h1>
            <p className="text-sol-600">Plantas de la selva del Vaupés</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-selva-500" />
        <input
          type="text"
          placeholder="Buscar planta..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full bg-selva-900 border border-selva-700 rounded-xl pl-12 pr-4 py-3 text-selva-200 placeholder:text-selva-600 focus:outline-none focus:border-selva-500 transition-colors"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setCategoria('todas')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            categoria === 'todas' ? 'bg-sol-600 text-selva-950' : 'bg-selva-800 text-selva-300 hover:bg-selva-700'
          }`}
        >
          🌱 Todas
        </button>
        {categoriasBotanica.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoria(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              categoria === cat.id ? 'bg-sol-600 text-selva-950' : 'bg-selva-800 text-selva-300 hover:bg-selva-700'
            }`}
          >
            {cat.icono} {cat.nombre}
          </button>
        ))}
      </div>

      {/* Plants grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtradas.map((planta) => {
          const cat = categoriasBotanica.find((c) => c.id === planta.categoria);
          return (
            <motion.div
              key={planta.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(planta)}
              className="bg-selva-900 border border-selva-700 rounded-2xl p-6 cursor-pointer hover:border-selva-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{cat?.icono}</span>
                <span className="px-2 py-0.5 bg-selva-800 text-selva-400 text-xs rounded border border-selva-700">
                  {cat?.nombre}
                </span>
              </div>
              <h3 className="text-lg font-bold text-selva-100">{planta.nombre}</h3>
              <p className="text-sol-400 font-medium text-sm">{planta.nombreWanano}</p>
              <p className="text-selva-500 text-xs italic mb-3">{planta.nombreCientifico}</p>
              <p className="text-selva-400 text-sm leading-relaxed line-clamp-3">{planta.descripcion}</p>
              <div className="flex flex-wrap gap-1 mt-4">
                {planta.usos.slice(0, 2).map((uso, i) => (
                  <span key={i} className="px-2 py-0.5 bg-selva-800 text-selva-500 text-xs rounded">
                    {uso}
                  </span>
                ))}
                {planta.usos.length > 2 && (
                  <span className="px-2 py-0.5 bg-selva-800 text-selva-500 text-xs rounded">
                    +{planta.usos.length - 2} más
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {filtradas.length === 0 && (
        <div className="text-center py-16 text-selva-500">
          <Flower2 className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p>No se encontraron plantas</p>
        </div>
      )}

      <AnimatePresence>
        {selected && <PlantaModal planta={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </PageTransition>
  );
}
