import React from 'react';
import { Instagram, Phone, Mail, MapPin, Heart, ArrowUp, Scissors } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  // Pick top 5 services for footer links
  const footerServices = SERVICES.slice(0, 6);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-stone-200 py-16 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gold/10">
          
          {/* Column 1: Brand Info (Spans 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-[2px] text-white uppercase">
                Gargi <span className="text-gold font-sans text-sm font-normal tracking-[2px] ml-1">Tailor</span>
              </span>
              <span className="text-[9px] tracking-[3px] font-sans text-gold uppercase leading-none mt-1">
                By Janak Kapadiwala
              </span>
            </div>
            
            <p className="font-sans text-stone-400 text-xs leading-relaxed max-w-sm font-light">
              Premium ladies tailoring boutique specializing in custom blouse fittings, intricate bridal embroideries, salwar suits, and beautiful ethnic coordinates in Surat. We stitch fits that define your confidence.
            </p>
            
            {/* Social Connects */}
            <div className="flex gap-4 pt-2">
              <a
                href={`https://www.instagram.com/${BUSINESS_INFO.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold bg-transparent rounded-none transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="h-8 w-8 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold bg-transparent rounded-none transition-colors duration-300"
                aria-label="Call Owner"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (Spans 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-xs font-bold tracking-[2px] text-gold uppercase">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs text-stone-400 hover:text-gold transition-colors duration-200 font-light"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Specialized Services (Spans 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-xs font-bold tracking-[2px] text-gold uppercase">Our Offerings</h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="font-sans text-xs text-stone-400 hover:text-gold transition-colors duration-200 flex items-center gap-2 font-light"
                  >
                    <span className="h-[1px] w-1.5 bg-gold" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Contact Details (Spans 2) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-serif text-xs font-bold tracking-[2px] text-gold uppercase">Contact Info</h4>
            <ul className="space-y-3 font-sans text-xs text-stone-400 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Zampa Bazar, Surat</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-gold">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-stone-500 font-sans text-xs gap-4">
          <p>© {new Date().getFullYear()} Gargi Ladies Tailor. All Rights Reserved. Crafted with <Heart className="w-3 inline fill-rose-600 text-rose-600" /> in Surat.</p>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gold/20 hover:border-gold hover:text-charcoal hover:bg-gold text-stone-300 font-sans text-[10px] font-semibold tracking-[2px] uppercase rounded-none transition-all duration-300 group cursor-pointer bg-transparent"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
