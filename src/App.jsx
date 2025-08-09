import React, { useEffect, useRef, useState } from 'react';
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

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function CustomCursor() {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const animate = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.6);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.6);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - 16}px, ${pos.current.y - 16}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);
    const clickables = document.querySelectorAll('button, a');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });
    return () => {
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-8 h-8 z-[9999] pointer-events-none rounded-full border border-white transition-all duration-150 mix-blend-difference ${hovered ? 'scale-150 bg-white' : 'bg-transparent'}`}
      style={{ willChange: 'transform' }}
    />
  );
}

function App() {
  return (
    <Router>
      <div className="font-poppins">
        {/* CustomCursor removed */}
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
