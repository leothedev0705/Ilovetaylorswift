import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import Painting from './pages/Painting';
import Calligraphy from './pages/Calligraphy';
import Coding from './pages/Coding';
import Knitting from './pages/Knitting';

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/painting" element={<Painting />} />
          <Route path="/calligraphy" element={<Calligraphy />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/knitting" element={<Knitting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
