import React from 'react';
import { ExternalLink } from 'lucide-react';
import { WorkItem as WorkItemType } from '../types';

interface WorkItemProps {
  work: WorkItemType;
}

const WorkItem: React.FC<WorkItemProps> = ({ work }) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden group">
      <div className="relative overflow-hidden h-64">
        <img 
          src={work.image} 
          alt={work.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">{work.title}</h3>
              {work.link && (
                <a 
                  href={work.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-gray-300 mt-2">{work.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {work.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-[#121212] text-gray-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;