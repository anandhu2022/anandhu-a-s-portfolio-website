'use client';

import Particles from '@/components/Particles';
import InfiniteSkillsScroll from '@/components/InfiniteSkillsScroll';
import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

/**
 * The main page of the website.
 */
const Page = () => {
    return (
        <main className="bg-black text-white">
            {/* Scroll Progress Indicator */}
            <ScrollProgress />
            
            {/* Fixed Particles Background */}
            <div className="fixed inset-0 z-10">
                <Particles 
                    particleCount={300}
                    particleSpread={15}
                    speed={0.05}
                    particleColors={['#ffffff', '#e2e8f0', '#cbd5e1']}
                    moveParticlesOnHover={true}
                    particleHoverFactor={2}
                    alphaParticles={true}
                    particleBaseSize={80}
                    sizeRandomness={0.8}
                    cameraDistance={25}
                />
            </div>

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

            {/* Skills Infinite Scroll */}
            <div className="relative z-20">
                <InfiniteSkillsScroll />
            </div>

            {/* Skills Section */}
            <SkillsSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <footer className="relative py-4 sm:py-6 text-center text-gray-500 text-xs sm:text-sm z-20 pointer-events-none px-4">
                © {new Date().getFullYear()} Anandhu A S. Built with Next.js 🚀
            </footer>
        </main>
    );
};

export default Page;