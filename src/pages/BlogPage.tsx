import React from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';
import { Instagram } from 'lucide-react';

const BlogPage = () => {
  const instagramPosts = [
    {
      description: "Jarní práce ve včelařství - první kontrola úlů po zimě",
      image: "/lovable-uploads/0b66bf50-89ff-4f01-bb65-989583bc0630.png"
    },
    {
      description: "Čerstvý med přímo z našich úlů",
      image: "/lovable-uploads/becb71bc-a935-453e-99e1-ed42b99576c1.png"
    },
    {
      description: "Včely při práci na plástech plných medu",
      image: "/lovable-uploads/c2c6f111-8b0d-40b0-94ac-b52e9992d935.png"
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
              Náš Instagram
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
              Sledujte náš každodenní život s včelami
            </p>
            <a 
              href="https://www.instagram.com/mvfarma_?igsh=M2h4anhpMzg2cTlm&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
            >
              <Instagram className="w-6 h-6" />
              Sledovat @mvfarma_
            </a>
          </ScrollAnimation>
        </div>
      </section>

      {/* Instagram Posts Grid */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instagramPosts.map((post, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <a 
                  href="https://www.instagram.com/mvfarma_?igsh=M2h4anhpMzg2cTlm&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-square bg-gradient-to-br from-accent to-secondary relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.description}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-foreground text-center font-medium leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default BlogPage;