import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Dumbbell } from 'lucide-react';
import { GALLERY_DATA } from '../data/gymData';
import { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Facility' },
    { id: 'weights', label: 'Free Weights & Barbells' },
    { id: 'machines', label: 'Heavy Machines' },
    { id: 'cardio', label: 'Cardio Deck' },
    { id: 'interior', label: 'Gym Interior' },
    { id: 'male-training', label: 'Athletic Training' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-[#0c0e16] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Tour</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            INSIDE <span className="text-amber-400">ABIY GYM</span> BOLE
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore our training zones, heavy iron platforms, selectorized stations, and modern athletic environment.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-[#151926] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#121520] border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackTitle={item.title}
                  fallbackSubtitle="Abiy Gym Bole"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Hover overlay icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-11 h-11 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#090a0f]/90 backdrop-blur-sm border border-slate-800/80">
                  <h3 className="font-heading text-xs font-bold uppercase text-white tracking-wide truncate">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-in fade-in duration-200">
            {/* Close Button */}
            <button
              id="close-lightbox-btn"
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              id="prev-lightbox-btn"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              id="next-lightbox-btn"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
              <div className="relative w-full max-h-[70vh] rounded-2xl overflow-hidden border border-slate-800 bg-black flex items-center justify-center">
                <img
                  src={filteredItems[selectedImageIndex].image}
                  alt={filteredItems[selectedImageIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              {/* Lightbox Caption */}
              <div className="mt-4 text-center">
                <span className="text-amber-400 font-heading text-lg font-bold uppercase tracking-wider block">
                  {filteredItems[selectedImageIndex].title}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                  {filteredItems[selectedImageIndex].description}
                </p>
                <span className="text-[11px] text-slate-500 mt-2 block">
                  Photo {selectedImageIndex + 1} of {filteredItems.length} · Abiy Gym (Bole, Addis Ababa)
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
