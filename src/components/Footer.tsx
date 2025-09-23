import React from 'react';
import { motion } from 'framer-motion';
import { navItems } from '@/data/portfolio';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              &copy; 2024 Principal Software Engineer. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
