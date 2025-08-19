import React from 'react';
import { motion } from 'framer-motion';

interface StatsData {
  label: string;
  count: number;
}

const stats: StatsData[] = [
  { label: 'Products Launched', count: 120 },
  { label: 'Happy Customers', count: 15000 },
  { label: 'Awards Won', count: 10 },
  { label: 'Global Reach', count: 25 },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-6">GlamCS Achievements</h2>
        <p className="text-lg text-gray-700 mb-10">Celebrating our milestones in the cosmetics industry.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-orange-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-5xl font-bold text-orange-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {stat.count}
              </motion.div>
              <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;