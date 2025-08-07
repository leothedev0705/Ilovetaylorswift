import React from 'react';
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 relative">
      <Navbar />
      <div className="py-16">
        <div className="container mx-auto px-8">
          <h1 className="text-5xl md:text-7xl font-cursive text-gray-800 mb-12 text-center">
            My Projects
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Portfolio Website</h3>
                <p className="text-gray-600 mb-4">A modern portfolio built with React and Tailwind CSS</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">E-commerce App</h3>
                <p className="text-gray-600 mb-4">A full-stack e-commerce platform with modern UI</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-400"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">UI Design System</h3>
                <p className="text-gray-600 mb-4">A comprehensive design system for web applications</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Figma</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 