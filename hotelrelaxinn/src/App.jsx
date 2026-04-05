import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageCircle, X, ChevronRight } from 'lucide-react';

export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const foodGallery = [
    { src: "https://i.ibb.co/qLt0Bp1R/mutton-thali.jpg", title: "Special Mutton Thali" },
    { src: "https://i.ibb.co/Ld7dYkqx/chicken-thali.jpg", title: "Desi Chicken Thali" },
    { src: "https://i.ibb.co/27k6yQcT/fish-thali.jpg", title: "River Fish Special" },
    { src: "https://i.ibb.co/35R3yFcS/paneer-special.jpg", title: "Premium Paneer" },
    { src: "https://i.ibb.co/fdbCcrLk/mutton-handi.jpg", title: "Mutton Handi" },
    { src: "https://i.ibb.co/ks5NmnRX/mutton-biryani.jpg", title: "Dum Biryani" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* HERO SECTION */}
      <header className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-sky-blue/40 z-10" />
        <img src="https://i.ibb.co/60sfv1rW/interior.jpg" className="absolute inset-0 w-full h-full object-cover scale-110 animate-pulse-slow" />
        <div className="relative z-20 text-center px-4">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-7xl font-black drop-shadow-2xl mb-4">
            Hotel Relax Inn
          </motion.h1>
          <p className="text-xl font-medium tracking-widest uppercase">Authentic Taste • Premium Experience</p>
        </div>
      </header>

      {/* GALLERY SECTION */}
      <main className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-deep-ocean underline decoration-sky-blue underline-offset-8">Gallery Visual Journey</h2>
          <div className="h-1 flex-grow mx-8 bg-sky-100 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodGallery.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImg(item.src)}
              className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-white"
            >
              <img src={item.src} className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold text-xl">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* LIGHTBOX POP-UP */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.img 
              initial={{ scale: 0.5, rotate: -5 }} animate={{ scale: 1, rotate: 0 }}
              src={selectedImg} className="max-w-full max-h-[85vh] rounded-2xl border-8 border-white shadow-2xl"
            />
            <button className="absolute top-8 right-8 text-white hover:text-sky-blue transition-colors">
              <X size={48} strokeWidth={3} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
