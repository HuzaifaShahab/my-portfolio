import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaMousePointer } from 'react-icons/fa';
import { SiNextdotjs, SiGraphql, SiFlutter, SiJira, SiSpringboot, SiAngular } from 'react-icons/si';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { ExperienceItem, EducationItem } from '../types';

type Tab = 'experience' | 'education' | 'skills' | 'about';

const getSkillIcon = (skillName: string): JSX.Element => {
  const name = skillName.toLowerCase();
  if (name.includes('html')) return <FaHtml5 className="text-5xl" />;
  if (name.includes('css')) return <FaCss3Alt className="text-5xl" />;
  if (name.includes('javascript') || name.includes('js')) return <FaJsSquare className="text-5xl" />;
  if (name.includes('react')) return <FaReact className="text-5xl" />;
  if (name.includes('next')) return <SiNextdotjs className="text-5xl" />;
  if (name.includes('node')) return <FaNodeJs className="text-5xl" />;
  if (name.includes('graphql')) return <SiGraphql className="text-5xl" />;
  if (name.includes('flutter')) return <SiFlutter className="text-5xl" />;
  if (name.includes('powerbi') || name.includes('power bi')) return <FaJsSquare className="text-5xl" />;
  if (name.includes('jira')) return <SiJira className="text-5xl" />;
  if (name.includes('python')) return <FaPython className="text-5xl" />;
  if (name.includes('springboot') || name.includes('spring boot')) return <SiSpringboot className="text-5xl" />;
  if (name.includes('java')) return <FaJava className="text-5xl" />;
  if (name.includes('bubble')) return <FaJsSquare className="text-5xl" />;
  if (name.includes('cursor')) return <FaMousePointer className="text-5xl" />;
  if (name.includes('angular')) return <SiAngular className="text-5xl" />;
  return <FaJsSquare className="text-5xl" />;
};

const ResumeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('experience');
  const { skills, education, experience, about, isLoading } = usePortfolioData();

  const getTabStyle = (tab: Tab) => {
    return `w-full py-3 px-4 text-left transition-all duration-300 ${
      activeTab === tab 
        ? 'bg-green-400 text-black' 
        : 'bg-[#1e1e1e] text-gray-400 hover:bg-[#252525]'
    }`;
  };

  const renderContent = () => {
    if (isLoading) {
      return <div className="text-center">Loading...</div>;
    }

    switch (activeTab) {
      case 'experience':
        return (
          <div>
            <h2 className="text-4xl font-bold mb-4 font-mono">My experience</h2>
            <p className="text-gray-400 mb-8">
              Professional journey and work experience in software development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.map((item, index) => (
                <div key={index} className="bg-[#1e1e1e] p-6 rounded-lg">
                  <div className="text-green-400 text-sm mb-2 font-mono">{item.year}</div>
                  <h3 className="text-white text-xl mb-2 font-mono">{item.position}</h3>
                  <div className="text-gray-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {item.company}
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        return (
          <div>
            <h2 className="text-4xl font-bold mb-4 font-mono">Certifications</h2>
            <p className="text-gray-400 mb-8">
              Professional certifications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.map((item, index) => (
                <div key={index} className="bg-[#1e1e1e] p-6 rounded-lg">
                  <div className="text-green-400 text-sm mb-2 font-mono">{item.year}</div>
                  <h3 className="text-white text-xl mb-2 font-mono">{item.degree}</h3>
                  <div className="text-gray-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {item.institution}
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div>
            <h2 className="text-4xl font-bold mb-4 font-mono">My skills</h2>
            <p className="text-gray-400 mb-8">
              Technical skills and expertise in various technologies.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-2 text-green-400">{getSkillIcon(skill)}</div>
                  <span className="text-white text-sm font-mono text-center font-bold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'about':
        return (
          <div>
            <h2 className="text-4xl font-bold mb-4 font-mono">About me</h2>
            <p className="text-gray-400 mb-8">
              {about.personalInfo}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 capitalize font-mono">Name</span>
                <span className="text-white font-mono">{about.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 capitalize font-mono">Phone</span>
                <span className="text-white font-mono">{about.phone}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 capitalize font-mono">Experience</span>
                <span className="text-white font-mono">{about.experience}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 capitalize font-mono">Skype</span>
                <span className="text-white font-mono">{about.skype}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 capitalize font-mono">Nationality</span>
                <span className="text-white font-mono">{about.nationality}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 capitalize font-mono">Email</span>
                <span className="text-white font-mono">{about.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 capitalize font-mono">Freelance</span>
                <span className="text-white font-mono">{about.freelance}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 capitalize font-mono">Languages</span>
                <span className="text-white font-mono">{about.languages}</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="resume" className="py-32 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-4 font-mono">Why hire me?</h2>
            <p className="text-gray-400 mb-8">
              {about.description}
            </p>
            
            <div className="space-y-2">
              <button 
                className={getTabStyle('experience')}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button 
                className={getTabStyle('education')}
                onClick={() => setActiveTab('education')}
              >
                Certifications
              </button>
              <button 
                className={getTabStyle('skills')}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
              <button 
                className={getTabStyle('about')}
                onClick={() => setActiveTab('about')}
              >
                About me
              </button>
            </div>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="lg:col-span-2">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;