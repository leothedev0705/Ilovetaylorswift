import React from 'react';
import HomeHero from '../components/Home/HomeHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Projects from '../components/Home/Projects';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeHero />
      <AboutMe />
      <MyToolkit />
      <Projects />
    </div>
  );
};

export default Home; 