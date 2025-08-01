import React from 'react';
import { Link } from 'react-router-dom';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaHero from '../components/MVFarmaHero';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';
import { Flower2, TreePine } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      <MVFarmaHero />
      
      {/* Product Preview Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-accent">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Naše medy</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Objevte chuť čisté přírody v našich medech z Českomoravské vrchoviny
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <ScrollAnimation animation="slide-in-left">
              <Link to="/medy-a-vcely" className="group block">
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center p-4">
                    <img 
                      src="/lovable-uploads/be0b432f-05c0-4dfe-992b-553e9168d15c.png"
                      alt="Květový med"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Květový med</h3>
                    <p className="text-muted-foreground mb-4">
                      Jemný a voňavý med z různorodých květů našich luk
                    </p>
                    <div className="text-2xl font-bold text-primary">Od 180 Kč</div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right" delay={100}>
              <Link to="/medy-a-vcely" className="group block">
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent to-secondary flex items-center justify-center p-4">
                    <img 
                      src="/lovable-uploads/f163cc3d-d72e-4c0b-9314-3eb754531fae.png"
                      alt="Medovicový med"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Medovicový med</h3>
                    <p className="text-muted-foreground mb-4">
                      Tmavý med s bohatou chutí z lesních medoviček
                    </p>
                    <div className="text-2xl font-bold text-primary">Od 220 Kč</div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          </div>

          {/* CTA Section */}
          <ScrollAnimation animation="fade-in">
            <div className="text-center bg-card/50 p-8 md:p-12 rounded-lg border border-border">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Chcete se dozvědět více?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Navštivte naši farmu nebo si přečtěte více o našem včelařství
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/o-nas"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
                >
                  O naší farmě
                </Link>
                <Link 
                  to="/blog"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
                >
                  Náš blog
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default HomePage;