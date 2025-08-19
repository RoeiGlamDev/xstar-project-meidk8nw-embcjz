import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold text-orange-600 mb-2">
        {label}
      </label>
      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={w-full p-3 border-2 rounded-lg transition-colors duration-300 ease-in-out 
          ${isFocused ? 'border-orange-500' : 'border-gray-300'} 
          focus:outline-none focus:ring-2 focus:ring-orange-500}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      <style jsx>{
        input::placeholder {
          color: #d9d9d9;
        }
        input:focus::placeholder {
          color: transparent;
        }
      }</style>
    </div>
  );
};

export default Input;