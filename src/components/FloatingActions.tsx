import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hello Janakbhai, I would like to inquire about premium ladies tailoring services and book an appointment at Gargi Ladies Tailor in Surat.'
    );
    window.open(`https://wa.me/916352902879?text=${message}`, '_blank');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="floating-actions" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={handleScrollToTop}
            className="h-10 w-10 rounded-none bg-white dark:bg-charcoal border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors duration-200 cursor-pointer shadow-none"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Telephone Call Now Button */}
      <motion.a
        href={`tel:${BUSINESS_INFO.phone}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-12 w-12 rounded-none border border-gold bg-gold text-charcoal hover:bg-transparent hover:text-gold flex items-center justify-center transition-all cursor-pointer relative group"
        aria-label="Call Gargi Ladies Tailor"
      >
        <Phone className="w-4.5 h-4.5 fill-current" />
        
        {/* Tooltip on Hover */}
        <span className="absolute right-14 bg-charcoal border border-gold text-gold font-sans text-[9px] font-bold tracking-widest uppercase px-2.5 py-1.5 rounded-none shadow-none opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Call Now
        </span>
      </motion.a>

      {/* Floating WhatsApp Chat Button with Pulse Rings */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-none bg-[#25D366] text-white flex items-center justify-center shadow-none cursor-pointer relative group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />

        {/* Tooltip on Hover */}
        <span className="absolute right-16 bg-charcoal border border-gold text-gold font-sans text-[9px] font-bold tracking-widest uppercase px-2.5 py-1.5 rounded-none shadow-none opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Stitch via WhatsApp
        </span>
      </motion.button>

    </div>
  );
}
