import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const ServicesSection: React.FC = () => {
  const { services, isLoading } = usePortfolioData();
  
  if (isLoading) {
    return <div className="py-24 bg-[#121212] text-center">Loading services...</div>;
  }
  
  return (
    <section id="services" className="py-24 bg-[#121212]">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer a range of professional services to elevate your digital presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 px-4 md:px-8">
          {services.map((service, index) => {
            return (
              <div key={service.id} className="relative border-b border-gray-800 pb-8 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-4xl font-mono font-bold mb-4 text-green-400">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="relative w-12 h-12 bg-white hover:bg-green-400 rounded-full flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight 
                      className="w-5 h-5 text-black transform rotate-45 group-hover:rotate-0 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <p className="text-gray-400 max-w-lg">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;