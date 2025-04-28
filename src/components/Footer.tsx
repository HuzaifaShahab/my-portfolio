import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-[#121212] text-gray-400">
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            Made with <Heart className="w-4 h-4 text-green-500 mx-1" /> by Huzaifa Shahab
          </div>
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          © {currentYear} Huzaifa Shahab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;