import React from 'react';
import HomeHero from '../components/Home/HomeHero';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeHero />
    </div>
  );
};

export default Home; 