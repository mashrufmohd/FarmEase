import React from 'react';
import { ShoppingCart, BarChart2, PlusCircle } from 'lucide-react';
import type { SalesRecord } from '../types'; // Import the type
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Sample Sales Data
const salesData: SalesRecord[] = [
  { id: 'sale1', cropName: 'Wheat', quantity: 5000, unit: 'kg', pricePerUnit: 0.25, totalPrice: 1250, date: '2024-07-15', buyer: 'Local Mill Co.' },
  { id: 'sale2', cropName: 'Wheat', quantity: 10000, unit: 'kg', pricePerUnit: 0.26, totalPrice: 2600, date: '2024-07-18', buyer: 'Regional Feed Supply' },
  { id: 'sale3', cropName: 'Alfalfa Hay (1st Cut)', quantity: 20, unit: 'ton', pricePerUnit: 220, totalPrice: 4400, date: '2024-06-20', buyer: 'Neighboring Dairy Farm' },
  { id: 'sale4', cropName: 'Corn (Early Contract)', quantity: 2000, unit: 'bushel', pricePerUnit: 4.50, totalPrice: 9000, date: '2024-05-01', buyer: 'Ethanol Plant Inc.' },
  { id: 'sale5', cropName: 'Soybeans (Early Contract)', quantity: 1000, unit: 'bushel', pricePerUnit: 12.00, totalPrice: 12000, date: '2024-05-15', buyer: 'Export Grain Co.' },
];

// Sample Price Trend Data (Simplified for one crop)
const priceTrendData = [
    { date: '2024-01', price: 0.22 },
    { date: '2024-02', price: 0.23 },
    { date: '2024-03', price: 0.24 },
    { date: '2024-04', price: 0.23 },
    { date: '2024-05', price: 0.25 },
    { date: '2024-06', price: 0.26 },
    { date: '2024-07', price: 0.25 },
];


// Helper to format date string
const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

// Helper to format currency
const formatCurrency = (amount: number) => amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });


function Market() {
  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0 flex items-center">
          <ShoppingCart className="h-6 w-6 mr-2 text-cyan-600" />
          Market & Sales
        </h1>
         <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <PlusCircle className="h-5 w-5 mr-1.5" />
            Record New Sale
        </button>
      </div>

        {/* Price Trend Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
             <BarChart2 className="h-5 w-5 mr-2 text-cyan-700"/>
             Wheat Price Trend ($/kg) - Local Market Estimate
          </h2>
          <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <LineChart data={priceTrendData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }}/>
                <YAxis domain={['auto', 'auto']} tickFormatter={(value) => `$${value.toFixed(2)}`} tick={{ fontSize: 12 }}/>
                <Tooltip formatter={(value: number) => [`$${value.toFixed(2)}/kg`, 'Price']}/>
                <Line type="monotone" dataKey="price" stroke="#0891b2" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Est. Price"/>
              </LineChart>
            </ResponsiveContainer>
          </div>
           <p className="text-xs text-gray-500 mt-2">*Note: Prices are estimates based on regional reports.</p>
        </div>


      {/* Sales Records Table */}
       <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700 p-4 border-b border-gray-200">Recent Sales Records</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price/Unit</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total Sale</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salesData.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatDate(sale.date)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sale.cropName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-700">{sale.quantity.toLocaleString()}</td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{sale.unit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-700">{formatCurrency(sale.pricePerUnit)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-gray-900">{formatCurrency(sale.totalPrice)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{sale.buyer}</td>
                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Details</a>
                  </td>
                </tr>
              ))}
               {salesData.length === 0 && (
                 <tr>
                    <td colSpan={8} className="text-center py-10 text-gray-500">No sales records available.</td>
                 </tr>
               )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Market;