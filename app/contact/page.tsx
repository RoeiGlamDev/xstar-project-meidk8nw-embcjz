import React, { useState } from 'react';
import { motion } from 'framer-motion';

const contactVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <motion.h1
        className="text-4xl font-bold text-orange-500 mb-6"
        variants={contactVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        className="bg-orange-100 p-8 rounded-lg shadow-lg w-full max-w-md"
        variants={contactVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={4}
            required
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Find Us</h2>
        <p className="text-gray-700">123 Glam Avenue, Beauty City, BC 12345</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
        <h3 className="text-xl font-semibold text-orange-500 mt-6">Business Hours</h3>
        <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;