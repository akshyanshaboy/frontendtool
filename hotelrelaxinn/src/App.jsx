import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageCircle, X } from 'lucide-react';

export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const foodGallery = [
    "https://i.ibb.co/qLt0Bp1R/mutton-thali.jpg",
    "https://i.ibb.co/Ld7dYkqx/chicken-thali.jpg",
    "https://i.ibb.co/27k6yQcT/fish-thali.jpg",
    "https://i.ibb.co/35R3yFcS/paneer-special.jpg",
    "https://i.ibb.co/fdbCcrLk/mutton-handi.jpg"
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <header className="h-[40vh] bg-sky-blue flex items-center justify-center text-white text-center p-4">
        <h1 className="text-5xl font-black drop-shadow-lg">Hotel Relax Inn</h1>
      </header>
      <main className="p-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Gallery Visual Journey</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {foodGallery.map((src, i) => (
            <motion.img 
              key={i} src={src} whileHover={{ scale: 1.05 }} 
              onClick={() => setSelectedImg(src)}
              className="rounded-2xl cursor-pointer shadow-xl h-72 w-full object-cover border-4 border-white"
            />
          ))}
        </div>
      </main>
      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImg(null)} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out">
            <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} src={selectedImg} className="max-w-full max-h-[90vh] rounded-lg border-4 border-sky-blue shadow-2xl shadow-sky-blue/20" />
            <button className="absolute top-10 right-10 text-white"><X size={48} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
