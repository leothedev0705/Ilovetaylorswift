import React from 'react';
import KnittingHero from '../components/HobbyHeroes/KnittingHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Projects from '../components/Home/Projects';
import Navbar from '../components/Navbar';

const Knitting = () => {
  return (
    <div className="knitting-page">
      <Navbar />
      <KnittingHero />
      <AboutMe />
      <MyToolkit />
      <Projects />
    </div>
  );
};

export default Knitting; 