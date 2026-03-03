import { Link, useLocation } from 'react-router-dom';
import { Leaf, BookOpen, History, Map, Flower2, Settings } from 'lucide-react';

const sideItems = [
  { path: '/', label: 'Inicio', icon: Leaf },
  { path: '/lengua', label: 'Lengua', icon: BookOpen },
  { path: '/historias', label: 'Historias', icon: History },
  { path: '/encarta', label: 'Encarta', icon: Map },
  { path: '/botanica', label: 'Botánica', icon: Flower2 },
  { path: '/admin', label: 'Admin', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-56 bg-selva-950 border-r border-selva-800 min-h-screen py-8 px-3">
      <nav aria-label="Navegación principal" className="flex flex-col gap-1">
        {sideItems.map(({ path, label, icon: Icon }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                active
                  ? 'bg-selva-700 text-sol-300'
                  : 'text-selva-400 hover:bg-selva-800 hover:text-selva-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
