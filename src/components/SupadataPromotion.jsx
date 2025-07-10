import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiExternalLink, FiStar, FiZap} = FiIcons;

const SupadataPromotion = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.2}}
      className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white mb-6"
    >
      <div className="flex items-start gap-4">
        <div className="bg-white p-3 rounded-full">
          <SafeIcon icon={FiStar} className="text-2xl text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Powered by Supadata AI</h2>
          <p className="mb-4">
            Get accurate YouTube transcripts with Supadata's advanced AI technology. 
            Perfect for content creators, researchers, and educators.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://supadata.ai/?ref=48642"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-all duration-200"
            >
              <span>Get Free API Key</span>
              <SafeIcon icon={FiExternalLink} className="text-sm" />
            </a>
            <a
              href="https://supadata.ai/documentation/getting-started?ref=48642"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
            >
              <span>Documentation</span>
              <SafeIcon icon={FiExternalLink} className="text-sm" />
            </a>
            <a
              href="https://appsumo.com/s/1s06iuq/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
            >
              <SafeIcon icon={FiZap} className="text-sm" />
              <span>Get Greta</span>
              <SafeIcon icon={FiExternalLink} className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SupadataPromotion;