import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PaintingBgImg from '../../assets/Painting_Bg.png';
import PaintingGalImg from '../../assets/Painting_Gal.png';

const PaintingHero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Designer', 'Developer', 'Vibe Coder'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    const currentWord = texts[currentIndex];
    
    if (isDeleting) {
      // Deleting effect
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, deletingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      // Typing effect
      if (currentText === currentWord) {
        // Pause before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        
        return () => clearTimeout(timeout);
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${PaintingBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Main Content */}
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl relative z-10">
        {/* Mobile Layout - Character at Top */}
        <div className="lg:hidden flex-1 flex justify-center items-center mb-8">
          <img 
            src={PaintingGalImg} 
            alt="Painting Character" 
            style={{
              height: '50vh',
              width: 'auto',
              maxWidth: 'none',
              objectFit: 'contain'
            }}
            className="object-contain"
          />
        </div>

        {/* Text Content - Mobile First */}
        <div className="flex-1 text-white z-10 text-center lg:text-left lg:pr-8">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-cursive text-white mb-4 drop-shadow-2xl whitespace-nowrap">
              Luziana Dmello
            </h1>
            <p className="text-2xl md:text-4xl lg:text-6xl text-white mb-8 drop-shadow-lg">
              is a {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="relative">
              <div className="w-1 h-32 lg:h-40 bg-white drop-shadow-lg absolute left-0"></div>
              <div className="flex flex-col justify-end h-32 lg:h-40 ml-4">
                <div className="flex flex-col space-y-2">
                  <span className="text-white text-2xl lg:text-3xl drop-shadow-lg">who</span>
                  <span className="text-white text-2xl lg:text-3xl drop-shadow-lg">likes</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-white text-2xl lg:text-3xl drop-shadow-lg hover:text-purple-200 transition-colors cursor-pointer"
              >
                HOME
              </Link>
              <Link 
                to="/calligraphy" 
                className="text-white text-2xl lg:text-3xl drop-shadow-lg hover:text-purple-200 transition-colors cursor-pointer"
              >
                CALLIGRAPHY
              </Link>
              <Link 
                to="/coding" 
                className="text-white text-2xl lg:text-3xl drop-shadow-lg hover:text-purple-200 transition-colors cursor-pointer"
              >
                CODING
              </Link>
              <Link 
                to="/knitting" 
                className="text-white text-2xl lg:text-3xl drop-shadow-lg hover:text-purple-200 transition-colors cursor-pointer"
              >
                KNITTING
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Character on Right */}
        <div className="hidden lg:flex flex-1 justify-center items-center min-h-screen">
          <img 
            src={PaintingGalImg} 
            alt="Painting Character" 
            style={{
              height: '80vh',
              width: 'auto',
              maxWidth: 'none',
              objectFit: 'contain'
            }}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PaintingHero;
