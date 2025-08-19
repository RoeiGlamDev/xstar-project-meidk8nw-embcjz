import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  duration?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, duration = 0.5 }) => {
  const slideUpAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={slideUpAnimation}
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;