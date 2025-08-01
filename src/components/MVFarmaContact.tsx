import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const MVFarmaContact = () => {
  return (
    <section id="kontakt" className="py-[clamp(2rem,6vw,6rem)] bg-accent">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Kontakt</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Navštivte nás na farmě, ochutnejte náš med nebo se prostě přijďte podívat na práci včel. 
              Rádi vás u nás uvidíme!
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimation animation="slide-in-left">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Adresa farmy</h3>
                  <p className="text-muted-foreground">
                    MVFarma<br />
                    Nový Bydžov 503 01<br />
                    Hradec Králové
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Telefon</h3>
                  <p className="text-muted-foreground">+420 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">E-mail</h3>
                  <p className="text-muted-foreground">info@mvfarma.cz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Návštěvy farmy</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Pondělí - Pátek: 9:00 - 17:00</p>
                    <p>Sobota: 9:00 - 15:00</p>
                    <p>Neděle: Po domluvě</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-in-right">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Napište nám</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                    placeholder="Vaše jméno"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                    placeholder="vas@email.cz"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground resize-none"
                    placeholder="Vaše zpráva..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium"
                >
                  Odeslat zprávu
                </button>
              </form>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-in">
          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Zajímá vás včelařství?
              </h3>
              <p className="text-muted-foreground mb-6">
                Organizujeme pravidelné exkurze pro školy, rodiny i jednotlivce. 
                Ukážeme vám, jak včely žijí a pracují.
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium">
                Objednat exkurzi
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MVFarmaContact;