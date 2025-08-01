import React from 'react';
import { Heart, Leaf, Award } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const MVFarmaHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent to-secondary">
      <div className="absolute inset-0 bg-primary/10"></div>
      
      <div className="container mx-auto px-5 relative z-10 text-center">
        <ScrollAnimation animation="fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Vítejte na MVFarma
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
              Z úlu rovnou k vám - čerstvý český med od rodinného včelařství
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Tradice, kvalita a láska k přírodě v každé lžičce našeho medu. 
              Objevte čistou chuť Českých luk a lesů.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-in-left" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <Heart className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">S láskou</h3>
              <p className="text-muted-foreground">Každý úl spravujeme s péčí a respektem k včelám</p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <Leaf className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Přirozeně</h3>
              <p className="text-muted-foreground">Bez chemie a umělých přísad, jen čistá příroda</p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <Award className="text-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Kvalitně</h3>
              <p className="text-muted-foreground">Tradiční postupy pro nejlepší chuť a výživu</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg">
              O naší farmě
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg">
              Náš blog
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MVFarmaHero;