import React from 'react';
import { motion } from 'motion/react';
import { Check, Instagram, ArrowUpRight, Scissors, Ruler, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO, PATTERN_CHARGES } from '../data';

export default function About() {
  const brandQualities = [
    { title: 'Perfect Fitting', desc: 'Bespoke precision tailored exactly to your body shape and comfort posture.' },
    { title: 'Premium Finishing', desc: 'Neat interior piping, sturdy overlock, invisible buttons, and robust hooks.' },
    { title: 'Latest Fashion Trends', desc: 'Stylized neck designs, celebrity back configurations, and custom drapes.' },
    { title: 'Affordable Pricing', desc: 'Luxury stitching solutions without high-end high-street premiums.' },
    { title: 'Timely Delivery', desc: 'Carefully timed delivery systems to never let you worry before celebrations.' },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-beige dark:bg-charcoal/90 text-charcoal dark:text-stone-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[10px] font-semibold tracking-[3px] uppercase text-maroon dark:text-gold mb-2"
          >
            MEET THE MASTER TAILOR
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-maroon dark:text-stone-100 uppercase"
          >
            About Gargi Ladies Tailor
          </motion.h2>
          <div className="h-[1px] w-24 bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Image & Rates (Spans 5 of 12) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Elegant Tailor Portrait / Lehenga */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-none border border-gold/30 p-2 bg-white dark:bg-charcoal/50 overflow-hidden aspect-[3/4] shadow-md group"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/src/assets/images/bridal_lehenga_1782902395218.jpg"
                  alt="Beautiful Indian Custom Tailoring Outfit Display"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block border border-gold text-gold text-[9px] px-2.5 py-1 font-semibold tracking-[2px] uppercase mb-2">
                    Est. 1989
                  </span>
                  <p className="font-serif text-lg text-white font-bold uppercase tracking-wider">Bridal Couture</p>
                  <p className="font-sans text-xs text-stone-300 font-light">Custom bridal blouse & heavy lehenga stitching</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Rates Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white dark:bg-charcoal border border-gold/30 rounded-none p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <Scissors className="w-4 h-4 text-gold" />
                <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-maroon dark:text-gold">Stitching Menu</h3>
              </div>
              <div className="space-y-3">
                {PATTERN_CHARGES.map((charge) => (
                  <div key={charge.name} className="flex justify-between pb-2 border-b border-dashed border-stone-200 dark:border-stone-800">
                    <span className="font-sans text-xs font-semibold tracking-wider text-charcoal/80 dark:text-stone-300 uppercase">{charge.name}</span>
                    <span className="font-sans text-xs font-bold text-maroon dark:text-gold">{charge.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-2 mt-6 pt-4 border-t border-gold/15">
                <ShieldAlert className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <p className="font-sans text-[10px] text-stone-500 dark:text-stone-400 italic">
                  * Pattern charges, chain integrations, and intricate collar/sleeve styles are charged extra based on design density.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Story & Key Attributes (Spans 7 of 12) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 border border-gold text-gold text-[10px] font-semibold tracking-[2px] uppercase">
                Janak Kapadiwala
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-maroon dark:text-gold uppercase tracking-wider">
                Crafting Elegance Since Years
              </h3>
              <p className="font-sans text-charcoal/80 dark:text-stone-300 text-sm leading-relaxed tracking-wide font-light">
                Led by master artisan <span className="font-semibold text-maroon dark:text-gold">{BUSINESS_INFO.owner}</span>, Gargi Ladies Tailor is Surat’s top fashion-forward boutique. We specialize in high-quality ladies tailoring with years of experience in custom stitching and ultimate customer satisfaction. We breathe life into premium silks, cottons, and brocades, sewing pieces that make you stand tall with poise.
              </p>
              <p className="font-sans text-charcoal/80 dark:text-stone-300 text-sm leading-relaxed tracking-wide font-light">
                Whether it is a classic comfortable dress for daily work wear, an intricate princess-cut blouse, or a heavy zardozi embroidered bridal lehenga, we offer bespoke adjustments, perfect contours, and beautiful embellishments custom-crafted just for you.
              </p>

              {/* Instagram Connect */}
              <a
                href={`https://www.instagram.com/${BUSINESS_INFO.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-maroon text-white dark:bg-gold dark:text-charcoal font-sans text-[11px] font-semibold uppercase tracking-[2px] rounded-none hover:bg-transparent hover:text-maroon dark:hover:bg-transparent dark:hover:text-gold border border-maroon dark:border-gold transition-all duration-300 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow @{BUSINESS_INFO.instagram}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Quality Traits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gold/15">
              {brandQualities.map((quality, idx) => (
                <motion.div
                  key={quality.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 h-5 w-5 border border-gold flex items-center justify-center mt-1 text-[10px] text-gold font-bold">
                    ◈
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-maroon dark:text-gold">
                      {quality.title}
                    </h4>
                    <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-1.5 leading-relaxed font-light">
                      {quality.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
