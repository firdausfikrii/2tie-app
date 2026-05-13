import testimonialData from "../../data/testimonials.json";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    return (
        <section className="relative py-32 bg-[#f8f5f0] overflow-hidden">

            {/* Decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 opacity-20 blur-3xl rounded-full"></div>

            <div className="relative container mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-24">

                    <span className="uppercase tracking-[8px] text-yellow-700 font-semibold">
                        Testimonials
                    </span>

                    <h2 className="font-playfair text-6xl font-bold text-gray-900 mt-6">
                        What Our Customers Say
                    </h2>

                    <div className="w-24 h-1 bg-yellow-600 mx-auto mt-8"></div>

                    <p className="text-gray-600 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
                        We always provide the best dining experience and
                        premium quality service for our beloved customers.
                    </p>

                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

                    {testimonialData.map((item) => (
                        <TestimonialCard
                            key={item.id}
                            item={item}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}