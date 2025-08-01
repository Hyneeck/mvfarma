import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const MVFarmaHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat saturate-150" style={{backgroundImage: "url('/lovable-uploads/1839b982-5e8a-4e50-a8e5-65b9733411f4.png')"}}>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-5 relative z-10 text-center">
        <ScrollAnimation animation="fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-100 mb-6">
              Vítejte na MVFarma
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
              Poctivý med z Českomoravské vrchoviny, s úctou k přírodě a včelám
            </p>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animation="fade-in" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/o-nas"
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
            >
              O naší farmě
            </Link>
            <Link 
              to="/medy-a-vcely"
              className="border-2 border-amber-600 text-amber-100 px-8 py-4 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
            >
              Naše produkty
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MVFarmaHero;