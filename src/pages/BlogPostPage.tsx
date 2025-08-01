import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Mock blog post data - in real app would fetch based on slug
  const blogPost = {
    title: "Jarní práce ve včelařství",
    date: "15. března 2024",
    readTime: "5 min čtení",
    author: "Rodina MVFarma",
    image: "/placeholder.svg",
    content: `
      <p>Jarní období je pro včelaře jedním z nejdůležitějších období celého roku. Po dlouhé zimě se včely probouzejí a začínají intenzivní aktivitu, která vyžaduje pečlivou pozornost a správné postupy.</p>

      <h2>První jarní prohlídky</h2>
      <p>Jakmile teplota vzduchu přesáhne 15°C a svítí slunce, můžeme provést první jarní prohlídku včelstev. Během této prohlídky kontrolujeme:</p>
      <ul>
        <li>Přítomnost královny a její kladení vajíček</li>
        <li>Množství plodu v různých stádiích</li>
        <li>Zásoby medu a pylu</li>
        <li>Celkový stav včelstva</li>
      </ul>

      <h2>Přikrmování a doplňování zásob</h2>
      <p>Pokud včelstvo nemá dostatečné zásoby, je nutné ho přikrmit. Používáme cukrový roztok v poměru 1:1 nebo speciální včelí krmivo. Důležité je nekrmit v době, kdy včely sbírají nektar z květů.</p>

      <h2>Rozšiřování úlů</h2>
      <p>S růstem včelstva přidáváme nové nástavky. Timing je klíčový - příliš brzy můžeme včely vychladit, příliš pozdě může vést k rojení.</p>

      <h2>Prevence nemocí</h2>
      <p>Jarní období je také časem prevence. Kontrolujeme výskyt roztočů varroa a dalších parazitů. Pravidelně vyměňujeme staré plásty za nové.</p>

      <p>Včelařství je krásné řemeslo, které vyžaduje trpělivost, pozornost a respekt k přírodě. Každé jarní probuzení včelstev je pro nás zázrakem, který se těšíme sdílet s vámi.</p>
    `
  };

  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-accent to-secondary">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <ScrollAnimation animation="fade-in">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
              >
                <ArrowLeft size={20} className="mr-2" />
                Zpět na blog
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                {blogPost.title}
              </h1>
              <div className="flex items-center justify-center text-muted-foreground mb-6 flex-wrap gap-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div>
                  <span>Autor: {blogPost.author}</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-3xl">
          <ScrollAnimation animation="fade-in">
            <div className="aspect-[16/9] bg-gradient-to-br from-accent to-secondary rounded-lg mb-12 overflow-hidden">
              <img 
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={200}>
            <article className="prose prose-lg max-w-none">
              <div 
                className="text-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75'
                }}
              />
            </article>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-in" delay={400}>
            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Líbil se vám tento článek?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Přihlaste se k odběru našeho newsletteru a nezmeškejte žádné novinky ze světa včelařství.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/blog"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
                  >
                    Více článků
                  </Link>
                  <Link 
                    to="/kontakt"
                    className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-center"
                  >
                    Kontaktujte nás
                  </Link>
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

export default BlogPostPage;