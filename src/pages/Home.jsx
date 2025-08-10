import React from 'react';
import HomeHero from '../components/Home/HomeHero';
import AboutMe from '../components/Home/AboutMe';
import MyToolkit from '../components/Home/MyToolkit';
import Projects from '../components/Home/Projects';
import ContactMe from '../components/Home/ContactMe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeHero />
      <AboutMe />
      <MyToolkit />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;