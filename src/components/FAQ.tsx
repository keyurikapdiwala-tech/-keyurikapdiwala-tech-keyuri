import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-beige dark:bg-charcoal/90 text-charcoal dark:text-stone-100 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[10px] font-semibold tracking-[3px] uppercase text-maroon dark:text-gold mb-2"
          >
            HAVE QUESTIONS?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-maroon dark:text-stone-100 uppercase"
          >
            Frequently Asked Queries
          </motion.h2>
          <div className="h-[1px] w-24 bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Accordions Stack */}
        <div className="border border-gold/15 dark:border-gold/10 divide-y divide-gold/15 dark:divide-gold/10 bg-white dark:bg-charcoal/40">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="overflow-hidden rounded-none transition-colors duration-300 hover:bg-gold/5"
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-maroon dark:text-gold">
                      {faq.question}
                    </span>
                  </div>

                  {/* Icon Indicator (Minimalist geometric +/- symbol) */}
                  <div className="flex-shrink-0 text-gold">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Body Expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-7 sm:px-7 sm:pb-8 pl-6 sm:pl-7 border-t border-dashed border-gold/15 pt-4">
                        <p className="font-sans text-xs sm:text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
