import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="absolute bottom-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          {/* Segmented Navigation Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-full p-1 shadow-lg">
              <div className="flex">
                {/* Home Section */}
                <Link
                  to="/"
                  className="flex-1 text-center py-2 px-4 rounded-full text-gray-800 font-semibold hover:bg-purple-100 transition-all duration-300 text-sm"
                >
                  Home
                </Link>

                {/* About Me Section */}
                <Link
                  to="/about"
                  className="flex-1 text-center py-2 px-4 rounded-full text-gray-800 font-semibold hover:bg-purple-100 transition-all duration-300 text-sm"
                >
                  About Me
                </Link>

                {/* My Projects Section */}
                <Link
                  to="/projects"
                  className="flex-1 text-center py-2 px-4 rounded-full text-gray-800 font-semibold hover:bg-purple-100 transition-all duration-300 text-sm"
                >
                  My Projects
                </Link>

                {/* Book a Call Button */}
                <button
                  onClick={toggleMenu}
                  className="flex-1 bg-black text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-1 text-sm"
                >
                  <span>Book a Call</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sliding Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white bg-opacity-95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Sidebar Content */}
        <div className="pt-20 px-8">
          <div className="space-y-8">
            {/* Navigation Links */}
            <div className="space-y-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className="block text-2xl font-semibold text-gray-800 hover:text-purple-600 transition-colors"
              >
                HOME
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block text-2xl font-semibold text-gray-800 hover:text-purple-600 transition-colors"
              >
                ABOUT ME
              </Link>
              <Link
                to="/projects"
                onClick={toggleMenu}
                className="block text-2xl font-semibold text-gray-800 hover:text-purple-600 transition-colors"
              >
                PROJECTS
              </Link>
              <Link
                to="/experiences"
                onClick={toggleMenu}
                className="block text-2xl font-semibold text-gray-800 hover:text-purple-600 transition-colors"
              >
                EXPERIENCES
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block text-2xl font-semibold text-gray-800 hover:text-purple-600 transition-colors"
              >
                CONTACT
              </Link>
            </div>

            {/* Hobby Links */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-600 mb-4">HOBBIES</h3>
              <div className="space-y-3">
                <Link
                  to="/painting"
                  onClick={toggleMenu}
                  className="block text-lg text-gray-700 hover:text-purple-600 transition-colors"
                >
                  PAINTING
                </Link>
                <Link
                  to="/calligraphy"
                  onClick={toggleMenu}
                  className="block text-lg text-gray-700 hover:text-purple-600 transition-colors"
                >
                  CALLIGRAPHY
                </Link>
                <Link
                  to="/coding"
                  onClick={toggleMenu}
                  className="block text-lg text-gray-700 hover:text-purple-600 transition-colors"
                >
                  CODING
                </Link>
                <Link
                  to="/knitting"
                  onClick={toggleMenu}
                  className="block text-lg text-gray-700 hover:text-purple-600 transition-colors"
                >
                  KNITTING
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar; 