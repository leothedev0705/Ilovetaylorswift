import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 relative">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-cursive text-gray-800 mb-8">
            About Me
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              I'm Luziana Dmello, a passionate designer and developer who loves creating beautiful digital experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Skills</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• UI/UX Design</li>
                  <li>• Web Development</li>
                  <li>• Graphic Design</li>
                  <li>• Digital Art</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Interests</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Painting</li>
                  <li>• Calligraphy</li>
                  <li>• Coding</li>
                  <li>• Knitting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 