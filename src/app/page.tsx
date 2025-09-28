// app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
                {/* Left Section - Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center md:justify-start"
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-gray-800 shadow-lg">
                        <Image
                            src="/profile.jpg" // put your image in public/profile.jpg
                            alt="Anandhu A S"
                            width={320}
                            height={320}
                            className="object-cover object-top w-full h-full"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Section - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col justify-center text-center md:text-left"
                >
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Anandhu A S
                    </motion.h1>

                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-xl text-gray-400 mb-6"
                    >
                        Frontend Developer | React | Next.js | TypeScript
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-gray-300 leading-relaxed mb-8"
                    >
                        I’m a passionate frontend developer focused on creating modern,
                        responsive, and visually appealing web applications. I love working
                        with React, Next.js, and TypeScript to bring ideas to life with
                        clean and efficient code.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="mailto:yourmail@example.com"
                            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition"
                        >
                            Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
