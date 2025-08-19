import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-orange-600 mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{content}</p>
        <button
          onClick={onClose}
          className="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-500 transition duration-300"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;