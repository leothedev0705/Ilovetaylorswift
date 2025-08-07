import React from 'react';
import NavbarContent from './NavbarContent';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-8 py-6">
        <NavbarContent />
      </div>
    </nav>
  );
};

export default Navbar; 