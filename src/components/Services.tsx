import React from 'react';
import { motion } from 'motion/react';
import {
  Scissors,
  Palette,
  Sparkles,
  Shirt,
  Layers,
  Sparkle,
  Flower,
  Compass,
  Waves,
  Heart,
  Crown,
  Smile,
  LucideIcon
} from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Palette,
  Sparkles,
  Shirt,
  Layers,
  Sparkle,
  Flower,
  Compass,
  Waves,
  Heart,
  Crown,
  Smile
};

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-charcoal text-charcoal dark:text-stone-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[10px] font-semibold tracking-[3px] uppercase text-maroon dark:text-gold mb-2"
          >
            OUR BESPOKE SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-maroon dark:text-stone-100 uppercase"
          >
            What We Stitch For You
          </motion.h2>
          <div className="h-[1px] w-24 bg-gold/50 mx-auto mt-4" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-sans text-stone-500 dark:text-stone-400 text-xs mt-5 leading-relaxed max-w-xl mx-auto font-light tracking-wide"
          >
            Discover our comprehensive range of luxury tailoring services, designed to deliver flawless garments crafted with modern trends and supreme craftsmanship.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Scissors;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group relative bg-beige dark:bg-charcoal/50 hover:bg-white dark:hover:bg-charcoal border border-gold/15 dark:border-gold/10 hover:border-gold/45 rounded-none p-8 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent thin gold top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon Wrapper (Geometric Square) */}
                  <div className="h-10 w-10 border border-gold/40 text-gold flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base font-bold uppercase tracking-wider text-maroon dark:text-gold mb-3 group-hover:text-gold dark:group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Quick Action link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-sans text-[10px] font-semibold tracking-[2px] uppercase text-gold hover:text-maroon dark:hover:text-white transition-colors cursor-pointer"
                >
                  <span>Inquire Now</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform">→</span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
