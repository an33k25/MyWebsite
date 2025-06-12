import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Card = ({ project }) => {
  const { title, description, image, technologies, github, live } = project;

  const handleCardClick = () => {
    if (live) {
      window.open(live, '_blank');
    } else if (github) {
      window.open(github, '_blank');
    }
  };

  return (
    <div className="group cursor-pointer" onClick={handleCardClick}>
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden relative">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/90 group-hover:to-purple-600/90 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
            {github && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(github, '_blank');
                }}
                className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="text-white" size={20} />
              </button>
            )}
            {live && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(live, '_blank');
                }}
                className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink className="text-white" size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          {technologies.map((tech, index) => (
            <span key={tech}>
              {tech}
              {index < technologies.length - 1 && ' • '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;