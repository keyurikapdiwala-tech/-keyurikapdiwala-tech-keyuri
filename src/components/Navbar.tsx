import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header logic
      setIsScrolled(window.scrollY > 20);

      // Scroll progress logic
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-charcoal/95 backdrop-blur-md border-b border-gold/30 shadow-md'
          : 'bg-transparent border-b border-white/10 dark:border-white/5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="h-[2px] w-full bg-transparent overflow-hidden">
        <div
          className="h-full bg-gold transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <a href="#home" className="flex items-center gap-2 group">
              <span className="font-serif text-2xl font-bold tracking-wider transition-colors duration-300 text-maroon dark:text-gold">
                GARGI <span className="font-sans font-light text-gold dark:text-white/80 text-base ml-1 tracking-[3px]">LADIES TAILOR</span>
              </span>
            </a>
            <span className="text-[10px] tracking-[2px] font-sans text-charcoal/50 dark:text-white/50 uppercase leading-none mt-1 font-medium">
              By Janak Kapadiwala
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[11px] font-semibold tracking-[2px] uppercase transition-colors duration-200 hover:text-gold relative py-2 group text-charcoal dark:text-white/90"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Controls (Theme, Contact CTA, Mobile Toggle) */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              className="p-2 border border-gold/30 hover:bg-beige dark:hover:bg-charcoal/80 text-charcoal dark:text-white transition-colors duration-300 rounded-none"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-gold" /> : <Moon className="w-4 h-4 text-maroon" />}
            </button>

            {/* Premium Header CTA */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden lg:flex items-center gap-2 bg-maroon dark:bg-gold text-white dark:text-charcoal font-sans text-[11px] font-semibold uppercase tracking-[2px] px-5 py-2.5 rounded-none border border-maroon dark:border-gold hover:bg-transparent hover:text-maroon dark:hover:bg-transparent dark:hover:text-gold transition-all duration-300"
            >
              <Phone className="w-3 h-3" />
              <span>Call Owner</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 border border-gold/30 text-charcoal dark:text-white hover:bg-beige dark:hover:bg-charcoal transition-colors duration-300 rounded-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-gold/30 bg-beige dark:bg-charcoal px-4 pt-2 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-sans text-[11px] font-semibold tracking-[2px] uppercase text-charcoal dark:text-white hover:text-gold py-2.5 border-b border-gold/15"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 bg-maroon dark:bg-gold text-white dark:text-charcoal font-bold tracking-[2px] uppercase text-xs py-3 rounded-none mt-2 transition-all"
                onClick={handleLinkClick}
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
