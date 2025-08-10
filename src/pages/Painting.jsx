import React from 'react';
import PaintingHero from '../components/HobbyHeroes/PaintingHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Projects from '../components/Home/Projects';
import ContactMe from '../components/Home/ContactMe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Painting = () => {
  return (
    <div className="painting-page">
      <Navbar />
      <PaintingHero />
      <AboutMe />
      <MyToolkit />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Painting;