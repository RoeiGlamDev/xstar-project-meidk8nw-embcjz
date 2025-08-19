import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Luxury Formulations',
    description: 'Experience the elegance of our carefully crafted cosmetics that enhance your natural beauty.',
    icon: <i className="fas fa-gem text-orange-500"></i>,
  },
  {
    title: 'Cruelty-Free',
    description: 'GlamCS is committed to ethical beauty. Our products are 100% cruelty-free, ensuring no harm to animals.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Vibrant Shades',
    description: 'Discover a palette of vibrant shades that cater to every skin tone, making you shine with confidence.',
    icon: <i className="fas fa-paint-brush text-orange-500"></i>,
  },
  {
    title: 'Expert Guidance',
    description: 'Our beauty experts are here to provide personalized advice to help you find your perfect GlamCS products.',
    icon: <i className="fas fa-user-tie text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-10">Discover GlamCS Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;