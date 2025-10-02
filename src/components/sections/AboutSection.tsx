'use client';

import { motion } from 'framer-motion';
import MagnetButton from '@/components/MagnetButton';

export default function AboutSection() {
    return (
        <section id="about" className="relative py-32 px-8 max-w-5xl mx-auto text-center z-20 pointer-events-none">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
                className="space-y-8"
            >
                <div>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-white/10 mb-6"
                    >
                        <span className="text-sm text-gray-300">👋 About Me</span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.1}}
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
                    >
                        Crafting Digital Excellence
                    </motion.h2>
                </div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="space-y-6 max-w-4xl mx-auto"
                >
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I&apos;m a software engineer with a passion for full-stack development. I specialize in
                        building modern web applications with React, Next.js, and TypeScript on the frontend,
                        while also working with Node.js, NestJS, and databases on the backend.
                    </p>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                        My experience also includes DevOps, testing, and eCommerce platforms like Magento and
                        Vendure. I&apos;m constantly learning and staying updated with the latest technologies to
                        deliver cutting-edge solutions.
                    </p>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                        When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source
                        projects, and sharing knowledge with the developer community.
                    </p>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.3}}
                    className="pt-4"
                >
                    <MagnetButton
                        href="#contact"
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl pointer-events-auto transform hover:scale-105"
                    >
                        Let&apos;s Connect
                    </MagnetButton>
                </motion.div>
            </motion.div>
        </section>
    );
}
