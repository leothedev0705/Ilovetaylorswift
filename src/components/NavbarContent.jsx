import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarContent = () => {
  const location = useLocation();

  const handleClick = (page) => {
    console.log(`Navigating to: ${page}`);
  };

  return (
    <div className="flex justify-center space-x-16">
      <Link 
        to="/" 
        onClick={() => handleClick('home')}
        className={`text-xl transition-colors drop-shadow-lg cursor-pointer font-semibold ${
          location.pathname === '/' 
            ? 'text-purple-200' 
            : 'text-white hover:text-purple-200'
        }`}
      >
        HOME
      </Link>
      <Link 
        to="/about" 
        onClick={() => handleClick('about')}
        className={`text-xl transition-colors drop-shadow-lg cursor-pointer font-semibold ${
          location.pathname === '/about' 
            ? 'text-purple-200' 
            : 'text-white hover:text-purple-200'
        }`}
      >
        ABOUT ME
      </Link>
      <Link 
        to="/projects" 
        onClick={() => handleClick('projects')}
        className={`text-xl transition-colors drop-shadow-lg cursor-pointer font-semibold ${
          location.pathname === '/projects' 
            ? 'text-purple-200' 
            : 'text-white hover:text-purple-200'
        }`}
      >
        PROJECTS
      </Link>
      <Link 
        to="/experiences" 
        onClick={() => handleClick('experiences')}
        className={`text-xl transition-colors drop-shadow-lg cursor-pointer font-semibold ${
          location.pathname === '/experiences' 
            ? 'text-purple-200' 
            : 'text-white hover:text-purple-200'
        }`}
      >
        EXPERIENCES
      </Link>
      <Link 
        to="/contact" 
        onClick={() => handleClick('contact')}
        className={`text-xl transition-colors drop-shadow-lg cursor-pointer font-semibold ${
          location.pathname === '/contact' 
            ? 'text-purple-200' 
            : 'text-white hover:text-purple-200'
        }`}
      >
        CONTACT
      </Link>
    </div>
  );
};

export default NavbarContent; 