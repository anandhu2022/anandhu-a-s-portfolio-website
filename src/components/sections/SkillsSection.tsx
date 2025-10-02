'use client';

import { motion } from 'framer-motion';
import MagnetSkillBadge from '@/components/MagnetSkillBadge';

// ✅ Grouped Skills with Icons and Colors
const skillCategories = [
    {
        title: 'Frontend Development',
        icon: '🎨',
        color: 'from-blue-500 to-cyan-500',
        borderColor: 'border-blue-500/30',
        hoverColor: 'hover:border-blue-400/60',
        skills: [
            { name: 'Next.js', icon: '⚡', level: 'Expert' },
            { name: 'React', icon: '⚛️', level: 'Expert' },
            { name: 'TypeScript', icon: '🔷', level: 'Advanced' },
            { name: 'React Native', icon: '📱', level: 'Intermediate' },
            { name: 'Redux', icon: '🔄', level: 'Advanced' },
            { name: 'TailwindCSS', icon: '🎨', level: 'Expert' },
            { name: 'Material UI', icon: '🎭', level: 'Advanced' },
        ]
    },
    {
        title: 'Backend Development',
        icon: '⚙️',
        color: 'from-green-500 to-emerald-500',
        borderColor: 'border-green-500/30',
        hoverColor: 'hover:border-green-400/60',
        skills: [
            { name: 'Node.js', icon: '🟢', level: 'Expert' },
            { name: 'Express', icon: '🚂', level: 'Expert' },
            { name: 'NestJS', icon: '🏠', level: 'Advanced' },
            { name: 'PHP', icon: '🐘', level: 'Intermediate' },
            { name: 'REST APIs', icon: '🔌', level: 'Expert' },
            { name: 'JWT/OAuth', icon: '🔐', level: 'Advanced' },
            { name: 'Strapi', icon: '📊', level: 'Intermediate' },
            { name: 'Appwrite', icon: '📦', level: 'Intermediate' },
        ]
    },
    {
        title: 'Database & Storage',
        icon: '🗄️',
        color: 'from-purple-500 to-pink-500',
        borderColor: 'border-purple-500/30',
        hoverColor: 'hover:border-purple-400/60',
        skills: [
            { name: 'PostgreSQL', icon: '🐘', level: 'Advanced' },
            { name: 'MongoDB', icon: '🍃', level: 'Advanced' },
            { name: 'MySQL', icon: '🗃️', level: 'Intermediate' },
            { name: 'Prisma', icon: '🔺', level: 'Advanced' },
            { name: 'Redis', icon: '🔴', level: 'Intermediate' },
            { name: 'Neon Console', icon: '⚡', level: 'Beginner' },
        ]
    },
    {
        title: 'DevOps & Tools',
        icon: '🚀',
        color: 'from-orange-500 to-red-500',
        borderColor: 'border-orange-500/30',
        hoverColor: 'hover:border-orange-400/60',
        skills: [
            { name: 'Docker', icon: '🐳', level: 'Advanced' },
            { name: 'Git', icon: '📚', level: 'Expert' },
            { name: 'Vercel', icon: '▲', level: 'Advanced' },
            { name: 'Firebase', icon: '🔥', level: 'Advanced' },
            { name: 'Jest', icon: '🃏', level: 'Intermediate' },
            { name: 'Postman', icon: '📮', level: 'Advanced' },
        ]
    },
    {
        title: 'E-Commerce Platforms',
        icon: '🛍️',
        color: 'from-yellow-500 to-amber-500',
        borderColor: 'border-yellow-500/30',
        hoverColor: 'hover:border-yellow-400/60',
        skills: [
            { name: 'Magento2', icon: '🛒', level: 'Advanced' },
            { name: 'Adobe Commerce', icon: '💼', level: 'Advanced' },
            { name: 'Vendure', icon: '🏪', level: 'Intermediate' },
        ]
    }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="relative py-32 px-8 max-w-7xl mx-auto z-20 pointer-events-none">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Technical Expertise
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {skillCategories.map((category, i) => (
                    <motion.div
                        key={i}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: i * 0.1}}
                        className={`bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border ${category.borderColor} ${category.hoverColor} transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10`}
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                                {category.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                <p className="text-sm text-gray-400">{category.skills.length} technologies</p>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid gap-3">
                            {category.skills.map((skill, j) => (
                                <MagnetSkillBadge key={j} magnetStrength={0.15}>
                                    <div className="w-full min-h-[60px] flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer">
                                        <div className="flex items-center gap-4 flex-1 min-w-0">
                                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                                <span className="text-xl group-hover:scale-110 transition-transform">
                                                    {skill.icon}
                                                </span>
                                            </div>
                                            <span className="font-medium text-white group-hover:text-gray-200 transition-colors truncate">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <div className="flex-shrink-0 ml-4">
                                            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                                                skill.level === 'Expert' 
                                                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                                                    : skill.level === 'Advanced'
                                                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                                    : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                                            }`}>
                                                {skill.level}
                                            </span>
                                        </div>
                                    </div>
                                </MagnetSkillBadge>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
