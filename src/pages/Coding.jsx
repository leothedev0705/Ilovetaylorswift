import React from 'react';
import Navbar from '../components/Navbar';

const Coding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 relative">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-cursive text-gray-800 mb-8">
            Coding
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              I enjoy building digital solutions and creating interactive web experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Technologies</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• React & Next.js</li>
                  <li>• JavaScript/TypeScript</li>
                  <li>• HTML/CSS/Tailwind</li>
                  <li>• Node.js & Express</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Projects</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Portfolio Websites</li>
                  <li>• E-commerce Platforms</li>
                  <li>• Web Applications</li>
                  <li>• UI/UX Components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding; 