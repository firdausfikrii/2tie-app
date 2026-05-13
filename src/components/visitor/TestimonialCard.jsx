import { Quote } from "lucide-react";

export default function TestimonialCard({ item }) {
    return (
        <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500">

            {/* Quote */}
            <Quote
                size={55}
                className="text-yellow-600 opacity-80"
            />

            {/* Review */}
            <p className="text-gray-600 text-lg leading-relaxed mt-8">
                "{item.review}"
            </p>

            {/* User */}
            <div className="flex items-center gap-5 mt-10">

                <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-600"
                />

                <div>

                    <h3 className="text-xl font-bold text-gray-900">
                        {item.name}
                    </h3>

                    <p className="uppercase tracking-widest text-sm text-yellow-700 mt-1">
                        Happy Customer
                    </p>

                </div>

            </div>

        </div>
    );
}