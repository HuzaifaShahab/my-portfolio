import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const WorkSection: React.FC = () => {
  const { projects, isLoading } = usePortfolioData();
  const [currentProject, setCurrentProject] = useState(0);
  const totalProjects = projects.length;

  const nextProject = () => {
    setCurrentProject((prev) => (prev === totalProjects - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  };

  const getGithubLink = (title: string) => {
    const normalized = title.trim().toLowerCase();
    if (normalized === 'software services platform') {
      return 'https://github.com/HuzaifaShahab/HackathonProject--Software-Agency-Website';
    }
    if (normalized === 'smartcampus (desktop + web app)') {
      return 'https://github.com/HuzaifaShahab/Al-Zarrar-University-Managament-System';
    }
    if (normalized === 'spotify analysis') {
      return 'https://github.com/HuzaifaShahab?tab=repositories';
    }
    return '#';
  };

  if (isLoading) {
    return <div className="py-24 bg-[#191919] text-center">Loading projects...</div>;
  }

  if (totalProjects === 0) {
    return (
      <section id="work" className="py-24 bg-[#191919]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No projects available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const project = projects[currentProject];
  
  return (
    <section id="work" className="py-24 bg-[#191919]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out some of my featured projects and professional work
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side - Project Information */}
          <div className="w-full md:w-2/5">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="text-6xl font-bold text-green-400 mr-4 font-mono tracking-tighter relative">
                  <span className="relative z-10">{String(currentProject + 1).padStart(2, '0')}</span>
                  <div className="absolute -inset-1 bg-[#252525] rounded-lg -z-0 transform -rotate-3"></div>
                </div>
                <div className="h-1 flex-grow bg-green-400"></div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-6">
                {project.description}
              </p>
              
              {/* Technologies Display */}
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Technologies Used:</div>
                <div className="text-green-400 font-mono">
                  {project.technologies || project.tags.join(', ')}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-[#252525] hover:bg-[#333] rounded-full transition"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                <a 
                  href={getGithubLink(project.title)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-[#252525] hover:bg-[#333] rounded-full transition"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Project Image */}
          <div className="w-full md:w-3/5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#333] h-[350px] w-full bg-[#191919] flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevProject}
                className="p-3 bg-green-500 hover:bg-green-600 text-black rounded-full transition flex items-center justify-center"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="flex items-center text-white">
                {currentProject + 1} / {totalProjects}
              </span>
              <button 
                onClick={nextProject}
                className="p-3 bg-green-500 hover:bg-green-600 text-black rounded-full transition flex items-center justify-center"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;