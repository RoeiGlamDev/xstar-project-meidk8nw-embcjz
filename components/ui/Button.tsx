import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const buttonVariants = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 15px rgba(255, 165, 0, 0.3)',
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 20px rgba(255, 165, 0, 0.5)',
  },
  active: {
    scale: 0.95,
    boxShadow: '0 2px 10px rgba(255, 165, 0, 0.3)',
  },
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, disabled }) => {
  const baseClasses = 'transition duration-300 ease-in-out rounded-md px-6 py-3 focus:outline-none';
  
  const variantClasses = variant === 'primary'
    ? 'bg-orange-500 text-white hover:bg-orange-600'
    : 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white';

  return (
    <motion.button
      className={${baseClasses} ${variantClasses} }
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="active"
      aria-label={GlamCS ${variant} button}
    >
      {children}
    </motion.button>
  );
};

export default Button;