import React from 'react';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const MVFarmaBlog = () => {
  const blogPosts = [
    {
      title: "Jak na zimování včel",
      excerpt: "Příprava včelstev na zimu je klíčová pro jejich přežití. Podělíme se o naše osvědčené postupy.",
      date: "15. listopadu 2023",
      readTime: "5 min čtení"
    },
    {
      title: "Proč je med ze středních Čech jedinečný",
      excerpt: "Naše krajina nabízí včelám rozmanitou pastvu. Zjistěte, co dělá náš med tak výjimečný.",
      date: "2. listopadu 2023",
      readTime: "3 min čtení"
    },
    {
      title: "Včely a biodiverzita",
      excerpt: "Jak včely pomáhají udržovat rozmanitost přírody a proč je jejich ochrana tak důležitá.",
      date: "28. října 2023",
      readTime: "4 min čtení"
    }
  ];

  return (
    <section id="blog" className="py-[clamp(2rem,6vw,6rem)] bg-background">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Včelařský blog</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sdílíme s vámi naše znalosti, zkušenosti a lásku k včelařství. 
              Objevte fascinující svět včel a medu.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <ScrollAnimation key={index} animation="slide-in-left" delay={index * 100}>
              <article className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={index === 0 ? "/lovable-uploads/c2c6f111-8b0d-40b0-94ac-b52e9992d935.png" : 
                         index === 1 ? "/lovable-uploads/becb71bc-a935-453e-99e1-ed42b99576c1.png" :
                         "/lovable-uploads/54f5fbc3-f416-48e1-a918-3d7af5366e79.png"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium">
                    Číst více
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in">
          <div className="text-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg">
              Všechny články
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MVFarmaBlog;