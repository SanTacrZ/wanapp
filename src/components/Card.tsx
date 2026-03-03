import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export default function Card({ children, className = '', onClick, hoverable = false }: Props) {
  return (
    <motion.div
      whileHover={hoverable ? { scale: 1.02, y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`bg-selva-800 border border-selva-600 rounded-xl p-6 shadow-lg ${hoverable ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
