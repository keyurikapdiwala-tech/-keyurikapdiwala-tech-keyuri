import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { BUSINESS_INFO } from './data';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Loading animation duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  // Theme Syncing
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // SEO Local Business Structured Schema (JSON-LD)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': BUSINESS_INFO.name,
    'description': 'Premium ladies tailoring business specializing in bridal blouses, princess-cut stitching, designer lehengas, and expert alterations.',
    'image': 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
    'telephone': BUSINESS_INFO.phone,
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'B-2 parekh mahel app near zapa bazar, moti tokish',
      'addressLocality': 'Surat',
      'addressRegion': 'Gujarat',
      'postalCode': '395003',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '21.199127',
      'longitude': '72.825832'
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:00',
        'closes': '20:00'
      }
    ],
    'sameAs': [
      `https://www.instagram.com/${BUSINESS_INFO.instagram}`
    ]
  };

  return (
    <>
      {/* Inject Structured SEO Meta Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Custom Boutique Preloader */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-maroon-950 to-stone-950 text-white select-none"
          >
            <div className="relative flex flex-col items-center gap-6">
              {/* Rotating Gold Scissors & Sparkle */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-20 w-20 rounded-full border border-gold-400/20 bg-gold-400/5 flex items-center justify-center shadow-lg text-gold-400"
                >
                  <Scissors className="w-9 h-9 transform -rotate-45" />
                </motion.div>
                
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-1 -right-1 text-gold-300"
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Luxury Text */}
              <div className="text-center space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-serif text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-200 to-accent-rosegold"
                >
                  Gargi
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="font-sans text-[10px] tracking-widest text-stone-300 uppercase font-medium"
                >
                  Premium Ladies Boutique
                </motion.p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Main Interactive Application */
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col justify-between"
          >
            {/* Navigation Header */}
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            {/* Application Sections */}
            <main className="flex-grow">
              {/* Hero Banner Section */}
              <Hero />

              {/* Master Tailor About Section */}
              <About />

              {/* Bespoke Services Grid */}
              <Services />

              {/* Visual Lookbook Gallery */}
              <Gallery />

              {/* Dynamic Rates Catalog */}
              <Pricing />

              {/* Value Advantages Section */}
              <WhyChooseUs />

              {/* Customer Testimonials Slider/Grid */}
              <Testimonials />

              {/* Frequently Asked Questions */}
              <FAQ />

              {/* Secure Slot Scheduling & Direct Contacts */}
              <Contact />
            </main>

            {/* Custom Multi-Column Footer */}
            <Footer />

            {/* Floating Contacts & Back to Top Controller */}
            <FloatingActions />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
