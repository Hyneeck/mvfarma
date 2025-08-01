import React from 'react';
import { Users, MapPin, Clock, Heart } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const MVFarmaStory = () => {
  return (
    <section id="o-nas" className="py-[clamp(2rem,6vw,6rem)] bg-accent">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Náš příběh</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Rodinná tradice, která spojuje generace v lásce k včelám a přírodě
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimation animation="slide-in-left">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <div className="text-center text-primary-foreground p-8">
                <h3 className="text-2xl font-bold mb-4">Naše včelnice</h3>
                <p className="text-lg opacity-90">Rozkvetlé louky Nového Bydžova</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-in-right">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Tradice od roku 1990
              </h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Naše včelařství vzniklo z lásky k přírodě a chuti sdílet s ostatními 
                to nejlepší, co nám včely dokážou dát. Začínali jsme s několika úly 
                a postupně jsme vyrostli na rodinnou farmu s 30 včelstvy.
              </p>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Věříme v tradiční postupy, šetrné nakládání s přírodou a transparentnost. 
                Každý zákazník může navštívit naši farmu a vidět, jak pracujeme.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Včelstev</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">33</div>
                  <div className="text-sm text-muted-foreground">Let zkušeností</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <MapPin className="text-primary w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Nový Bydžov</h4>
              <p className="text-muted-foreground text-sm">Krásná krajina Východních Čech</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <Users className="text-primary w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Rodinná farma</h4>
              <p className="text-muted-foreground text-sm">Generace zkušeností a tradice</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <Clock className="text-primary w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Celý rok</h4>
              <p className="text-muted-foreground text-sm">Péče o včely ve všech sezónach</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <Heart className="text-primary w-12 h-12 mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">S láskou</h4>
              <p className="text-muted-foreground text-sm">Každý úl je pro nás důležitý</p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in">
          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Naše hodnoty
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="text-xl font-bold text-foreground mb-3">Příroda</h4>
                <p className="text-muted-foreground">
                  Respektujeme přirozené cykly a pracujeme v souladu s přírodou
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-foreground mb-3">Kvalita</h4>
                <p className="text-muted-foreground">
                  Nikdy neděláme kompromisy v kvalitě našich produktů
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-foreground mb-3">Tradice</h4>
                <p className="text-muted-foreground">
                  Používáme osvědčené postupy předávané generacemi
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MVFarmaStory;