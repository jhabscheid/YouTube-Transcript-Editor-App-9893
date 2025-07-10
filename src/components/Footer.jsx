import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart } = FiIcons;

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6 mt-10 border-t border-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © 2025 habscheid.com. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>Made with</span>
            <SafeIcon icon={FiHeart} className="text-red-500" />
            <span>by Habscheid</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;