import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-white">
            Huzaifa<span className="text-green-400">.</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`font-medium transition-colors duration-200 
                  ${activeSection === item.id 
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'}`}
              >
                {item.title}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-green-400 text-black font-medium rounded-full hover:bg-green-500 transition-colors duration-200"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;