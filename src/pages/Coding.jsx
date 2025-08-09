import React from 'react';
import CodingHero from '../components/HobbyHeroes/CodingHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Projects from '../components/Home/Projects';
import Navbar from '../components/Navbar';

const Coding = () => {
  return (
    <div className="coding-page">
      <Navbar />
      <CodingHero />
      <AboutMe />
      <MyToolkit />
      <Projects />
    </div>
  );
};

export default Coding; 