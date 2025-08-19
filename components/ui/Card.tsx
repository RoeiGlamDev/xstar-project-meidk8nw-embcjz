import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500 opacity-30 rounded-t-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 text-base">{description}</p>
        <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-600">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default Card;