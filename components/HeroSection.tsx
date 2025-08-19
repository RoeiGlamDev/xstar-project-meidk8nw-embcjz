import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    headline: string;
    subheading: string;
    ctaText: string;
    ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
    headline = "Welcome to GlamCS", 
    subheading = "Elevate Your Beauty with Our Luxurious Cosmetics", 
    ctaText = "Shop Now", 
    ctaLink = "/shop" 
}) => {
    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white text-white relative overflow-hidden">
            <motion.div 
                className="text-center p-10"
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl font-bold mb-4">{headline}</h1>
                <p className="text-lg mb-8">{subheading}</p>
                <motion.a 
                    href={ctaLink} 
                    className="px-6 py-3 bg-orange-500 rounded-full text-white font-semibold transition-transform transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {ctaText}
                </motion.a>
                <div className="mt-6">
                    <span className="text-sm text-gray-300">Trusted by beauty enthusiasts worldwide</span>
                </div>
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-orange-400"></div>
        </section>
    );
};

export default HeroSection;