import React from 'react';
import CodingHero from '../components/HobbyHeroes/CodingHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Projects from '../components/Home/Projects';
import ContactMe from '../components/Home/ContactMe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Coding = () => {
  return (
    <div className="coding-page">
      <Navbar />
      <CodingHero />
      <AboutMe />
      <MyToolkit />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Coding;