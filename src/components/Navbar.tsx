import { Link, useLocation } from 'react-router-dom';
import { Leaf, BookOpen, History, Map, Flower2, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Inicio', icon: Leaf },
  { path: '/lengua', label: 'Lengua', icon: BookOpen },
  { path: '/historias', label: 'Historias', icon: History },
  { path: '/encarta', label: 'Encarta', icon: Map },
  { path: '/botanica', label: 'Botánica', icon: Flower2 },
  { path: '/admin', label: 'Admin', icon: Settings },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-selva-950 border-b border-selva-700 sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-sol-400 to-sol-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Leaf className="w-5 h-5 text-selva-950" />
            </div>
            <div>
              <span className="text-sol-300 font-bold text-lg leading-none">Wanapp</span>
              <p className="text-selva-400 text-xs">Saberes Ancestrales</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, label, icon: Icon }) => {
              const active = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-selva-700 text-sol-300'
                      : 'text-selva-300 hover:bg-selva-800 hover:text-sol-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-selva-300 hover:text-sol-300 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 flex flex-col gap-1">
                {navItems.map(({ path, label, icon: Icon }) => {
                  const active = location.pathname === path;
                  return (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        active ? 'bg-selva-700 text-sol-300' : 'text-selva-300 hover:bg-selva-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
