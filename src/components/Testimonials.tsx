import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
            CUSTOMER COMPLIMENTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-maroon dark:text-stone-100 uppercase"
          >
            Loved By Surat's Elegant Women
          </motion.h2>
          <div className="h-[1px] w-24 bg-gold/50 mx-auto mt-4" />
          <p className="font-sans text-stone-500 dark:text-stone-400 text-xs mt-5 leading-relaxed max-w-xl mx-auto font-light tracking-wide">
            Read stories of absolute joy and perfect fittings directly from the women who trusted us with their bridal, party wear, and casual tailored outfits.
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => {
            // Generate initials
            const initials = review.name
              .split(' ')
              .map((n) => n[0])
              .join('');

            return (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="bg-beige dark:bg-charcoal/40 border border-gold/15 dark:border-gold/10 hover:border-gold/40 rounded-none p-8 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Tiny decorative quote indicator on hover */}
                <div className="absolute top-4 right-4 text-gold/10 group-hover:text-gold/20 transition-colors duration-300">
                  <Quote className="w-6 h-6 rotate-180" />
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-stone-700 dark:text-stone-300 text-xs leading-relaxed italic font-light">
                    "{review.review}"
                  </p>
                </div>

                {/* Customer Profile Row */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-dashed border-stone-200 dark:border-stone-800">
                  {/* Custom Square Avatar */}
                  <div className="h-10 w-10 border border-gold/40 text-gold bg-transparent font-sans text-xs font-semibold flex items-center justify-center uppercase rounded-none">
                    {initials}
                  </div>

                  <div>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">{review.name}</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="font-sans text-[10px] text-stone-500 dark:text-stone-400">{review.date}</span>
                      <span className="text-stone-300 dark:text-stone-800">•</span>
                      <span className="font-sans text-[9px] font-bold text-maroon dark:text-gold uppercase tracking-[1.5px]">
                        {review.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
