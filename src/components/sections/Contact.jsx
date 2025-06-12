import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/personal';
import Button from '../common/Button';

const Contact = () => {
  const socialIcons = {
    email: Mail,
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter
  };

  const handleContactClick = () => {
    window.open(socialLinks.email, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always interested in new opportunities and collaborations. 
          Whether you have a project in mind or just want to chat, I'd love to hear from you.
        </p>
        
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {Object.entries(socialLinks).map(([platform, url]) => {
            const IconComponent = socialIcons[platform];
            const isEmail = platform === 'email';
            const label = platform.charAt(0).toUpperCase() + platform.slice(1);
            
            return (
              <a 
                key={platform}
                href={url} 
                target={isEmail ? '_self' : '_blank'}
                rel={isEmail ? '' : 'noopener noreferrer'}
                className={`flex items-center gap-2 transition-colors ${
                  platform === 'email' || platform === 'linkedin' 
                    ? 'text-blue-600 hover:text-blue-700' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <IconComponent size={20} />
                <span>{label}</span>
              </a>
            );
          })}
        </div>

        <Button onClick={handleContactClick} variant="primary">
          Send me a message
        </Button>
      </div>
    </section>
  );
};

export default Contact;