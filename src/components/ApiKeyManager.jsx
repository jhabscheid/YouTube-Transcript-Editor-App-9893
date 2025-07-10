import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSave, FiEye, FiEyeOff, FiCheck, FiExternalLink } = FiIcons;

const ApiKeyManager = ({ onApiKeySave, currentApiKey }) => {
  const [apiKey, setApiKey] = useState(currentApiKey || '');
  const [showApiKey, setShowApiKey] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (apiKey.trim()) {
      onApiKeySave(apiKey.trim());
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type={showApiKey ? 'text' : 'password'}
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your Supadata API key"
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <button
          type="button"
          onClick={() => setShowApiKey(!showApiKey)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <SafeIcon icon={showApiKey ? FiEyeOff : FiEye} className="text-lg" />
        </button>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSave}
        disabled={!apiKey.trim()}
        className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
          isSaved
            ? 'bg-green-500 text-white'
            : apiKey.trim()
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        <SafeIcon icon={isSaved ? FiCheck : FiSave} className="text-lg" />
        {isSaved ? 'Saved!' : 'Save API Key'}
      </motion.button>

      <a 
        href="https://supadata.ai/?ref=48642" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2 mt-2 text-sm font-medium"
      >
        <SafeIcon icon={FiExternalLink} className="text-sm" />
        Get your free Supadata API key with this link
      </a>

      {currentApiKey && (
        <div className="text-sm text-green-600 flex items-center gap-2 mt-2">
          <SafeIcon icon={FiCheck} className="text-lg" />
          API key configured
        </div>
      )}
    </div>
  );
};

export default ApiKeyManager;