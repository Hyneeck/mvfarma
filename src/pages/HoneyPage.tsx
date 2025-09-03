import React from 'react';
import { Link } from 'react-router-dom';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import LazyImage from '../components/LazyImage';
import { Flower2, TreePine, Heart, Leaf, Award } from 'lucide-react';

const HoneyPage = () => {
  const honeyTypes = [
    {
      title: "Jarní květový med",
      description: "Květový med z jarních květů z luk a zahrad, má světlou barvu a jemnější chuť než letní.",
      icon: Flower2,
      price: "200 Kč/950g",
      features: ["Jemná sladká chuť", "Světlá barva", "Rychlá krystalizace"]
    },
    {
      title: "Letní květový med",
      description: "Květový med z letní sklizně zejména z luk a lesů, má lehce tmavší barvu než jarní. Obsahuje podíl medovice",
      icon: TreePine,
      price: "220 Kč/950g",
      features: ["Pikantnější chuť", "Tmavší barva", "Dlouhá trvanlivost"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Medy a včely - MVFarma | Květový a medovicový med z tradičního včelařství"
        description="Objevte kvalitní med z MVFarma - jarní a letní květový med z 30 úlů v Českomoravské vrchovině. Tradiční výroba, šetrné stáčení."
        keywords="jarní květový med, letní květový med, medovicový med, včelařství, MVFarma, med z lesa, med z luk, český med, tradiční výroba"
        url="https://mvfarma.cz/medy-a-vcely"
        type="product"
      />
      <StructuredData 
        type="Product" 
        data={{
          name: "Květový med MVFarma",
          description: "Kvalitní květový med z tradičního včelařství",
          brand: {
            "@type": "Brand",
            name: "MVFarma"
          },
          offers: [
            {
              "@type": "Offer",
              price: "200",
              priceCurrency: "CZK",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition"
            }
          ],
          image: "https://mvfarma.cz/lovable-uploads/honey-jar-optimized.webp"
        }}
      />
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/hero-background.webp')"}}>
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
                        <LazyImage 
                          src={index === 0 ? "/lovable-uploads/spring-honey-real.webp" : "/lovable-uploads/summer-honey-real.webp"}
                          alt={index === 0 ? "Jarní květový med z MVFarma - světlý med z jarních květů" : "Letní květový med z MVFarma - tmavší med z letní sklizně"}
                          className="max-w-full max-h-full object-cover"
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
                    <ul className="space-y-2 mb-6">
                      {honey.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-primary">{honey.price}</div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          
          {/* Order button */}
          <div className="text-center mt-16">
            <Link 
              to="/kontakt"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg inline-block"
            >
              Objednávky přijímáme přes email
            </Link>
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