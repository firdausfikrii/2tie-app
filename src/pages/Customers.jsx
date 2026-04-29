import PageHeader from "../components/PageHeader";
import Data from "../Data.json"; 

export default function Customers() {
    return (
        <div className="p-4">
            <PageHeader />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Data.customers.map((customer) => (
                    <div key={customer.customerId} className="border p-4 rounded-lg shadow-md bg-white">
                        
                        <h2 className="text-lg font-bold text-gray-800">
                            {customer.customerName}
                        </h2>
                        
                        <div className="mt-2 text-sm text-gray-600">
                            <p><span className="font-semibold">ID:</span> {customer.customerId}</p>
                            <p><span className="font-semibold">Email:</span> {customer.email}</p>
                            <p><span className="font-semibold">Phone:</span> {customer.phone}</p>
                        </div>
                        
                        <div className="mt-4 inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {customer.loyalty} Member
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}