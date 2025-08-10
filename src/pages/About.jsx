import React from 'react';
import AboutMe from '../components/Home/AboutMe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default About;