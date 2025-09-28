// app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    { title: "Portfolio Website", desc: "Personal site built with Next.js & TailwindCSS." },
    { title: "E-Commerce App", desc: "Full-stack online store with Stripe integration." },
    { title: "Chat Platform", desc: "Realtime chat app using Firebase and WebSockets." },
];

const skills = ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"];

export default function Home() {
    return (
        <main className="bg-black text-white">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8">
                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center md:justify-start flex-1"
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-gray-800 shadow-lg">
                        <Image
                            src="/profile.jpg"
                            alt="Anandhu A S"
                            width={320}
                            height={320}
                            className="object-cover object-top w-full h-full"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1 flex flex-col justify-center text-center md:text-left"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Anandhu A S</h1>
                    <h2 className="text-xl text-gray-400 mb-6">
                        Frontend Developer | React | Next.js | TypeScript
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        I’m a passionate frontend developer focused on creating modern,
                        responsive, and visually appealing web applications. I love working
                        with React, Next.js, and TypeScript to bring ideas to life with clean and efficient code.
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
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
                    </div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-8 max-w-5xl mx-auto text-center md:text-left">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-8"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-300 leading-relaxed"
                >
                    I’m a full-stack developer passionate about creating intuitive,
                    high-performance apps. I enjoy solving complex problems and building
                    elegant solutions that provide great user experiences. My focus is on
                    frontend development, but I have experience in backend and database management.
                </motion.p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-32 px-8 bg-gray-900">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Projects
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:border-indigo-600 transition"
                        >
                            <h3 className="text-xl font-semibold text-indigo-400 mb-2">{project.title}</h3>
                            <p className="text-gray-300">{project.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-32 px-8 max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-12"
                >
                    Skills
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-gray-200 text-sm font-medium hover:border-indigo-400 transition"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-8 bg-gray-900 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-6"
                >
                    Let’s Connect
                </motion.h2>
                <p className="text-gray-300 mb-8">
                    I’m open to freelance work, collaborations, or just a friendly chat.
                </p>
                <div className="flex justify-center gap-6 text-2xl">
                    <a href="https://github.com/" target="_blank" className="hover:text-indigo-400 transition">🐙</a>
                    <a href="https://linkedin.com/" target="_blank" className="hover:text-indigo-400 transition">💼</a>
                    <a href="https://twitter.com/" target="_blank" className="hover:text-indigo-400 transition">🐦</a>
                    <a href="mailto:yourmail@example.com" className="hover:text-indigo-400 transition">✉️</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Anandhu A S. Built with Next.js 🚀
            </footer>
        </main>
    );
}
