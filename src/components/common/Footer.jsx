import React from 'react';
import { personalInfo } from '../../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;