import React, { useState } from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    toast({
      title: "Zpráva odeslána!",
      description: "Děkujeme za vaši zprávu. Ozveme se vám co nejdříve.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/1839b982-5e8a-4e50-a8e5-65b9733411f4.png')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Kontaktujte nás
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Rádi odpovíme na vaše dotazy a těšíme se na setkání s vámi
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <ScrollAnimation animation="slide-in-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                  Kde nás najdete
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Adresa</h3>
                      <p className="text-muted-foreground">
                        MVFarma<br />
                        503 41 Nový Bydžov
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Telefon</h3>
                      <p className="text-muted-foreground">+420 777 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                      <p className="text-muted-foreground">info@mvfarma.cz</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-primary w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Otevírací doba</h3>
                      <p className="text-muted-foreground">
                        Po - Pá: 8:00 - 17:00<br />
                        So: 9:00 - 15:00<br />
                        Ne: Zavřeno
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation animation="slide-in-right">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                  Napište nám
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-medium mb-2">
                      Jméno *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-foreground"
                      placeholder="Vaše jméno"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-foreground"
                      placeholder="vas@email.cz"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground font-medium mb-2">
                      Zpráva *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-foreground resize-vertical"
                      placeholder="Vaše zpráva..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg"
                  >
                    Odeslat zprávu
                  </button>
                </form>

              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <MVFarmaFooter />
    </div>
  );
};

export default ContactPage;