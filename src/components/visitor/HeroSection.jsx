export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1974&auto=format&fit=crop')",
            }}
        >

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-5xl px-6">

                {/* Subtitle */}
                <p className="font-playfair-italic text-3xl md:text-4xl text-yellow-500">
                    Welcome to Sedap
                </p>

                {/* Title */}
                <h1 className="font-playfair text-6xl md:text-8xl font-black leading-tight mt-6">
                    Hot And Ready
                    <br />
                    To Serve
                </h1>

                {/* Description */}
                <p className="mt-8 text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                    Experience premium dining with authentic flavors,
                    modern culinary artistry, and unforgettable moments.
                </p>

                {/* Button */}
                <button className="mt-10 px-10 py-4 bg-yellow-700 hover:bg-yellow-600 transition text-white uppercase tracking-widest font-bold shadow-2xl">
                    Pesan Sekarang
                </button>

            </div>

        </section>
    );
}