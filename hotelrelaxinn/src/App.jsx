import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen selection:bg-[#c5a059] selection:text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-8 max-w-7xl mx-auto border-b border-white/5">
        <span className="text-2xl font-bold tracking-tighter text-gold font-serif">H.R.I</span>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-semibold">
          <a href="#" className="hover:text-[#c5a059] transition-colors">Home</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Menu</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Rooms</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Contact</a>
        </div>
        <button className="text-[#c5a059] border border-[#c5a059]/30 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-black transition-all">
          Book Now
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#c5a059] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
            Welcome to Hotel Relax Inn
          </span>
          <h1 className="leading-tight mb-8">
            The Art of <br />
            <span className="italic text-gray-500">Fine Living.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed font-light">
            Indulge in a curated culinary journey and stay in rooms designed for absolute tranquility.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="btn-gold">Explore Menu</button>
            <button className="text-white border-b-2 border-[#c5a059] py-2 font-semibold tracking-wide hover:text-[#c5a059] transition-colors">
              Our Story
            </button>
          </div>
        </div>

        {/* Hero Image with Floating Border */}
        <div className="relative group">
          <div className="absolute -inset-4 border border-[#c5a059]/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" 
            alt="Interior" 
            className="relative z-10 w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </main>

      {/* Quick Menu Grid */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-16 text-gold">Chef's Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="premium-card p-8">
                <span className="text-[#c5a059] text-sm font-bold">₹ 850</span>
                <h3 className="text-2xl mt-2 mb-4">Signature Dish {item}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A perfect blend of local spices and modern culinary techniques.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
