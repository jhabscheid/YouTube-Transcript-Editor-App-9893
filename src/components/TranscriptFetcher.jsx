import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiLoader } = FiIcons;

const TranscriptFetcher = ({ onTranscriptFetch, isLoading }) => {
  const [url, setUrl] = useState('');

  const handleFetch = () => {
    if (url.trim()) {
      onTranscriptFetch(url.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFetch();
    }
  };

  const isValidYouTubeUrl = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url);
  };

  return (
    <div className="space-y-4">
      <div>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter YouTube URL (e.g., https://youtu.be/dQw4w9WgXcQ)"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
          disabled={isLoading}
        />
        {url && !isValidYouTubeUrl(url) && (
          <p className="text-sm text-red-500 mt-1">
            Please enter a valid YouTube URL
          </p>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleFetch}
        disabled={!url.trim() || !isValidYouTubeUrl(url) || isLoading}
        className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
          isLoading
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : url.trim() && isValidYouTubeUrl(url)
            ? 'bg-red-600 hover:bg-red-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        <SafeIcon 
          icon={isLoading ? FiLoader : FiDownload} 
          className={`text-lg ${isLoading ? 'animate-spin' : ''}`} 
        />
        {isLoading ? 'Fetching Transcript...' : 'Fetch Transcript'}
      </motion.button>
    </div>
  );
};

export default TranscriptFetcher;