import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import SocialIcons from './SocialIcons';
import { ArrowDown, MessageCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-32 flex flex-col items-center bg-[#121212]">
      {/* Social Icons on Top Center */}
      <div className="mb-10">
        <SocialIcons />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0"> {/* Minimal gap */}
          {/* Left Side Text - final tiny adjustment */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-left lg:mr-26 lg:pl-20"> {/* mr-20 and pl-14 */}
            <div className="mb-6">
              <h2 className="text-gray-400 mb-2">Software Developer</h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono">
                Hi, I'm
                <br />
                <span className="text-green-400">Huzaifa Shahab</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                I excel at crafting elegant digital experiences and
                I am proficient in various programming languages and technologies.
              </p>
            </div>

            {/* Download CV Button */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#"
                className="px-6 py-3 bg-transparent border-2 border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 flex items-center space-x-2"
              >
                <span>Download Resume</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Side Profile Photo */}
          <div className="flex justify-center">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;