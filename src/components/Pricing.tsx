import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Info, Sparkles, Receipt, Calendar, CheckSquare } from 'lucide-react';
import { PRICING_LIST } from '../data';

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Blouse', 'Dress', 'Lehenga', 'Suit', 'Alterations'];

  const filteredPricing = selectedCategory === 'All'
    ? PRICING_LIST
    : PRICING_LIST.filter(item => item.category === selectedCategory);

  return (
    <section
      id="pricing"
      className="py-24 bg-white dark:bg-charcoal text-charcoal dark:text-stone-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[10px] font-semibold tracking-[3px] uppercase text-maroon dark:text-gold mb-2"
          >
            TRANSPARENT VALUE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-maroon dark:text-stone-100 uppercase"
          >
            Bespoke Stitching Rates
          </motion.h2>
          <div className="h-[1px] w-24 bg-gold/50 mx-auto mt-4" />
          <p className="font-sans text-stone-500 dark:text-stone-400 text-xs mt-5 leading-relaxed max-w-xl mx-auto font-light tracking-wide">
            Review our starting rates for various premium tailoring patterns. We ensure full transparency with zero hidden charges.
          </p>
        </div>

        {/* Catalog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Column 1: Pricing Catalog Table (Spans 7 of 12) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 font-sans text-[10px] font-semibold tracking-[2px] uppercase transition-colors duration-200 rounded-none ${
                    selectedCategory === cat
                      ? 'bg-maroon text-white dark:bg-gold dark:text-charcoal border border-maroon dark:border-gold'
                      : 'bg-beige text-charcoal/70 dark:bg-charcoal/50 dark:text-stone-300 border border-gold/20 hover:border-gold/50 hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Price List Card */}
            <div className="bg-beige dark:bg-charcoal/40 border border-gold/15 dark:border-gold/10 rounded-none p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-6 border-b border-gold/15 pb-4">
                <Receipt className="w-4 h-4 text-maroon dark:text-gold" />
                <h3 className="font-serif text-base font-bold uppercase tracking-wider text-maroon dark:text-gold">Stitching Catalog</h3>
              </div>

              {/* Items List */}
              <div className="space-y-1 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredPricing.map((item, index) => (
                  <motion.div
                    key={item.name + index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.4 }}
                    className="flex justify-between items-center py-3.5 border-b border-dashed border-stone-200 dark:border-stone-800 last:border-0 hover:bg-gold/5 dark:hover:bg-white/5 px-2 transition-colors duration-200"
                  >
                    <div>
                      <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal dark:text-stone-200">{item.name}</h4>
                      <span className="font-sans text-[8px] font-bold tracking-[1.5px] uppercase text-gold mt-1 inline-block border border-gold/35 px-2 py-0.5 rounded-none bg-transparent">
                        {item.category}
                      </span>
                    </div>
                    <span className="font-sans text-xs font-bold text-maroon dark:text-gold">{item.price}</span>
                  </motion.div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2.5 mt-8 pt-5 border-t border-gold/15 bg-white/45 dark:bg-charcoal/50 p-4 rounded-none border border-gold/10">
                <Info className="w-4 h-4 text-maroon dark:text-gold flex-shrink-0 mt-0.5" />
                <p className="font-sans text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed italic">
                  <strong>Notice:</strong> Final price may vary depending on the complexity of the design, neck pattern selections, embroidery density, fabric delicate nature, and any urgent timeline requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Consultation Promo Card (Spans 5 of 12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-maroon dark:bg-charcoal border border-gold/35 rounded-none p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-gold text-gold font-sans text-[9px] font-bold tracking-[2px] uppercase rounded-none">
                  <Sparkles className="w-3 h-3" />
                  <span>Exclusive Craftsmanship</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider leading-tight text-gold">
                  Design Your <br />
                  Dream Outfit With Us
                </h3>

                <p className="font-sans text-xs text-stone-300 leading-relaxed font-light">
                  We don’t just stitch fabric; we sculpt fashion tailored to your exact measurements, posture, and stylistic dreams. Bring your references and fabrics to Janakbhai Kapadiwala for an interactive trial.
                </p>

                {/* Flow Highlights */}
                <div className="space-y-4 pt-4 border-t border-gold/15">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-gold text-xs">◈</div>
                    <div>
                      <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-gold">1. Custom Measuring Trial</h4>
                      <p className="font-sans text-[11px] text-stone-300 leading-relaxed mt-1 font-light">Precise measurement sheets registered locally for error-free fit.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-gold text-xs">◈</div>
                    <div>
                      <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-gold">2. Neck & Neckline Detailing</h4>
                      <p className="font-sans text-[11px] text-stone-300 leading-relaxed mt-1 font-light">Interactive neck design catalogs, customized border laces & loops.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-gold text-xs">◈</div>
                    <div>
                      <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-gold">3. Trial Adjustments Guarantee</h4>
                      <p className="font-sans text-[11px] text-stone-300 leading-relaxed mt-1 font-light">Free alterations within 15 days of pick-up to ensure seamless fit.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gold text-charcoal hover:bg-transparent hover:text-gold border border-gold font-sans text-xs font-semibold tracking-[2px] uppercase rounded-none transition-all duration-300 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
