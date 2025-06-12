import React from 'react';
import { projects } from '../../data/projects';
import Card from '../ui/Card';

const Work = ({ type }) => {
  const isFeatured = type === 'featured';
  const filteredProjects = projects.filter(project => 
    isFeatured ? project.featured : !project.featured
  );

  return (
    <section id={isFeatured ? "featured-work" : "other-work"} className="py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-code lg:text-4xl  mb-8 text-center">
          {isFeatured ? 'featured projects' : 'other projects'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;