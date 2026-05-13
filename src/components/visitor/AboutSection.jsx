export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-32 bg-[#f8f5f0] overflow-hidden"
        >

            {/* Decoration */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>

            <div className="container mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Image */}
                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                            alt="restaurant"
                            className="rounded-3xl shadow-2xl h-[700px] object-cover w-full"
                        />

                        {/* Floating Card */}
                        <div className="absolute -bottom-10 -right-10 bg-black text-white p-8 rounded-3xl shadow-2xl">

                            <h3 className="text-5xl font-black text-yellow-500">
                                10+
                            </h3>

                            <p className="mt-2 text-gray-300">
                                Years Experience
                            </p>

                        </div>

                    </div>

                    {/* Right Content */}
                    <div>

                        <span className="font-playfair-italic text-3xl text-yellow-700">
                            About Sedap
                        </span>

                        <h2 className="font-playfair text-6xl font-bold text-gray-900 mt-6 leading-tight">
                            Delivering The Best Taste Experience
                        </h2>

                        <div className="w-24 h-1 bg-yellow-600 mt-8"></div>

                        <p className="text-gray-600 mt-8 text-lg leading-relaxed">
                            Sedap hadir untuk memberikan pengalaman kuliner
                            terbaik dengan pelayanan modern, menu berkualitas,
                            dan cita rasa premium yang dibuat oleh chef profesional.
                        </p>

                        {/* Features */}
                        <div className="grid md:grid-cols-2 gap-8 mt-14">

                            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">

                                <h3 className="text-2xl font-bold text-gray-900">
                                    Fresh Ingredients
                                </h3>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Menggunakan bahan premium segar setiap hari.
                                </p>

                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">

                                <h3 className="text-2xl font-bold text-gray-900">
                                    Fast Delivery
                                </h3>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Pengiriman cepat dengan kualitas terbaik.
                                </p>

                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">

                                <h3 className="text-2xl font-bold text-gray-900">
                                    Best Chef
                                </h3>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Chef profesional dengan pengalaman internasional.
                                </p>

                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300">

                                <h3 className="text-2xl font-bold text-gray-900">
                                    Premium Quality
                                </h3>

                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Menjamin kualitas makanan dan pelayanan terbaik.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}