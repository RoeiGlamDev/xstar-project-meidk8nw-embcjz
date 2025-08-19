import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic Glam',
    price: '$29.99',
    features: [
      '3 Premium Cosmetic Products',
      'Free Shipping on Orders Over $50',
      'Access to Exclusive GlamCS Tutorials',
    ],
  },
  {
    name: 'Premium Glam',
    price: '$59.99',
    features: [
      '6 Premium Cosmetic Products',
      'Free Shipping on All Orders',
      'Personalized Glam Consultation',
      'Access to Exclusive GlamCS Tutorials',
    ],
  },
  {
    name: 'Luxury Glam',
    price: '$99.99',
    features: [
      '10 Premium Cosmetic Products',
      'Free Shipping on All Orders',
      'Personalized Glam Consultation',
      'Exclusive GlamCS Membership Benefits',
      'Early Access to New Product Launches',
    ],
  },
];

const FAQs = [
  {
    question: 'What is included in the GlamCS subscription?',
    answer: 'Each subscription includes a curated selection of our premium cosmetic products tailored to your beauty needs.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time with no additional fees.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we offer international shipping on all of our products.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 py-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        GlamCS Pricing Plans
      </motion.h1>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1 }}
            >
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="text-2xl font-bold my-4">{plan.price}</p>
              <ul className="list-disc pl-5">
                {plan.features.map((feature, index) => (
                  <li key={index} className="my-2">{feature}</li>
                ))}
              </ul>
              <button className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Frequently Asked Questions</h2>
        <div className="container mx-auto px-4">
          <ul className="space-y-4">
            {FAQs.map((faq, index) => (
              <li key={index} className="bg-orange-100 p-4 rounded-md shadow">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;