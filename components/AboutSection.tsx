import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Turner',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Chief Makeup Artist',
    image: '/images/liam.jpg',
  },
  {
    name: 'Emma Brown',
    role: 'Head of Product Development',
    image: '/images/emma.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About GlamCS
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-10 px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          At GlamCS, we believe that beauty is an expression of individuality. Founded with a passion for creativity, our mission is to empower everyone to embrace their unique beauty through high-quality, luxurious cosmetics. We handcraft each product with care, using the finest ingredients to ensure that our offerings not only enhance beauty but also nurture the skin.
        </motion.p>
        <motion.h3
          className="text-3xl font-semibold text-orange-500 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          Our Mission
        </motion.h3>
        <motion.p
          className="text-lg text-gray-700 mb-10 px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
        >
          GlamCS is committed to redefining beauty standards. Our mission is to provide innovative and inclusive products that inspire confidence and creativity. We strive to create a community where everyone feels valued and celebrated for their unique beauty.
        </motion.p>
        <motion.h3
          className="text-3xl font-semibold text-orange-500 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition duration-300"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-bold text-orange-500">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;