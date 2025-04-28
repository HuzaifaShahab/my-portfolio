import React from 'react';
import { Code, Smartphone, Palette, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  MessageCircle: <MessageCircle className="w-8 h-8" />,
};

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] hover:bg-[#252525] group">
      <div className="w-16 h-16 bg-[#232323] rounded-lg flex items-center justify-center mb-4 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
        {iconMap[service.icon]}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
      <p className="text-gray-400">{service.description}</p>
    </div>
  );
};

export default ServiceCard;