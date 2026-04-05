import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, MapPin, Instagram } from 'lucide-react';

export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const foodGallery = [
    { src: "https://i.ibb.co/qLt0Bp1R/mutton-thali.jpg", title: "Special Mutton Thali", price: "₹280" },
    { src: "https://i.ibb.co/Ld7dYkqx/chicken-thali.jpg", title: "Desi Chicken Thali", price: "220" },
    { src: "https://i.ibb.co/27k6yQcT/fish-thali.jpg", title: "River Fish Meal", price: "180" },
    { src: "https://i.ibb.co/35R3yFcS/paneer-special.jpg", title: "Premium Paneer", price: "160" },
    { src: "https://i.ibb.co/fdbCcrLk/mutton-handi.jpg", title: "Mutton Handi", price: "450" },
    { src: "https://i.ibb.co/ks5NmnRX/mutton-biryani.jpg", title: "Dum Biryani", price: "240" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* HERO SECTION */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-sky-400/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 z-20" />
        <motion.img 
          initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          src="https://i.ibb.co/60sfv1rW/interior.jpg" className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-30 text-center px-4">
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-8xl font-black text-slate-900 drop-shadow-sm">
            Hotel <span className="text-sky-500">Relax</span> Inn
          </motion.h1>
          <p className="text-lg md:text-xl font-bold text-slate-700 tracking-[0.4em] uppercase mt-4">Authentic Odia Flavor</p>
        </div>
      </header>

      {/* GALLERY & MENU */}
      <main className="max-w-7xl mx-auto px-6 py-12 pb-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black text-slate-900 border-l-8 border-sky-500 pl-4">Signature Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodGallery.map((item, i) => (
            <motion.div 
              key={i} whileHover={{ y: -10 }} onClick={() => setSelectedImg(item.src)}
              className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white cursor-pointer border-4 border-white"
            >
              <img src={item.src} className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                <p className="text-sky-400 font-black text-xl">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* FLOATING GLASS ACTION BAR */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md">
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-3xl p-3 flex justify-between items-center px-6">
          <a href="tel:+918114674620" className="p-4 bg-sky-500 text-white rounded-2xl shadow-lg shadow-sky-200 active:scale-95 transition-all">
            <Phone size={24} />
          </a>
          <a href="https://wa.me/918114674620" className="p-4 bg-green-500 text-white rounded-2xl shadow-lg shadow-green-200 active:scale-95 transition-all">
            <MessageCircle size={24} />
          </a>
          <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-lg active:scale-95 transition-all">
            <MapPin size={20} /> Locate
          </button>
        </div>
      </div>

      {/* FULLSCREEN POP-UP */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[60] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.img 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              src={selectedImg} className="max-w-full max-h-[80vh] rounded-3xl border-2 border-white/20 shadow-2xl"
            />
            <button className="absolute top-10 right-10 text-white/50 hover:text-white"><X size={40} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
