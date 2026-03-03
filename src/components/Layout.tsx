import { ReactNode } from 'react';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-selva-950 text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t border-selva-800 mt-16 py-8 text-center text-selva-500 text-sm">
        <p>🌿 Wanapp — Preservando los saberes ancestrales del pueblo Wanano</p>
        <p className="mt-1">Vaupés, Colombia • Amazonia</p>
      </footer>
    </div>
  );
}
