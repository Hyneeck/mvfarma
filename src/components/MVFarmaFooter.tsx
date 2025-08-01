import React from 'react';
import { Hexagon, Mail, Phone, MapPin } from 'lucide-react';

const MVFarmaFooter = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo a popis */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Hexagon className="text-accent w-8 h-8 fill-current" />
              <span className="font-bold text-xl text-background">MVFarma</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-4">
              Rodinné včelařství z Nového Bydžova. Od roku 1990 přinášíme 
              nejkvalitnější český med přímo z našich úlů k vašemu stolu.
            </p>
            <p className="text-accent font-medium">
              "Z úlu rovnou k vám"
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h3 className="font-bold text-background mb-4">Rychlé odkazy</h3>
            <nav className="space-y-2">
              <a href="#home" className="block text-background/80 hover:text-accent transition-colors duration-200">Domů</a>
              <a href="#o-nas" className="block text-background/80 hover:text-accent transition-colors duration-200">O nás</a>
              <a href="#medy-a-vcely" className="block text-background/80 hover:text-accent transition-colors duration-200">Medy a včely</a>
              <a href="#fotogalerie" className="block text-background/80 hover:text-accent transition-colors duration-200">Fotogalerie</a>
              <a href="#blog" className="block text-background/80 hover:text-accent transition-colors duration-200">Blog</a>
              <a href="#kontakt" className="block text-background/80 hover:text-accent transition-colors duration-200">Kontakt</a>
            </nav>
          </div>

          {/* Kontaktní informace */}
          <div>
            <h3 className="font-bold text-background mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">Nový Bydžov 503 01</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">+420 123 456 789</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">info@mvfarma.cz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Spodní lišta */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2023 MVFarma. Všechna práva vyhrazena.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors duration-200">Ochrana osobních údajů</a>
              <a href="#" className="hover:text-accent transition-colors duration-200">Obchodní podmínky</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MVFarmaFooter;