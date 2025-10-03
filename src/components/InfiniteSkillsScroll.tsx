'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface MagnetSkillProps {
  skill: { name: string; icon: string };
  className?: string;
  variant?: 'blue' | 'green';
}

function MagnetSkill({ skill, className = '', variant = 'blue' }: MagnetSkillProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    const x = (clientX - (left + width / 2)) * 0.15;
    const y = (clientY - (top + height / 2)) * 0.15;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const gradientClass = variant === 'green' 
    ? 'bg-gradient-to-r from-green-500/20 to-teal-500/20' 
    : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20';

  return (
    <motion.div
      ref={ref}
      className={`flex-shrink-0 ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 ${gradientClass} backdrop-blur-sm rounded-full border border-white/10 text-white font-medium whitespace-nowrap hover:border-white/30 transition-colors cursor-pointer group`}>
        <span className="text-lg sm:text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
        <span className="text-xs sm:text-sm">{skill.name}</span>
      </div>
    </motion.div>
  );
}

const skills = [
  { name: 'Next.js', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'TailwindCSS', icon: '🎨' },
  { name: 'Express', icon: '🚂' },
  { name: 'Prisma', icon: '🔺' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Redux', icon: '🔄' },
  { name: 'NestJS', icon: '🏠' },
  { name: 'Material UI', icon: '🎭' },
  { name: 'Jest', icon: '🃏' },
  { name: 'Git', icon: '📚' },
  { name: 'Firebase', icon: '🔥' }
];

export default function InfiniteSkillsScroll() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      {/* First row - moving right */}
      <motion.div
        className="flex gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <MagnetSkill key={index} skill={skill} />
        ))}
      </motion.div>

      {/* Second row - moving left */}
      <motion.div
        className="flex gap-4 sm:gap-6 lg:gap-8"
        animate={{
          x: [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, index) => (
          <MagnetSkill 
            key={index} 
            skill={skill} 
            variant="green"
          />
        ))}
      </motion.div>
    </section>
  );
}
