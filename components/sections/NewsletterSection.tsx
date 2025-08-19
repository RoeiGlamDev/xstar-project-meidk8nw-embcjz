import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Stay Glamorous with GlamCS!",
  description = "Sign up for our newsletter to receive exclusive offers and the latest updates on our luxury cosmetics."
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission to your backend
    setIsSubmitted(true);
  };

  return (
    <motion.section
      className="bg-white p-8 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-orange-500 mb-4">{title}</h2>
      <p className="text-gray-700 mb-6">{description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="p-3 border border-gray-300 rounded-lg mb-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Subscribe
        </button>
      </form>
      {isSubmitted && (
        <motion.p
          className="mt-4 text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for subscribing to GlamCS! Check your inbox for updates.
        </motion.p>
      )}
    </motion.section>
  );
};

export default NewsletterSection;