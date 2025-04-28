import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa'; 
import { SiFiverr, SiUpwork } from 'react-icons/si';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-6">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>

      {/* Github */}
       <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300"
        aria-label="Github"
      >
        <FaGithub className="w-6 h-6" />
      </a>

       {/* Upwork */}
       <a
        href="https://www.upwork.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300"
        aria-label="Upwork"
      >
        <SiUpwork className="w-6 h-6" />
      </a>

      {/* Fiverr */}
      <a
        href="https://www.fiverr.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300"
        aria-label="Fiverr"
      >
        <SiFiverr className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialIcons;
