import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, MapPin, Star, Utensils, Navigation } from 'lucide-react';

export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-sky-600/50 z-10" />
        <img src="https://i.ibb.co/60sfv1rW/interior.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Interior" />
        <div className="relative z-20 text-center">
          <h1 className="text-7xl md:text-9xl font-black text-white italic">Hotel <span className="text-sky-300">Relax</span> Inn</h1>
          <p className="text-white text-xl tracking-[0.4em] mt-4 uppercase font-bold">Authentic Odia Taste</p>
        </div>
      </header>

      {/* MENU SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-6" id="menu">
        <h2 className="text-5xl font-black text-center mb-12">Our Royal Menu</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImg("https://i.ibb.co/qLt0Bp1R/mutton-thali.jpg")}
            className="p-8 bg-white rounded-[2.5rem] shadow-xl border-l-8 border-sky-500 cursor-pointer flex justify-between items-center"
          >
            <div>
              <h3 className="text-2xl font-bold">Special Mutton Thali</h3>
              <p className="text-slate-500">Authentic Odia style mutton with rice and sides.</p>
            </div>
            <span className="text-2xl font-black">₹280</span>
          </motion.div>
          {/* Add more menu items here following the same pattern */}
        </div>
      </section>

      {/* FLOATING CONTACT BAR */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-4 p-2 bg-white/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20">
        <a href="tel:+918114674620" className="p-5 bg-sky-500 text-white rounded-[2rem] hover:scale-110 transition-transform"><Phone /></a>
        <a href="https://wa.me/918114674620" className="p-5 bg-green-500 text-white rounded-[2rem] hover:scale-110 transition-transform"><MessageCircle /></a>
        <a href="#menu" className="p-5 bg-slate-900 text-white rounded-[2rem] hover:scale-110 transition-transform"><Utensils /></a>
      </div>

      {/* IMAGE POP-OUT */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImg(null)} className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6">
            <img src={selectedImg} className="max-w-full max-h-[80vh] rounded-[3rem] border-8 border-white/10 shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
