import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../../data/personal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Show header at the top of the page
      if (currentScrollY <= 0) {
        setIsHidden(false);
        setIsScrolled(false);
        return;
      }

      // Show header when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      } 
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      }

      // Update background when scrolled
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'about', id: 'about' },
    { label: 'featured', id: 'featured-work' },
   // { label: 'other projects', id: 'other-work' },
    { label: 'contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 font-code transform transition-all duration-300 ease-in-out
        ${isHidden ? '-translate-y-full' : 'translate-y-0'}
        ${isScrolled ? 'bg-transparent backdrop-blur-md shadow-sm' : 'bg-transparent'} text-white`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-xl cursor-pointer text-white" onClick={() => scrollToSection('hero')}>
            {personalInfo.name}
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="hover:text-blue-300 transition-colors text-base lg:text-sm text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-black bg-opacity-50 border-t text-white rounded-b shadow-lg animate-fade-in">
            <div className="px-4 py-2 space-y-2 text-white flex flex-col">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="block w-full text-left py-2 hover:text-blue-600 transition-colors text-base text-gray-900"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;