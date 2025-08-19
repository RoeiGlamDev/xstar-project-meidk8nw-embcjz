import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Glam Starter',
    price: '$29',
    features: [
      'Consultation Session',
      'Basic Makeup Application',
      'Product Samples',
    ],
  },
  {
    title: 'Glam Deluxe',
    price: '$59',
    features: [
      'Personalized Consultation',
      'Full Makeup Application',
      'Premium Product Samples',
      'Follow-up Session',
    ],
  },
  {
    title: 'Glam VIP',
    price: '$99',
    features: [
      'Exclusive Consultation',
      'Custom Makeup Application',
      'Luxury Product Samples',
      'VIP Follow-up Support',
      'Free Touch-up Kit',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GlamCS Pricing Plans
        </motion.h2>
        <p className="text-lg text-gray-700 mb-8">
          Discover our exclusive services tailored just for you.
        </p>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 m-4 w-full sm:w-1/3 transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                {tier.title}
              </h3>
              <p className="text-xl font-bold text-gray-800 mb-4">
                {tier.price}
              </p>
              <ul className="mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;