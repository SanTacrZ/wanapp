import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Plus, BookOpen, History, Map, Flower2, Check, Lock } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const ADMIN_PASSWORD = 'wanano2024';

const modules = [
  { id: 'lengua', label: 'Lengua Wanano', icon: BookOpen, count: 4, items: 'lecciones' },
  { id: 'historias', label: 'Historias Ancestrales', icon: History, count: 4, items: 'historias' },
  { id: 'encarta', label: 'Encarta Cultural', icon: Map, count: 5, items: 'entradas' },
  { id: 'botanica', label: 'Botánica Ancestral', icon: Flower2, count: 8, items: 'plantas' },
];

type FormData = Record<string, string>;

const formFields: Record<string, Array<{name: string; label: string; type: string; required?: boolean}>> = {
  lengua: [
    { name: 'wanano', label: 'Palabra en Wanano', type: 'text', required: true },
    { name: 'espanol', label: 'Traducción al Español', type: 'text', required: true },
    { name: 'pronunciacion', label: 'Pronunciación', type: 'text', required: true },
    { name: 'categoria', label: 'Categoría', type: 'text' },
    { name: 'ejemplo', label: 'Ejemplo de uso', type: 'text' },
    { name: 'leccion', label: 'Lección', type: 'text' },
  ],
  historias: [
    { name: 'titulo', label: 'Título', type: 'text', required: true },
    { name: 'subtitulo', label: 'Subtítulo', type: 'text' },
    { name: 'tipo', label: 'Tipo (ley_origen/mito/cuento/ritual)', type: 'text', required: true },
    { name: 'region', label: 'Región', type: 'text' },
    { name: 'contenido', label: 'Contenido de la historia', type: 'textarea', required: true },
  ],
  encarta: [
    { name: 'titulo', label: 'Título', type: 'text', required: true },
    { name: 'descripcion', label: 'Descripción corta', type: 'text', required: true },
    { name: 'categoria', label: 'Categoría (atlas/historia/arte/territorio)', type: 'text', required: true },
    { name: 'tags', label: 'Etiquetas (separadas por coma)', type: 'text' },
    { name: 'contenido', label: 'Contenido completo', type: 'textarea', required: true },
  ],
  botanica: [
    { name: 'nombre', label: 'Nombre común', type: 'text', required: true },
    { name: 'nombreWanano', label: 'Nombre en Wanano', type: 'text', required: true },
    { name: 'nombreCientifico', label: 'Nombre científico', type: 'text' },
    { name: 'categoria', label: 'Categoría (medicinales/alimenticias/rituales/construccion/tinturas)', type: 'text', required: true },
    { name: 'descripcion', label: 'Descripción', type: 'textarea', required: true },
    { name: 'usos', label: 'Usos (separados por coma)', type: 'text', required: true },
    { name: 'preparacion', label: 'Preparación', type: 'textarea' },
    { name: 'precauciones', label: 'Precauciones', type: 'textarea' },
    { name: 'habitat', label: 'Hábitat', type: 'text' },
  ],
};

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeModule, setActiveModule] = useState('lengua');
  const [formData, setFormData] = useState<FormData>({});
  const [saved, setSaved] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nuevo contenido:', { modulo: activeModule, datos: formData });
    setSaved(true);
    setFormData({});
    setTimeout(() => setSaved(false), 3000);
  };

  if (!authenticated) {
    return (
      <PageTransition>
        <div className="min-h-[60vh] flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-selva-900 border border-selva-700 rounded-2xl p-8 w-full max-w-md"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-selva-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-sol-400" />
              </div>
              <h1 className="text-2xl font-bold text-selva-100">Panel Administrativo</h1>
              <p className="text-selva-400 text-sm mt-2">Acceso restringido a administradores</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-selva-300 text-sm font-medium mb-2">Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa la contraseña"
                  className="w-full bg-selva-800 border border-selva-600 rounded-xl px-4 py-3 text-selva-200 placeholder:text-selva-600 focus:outline-none focus:border-sol-500 transition-colors"
                />
                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-sol-600 hover:bg-sol-500 text-selva-950 font-bold rounded-xl transition-colors"
              >
                Ingresar
              </button>
            </form>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  const fields = formFields[activeModule] || [];

  return (
    <PageTransition>
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-selva-700 rounded-2xl flex items-center justify-center">
            <Settings className="w-8 h-8 text-sol-300" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-selva-100">Panel Administrativo</h1>
            <p className="text-selva-400">Gestiona y actualiza el contenido de Wanapp</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {modules.map((mod) => {
          const Icon = mod.icon;
          return (
            <div key={mod.id} className="bg-selva-900 border border-selva-700 rounded-xl p-4">
              <Icon className="w-6 h-6 text-sol-400 mb-2" />
              <p className="text-2xl font-bold text-selva-100">{mod.count}</p>
              <p className="text-selva-400 text-sm">{mod.items}</p>
              <p className="text-selva-500 text-xs mt-0.5">{mod.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Module selector */}
        <div className="bg-selva-900 border border-selva-700 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-selva-100 mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-sol-400" />
            Agregar Contenido
          </h2>
          <div className="space-y-2">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <button
                  key={mod.id}
                  onClick={() => { setActiveModule(mod.id); setFormData({}); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeModule === mod.id
                      ? 'bg-sol-800 text-sol-200 border border-sol-700'
                      : 'bg-selva-800 text-selva-300 hover:bg-selva-700 border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {mod.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-selva-900 border border-selva-700 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-selva-100 mb-6">
            Nuevo contenido: {modules.find((m) => m.id === activeModule)?.label}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-selva-300 text-sm font-medium mb-1">
                  {field.label}
                  {field.required && <span className="text-red-400 ml-1">*</span>}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    rows={4}
                    className="w-full bg-selva-800 border border-selva-600 rounded-xl px-4 py-3 text-selva-200 placeholder:text-selva-600 focus:outline-none focus:border-sol-500 transition-colors resize-none"
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    className="w-full bg-selva-800 border border-selva-600 rounded-xl px-4 py-3 text-selva-200 placeholder:text-selva-600 focus:outline-none focus:border-sol-500 transition-colors"
                    required={field.required}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-3 bg-sol-600 hover:bg-sol-500 text-selva-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {saved ? (
                <>
                  <Check className="w-5 h-5" />
                  ¡Guardado exitosamente!
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" />
                  Guardar contenido
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
