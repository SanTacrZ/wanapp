import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lengua from './pages/Lengua';
import Historias from './pages/Historias';
import Encarta from './pages/Encarta';
import Botanica from './pages/Botanica';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lengua" element={<Lengua />} />
            <Route path="/historias" element={<Historias />} />
            <Route path="/encarta" element={<Encarta />} />
            <Route path="/botanica" element={<Botanica />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}
