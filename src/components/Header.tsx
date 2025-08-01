
import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Leaf className="text-[#2D5530] w-8 h-8" />
            <span className="font-bold text-xl text-[#2D5530]">Terra Roots</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200">Home</a>
            <a href="#story" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200">Our Story</a>
            <a href="#produce" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200">Produce & CSA</a>
            <a href="#journal" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200">Farm Journal</a>
            <a href="#gallery" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200">Gallery</a>
            <a href="#contact" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200">Visit Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#333] hover:text-[#2D5530] transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200 py-2" onClick={toggleMenu}>Home</a>
              <a href="#story" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200 py-2" onClick={toggleMenu}>Our Story</a>
              <a href="#produce" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200 py-2" onClick={toggleMenu}>Produce & CSA</a>
              <a href="#journal" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200 py-2" onClick={toggleMenu}>Farm Journal</a>
              <a href="#gallery" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200 py-2" onClick={toggleMenu}>Gallery</a>
              <a href="#contact" className="text-[#333] hover:text-[#2D5530] transition-colors duration-200 py-2" onClick={toggleMenu}>Visit Us</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
