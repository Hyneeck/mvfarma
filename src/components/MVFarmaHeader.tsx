import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const MVFarmaHeader = () => {
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
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Hexagon className="text-primary w-8 h-8 fill-current" />
            <span className="font-bold text-xl text-primary">MVFarma</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-200">Domů</a>
            <a href="#o-nas" className="text-foreground hover:text-primary transition-colors duration-200">O nás</a>
            <a href="#medy-a-vcely" className="text-foreground hover:text-primary transition-colors duration-200">Medy a včely</a>
            <a href="#fotogalerie" className="text-foreground hover:text-primary transition-colors duration-200">Fotogalerie</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors duration-200">Blog</a>
            <a href="#kontakt" className="text-foreground hover:text-primary transition-colors duration-200">Kontakt</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>Domů</a>
              <a href="#o-nas" className="text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>O nás</a>
              <a href="#medy-a-vcely" className="text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>Medy a včely</a>
              <a href="#fotogalerie" className="text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>Fotogalerie</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>Blog</a>
              <a href="#kontakt" className="text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>Kontakt</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MVFarmaHeader;