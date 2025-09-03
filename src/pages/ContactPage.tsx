import React, { useState, lazy, Suspense } from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import { MapPin, Phone, Mail, Clock, HelpCircle } from 'lucide-react';

// Lazy load non-critical components and hooks for better bundle splitting
const ScrollAnimation = lazy(() => import('../components/ScrollAnimation'));
const ContactForm = lazy(() => import('../components/ContactForm'));
const Popover = lazy(() => import('../components/ui/popover').then(module => ({ default: module.Popover })));
const PopoverContent = lazy(() => import('../components/ui/popover').then(module => ({ default: module.PopoverContent })));
const PopoverTrigger = lazy(() => import('../components/ui/popover').then(module => ({ default: module.PopoverTrigger })));

const ContactPage = () => {
  // Lazy load toast functionality to reduce initial bundle
  const handleSubmit = async (formData: { name: string; email: string; message: string }) => {
    // Dynamically import toast only when needed
    const { useToast } = await import("@/components/ui/use-toast");
    const { toast } = useToast();
    
    // In a real app, you would send this data to your backend
    toast({
      title: "Zpráva odeslána!",
      description: "Děkujeme za vaši zprávu. Ozveme se vám co nejdříve.",
    });
  };

  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <Suspense fallback={<div className="opacity-0">Loading...</div>}>
            <ScrollAnimation animation="fade-in">
              <h1 className="contact-hero-title">
                Kontaktujte nás
              </h1>
              <p className="contact-hero-subtitle">
                Rádi odpovíme na vaše dotazy a těšíme se na setkání s vámi
              </p>
            </ScrollAnimation>
          </Suspense>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <Suspense fallback={<div className="h-96 bg-muted/20 rounded-lg animate-pulse"></div>}>
              <ScrollAnimation animation="slide-in-left">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                    Kde nás najdete
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Jméno</h3>
                        <p className="text-muted-foreground">
                          MVFarma<br />
                          Miroslav Tuka a Vlaďka Hartlová <br />
                          Registrační číslo včelaře <br />
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Telefon</h3>
                        <p className="text-muted-foreground">+420 730 540 072</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                        <p className="text-muted-foreground">info@mvfarma.cz</p>
                      </div>
                    </div>

                    
                    {/* Question mark popup - lazy loaded */}
                    <div className="flex items-center gap-2 mt-6">
                      <Suspense fallback={<HelpCircle className="w-5 h-5 text-muted-foreground" />}>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button className="text-muted-foreground hover:text-primary transition-colors">
                              <HelpCircle className="w-5 h-5" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <p className="text-sm">Pokud vás cokoliv zajímá nebo si chcete popovídat o medu a výchově včel, neváhejte se zeptat a napsat nám email.</p>
                          </PopoverContent>
                        </Popover>
                      </Suspense>
                      <span className="text-sm text-muted-foreground">Máte dotazy?</span>
                    </div>
                  </div>

                </div>
              </ScrollAnimation>
            </Suspense>

            {/* Contact Form */}
            <Suspense fallback={<div className="h-96 bg-muted/20 rounded-lg animate-pulse"></div>}>
              <ScrollAnimation animation="slide-in-right">
                <ContactForm onSubmit={handleSubmit} />
              </ScrollAnimation>
            </Suspense>
          </div>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default ContactPage;