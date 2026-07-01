import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  CheckCircle,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  User,
  ThumbsUp,
  LucideIcon
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

const iconMap: Record<string, LucideIcon> = {
  Award,
  CheckCircle,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  User,
  ThumbsUp
};

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section
      id="why-choose-us"
      className="py-24 bg-beige dark:bg-charcoal/90 text-charcoal dark:text-stone-100 transition-colors duration-300"
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
            THE GARGI ADVANTAGE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-maroon dark:text-stone-100 uppercase"
          >
            Why Choose Gargi Ladies Tailor
          </motion.h2>
          <div className="h-[1px] w-24 bg-gold/50 mx-auto mt-4" />
          <p className="font-sans text-stone-500 dark:text-stone-400 text-xs mt-5 leading-relaxed max-w-xl mx-auto font-light tracking-wide">
            We focus on meticulous detailing, absolute measurement precision, and customer convenience to provide an unmatched boutique experience.
          </p>
        </div>

        {/* Features Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-charcoal/50 border border-gold/15 dark:border-gold/10 hover:border-gold/40 rounded-none p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="h-10 w-10 border border-gold/40 text-gold flex items-center justify-center mb-6">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-maroon dark:text-gold mb-3">
                    {item.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="font-sans text-xs text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Micro accent block */}
                <div className="w-6 h-[1px] bg-gold mt-6" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
