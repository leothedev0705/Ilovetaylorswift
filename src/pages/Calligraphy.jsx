import React from 'react';
import CalligraphyHero from '../components/HobbyHeroes/CalligraphyHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Projects from '../components/Home/Projects';
import Navbar from '../components/Navbar';

const Calligraphy = () => {
  return (
    <div className="calligraphy-page">
      <Navbar />
      <CalligraphyHero />
      <AboutMe />
      <MyToolkit />
      <Projects />
    </div>
  );
};

export default Calligraphy; 