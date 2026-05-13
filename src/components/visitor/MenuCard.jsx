export default function MenuCard({ item }) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">

            <img
                src={item.image}
                alt={item.name}
                className="h-60 w-full object-cover"
            />

            <div className="p-6">

                <h3 className="text-2xl font-bold">
                    {item.name}
                </h3>

                <p className="text-green-500 font-bold mt-2">
                    Rp {item.price.toLocaleString()}
                </p>

            </div>

        </div>
    );
}