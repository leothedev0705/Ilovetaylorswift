import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContent from '../NavbarContent';
import HeroBgImg from '../../assets/HeroBgImg.png';
import LuziAnime from '../../assets/Luzi_Anime.png';

const HomeHero = () => {
  return (
    <section 
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${HeroBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <NavbarContent />
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 flex items-center justify-between max-w-7xl relative z-10">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-white z-10 pr-8">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-cursive text-white mb-4 drop-shadow-2xl whitespace-nowrap">
              Luziana Dmello
            </h1>
            <p className="text-4xl md:text-6xl text-white mb-8 drop-shadow-lg">
              is a Designer
            </p>
          </div>
          
          <div className="flex items-start space-x-12">
            <div className="relative">
              <div className="w-1 h-40 bg-white drop-shadow-lg absolute left-0"></div>
              <div className="flex flex-col justify-end h-40 ml-4">
                <div className="flex flex-col space-y-2">
                  <span className="text-white text-3xl drop-shadow-lg">who</span>
                  <span className="text-white text-3xl drop-shadow-lg">likes</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/painting" 
                className="text-white text-3xl drop-shadow-lg hover:text-purple-200 transition-colors cursor-pointer"
              >
                PAINTING
              </Link>
              <Link 
                to="/calligraphy" 
                className="text-white text-3xl drop-shadow-lg hover:text-purple-200 transition-colors cursor-pointer"
              >
                CALLIGRAPHY
              </Link>
              <Link 
                to="/coding" 
                className="text-white text-3xl drop-shadow-lg hover:text-purple-200 transition-colors cursor-pointer"
              >
                CODING
              </Link>
              <Link 
                to="/knitting" 
                className="text-white text-3xl drop-shadow-lg hover:text-purple-200 transition-colors cursor-pointer"
              >
                KNITTING
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Anime Character */}
        <div className="flex-1 flex justify-center items-center min-h-screen">
          <img 
            src={LuziAnime} 
            alt="Luzi Anime Character" 
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

export default HomeHero; 