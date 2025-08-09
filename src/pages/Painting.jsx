import React from 'react';
import PaintingHero from '../components/HobbyHeroes/PaintingHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Projects from '../components/Home/Projects';
import Navbar from '../components/Navbar';

const Painting = () => {
  return (
    <div className="painting-page">
      <Navbar />
      <PaintingHero />
      <AboutMe />
      <MyToolkit />
      <Projects />
    </div>
  );
};

export default Painting; 