import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  companyInfo: string;
  links: { label: string; url: string }[];
  socialMedia: { platform: string; url: string; icon: JSX.Element }[];
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "GlamCS";
  const companyInfo = "Elevate your beauty experience with GlamCS. Discover a luxurious range of cosmetics that empower your confidence.";
  const links = [
    { label: "Home", url: "/" },
    { label: "Products", url: "/products" },
    { label: "About Us", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];
  const socialMedia = [
    { platform: "Facebook", url: "https://facebook.com/glamcs", icon: <i className="fab fa-facebook-f"></i> },
    { platform: "Instagram", url: "https://instagram.com/glamcs", icon: <i className="fab fa-instagram"></i> },
    { platform: "Twitter", url: "https://twitter.com/glamcs", icon: <i className="fab fa-twitter"></i> },
  ];

  return (
    <footer className="bg-white text-orange-600 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold">{companyName}</h2>
          <p className="mt-2 text-lg">{companyInfo}</p>
        </motion.div>
        <div className="flex justify-center space-x-6 mb-8">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <div className="flex justify-center space-x-6">
          {socialMedia.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className="text-orange-600 hover:text-orange-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              aria-label={social.platform}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;