import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contactMethods } from '@/data/portfolio';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Contact
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Get in touch with me
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300 border border-gray-200"
                >
                  <div className="flex-shrink-0">
                    <i className={`${method.icon} text-3xl text-primary-600`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {method.label}
                    </h4>
                    <p className="text-gray-600 text-lg">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
