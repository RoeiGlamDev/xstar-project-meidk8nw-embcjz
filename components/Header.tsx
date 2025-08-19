import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg relative z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <motion.img
            src={logoUrl}
            alt="GlamCS Logo"
            className="h-10 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <h1 className="text-orange-500 text-2xl font-bold ml-2">GlamCS</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <motion.a
            href="#products"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.a
            href="#about"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="#contact"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col p-4">
            <motion.a
              href="#products"
              className="text-gray-800 hover:text-orange-500 py-2"
              whileHover={{ scale: 1.05 }}
            >
              Products
            </motion.a>
            <motion.a
              href="#about"
              className="text-gray-800 hover:text-orange-500 py-2"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.a
              href="#contact"
              className="text-gray-800 hover:text-orange-500 py-2"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;