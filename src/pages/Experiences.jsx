import React from 'react';
import Navbar from '../components/Navbar';

const Experiences = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 relative">
      <Navbar />
      <div className="py-16">
        <div className="container mx-auto px-8">
          <h1 className="text-5xl md:text-7xl font-cursive text-gray-800 mb-12 text-center">
            My Experiences
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">UI/UX Designer</h3>
                    <p className="text-purple-600 font-semibold">Tech Company • 2023 - Present</p>
                  </div>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                    Current
                  </span>
                </div>
                <p className="text-gray-600">
                  Leading design initiatives for web and mobile applications, creating user-centered experiences 
                  that drive engagement and satisfaction.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Frontend Developer</h3>
                    <p className="text-purple-600 font-semibold">Startup • 2022 - 2023</p>
                  </div>
                  <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                    1 Year
                  </span>
                </div>
                <p className="text-gray-600">
                  Built responsive web applications using React and modern CSS frameworks, 
                  collaborating with design and backend teams.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Graphic Designer</h3>
                    <p className="text-purple-600 font-semibold">Creative Agency • 2021 - 2022</p>
                  </div>
                  <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                    1 Year
                  </span>
                </div>
                <p className="text-gray-600">
                  Created visual designs for brands, including logos, marketing materials, 
                  and digital assets for various clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences; 