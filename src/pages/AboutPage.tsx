import React from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/1839b982-5e8a-4e50-a8e5-65b9733411f4.png')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Naše Farma
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Poznajte příběh naší rodinné farmy a našich včel
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollAnimation animation="slide-in-left">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <h3 className="text-2xl font-bold mb-4">Naše včelnice</h3>
                  <p className="text-lg opacity-90">Rozkvetlé louky Českomoravské vrchoviny</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Náš příběh
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Naše včelařská cesta začala před mnoha lety, kdy jsme se rozhodli navázat na rodinnou tradici včelaření. S každým rokem rosteme, učíme se od včel a zdokonalujeme naše postupy.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Dnes se staráme o desítky včelstev v čistém prostředí Českomoravské vrchoviny, kde včely nalézají pestrou paletu květů a rostlin pro tvorbu toho nejkvalitnějšího medu.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Včelstev</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary">30+</div>
                    <div className="text-sm text-muted-foreground">Let zkušeností</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Our Beehives Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollAnimation animation="slide-in-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Naše včelstva
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  V současné době pečujeme o více než 50 včelstev, která jsou rozmístěna na několika stanovištích v čisté přírodě Českomoravské vrchoviny. Každé stanoviště je pečlivě vybráno s ohledem na dostupnost různorodé pastvy pro včely.
                </p>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  Naše úly jsou vyrobeny z kvalitního smrkového dřeva a jsou pravidelně udržovány. Používáme moderní nástavkový systém, který umožňuje šetrnou péči o včelstva a efektivní získávání medu.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <div className="text-center text-primary p-8">
                  <h3 className="text-2xl font-bold mb-4">Naše úly</h3>
                  <p className="text-lg">Moderní včelí domovy</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Our Values Section */}
          <ScrollAnimation animation="fade-in">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12">
                Naše hodnoty
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-foreground mb-3">Příroda</h3>
                  <p className="text-muted-foreground">
                    Respektujeme přirozené cykly a pracujeme v souladu s přírodou
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-foreground mb-3">Kvalita</h3>
                  <p className="text-muted-foreground">
                    Nikdy neděláme kompromisy v kvalitě našich produktů
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-foreground mb-3">Tradice</h3>
                  <p className="text-muted-foreground">
                    Používáme osvědčené postupy předávané generacemi
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default AboutPage;