import React from 'react';
import { personalInfo } from '../../data/personal';
import { primarySkills } from '../../data/skills';

const About = () => {
  console.log('About Image Path:', personalInfo.aboutImage); // Debug log

  return (
    <section id="about"  className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 ">
      <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold font-code mb-12 text-center">about me</h2>
            
  
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {personalInfo.aboutImage ? (
              <img 
                src={personalInfo.aboutImage} 
                alt={personalInfo.name}
                className="w-8vw h-8vh object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.target.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
            )}

          <div className="space-y-6">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="pt-4">
              <h3 className="text-lg font-medium mb-4 text-gray-900">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-3">
                {primarySkills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;