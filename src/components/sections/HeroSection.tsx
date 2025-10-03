'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ElectricBorder from '@/components/ElectricBorder';
import MagnetButton from '@/components/MagnetButton';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 z-20 pointer-events-none">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1}}
                    className="flex flex-col justify-center text-center lg:text-left pointer-events-none order-2 lg:order-1"
                >
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10 mb-6">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-sm text-gray-300">Available for work</span>
                        </div>
                    </motion.div>

                    <motion.h1 
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
                    >
                        Anandhu&nbsp;A&nbsp;S
                    </motion.h1>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                        className="mb-8"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Full-Stack Developer
                        </h2>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                            {['React', 'Next.js', 'TypeScript', 'Node.js'].map((tech, i) => (
                                <span key={i} className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-300 border border-white/20">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.5}}
                        className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-2xl"
                    >
                        I craft digital experiences that bridge the gap between design and functionality. 
                        Specializing in modern web technologies, I build scalable applications that users love 
                        and businesses depend on.
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.6}}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pointer-events-none"
                    >
                        <MagnetButton
                            href="mailto:anandhuas2022@gmail.com"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl pointer-events-auto transform hover:scale-105 text-sm sm:text-base"
                        >
                            Let&apos;s Work Together
                        </MagnetButton>
                        <MagnetButton
                            href="#skills"
                            className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 pointer-events-auto text-sm sm:text-base"
                        >
                            View My Skills
                        </MagnetButton>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.2}}
                    className="flex justify-center lg:justify-end pointer-events-none order-1 lg:order-2"
                >
                    <div className="relative">
                        <ElectricBorder className="pointer-events-none">
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl bg-gray-900">
                                <Image
                                    src="/profile.jpg"
                                    alt="Anandhu A S"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </ElectricBorder>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
