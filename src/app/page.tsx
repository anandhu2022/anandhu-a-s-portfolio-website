// app/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// ✅ Grouped Skills
const skills = {
    frontend: [
        'Next.js',
        'React',
        'React Native',
        'TypeScript',
        'Redux',
        'Material UI',
        'TailwindCSS',
    ],
    backend: ['Node.js', 'Express', 'NestJS', 'PHP', 'REST APIs', 'JWT / OAuth', 'Strapi'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Redis'],
    devops: ['Docker', 'Git', 'Vercel'],
    testing: ['Jest', 'Postman'],
    ecommerce: ['Magento2', 'Adobe Commerce', 'Vendure'],
};

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
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-gray-800 shadow-lg">
                        <Image
                            src="/profile.jpg"
                            alt="Anandhu A S"
                            fill
                            className="object-cover object-top"
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
                        Full-Stack Developer | React | Next.js | TypeScript
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        I’m a full-stack developer passionate about building modern, scalable, and user-friendly
                        applications. My expertise spans frontend, backend, databases, DevOps, and eCommerce
                        platforms. I focus on delivering clean code, high performance, and seamless user
                        experiences.
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href="mailto:anandhuas2022@gmail.com"
                            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
                        >
                            Contact Me
                        </a>
                        {/*<a*/}
                        {/*  href="/resume.pdf"*/}
                        {/*  className="px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition"*/}
                        {/*>*/}
                        {/*  Resume*/}
                        {/*</a>*/}
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
                    I&#39;m a software engineer with a passion for full-stack development. I specialize in
                    building modern web applications with React, Next.js, and TypeScript on the frontend,
                    while also working with Node.js, NestJS, and databases on the backend.
                </motion.p>
                <motion.p className={`pt-3`}>
                    My experience also includes DevOps, testing, and eCommerce platforms like Magento and
                    Vendure. I&#39;m constantly learning and staying updated with the latest technologies to
                    deliver cutting-edge solutions.
                </motion.p>
                <motion.p className={`pt-3`}>
                    When I&#39;m not coding, I enjoy exploring new technologies, contributing to open-source
                    projects, and sharing knowledge with the developer community.
                </motion.p>
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
                <div className="grid md:grid-cols-2 gap-12">
                    {Object.entries(skills).map(([category, items], i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="text-left"
                        >
                            <h3 className="text-xl font-semibold text-indigo-400 mb-4 capitalize">{category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill, j) => (
                                    <span
                                        key={j}
                                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-gray-200 text-sm font-medium hover:border-indigo-400 transition"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </motion.div>
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
                    <a
                        href="https://github.com/"
                        target="_blank"
                        className="hover:text-indigo-400 transition"
                    >
                        🐙
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        className="hover:text-indigo-400 transition"
                    >
                        💼
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        className="hover:text-indigo-400 transition"
                    >
                        🐦
                    </a>
                    <a href="mailto:anandhuas2022@gmail.com" className="hover:text-indigo-400 transition">
                        ✉️
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Anandhu A S. Built with Next.js 🚀
            </footer>
        </main>
    );
}
