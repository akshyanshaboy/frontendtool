<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel Relax Inn | Premium Dining</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.2); }
        .hero-tint { background: linear-gradient(to bottom, rgba(2, 132, 199, 0.6), rgba(15, 23, 42, 0.9)); }
    </style>
</head>
<body class="bg-slate-50 font-sans">

    <header class="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 hero-tint z-10"></div>
        <img src="https://i.ibb.co/60sfv1rW/interior.jpg" class="absolute inset-0 w-full h-full object-cover" alt="Interior">
        <div class="relative z-20 text-center px-4">
            <h1 class="text-6xl md:text-8xl font-black text-white drop-shadow-2xl italic tracking-tighter">
                Hotel <span class="text-sky-300">Relax</span> Inn
            </h1>
            <div class="h-2 w-32 bg-sky-400 mx-auto mt-6 rounded-full"></div>
            <p class="text-white text-xl md:text-2xl font-bold uppercase tracking-[0.3em] mt-6">Authentic Odia Taste</p>
        </div>
    </header>

    <section class="py-20 max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-5xl font-black text-slate-900">Our Royal Menu</h2>
            <p class="text-sky-500 font-bold tracking-widest uppercase mt-2">Signature Dishes</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
            <div class="group bg-white p-8 rounded-[2.5rem] shadow-xl border-l-[12px] border-sky-500 hover:scale-[1.02] transition-all cursor-pointer flex justify-between items-center relative overflow-hidden">
                <div class="z-10">
                    <h3 class="text-2xl font-black group-hover:text-sky-600 transition-colors">Special Mutton Thali</h3>
                    <p class="text-slate-500 mt-2">Authentic Odia style mutton with rice and sides.</p>
                    <div class="mt-4 text-sky-500 font-bold text-sm uppercase tracking-tighter">View Real Photo <i class="fas fa-chevron-right ml-1"></i></div>
                </div>
                <div class="text-3xl font-black text-slate-900 z-10">₹280</div>
                <img src="https://i.ibb.co/qLt0Bp1R/mutton-thali.jpg" class="absolute right-[-20px] bottom-[-20px] opacity-5 w-40 h-40 object-cover rotate-12">
            </div>

            <div class="group bg-white p-8 rounded-[2.5rem] shadow-xl border-l-[12px] border-sky-500 hover:scale-[1.02] transition-all cursor-pointer flex justify-between items-center relative overflow-hidden">
                <div class="z-10">
                    <h3 class="text-2xl font-black group-hover:text-sky-600 transition-colors">Desi Chicken Thali</h3>
                    <p class="text-slate-500 mt-2">Home-style chicken curry served with aromatic rice.</p>
                    <div class="mt-4 text-sky-500 font-bold text-sm uppercase tracking-tighter">View Real Photo <i class="fas fa-chevron-right ml-1"></i></div>
                </div>
                <div class="text-3xl font-black text-slate-900 z-10">₹220</div>
                <img src="https://i.ibb.co/Ld7dYkqx/chicken-thali.jpg" class="absolute right-[-20px] bottom-[-20px] opacity-5 w-40 h-40 object-cover rotate-12">
            </div>
        </div>
    </section>

    <section class="py-20 bg-slate-900">
        <div class="max-w-6xl mx-auto px-6">
            <h2 class="text-5xl font-black text-white text-center mb-16 underline decoration-sky-500 underline-offset-8">Gallery Visual Journey</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img src="https://i.ibb.co/60sfv1rW/interior.jpg" class="h-72 w-full object-cover rounded-[2rem] border-4 border-slate-800 shadow-2xl">
                <img src="https://i.ibb.co/qLt0Bp1R/mutton-thali.jpg" class="h-72 w-full object-cover rounded-[2rem] border-4 border-slate-800 shadow-2xl">
                <img src="https://i.ibb.co/fdbCcrLk/mutton-handi.jpg" class="h-72 w-full object-cover rounded-[2rem] border-4 border-slate-800 shadow-2xl">
            </div>
        </div>
    </section>

    <section class="py-20 px-6">
        <div class="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-slate-100">
            <h2 class="text-4xl font-black mb-8 text-sky-600 italic">Rate Your Meal</h2>
            <div class="flex justify-center gap-2 mb-8 text-yellow-400 text-4xl">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <textarea placeholder="Your feedback..." class="w-full p-6 bg-slate-50 rounded-2xl mb-6 outline-none ring-2 ring-sky-100 focus:ring-sky-400 transition-all" rows="4"></textarea>
            <button class="w-full py-5 bg-sky-500 text-white font-black rounded-2xl text-xl shadow-lg shadow-sky-200 hover:bg-sky-600 transition-all">Submit Review</button>
        </div>
    </section>

    <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4 p-3 glass rounded-[2.5rem] shadow-2xl">
        <a href="tel:+918114674620" class="w-16 h-16 bg-sky-500 text-white rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all shadow-lg"><i class="fas fa-phone"></i></a>
        <a href="https://wa.me/918114674620" class="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all shadow-lg"><i class="fab fa-whatsapp"></i></a>
        <a href="#" class="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-all shadow-lg"><i class="fas fa-utensils"></i></a>
    </div>

</body>
</html>
