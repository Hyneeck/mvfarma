import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import LazyImage from '../components/LazyImage';

// Lazy load non-critical components to reduce initial bundle
const MVFarmaHeader = lazy(() => import('../components/MVFarmaHeader'));
const MVFarmaHero = lazy(() => import('../components/MVFarmaHero'));
const MVFarmaFooter = lazy(() => import('../components/MVFarmaFooter'));
const ScrollAnimation = lazy(() => import('../components/ScrollAnimation'));

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="MVFarma - Kvalitní med z tradičního včelařství | Praha"
        description="MVFarma nabízí kvalitní med z čisté přírody Českomoravské vrchoviny pro Prahu a okolí. Květové a medovicové medy z 30 úlů. Rodinná tradice od roku 1956."
        keywords="med, včelařství, MVFarma, medovicový med, květový med, Praha, rodinná tradice, český med, med Praha"
        url="https://mvfarma.cz"
        type="website"
      />
      <StructuredData 
        type="LocalBusiness"
        data={{
          name: "MVFarma",
          description: "Rodinné včelařství s tradicí od roku 1956",
          url: "https://mvfarma.cz",
          telephone: "+420 730 540 072",
          email: "info@mvfarma.cz",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nový Bydžov",
            addressLocality: "Nový Bydžov",
            addressRegion: "Hradec Králové",
            postalCode: "504 01",
            addressCountry: "CZ"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 50.2406,
            longitude: 15.4853
          },
          openingHours: "Mo-Fr 08:00-17:00",
          priceRange: "200-300 CZK",
          image: "https://mvfarma.cz/lovable-uploads/hero-background.webp",
          sameAs: [
            "https://www.facebook.com/mvfarma",
            "https://www.instagram.com/mvfarma"
          ]
        }}
      />
      <Suspense fallback={<div className="h-20 bg-background"></div>}>
        <MVFarmaHeader />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
        <MVFarmaHero />
      </Suspense>
      
      {/* Product Preview Section */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-accent">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <Suspense fallback={<div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Naše medy</h2></div>}>
            <ScrollAnimation animation="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Naše medy</h2>
              </div>
            </ScrollAnimation>
          </Suspense>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Suspense fallback={<div className="bg-card rounded-lg border border-border overflow-hidden h-96 animate-pulse"></div>}>
              <ScrollAnimation animation="slide-in-left">
              <Link to="/medy-a-vcely" className="group block">
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center p-4">
                     <LazyImage 
                       src="/lovable-uploads/honey-jar-400.webp"
                       srcSet="/lovable-uploads/honey-jar-400.webp 400w, /lovable-uploads/honey-jar-800.webp 800w"
                       sizes="(max-width: 768px) 100vw, 50vw"
                       alt="Jarní květový med z MVFarma - světlý med z jarních květů"
                        className="max-w-full max-h-full object-cover"
                        priority={true}
                     />
                   </div>
                   <div className="p-6">
                     <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Jarní květový med</h3>
                     <p className="text-muted-foreground mb-4">
                       Světlý med z jarních květů z luk a zahrad
                     </p>
                    <div className="text-2xl font-bold text-primary">200 Kč/950g</div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
            </Suspense>

            <Suspense fallback={<div className="bg-card rounded-lg border border-border overflow-hidden h-96 animate-pulse"></div>}>
              <ScrollAnimation animation="slide-in-right" delay={100}>
              <Link to="/medy-a-vcely" className="group block">
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent to-secondary flex items-center justify-center p-4">
                     <LazyImage 
                       src="/lovable-uploads/cf307c39-af45-4ec9-aef0-5c892a35a724.png"
                       alt="Letní květový med z MVFarma - tmavší med z letní sklizně"
                       className="max-w-full max-h-full object-cover"
                     />
                   </div>
                   <div className="p-6">
                     <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Letní květový med</h3>
                     <p className="text-muted-foreground mb-4">
                       Květový med z letní sklizně zejména z luk a lesů
                     </p>
                    <div className="text-2xl font-bold text-primary">200 Kč/950g</div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
            </Suspense>
          </div>

          {/* CTA Section */}
          <Suspense fallback={<div className="text-center bg-card/50 p-8 md:p-12 rounded-lg border border-border h-64 animate-pulse"></div>}>
            <ScrollAnimation animation="fade-in">
            <div className="text-center bg-card/50 p-8 md:p-12 rounded-lg border border-border">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Chcete se dozvědět více?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Navštivte naši farmu nebo si přečtěte více o našem včelařství
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/o-nas"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
                >
                  O naší farmě
                </Link>
                <Link 
                  to="/blog"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
                >
                  Náš blog
                </Link>
              </div>
            </div>
          </ScrollAnimation>
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<div className="bg-muted h-96"></div>}>
        <MVFarmaFooter />
      </Suspense>
    </div>
  );
};

export default HomePage;