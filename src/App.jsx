import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ApiKeyManager from './components/ApiKeyManager';
import TranscriptFetcher from './components/TranscriptFetcher';
import MarkdownEditor from './components/MarkdownEditor';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './common/SafeIcon';
import './App.css';

const { FiYoutube, FiKey, FiFileText, FiExternalLink } = FiIcons;

function App() {
  const [apiKey, setApiKey] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedApiKey = localStorage.getItem('supadata_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const handleApiKeySave = (key) => {
    setApiKey(key);
    localStorage.setItem('supadata_api_key', key);
  };

  const handleTranscriptFetch = async (url) => {
    if (!apiKey) {
      alert('Please set your API key first');
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.supadata.ai/v1/transcript?url=${encodeURIComponent(url)}`, {
        headers: {
          'x-api-key': apiKey
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Convert transcript content to markdown format
      const markdownContent = data.content
        .map(item => item.text)
        .join('\n\n');
      setTranscript(markdownContent);
    } catch (error) {
      console.error('Error fetching transcript:', error);
      alert('Failed to fetch transcript. Please check your API key and URL.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <SafeIcon icon={FiYoutube} className="text-4xl text-red-600" />
            <h1 className="text-4xl font-bold text-gray-800">YouTube Transcript Editor</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Fetch YouTube transcripts and edit them with our markdown editor
          </p>
          <a 
            href="https://appsumo.com/s/1s06iuq/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            <span>Made with Greta, available in AppSumo right now with 10% off</span>
            <SafeIcon icon={FiExternalLink} className="text-sm" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* API Key Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <SafeIcon icon={FiKey} className="text-xl text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">API Configuration</h2>
              </div>
              <ApiKeyManager onApiKeySave={handleApiKeySave} currentApiKey={apiKey} />
            </div>
          </motion.div>

          {/* Transcript Fetcher Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <SafeIcon icon={FiYoutube} className="text-xl text-red-600" />
                <h2 className="text-xl font-semibold text-gray-800">Fetch Transcript</h2>
              </div>
              <TranscriptFetcher onTranscriptFetch={handleTranscriptFetch} isLoading={isLoading} />
            </div>
          </motion.div>
        </div>

        {/* Markdown Editor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <SafeIcon icon={FiFileText} className="text-xl text-green-600" />
              <h2 className="text-xl font-semibold text-gray-800">Markdown Editor</h2>
            </div>
            <MarkdownEditor content={transcript} onChange={setTranscript} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;