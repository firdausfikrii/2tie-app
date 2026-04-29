import PageHeader from "../components/PageHeader";
import Data from "../Data.json";

export default function Orders() {
    return (
        <div className="p-4">
            <PageHeader />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Data.orders.map((order) => (
                    <div key={order.orderId} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs text-gray-500">Order ID</p>
                                <h2 className="text-lg font-bold text-gray-800">
                                    {order.orderId}
                                </h2>
                            </div>

                            <span className={`px-3 py-1 text-xs font-bold rounded-full 
                                ${order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-red-100 text-red-700'}`}>
                                {order.status}
                            </span>
                        </div>

                        <div className="space-y-1 text-sm text-gray-600">
                            <p>
                                <span className="font-semibold text-gray-700">Customer:</span> {order.customerName}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-700">Date:</span> {order.orderDate}
                            </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-500">Total:</span>
                            <span className="font-bold text-lg text-blue-600">
                                Rp {order.totalPrice.toLocaleString('id-ID')}
                            </span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}