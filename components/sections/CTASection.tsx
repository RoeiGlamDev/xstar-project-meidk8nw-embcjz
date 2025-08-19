import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  heading = "Elevate Your Elegance with GlamCS", 
  subheading = "Discover luxurious cosmetics that empower your beauty.", 
  buttonText = "Shop Now", 
  buttonLink = "/shop"
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-20 px-5">
      <motion.h2 
        className="text-4xl font-bold text-orange-500 mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {heading}
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {subheading}
      </motion.p>
      <motion.a 
        href={buttonLink} 
        className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </div>
  );
};

export default CTASection;