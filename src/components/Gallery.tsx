import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronRight, ArrowUpRight } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Filter gallery items based on active category
  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-24 bg-beige dark:bg-charcoal/90 text-charcoal dark:text-stone-100 transition-colors duration-300"
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
            OUR VISUAL LOOKBOOK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-maroon dark:text-stone-100 uppercase"
          >
            Our Masterpiece Gallery
          </motion.h2>
          <div className="h-[1px] w-24 bg-gold/50 mx-auto mt-4" />
          <p className="font-sans text-stone-500 dark:text-stone-400 text-xs mt-5 leading-relaxed max-w-xl mx-auto font-light tracking-wide">
            Browse through real photos of custom blouses, bridal collections, and tailored ethnic outfits designed, stitched, and finished at Gargi Ladies Tailor.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[2px] transition-all duration-300 rounded-none ${
                activeCategory === category
                  ? 'bg-maroon dark:bg-gold text-white dark:text-charcoal border border-maroon dark:border-gold'
                  : 'bg-white dark:bg-charcoal/50 border border-gold/20 text-charcoal/70 dark:text-stone-300 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of Gallery Photos */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-none bg-white dark:bg-charcoal border border-gold/15 dark:border-gold/10 hover:border-gold/40 p-2 shadow-none cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative w-full h-full aspect-square overflow-hidden">
                  {/* Photo Element */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Elegant Hover Overlay */}
                  <div className="absolute inset-0 bg-maroon/90 dark:bg-charcoal/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                  {/* Overlay Text & Icon */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <span className="inline-block px-2 py-0.5 border border-gold text-gold font-sans text-[8px] font-bold tracking-[2px] uppercase mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-white leading-snug uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-3 text-gold font-sans text-[9px] font-semibold tracking-[2px] uppercase">
                      <span>View Pattern</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Floating Preview Eye Icon */}
                  <div className="absolute top-4 right-4 h-8 w-8 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal (Full-Screen Image Inspect) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 border border-gold/30 text-gold hover:bg-gold hover:text-charcoal bg-transparent transition-colors duration-200 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Card Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-4xl w-full bg-charcoal border border-gold/30 rounded-none overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Visual Area (Spans 7) */}
                <div className="md:col-span-8 aspect-[4/3] md:aspect-auto md:h-[75vh] relative bg-stone-950 flex items-center justify-center">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details Area (Spans 4) */}
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-charcoal text-stone-100">
                  <div className="space-y-4">
                    <span className="inline-block px-2.5 py-1 border border-gold text-gold font-sans text-[9px] font-bold tracking-[2px] uppercase">
                      {selectedImage.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider leading-snug">
                      {selectedImage.title}
                    </h3>
                    <p className="font-sans text-stone-400 text-xs leading-relaxed font-light">
                      This premium attire showcases absolute tailored precision, high-quality overlocking, perfect posture seams, and personalized finishing configurations crafted at Gargi Ladies Tailor.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-gold/15 space-y-4">
                    <a
                      href="#contact"
                      onClick={() => setSelectedImage(null)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gold text-charcoal hover:bg-transparent hover:text-gold border border-gold font-sans text-xs font-semibold tracking-[2px] uppercase rounded-none transition-colors duration-300"
                    >
                      <span>Inquire Pattern</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
