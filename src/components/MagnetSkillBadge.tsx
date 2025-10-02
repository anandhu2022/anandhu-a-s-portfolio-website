'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

interface MagnetSkillBadgeProps {
  children: ReactNode;
  className?: string;
  magnetStrength?: number;
}

export default function MagnetSkillBadge({ 
  children, 
  className = '', 
  magnetStrength = 0.2 
}: MagnetSkillBadgeProps) {
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

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`inline-block ${className}`}>
        {children}
      </span>
    </motion.div>
  );
}
