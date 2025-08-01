import React from 'react';
import { Link } from 'react-router-dom';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      slug: "jarni-prace-ve-vcelarstvim",
      title: "Jarní práce ve včelařství",
      excerpt: "Jakmile se oteplí, včely začínají být aktivnější. Podívejte se, jaké práce nás čekají na jaře a jak se připravujeme na novou sezónu.",
      date: "15. března 2024",
      readTime: "5 min čtení",
      image: "/lovable-uploads/0b66bf50-89ff-4f01-bb65-989583bc0630.png"
    },
    {
      slug: "proc-je-med-tak-zdravy",
      title: "Proč je med tak zdravý?",
      excerpt: "Med není jen sladidlo. Obsahuje mnoho vitamínů, minerálů a antioxidantů. Zjistěte, proč by měl být součástí vaší stravy.",
      date: "28. února 2024",
      readTime: "7 min čtení",
      image: "/lovable-uploads/becb71bc-a935-453e-99e1-ed42b99576c1.png"
    },
    {
      slug: "zimovani-vcel",
      title: "Jak včely přežívají zimu?",
      excerpt: "Zimování včel je fascinující proces. Včely se shromáždí do klubka a společně si udržují teplo. Přečtěte si více o jejich zimní strategii.",
      date: "12. ledna 2024",
      readTime: "6 min čtení",
      image: "/lovable-uploads/c2c6f111-8b0d-40b0-94ac-b52e9992d935.png"
    },
    {
      slug: "druhy-medu-a-jejich-vlastnosti",
      title: "Druhy medů a jejich vlastnosti",
      excerpt: "Každý druh medu má své specifické vlastnosti a chuť. Poradíme vám, jak poznat kvalitní med a k čemu který druh používat.",
      date: "5. prosince 2023",
      readTime: "8 min čtení",
      image: "/lovable-uploads/97d77a5f-2635-4ebe-84d3-6931c7d78f17.png"
    },
    {
      slug: "vcelari-tradice-v-cechach",
      title: "Včelařské tradice v Čechách",
      excerpt: "Včelařství má v Čechách dlouhou tradici. Podívejte se s námi do historie a zjistěte, jak se včelařství vyvíjelo v našem regionu.",
      date: "18. listopadu 2023",
      readTime: "10 min čtení",
      image: "/lovable-uploads/64b3e077-193e-499a-ba35-1b4651181cc2.png"
    },
    {
      slug: "jak-pomoci-vcelam",
      title: "Jak pomoci včelám ve svém okolí?",
      excerpt: "I bez vlastního úlu můžete včelám pomoci. Poradíme vám, jaké rostliny vysadit a jak vytvořit včelám příjemné prostředí.",
      date: "3. října 2023",
      readTime: "4 min čtení",
      image: "/lovable-uploads/54f5fbc3-f416-48e1-a918-3d7af5366e79.png"
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
              Náš blog
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Sdílíme s vámi znalosti o včelách, medu a přírodě
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="group block bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent to-secondary relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                      <span>Číst více</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
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