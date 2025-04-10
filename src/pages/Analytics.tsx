import React from 'react';
import { BarChart, DollarSign, Droplet, Tractor } from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart, Bar,
  LineChart as RechartsLineChart, Line,
  PieChart as RechartsPieChart, Pie, Cell, Legend, Tooltip,
  XAxis, YAxis, CartesianGrid
} from 'recharts';

// Sample Data
const monthlyYieldData = [
  { month: 'Jan', Wheat: 0, Corn: 0, Soybeans: 0 },
  { month: 'Feb', Wheat: 0, Corn: 0, Soybeans: 0 },
  { month: 'Mar', Wheat: 0, Corn: 0, Soybeans: 0 },
  { month: 'Apr', Wheat: 0, Corn: 1500, Soybeans: 0 }, // Planting Corn
  { month: 'May', Wheat: 0, Corn: 3500, Soybeans: 800 }, // Planting Soy
  { month: 'Jun', Wheat: 1200, Corn: 5500, Soybeans: 1800 }, // Wheat Harvest starts
  { month: 'Jul', Wheat: 4500, Corn: 7000, Soybeans: 2500 }, // Wheat Harvest peak
  { month: 'Aug', Wheat: 0, Corn: 8000, Soybeans: 2800 },
  { month: 'Sep', Wheat: 0, Corn: 8200, Soybeans: 3000 }, // Corn Harvest starts
  { month: 'Oct', Wheat: 0, Corn: 2000, Soybeans: 3100 }, // Corn/Soy Harvest peak
  { month: 'Nov', Wheat: 0, Corn: 500, Soybeans: 1000 }, // Harvest ends
  { month: 'Dec', Wheat: 0, Corn: 0, Soybeans: 0 },
];

const expenseData = [
  { name: 'Seed', value: 25000 },
  { name: 'Fertilizer', value: 35000 },
  { name: 'Pesticides', value: 15000 },
  { name: 'Fuel', value: 18000 },
  { name: 'Repairs', value: 12000 },
  { name: 'Labor', value: 40000 },
  { name: 'Other', value: 5000 },
];

const profitTrendData = [
  { year: '2020', profit: 50000 },
  { year: '2021', profit: 65000 },
  { year: '2022', profit: 55000 },
  { year: '2023', profit: 72000 },
  { year: '2024', profit: 78000 }, // Projected
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#FA8072'];

function Analytics() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <BarChart className="h-6 w-6 mr-2 text-indigo-600" />
            Farm Analytics
        </h1>
        {/* Add date range selector if needed */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Yield Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Monthly Yield (kg)</h2>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <RechartsBarChart data={monthlyYieldData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }}/>
                <YAxis tick={{ fontSize: 12 }}/>
                <Tooltip />
                <Legend wrapperStyle={{fontSize: "12px"}}/>
                <Bar dataKey="Wheat" stackId="a" fill="#FFBB28" name="Wheat Yield"/>
                <Bar dataKey="Corn" stackId="a" fill="#00C49F" name="Corn Yield"/>
                <Bar dataKey="Soybeans" stackId="a" fill="#0088FE" name="Soybean Yield" radius={[4, 4, 0, 0]}/>
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>

         {/* Profit Trend Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
             <DollarSign className="h-5 w-5 mr-2 text-green-600"/>
             Profit Trend (Annual)
          </h2>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <RechartsLineChart data={profitTrendData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000)}k`} tick={{ fontSize: 12 }}/>
                <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, 'Profit']}/>
                <Legend wrapperStyle={{fontSize: "12px"}}/>
                <Line type="monotone" dataKey="profit" stroke="#16a34a" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Net Profit"/>
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Expense Breakdown Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 lg:col-span-2">
           <h2 className="text-lg font-semibold text-gray-700 mb-4">Expense Breakdown (Annual)</h2>
           <div style={{ width: '100%', height: 350 }}>
             <ResponsiveContainer>
                <RechartsPieChart>
                   <Pie
                     data={expenseData}
                     cx="50%"
                     cy="50%"
                     labelLine={false}
                     outerRadius={120}
                     fill="#8884d8"
                     dataKey="value"
                     nameKey="name"
                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                   >
                     {expenseData.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                   </Pie>
                   <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`}/>
                   <Legend wrapperStyle={{fontSize: "12px", paddingTop: "15px"}}/>
                 </RechartsPieChart>
             </ResponsiveContainer>
           </div>
         </div>

        {/* Key Performance Indicators (KPIs) */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-5">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Key Performance Indicators</h2>
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-md border border-green-200">
             <DollarSign className="h-7 w-7 text-green-600 flex-shrink-0"/>
             <div>
                 <p className="text-sm text-green-800 font-medium">Avg. Profit per Acre</p>
                 <p className="text-xl font-bold text-green-900">$350</p>
             </div>
          </div>
           <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-md border border-blue-200">
             <Droplet className="h-7 w-7 text-blue-600 flex-shrink-0"/>
             <div>
                 <p className="text-sm text-blue-800 font-medium">Water Usage Efficiency</p>
                 <p className="text-xl font-bold text-blue-900">85%</p>
             </div>
          </div>
           <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-md border border-yellow-200">
             <Tractor className="h-7 w-7 text-yellow-600 flex-shrink-0"/>
             <div>
                 <p className="text-sm text-yellow-800 font-medium">Equipment Uptime</p>
                 <p className="text-xl font-bold text-yellow-900">96%</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;