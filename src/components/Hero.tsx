import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Absolute Background Image with Zoom Motion */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.95 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="w-full h-full relative"
        >
          <img
            src="/src/assets/images/hero_tailor_shop_1782902365647.jpg"
            alt="Gargi Ladies Tailor Luxury Boutique Shop"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Gradients Overlay (Maroon and Gold luxury blend) */}
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-950/95 via-maroon-950/80 to-stone-950/70" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-maroon-950/60" />
        </motion.div>
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left w-full">
        <div className="max-w-3xl">
          {/* Subtle Accent Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/40 bg-maroon/20 backdrop-blur-md mb-8 rounded-none"
          >
            <span className="h-1.5 w-1.5 bg-gold animate-pulse" />
            <span className="font-sans text-[10px] font-semibold tracking-[3px] uppercase text-gold">
              EST. 1989 | SURAT'S PREMIUM BOUTIQUE
            </span>
          </motion.div>

          {/* Elegant Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-wider leading-tight mb-6 uppercase"
          >
            Perfect Stitching <br className="hidden sm:inline" />
            <span className="text-gold">
              for Every Woman
            </span>
          </motion.h1>

          {/* Elegant Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed tracking-wider mb-10 max-w-xl font-light"
          >
            Custom tailoring with precision, style, and elegance. From daily wear to bridal collections by Janak Kapadiwala, we design flawless outfits with premium finishing.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gold text-charcoal hover:bg-transparent hover:text-white border border-gold font-sans text-xs font-semibold tracking-[2px] uppercase rounded-none transition-all duration-300 transform hover:-translate-y-0.5 shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-3 px-8 py-4 border border-white/40 hover:border-gold hover:bg-white hover:text-charcoal bg-transparent text-white font-sans text-xs font-semibold tracking-[2px] uppercase rounded-none transition-all duration-300 transform hover:-translate-y-0.5 shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call Now</span>
            </a>
          </motion.div>

          {/* Decorative Features Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="grid grid-cols-3 gap-6 pt-12 mt-16 border-t border-gold/25 max-w-xl text-left"
          >
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-gold">100%</p>
              <p className="font-sans text-[10px] text-stone-400 tracking-[2px] uppercase font-semibold">Custom Fitting</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-gold">Bespoke</p>
              <p className="font-sans text-[10px] text-stone-400 tracking-[2px] uppercase font-semibold">Bridal Designs</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-gold">Timely</p>
              <p className="font-sans text-[10px] text-stone-400 tracking-[2px] uppercase font-semibold">Deliveries</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Thin Gold Geometric Separator Line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold/40 z-20" />
    </section>
  );
}
