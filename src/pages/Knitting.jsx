import React from 'react';
import KnittingHero from '../components/HobbyHeroes/KnittingHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Projects from '../components/Home/Projects';
import ContactMe from '../components/Home/ContactMe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Knitting = () => {
  return (
    <div className="knitting-page">
      <Navbar />
      <KnittingHero />
      <AboutMe />
      <MyToolkit />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Knitting;