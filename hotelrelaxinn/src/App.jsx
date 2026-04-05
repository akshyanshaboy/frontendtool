import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, MapPin, Star, Send, Utensils, ChevronRight, Maximize2, Navigation, Clock, Mail } from 'lucide-react';

export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(null);

  const menuItems = [
    { id: 1, name: "Special Mutton Thali", price: "₹280", desc: "Authentic Odia style mutton with rice and sides.", img: "https://i.ibb.co/qLt0Bp1R/mutton-thali.jpg" },
    { id: 2, name: "Desi Chicken Thali", price: "₹220", desc: "Home-style chicken curry served with aromatic rice.", img: "https://i.ibb.co/Ld7dYkqx/chicken-thali.jpg" },
    { id: 3, name: "River Fish Thali", price: "₹180", desc: "Fresh caught fish marinated in traditional spices.", img: "https://i.ibb.co/27k6yQcT/fish-thali.jpg" },
    { id: 4, name: "Premium Paneer Thali", price: "₹160", desc: "Soft paneer cubes in a rich, creamy gravy.", img: "https://i.ibb.co/35R3yFcS/paneer-special.jpg" },
    { id: 5, name: "Mutton Handi (1Kg)", price: "₹450", desc: "Slow-cooked mutton in a clay pot for 4 hours.", img: "https://i.ibb.co/fdbCcrLk/mutton-handi.jpg" },
    { id: 6, name: "Special Dum Biryani", price: "₹240", desc: "Long grain basmati rice with secret spices.", img: "https://i.ibb.co/ks5NmnRX/mutton-biryani.jpg" },
  ];

  const galleryItems = [
    { id: 1, title: "Grand Interior Ambiance", img: "https://i.ibb.co/60sfv1rW/interior.jpg" },
    { id: 2, title: "Signature Mutton Thali", img: "https://i.ibb.co/qLt0Bp1R/mutton-thali.jpg" },
    { id: 3, title: "Comfortable Dining Area", img: "https://i.ibb.co/60sfv1rW/interior.jpg" },
    { id: 4, title: "Chef's Special Chicken", img: "https://i.ibb.co/Ld7dYkqx/chicken-thali.jpg" },
    { id: 5, title: "Traditional Handi Cooking", img: "https://i.ibb.co/fdbCcrLk/mutton-handi.jpg" },
    { id: 6, title: "Our Restaurant Front", img: "https://i.ibb.co/60sfv1rW/interior.jpg" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth selection:bg-sky-200">
      
      {/* 1. HERO SECTION (Blue Tint Overlay) */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-sky-600/50 z-10" /> 
        <motion.img 
          initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 15 }}
          src="https://i.ibb.co/60sfv1rW/interior.jpg" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-20 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-7xl md:text-9xl font-black text-white drop-shadow-2xl italic">
            Hotel <span className="text-sky-300">Relax</span> Inn
          </motion.h1>
          <div className="h-2 w-32 bg-sky-400 mx-auto mt-6 rounded-full shadow-lg" />
          <p className="text-white text-xl md:text-2xl font-bold uppercase tracking-[0.4em] mt-6 drop-shadow-md">Authentic Odia Taste</p>
        </div>
      </header>

      {/* 2. INTERACTIVE MENU SECTION */}
      <section className="py-28 max-w-7xl mx-auto px-6" id="menu">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-6xl font-black text-slate-900">Our Royal Menu</h2>
          <p className="text-sky-500 font-bold tracking-widest uppercase">Click a dish to see the real photo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <motion.div 
              key={item.id} whileHover={{ y: -8 }} onClick={() => setSelectedImg(item.img)}
              className="group flex justify-between items-center p-8 bg-white rounded-[2.5rem] shadow-xl border-2 border-transparent hover:border-sky-400 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="z-10">
                <h3 className="text-2xl font-black group-hover:text-sky-600 transition-colors">{item.name}</h3>
                <p className="text-slate-500 mt-1">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sky-500 font-bold text-sm">VIEW REAL PHOTO <ChevronRight size={16} /></div>
              </div>
              <div className="text-3xl font-black text-slate-900 z-10">{item.price}</div>
              <img src={item.img} className="absolute right-[-10%] opacity-5 group-hover:opacity-10 w-44 h-44 object-cover rotate-12 transition-all" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. GALLERY SECTION (Interactive Pop-outs) */}
      <section className="py-28 bg-slate-950" id="gallery">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black text-white mb-4">Visual Gallery</h2>
          <p className="text-sky-400 font-bold tracking-widest uppercase mb-16">Ambiance & Atmosphere</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <motion.div 
                key={item.id} whileHover={{ y: -10 }} onClick={() => setSelectedImg(item.img)}
                className="group relative h-96 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl"
              >
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-8 flex flex-col justify-end text-left">
                  <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                  <div className="mt-4 flex items-center gap-2 text-sky-400 font-bold"><Maximize2 size={18} /> View Full Ambiance</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT & SMART NAVIGATION */}
      <section className="py-28 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center" id="location">
        <div className="space-y-8">
          <h2 className="text-6xl font-black leading-tight border-l-8 border-sky-500 pl-6">Visit <span className="text-sky-500 underline decoration-sky-100">Relax</span> Inn</h2>
          <div className="space-y-6">
            <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-lg border border-slate-100">
              <div className="p-4 bg-sky-100 text-sky-600 rounded-2xl h-fit"><MapPin /></div>
              <div><p className="text-xl font-bold uppercase">Cuttack Location</p><p className="text-slate-500">Near High Court Area, Odisha - 753002</p></div>
            </div>
            <div className="flex gap-5 p-6 bg-white rounded-3xl shadow-lg border border-slate-100">
              <div className="p-4 bg-green-100 text-green-600 rounded-2xl h-fit"><Phone /></div>
              <div><p className="text-xl font-bold uppercase">Reservations</p><p className="text-slate-500">+91 8114674620</p></div>
            </div>
          </div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Relax+Inn+Hotel+Bhubaneswar" target="_blank" className="flex items-center justify-center gap-3 w-full py-6 bg-slate-950 text-white font-black rounded-2xl text-xl hover:bg-sky-500 transition-all shadow-xl active:scale-95">
            <Navigation /> GET LIVE DIRECTIONS
          </a>
        </div>
        <div className="h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white relative">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119731.42857462612!2d85.7601614!3d20.2543781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190692f25577f9%3A0x606942b0a9018189!2sRelax%20Inn%20Hotel!5e0!3m2!1sen!2sin!4v1712431234567" className="w-full h-full" allowFullScreen loading="lazy" />
        </div>
      </section>

      {/* 5. FEEDBACK SECTION */}
      <section className="py-28 bg-sky-50 px-6">
        <div className="max-w-4xl mx-auto bg-white p-16 rounded-[3.5rem] shadow-2xl text-center">
          <h2 className="text-5xl font-black mb-10 text-sky-600 drop-shadow-sm">Rate Your Experience</h2>
          <div className="flex justify-center gap-3 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={48} className={`cursor-pointer transition-all ${i + 1 <= (hover || rating) ? "text-yellow-400 fill-yellow-400 scale-110" : "text-slate-200"}`} onClick={() => setRating(i + 1)} onMouseEnter={() => setHover(i + 1)} onMouseLeave={() => setHover(null)} />
            ))}
          </div>
          <textarea placeholder="Tell us how you liked the Mutton Handi..." className="w-full p-8 bg-slate-50 rounded-3xl mb-8 outline-none ring-2 ring-transparent focus:ring-sky-400 transition-all text-lg" rows="4"></textarea>
          <button className="w-full py-6 bg-sky-500 text-white font-black rounded-3xl text-2xl shadow-lg hover:bg-sky-600 transition-all active:scale-95 flex items-center justify-center gap-3">
            <Send /> SUBMIT FEEDBACK
          </button>
        </div>
      </section>

      {/* FLOATING ACTION BAR */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-sm flex gap-4 p-2 bg-white/40 backdrop-blur-xl border border-white/30 rounded-[2.5rem] shadow-2xl">
        <a href="tel:+918114674620" className="flex-1 py-5 bg-sky-500 text-white rounded-[2rem] flex justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"><Phone /></a>
        <a href="https://wa.me/918114674620" className="flex-1 py-5 bg-green-500 text-white rounded-[2rem] flex justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"><MessageCircle /></a>
        <a href="#menu" className="flex-1 py-5 bg-slate-950 text-white rounded-[2rem] flex justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"><Utensils /></a>
      </div>

      {/* UNIVERSAL POP-OUT OVERLAY */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImg(null)} className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="relative">
              <img src={selectedImg} className="max-w-full max-h-[85vh] rounded-[3rem] border-8 border-white/10 shadow-2xl" />
              <button className="absolute -top-6 -right-6 p-5 bg-white text-slate-900 rounded-full shadow-2xl active:scale-90 transition-all"><X /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
