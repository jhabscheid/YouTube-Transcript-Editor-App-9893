import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import toast from 'react-hot-toast';

const { FiCopy, FiCheck } = FiIcons;

const CopyButton = ({ content }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (!content) {
      toast.error('No content to copy!');
      return;
    }
    
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      toast.success('Transcript copied to clipboard!');
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      toast.error('Failed to copy: ' + err.message);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      disabled={!content}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 
        ${copied 
          ? 'bg-green-500 text-white' 
          : content 
            ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
    >
      <SafeIcon icon={copied ? FiCheck : FiCopy} className="text-lg" />
      {copied ? 'Copied!' : 'Copy to Clipboard'}
    </motion.button>
  );
};

export default CopyButton;