import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY } from '../data';
import { X, ZoomIn, Eye, Sparkles, Filter } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'store' | 'medicines' | 'equipment' | 'customers'>('all');
  const [lightboxImageId, setLightboxImageId] = useState<string | null>(null);

  const categories: { label: string; value: typeof activeCategory }[] = [
    { label: 'All Photos', value: 'all' },
    { label: 'Store Front', value: 'store' },
    { label: 'Medicine Shelves', value: 'medicines' },
    { label: 'Diagnostic Devices', value: 'equipment' },
    { label: 'Products & Wellness', value: 'customers' }
  ];

  const filteredGallery = activeCategory === 'all' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === activeCategory);

  const selectedImage = GALLERY.find(item => item.id === lightboxImageId);

  return (
    <div className="pt-24 pb-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="gallery-view">
      
      {/* 1. HEADER HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-8">
        <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Interactive Tour</span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
          Agrawal Medical Hall Gallery
        </h1>
        <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
        <p className="text-slate-500 dark:text-neutral-450 text-sm sm:text-base leading-relaxed">
          Take a visual tour of our clean, sterile, well-stocked medical facility and check our diagnostics hardware arrays. Click on any photo to open the interactive lightbox zoom.
        </p>
      </section>

      {/* 2. FILTER MENU */}
      <section className="flex flex-wrap items-center justify-center gap-2" id="gallery-filter-panel">
        <div className="flex items-center gap-2 bg-slate-50 dark:bg-neutral-900 border border-slate-100 dark:border-neutral-800 rounded-2xl p-1.5 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/75 dark:hover:bg-neutral-850'
              }`}
              id={`gallery-filter-${cat.value}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. MASONRY GRID LAYOUT */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
        <AnimatePresence mode="popLayout">
          {filteredGallery.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 dark:border-neutral-855 bg-white dark:bg-neutral-900 shadow-md aspect-video cursor-pointer"
              onClick={() => setLightboxImageId(item.id)}
            >
              {/* Image Asset */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/10 text-white hover:bg-white/25 transition-all">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-blue-300 uppercase block">
                    {item.category}
                  </span>
                  <h3 className="font-display font-extrabold text-sm sm:text-base leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-slate-300 leading-snug line-clamp-2 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Default persistent label tag for better mobile visibility */}
              <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm border border-slate-100 dark:border-neutral-800 rounded-xl px-3 py-1.5 max-w-[calc(100%-24px)] group-hover:opacity-0 transition-opacity duration-200">
                <span className="text-[8px] font-mono font-bold text-blue-600 dark:text-blue-400 block uppercase leading-none mb-0.5">{item.category}</span>
                <span className="text-xs font-display font-bold text-slate-900 dark:text-white truncate block">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImageId && selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              onClick={() => setLightboxImageId(null)}
            />

            {/* Lightbox container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800"
              id="lightbox-container"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImageId(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-all cursor-pointer"
                aria-label="Close Lightbox"
                id="close-lightbox-btn"
              >
                <X className="h-5 w-5" />
              </button>

              {/* High resolution image representation */}
              <div className="max-h-[60vh] overflow-hidden flex items-center justify-center bg-black/50">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-h-[60vh] max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Descriptions */}
              <div className="p-6 sm:p-8 bg-neutral-900 text-white space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase">
                  {selectedImage.category} DEPARTMENT
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
