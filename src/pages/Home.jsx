import React from 'react';
import HomeHero from '../components/Home/HomeHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeHero />
      <AboutMe />
      <MyToolkit />
    </div>
  );
};

export default Home; 