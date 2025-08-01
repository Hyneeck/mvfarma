import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const MVFarmaFooter = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-5 max-w-[1200px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">MV</span>
              </div>
              <span className="text-xl font-bold text-primary">MVFarma</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Rodinné včelařství z Českomoravské vrchoviny. Kvalitní med s láskou k přírodě a včelám.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navigace</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Domů</Link></li>
              <li><Link to="/o-nas" className="text-muted-foreground hover:text-primary transition-colors text-sm">O nás</Link></li>
              <li><Link to="/medy-a-vcely" className="text-muted-foreground hover:text-primary transition-colors text-sm">Medy a včely</Link></li>
              <li><Link to="/fotogalerie" className="text-muted-foreground hover:text-primary transition-colors text-sm">Fotogalerie</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link to="/kontakt" className="text-muted-foreground hover:text-primary transition-colors text-sm">Kontakt</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Naše produkty</h4>
            <ul className="space-y-2">
              <li><Link to="/medy-a-vcely" className="text-muted-foreground hover:text-primary transition-colors text-sm">Květový med</Link></li>
              <li><Link to="/medy-a-vcely" className="text-muted-foreground hover:text-primary transition-colors text-sm">Medovicový med</Link></li>
              <li><Link to="/medy-a-vcely" className="text-muted-foreground hover:text-primary transition-colors text-sm">Včelí vosk</Link></li>
              <li><Link to="/medy-a-vcely" className="text-muted-foreground hover:text-primary transition-colors text-sm">Propolis</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Nový Bydžov<br />
                  Českomoravská vrchovina
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+420 777 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@mvfarma.cz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 MVFarma. Všechna práva vyhrazena.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MVFarmaFooter;