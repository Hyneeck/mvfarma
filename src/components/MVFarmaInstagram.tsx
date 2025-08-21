import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const MVFarmaInstagram = () => {
  const instagramPosts = [
    {
      image: "/lovable-uploads/c2c6f111-8b0d-40b0-94ac-b52e9992d935.png",
      alt: "Včelí úly v přírodě"
    },
    {
      image: "/lovable-uploads/becb71bc-a935-453e-99e1-ed42b99576c1.png", 
      alt: "Čerstvý med z úlu"
    },
    {
      image: "/lovable-uploads/54f5fbc3-f416-48e1-a918-3d7af5366e79.png",
      alt: "Včelařská práce"
    },
    {
      image: "/lovable-uploads/77b2b6bc-faaf-44e5-babe-ff29dd4a5a49.png",
      alt: "Včely na plástech"
    },
    {
      image: "/lovable-uploads/97d77a5f-2635-4ebe-84d3-6931c7d78f17.png",
      alt: "Květy a včely"
    },
    {
      image: "/lovable-uploads/c4f5cce0-3927-4ce6-bf80-160570c8965d.png",
      alt: "Včelařské produkty"
    }
  ];

  return (
    <section className="py-[clamp(2rem,6vw,6rem)] bg-muted/30">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Sledujte nás na Instagramu
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Každodenní život včelařů, krásné snímky z přírody a naše včelí produkty.
              Přidejte se k naší komunitě milovníků medu a včel.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <ScrollAnimation key={index} animation="fade-in" delay={index * 100}>
              <div className="aspect-square overflow-hidden rounded-lg group cursor-pointer hover:shadow-lg transition-all duration-300">
                <img 
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in">
          <div className="text-center">
            <a 
              href="https://instagram.com/mvfarma_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
            >
              <Instagram className="w-6 h-6" />
              Sledovat @mvfarma_
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MVFarmaInstagram;