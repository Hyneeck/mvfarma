import React from 'react';
import { Droplets, Flower2, TreePine, Sparkles } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const MVFarmaProduce = () => {
  const honeyTypes = [
    {
      title: "Medovicový med",
      description: "Tmavý med z lesních stromů s bohatou chutí a vysokým obsahem minerálů",
      icon: TreePine,
      features: ["Vysoký obsah antioxidantů", "Dlouhá trvanlivost", "Ideální na zimu"]
    },
    {
      title: "Květový med",
      description: "Světlý med z lučních květů s jemnou chutí a květinovou vůní",
      icon: Flower2,
      features: ["Jemná chuť", "Rychle krystalizuje", "Perfektní na palačinky"]
    },
    {
      title: "Lipový med",
      description: "Vzácný med s charakteristickou chutí a léčivými účinky",
      icon: Sparkles,
      features: ["Léčivé účinky", "Výjimečná chuť", "Limitovaná edice"]
    },
    {
      title: "Pastovaný med",
      description: "Krémový med snadno roztíratelný, ideální na chleba",
      icon: Droplets,
      features: ["Krémová konzistence", "Neroztéká se", "Oblíbený u dětí"]
    }
  ];

  return (
    <section id="medy-a-vcely" className="py-[clamp(2rem,6vw,6rem)] bg-background">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Medy a včely</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Naše včely pracují po celou sezónu, aby vám přinesly nejkvalitnější med. 
              Každý druh má svou jedinečnou chuť a vlastnosti.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {honeyTypes.map((honey, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-br from-accent to-secondary p-8">
                  <honey.icon className="text-primary w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{honey.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{honey.description}</p>
                </div>
                <div className="p-6">
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

        <ScrollAnimation animation="fade-in">
          <div className="bg-gradient-to-r from-accent to-secondary p-8 md:p-12 rounded-lg text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Jak vzniká náš med?
            </h3>
            <p className="text-lg text-foreground mb-8 max-w-3xl mx-auto">
              Od květu k medu - sledujte cestu našeho zlata v 30 úlech rozmístěných 
              po krásné krajině Nového Bydžova.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Sběr nektaru</h4>
                <p className="text-muted-foreground">Včely sbírají nektar z okolních luk a lesů</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Zrání v úle</h4>
                <p className="text-muted-foreground">Med zraje v plástech až 3 týdny</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Šetrné stáčení</h4>
                <p className="text-muted-foreground">Stáčíme za studena pro zachování kvality</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MVFarmaProduce;