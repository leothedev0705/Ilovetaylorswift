import React from 'react';
import ProjectsComponent from '../components/Home/Projects';
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <div className="projects-page">
      <Navbar />
      <ProjectsComponent />
    </div>
  );
};

export default Projects; 