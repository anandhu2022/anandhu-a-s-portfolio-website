'use client';

import { motion } from 'framer-motion';
import MagnetButton from '@/components/MagnetButton';

export default function ContactSection() {
    return (
        <section id="contact" className="relative py-32 px-8 text-center z-20 pointer-events-none">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                    I&apos;m always excited to work on innovative projects and collaborate with talented people.
                    Let&apos;s turn your ideas into reality.
                </p>
                
                {/* Contact Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.1}}
                        className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-400/50 transition-colors"
                    >
                        <div className="text-4xl mb-4">📧</div>
                        <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                        <p className="text-gray-400 text-sm mb-4">For project inquiries and collaborations</p>
                        <MagnetButton
                            href="mailto:anandhuas2022@gmail.com"
                            className="text-indigo-400 hover:text-indigo-300 transition pointer-events-auto font-medium"
                        >
                            anandhuas2022@gmail.com
                        </MagnetButton>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors"
                    >
                        <div className="text-4xl mb-4">💼</div>
                        <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                        <p className="text-gray-400 text-sm mb-4">Let&apos;s connect professionally</p>
                        <MagnetButton
                            href="https://linkedin.com/in/anandhu-a-s-5551aa287"
                            className="text-purple-400 hover:text-purple-300 transition pointer-events-auto font-medium"
                        >
                            Connect with me
                        </MagnetButton>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.4}}
                >
                    <MagnetButton
                        href="mailto:anandhuas2022@gmail.com"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl pointer-events-auto transform hover:scale-105"
                    >
                        Start a Conversation
                    </MagnetButton>
                </motion.div>
            </motion.div>
        </section>
    );
}
