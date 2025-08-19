import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ava Johnson',
    role: 'Founder & CEO',
    image: '/images/team/ava.jpg',
  },
  {
    name: 'Liam Smith',
    role: 'Creative Director',
    image: '/images/team/liam.jpg',
  },
  {
    name: 'Sophia Brown',
    role: 'Head of Marketing',
    image: '/images/team/sophia.jpg',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="py-16 px-6 text-center">
        <motion.h1
          className="text-4xl font-bold text-orange-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About GlamCS
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          At GlamCS, we believe in the transformative power of cosmetics. Founded in 2020, our mission is to empower individuals to express their unique beauty through high-quality, luxurious products. With an emphasis on modern design and sustainability, we craft each item with care and precision.
        </motion.p>
      </section>

      <section className="bg-orange-100 py-16">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold text-orange-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            We are committed to quality, innovation, and sustainability. Our products are cruelty-free, made with ethically sourced ingredients, and designed to enhance your natural beauty.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-6">
        <motion.h2
          className="text-3xl font-bold text-orange-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-orange-600">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;