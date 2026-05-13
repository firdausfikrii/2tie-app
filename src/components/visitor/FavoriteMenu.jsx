import menuData from "../../data/menu.json";

export default function FavoriteMenu() {
    return (
        <section
            id="menu"
            className="relative py-32 bg-[#0c0c0c]"
        >

            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]"></div>

            <div className="relative container mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-24">

                    <span className="text-yellow-600 uppercase tracking-[8px] font-semibold">
                        Discover
                    </span>

                    <h2 className="font-playfair text-6xl font-bold text-white mt-6">
                        Favorite Menu
                    </h2>

                    <div className="w-24 h-1 bg-yellow-600 mx-auto mt-8"></div>

                    <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
                        Experience premium dishes crafted by our best chefs
                        using fresh ingredients and authentic flavors.
                    </p>

                </div>

                {/* Menu Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

                    {menuData.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-[550px] overflow-hidden rounded-2xl shadow-2xl"
                        >

                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">

                                <span className="uppercase tracking-[4px] text-yellow-500 text-sm font-semibold">
                                    Chef Recommendation
                                </span>

                                <h3 className="text-4xl font-bold text-white mt-4">
                                    {item.name}
                                </h3>

                                <p className="text-gray-300 mt-5 leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Bottom */}
                                <div className="mt-8 flex items-center justify-between">

                                    <span className="text-3xl font-bold text-yellow-500">
                                        Rp {item.price.toLocaleString()}
                                    </span>

                                    <button className="border border-yellow-600 px-6 py-3 uppercase text-sm font-bold text-white hover:bg-yellow-600 transition duration-300">
                                        Order Now
                                    </button>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}