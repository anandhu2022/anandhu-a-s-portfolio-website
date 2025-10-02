'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

interface MagnetButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  magnetStrength?: number;
}

export default function MagnetButton({ 
  children, 
  className = '', 
  href, 
  onClick, 
  magnetStrength = 0.3 
}: MagnetButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    const x = (clientX - (left + width / 2)) * magnetStrength;
    const y = (clientY - (top + height / 2)) * magnetStrength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`block ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
