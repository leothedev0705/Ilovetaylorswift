import React from 'react';
import HomeHero from '../components/Home/HomeHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Projects from '../components/Home/Projects';
import ContactMe from '../components/Home/ContactMe';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home pb-32">
      <Navbar />
      <HomeHero />
      <AboutMe />
      <MyToolkit />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home; 