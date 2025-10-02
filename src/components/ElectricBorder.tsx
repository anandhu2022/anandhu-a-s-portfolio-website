'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ElectricBorderProps {
  children: ReactNode;
  className?: string;
}

export default function ElectricBorder({ children, className = '' }: ElectricBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Electric border animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(45deg, 
            transparent 30%, 
            rgba(59, 130, 246, 0.5) 50%, 
            transparent 70%
          )`,
        }}
        animate={{
          background: [
            `linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.5) 50%, transparent 70%)`,
            `linear-gradient(135deg, transparent 30%, rgba(147, 51, 234, 0.5) 50%, transparent 70%)`,
            `linear-gradient(225deg, transparent 30%, rgba(16, 185, 129, 0.5) 50%, transparent 70%)`,
            `linear-gradient(315deg, transparent 30%, rgba(245, 158, 11, 0.5) 50%, transparent 70%)`,
            `linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.5) 50%, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Inner border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `
            inset 0 0 20px rgba(59, 130, 246, 0.3),
            inset 0 0 40px rgba(147, 51, 234, 0.2),
            0 0 20px rgba(59, 130, 246, 0.2)
          `,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 p-1 rounded-2xl">
        {children}
      </div>
    </div>
  );
}
