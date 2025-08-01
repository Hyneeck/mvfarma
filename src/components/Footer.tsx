
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2D5530] text-white py-12">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8" />
              <span className="font-bold text-xl">Terra Roots</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              From soil to soul - nourishing community one harvest at a time through regenerative organic farming.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-[#C65D00] transition-colors duration-200 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-[#C65D00] transition-colors duration-200 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-[#C65D00] transition-colors duration-200 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#story" className="text-white/80 hover:text-white transition-colors duration-200">Our Story</a></li>
              <li><a href="#produce" className="text-white/80 hover:text-white transition-colors duration-200">CSA Program</a></li>
              <li><a href="#journal" className="text-white/80 hover:text-white transition-colors duration-200">Farm Journal</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors duration-200">Gallery</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors duration-200">Visit Us</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">What We Grow</h4>
            <ul className="space-y-2 text-white/80">
              <li>Seasonal Vegetables</li>
              <li>Fresh Herbs</li>
              <li>Microgreens</li>
              <li>Storage Crops</li>
              <li>Cover Crop Seeds</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span className="text-white/80 text-sm">Bend, Oregon</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span className="text-white/80 text-sm">(541) 555-FARM</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span className="text-white/80 text-sm">info@terraroots.farm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Terra Roots Organic Farm. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">Organic Certification</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
