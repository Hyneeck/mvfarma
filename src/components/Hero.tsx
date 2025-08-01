
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5DC] via-[#F5F5DC] to-[#E8E8E0]">
      <div className="container mx-auto px-5 text-center">
        <ScrollAnimation animation="scale-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2D5530] mb-6 leading-tight">
            From Soil to Soul
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in" delay={200}>
          <p className="text-xl md:text-2xl text-[#333] mb-4 max-w-3xl mx-auto leading-relaxed">
            Nourishing community one harvest at a time
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in" delay={400}>
          <p className="text-lg text-[#666] mb-8 max-w-2xl mx-auto">
            Discover fresh, organic vegetables grown with regenerative practices that heal the soil and nourish your family
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-in-left" delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#2D5530] text-white px-8 py-4 rounded-lg hover:bg-[#1a3220] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2 text-lg font-medium min-h-[48px] w-full sm:w-auto">
              Shop CSA Boxes
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-[#2D5530] text-[#2D5530] px-8 py-4 rounded-lg hover:bg-[#2D5530] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-lg font-medium min-h-[48px] w-full sm:w-auto">
              Visit the Farm
            </button>
          </div>
        </ScrollAnimation>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#C65D00]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#2D5530]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
