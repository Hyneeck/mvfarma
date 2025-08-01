import React from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';
import { Flower2, TreePine, Heart, Leaf, Award } from 'lucide-react';

const HoneyPage = () => {
  const honeyTypes = [
    {
      title: "Medovicový med",
      description: "Tmavý med z lesních stromů s bohatou chutí a vysokým obsahem minerálů. Ideální pro zimní měsíce a posílení imunity.",
      icon: TreePine,
      price: "Od 220 Kč",
      features: ["Vysoký obsah antioxidantů", "Dlouhá trvanlivost", "Ideální na zimu"]
    },
    {
      title: "Květový med",
      description: "Světlý med z lučních květů s jemnou chutí a květinovou vůní. Perfektní pro každodenní užívání.",
      icon: Flower2,
      price: "Od 180 Kč",
      features: ["Jemná chuť", "Rychle krystalizuje", "Perfektní na palačinky"]
    }
  ];

  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/1839b982-5e8a-4e50-a8e5-65b9733411f4.png')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Medy a včely
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Objevte svět našich včel a kvalitních medů z čisté přírody
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Honey Types Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 gap-16">
            {honeyTypes.map((honey, index) => (
              <ScrollAnimation key={index} animation="fade-in" delay={index * 200}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center p-8">
                      <img 
                        src={index === 0 ? "/lovable-uploads/2dbe505c-79e3-44bd-ae07-cf205979b6e1.png" : "/lovable-uploads/436c86ed-192e-4b32-bd4f-3d314897bff6.png"}
                        alt={index === 0 ? "Medovicový med" : "Květový med"}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                      {honey.title}
                    </h2>
                    <p className="text-lg text-foreground mb-6 leading-relaxed">
                      {honey.description}
                    </p>
                    <div className="text-2xl font-bold text-primary mb-6">{honey.price}</div>
                    <ul className="space-y-2">
                      {honey.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How Honey is Made Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-accent">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Jak vzniká náš med?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Od květu k medu - sledujte cestu našeho zlata v úlech rozmístěných po krásné krajině
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Sběr nektaru", description: "Včely sbírají nektar z okolních luk a lesů" },
              { step: "2", title: "Zrání v úle", description: "Med zraje v plástech až 3 týdny" },
              { step: "3", title: "Šetrné stáčení", description: "Stáčíme za studena pro zachování kvality" }
            ].map((process, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <div className="text-center bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Hives Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollAnimation animation="slide-in-left">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/0b66bf50-89ff-4f01-bb65-989583bc0630.png"
                  alt="Včelaři při práci"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Naše úly
                </h2>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Naše včelstva jsou umístěna na pečlivě vybraných stanovištích v čisté přírodě Českomoravské vrchoviny. Každý úl je pravidelně kontrolován a udržován podle nejnovějších včelařských postupů.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Používáme ekologické materiály a šetrné metody, které respektují přirozený životní cyklus včel a zajišťují nejvyšší kvalitu medu.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Fascinating Life of Bees Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-accent">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Fascinující život včel
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Včely jsou úžasní tvorové s komplexní společenskou strukturou. Jeden úl může obsahovat až 80 000 včel pracujících jako jeden organismus.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Královny včel", description: "Každý úl má jednu královnu, která může žít až 5 let" },
              { icon: Leaf, title: "Pracovnice", description: "Dělnice sbírají nektar, stavějí plásty a pečují o mladé" },
              { icon: Award, title: "Trubci", description: "Samci včel, jejichž úkolem je oplodnění nových královen" }
            ].map((bee, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <div className="text-center bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <bee.icon className="text-primary w-16 h-16 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{bee.title}</h3>
                  <p className="text-muted-foreground">{bee.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default HoneyPage;