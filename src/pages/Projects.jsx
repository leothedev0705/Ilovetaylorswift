import React from 'react';
import ProjectsComponent from '../components/Home/Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="projects-page">
      <Navbar />
      <ProjectsComponent />
      <Footer />
    </div>
  );
};

export default Projects;