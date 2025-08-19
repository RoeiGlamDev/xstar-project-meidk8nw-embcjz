import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Add any additional effects or side effects here
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={isInView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={transition-all ${className}}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;