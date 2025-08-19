import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-white">
            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-5xl font-bold text-orange-600">Welcome to GlamCS</h1>
                <p className="mt-4 text-lg text-gray-700">Elevate your beauty routine with our luxury cosmetics.</p>
                <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition duration-300">
                    Shop Now
                </button>
            </motion.div>
        </section>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-20 bg-orange-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold text-orange-600">Why Choose GlamCS?</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-bold text-orange-600">Premium Ingredients</h3>
                        <p className="mt-2 text-gray-600">Our products are formulated with the finest materials to ensure quality and effectiveness.</p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-bold text-orange-600">Luxurious Packaging</h3>
                        <p className="mt-2 text-gray-600">Each product is beautifully packaged, reflecting the elegance of the GlamCS brand.</p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-bold text-orange-600">Sustainable Practices</h3>
                        <p className="mt-2 text-gray-600">We are committed to eco-friendly practices, ensuring our beauty products are kind to the planet.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const LuxuryDesignSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold text-orange-600">Experience Luxury with GlamCS</h2>
                <p className="mt-4 text-lg text-gray-700">Indulge in our exclusive range of cosmetics designed to enhance your natural beauty.</p>
                <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 0.5 }}
                    className="mt-8 inline-block p-4 bg-orange-600 text-white rounded-lg shadow-lg"
                >
                    Explore Our Collection
                </motion.div>
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <LuxuryDesignSection />
        </div>
    );
};

export default HomePage;