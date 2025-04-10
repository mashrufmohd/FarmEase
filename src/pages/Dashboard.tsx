import React from 'react';
import { Link } from 'react-router-dom';
import {
  Thermometer,
  Droplets,
  Wind,
  AlertTriangle,
  Clock,
  Sprout,
  Package,
  BarChart,
} from 'lucide-react';
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Sample data for the chart
const yieldData = [
  { name: 'Wheat', yield: 4500 },
  { name: 'Corn', yield: 8200 },
  { name: 'Soybeans', yield: 3100 },
  { name: 'Barley', yield: 3800 },
];

// Sample data for other sections
const recentAlerts = [
    { id: 'a1', type: 'inventory', severity: 'medium', message: 'Low Fertilizer Stock: Nitrogen level below 20%.', date: '2 hours ago', acknowledged: false},
    { id: 'a2', type: 'pest', severity: 'high', message: 'Aphid infestation detected in Field C-West.', date: '1 day ago', acknowledged: false},
    { id: 'a3', type: 'weather', severity: 'low', message: 'Light frost expected overnight.', date: '3 days ago', acknowledged: true},
];

const todaysTasks = [
    { id: 't1', title: 'Irrigation Check - Sector A', status: 'completed', time: '8:00 AM', priority: 'medium' },
    { id: 't2', title: 'Apply Fungicide - Field B', status: 'pending', time: 'Due 2:00 PM', priority: 'high' },
    { id: 't3', title: 'Scout for Pests - Field C', status: 'in-progress', time: 'Ongoing', priority: 'medium' },
    { id: 't4', title: 'Inventory Check - Seeds', status: 'pending', time: 'Due EOD', priority: 'low' },
];

const cropStatus = [
    { name: 'Wheat (Field A)', status: 'Flowering', health: 'good', progress: 75 },
    { name: 'Corn (Field B)', status: 'Vegetative', health: 'good', progress: 40 },
    { name: 'Soybeans (Field C)', status: 'Pod Development', health: 'fair', progress: 60 },
];

const inventoryHighlights = [
    { name: 'Nitrogen Fertilizer', quantity: 18, unit: 'bags', reorderPoint: 20 },
    { name: 'Corn Seed DKC65-95', quantity: 5, unit: 'bags', reorderPoint: 5 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 sm:mb-0">Dashboard</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</div>
      </div>

      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Weather Snippet */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-3 text-lg">Weather Snapshot</h3>
          <div className="flex items-center justify-around space-x-2 text-center">
             <div>
                <Thermometer className="h-6 w-6 mx-auto text-red-500 mb-1" />
                <p className="text-xl font-bold">24°C</p>
                <p className="text-xs text-gray-500">Temp</p>
             </div>
              <div>
                <Droplets className="h-6 w-6 mx-auto text-blue-500 mb-1" />
                <p className="text-xl font-bold">65%</p>
                <p className="text-xs text-gray-500">Humidity</p>
             </div>
             <div>
                <Wind className="h-6 w-6 mx-auto text-gray-500 mb-1" />
                <p className="text-xl font-bold">12 km/h</p>
                <p className="text-xs text-gray-500">Wind</p>
             </div>
          </div>
          <p className="text-sm text-gray-600 mt-3 text-center">Partly cloudy, conditions optimal.</p>
        </div>

         {/* Active Alerts Snippet */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-3">
             <h3 className="font-semibold text-gray-700 text-lg">Active Alerts</h3>
             <span className="text-sm font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">{recentAlerts.filter(a => !a.acknowledged).length}</span>
          </div>
          <div className="space-y-2">
             {recentAlerts.slice(0, 2).map(alert => (
               <div key={alert.id} className="flex items-start space-x-2 text-sm">
                 <AlertTriangle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                   alert.severity === 'high' ? 'text-red-500' :
                   alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                 }`} />
                 <p className="text-gray-700">{alert.message}</p>
               </div>
             ))}
              {recentAlerts.length === 0 && <p className="text-sm text-gray-500">No active alerts.</p>}
          </div>
          <Link to="/alerts" className="text-sm text-green-600 hover:text-green-800 mt-3 block text-right">View All Alerts →</Link>
        </div>

        {/* Upcoming Tasks Snippet */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
           <div className="flex items-center justify-between mb-3">
             <h3 className="font-semibold text-gray-700 text-lg">Upcoming Tasks</h3>
              <span className="text-sm font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">{todaysTasks.filter(t => t.status !== 'completed').length}</span>
          </div>
           <div className="space-y-2">
            {todaysTasks.filter(t => t.status !== 'completed').slice(0, 2).map(task => (
              <div key={task.id} className="flex items-start space-x-2 text-sm">
                <Clock className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                    task.priority === 'high' ? 'text-red-500' :
                    task.priority === 'medium' ? 'text-yellow-600' : 'text-gray-400'
                }`} />
                <div>
                    <p className="text-gray-700 font-medium">{task.title}</p>
                    <p className="text-xs text-gray-500">{task.time}</p>
                </div>
              </div>
            ))}
               {todaysTasks.filter(t => t.status !== 'completed').length === 0 && <p className="text-sm text-gray-500">No pending tasks for today.</p>}
          </div>
           <Link to="/tasks" className="text-sm text-green-600 hover:text-green-800 mt-3 block text-right">View All Tasks →</Link>
        </div>
      </div>

      {/* Main Content Area (Charts, Crop Status, Inventory) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Yield Forecast Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <BarChart className="h-5 w-5 mr-2 text-green-600" />
            Yield Forecast (kg/ha)
          </h2>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <RechartsBarChart data={yieldData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0"/>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip cursor={{ fill: 'rgba(230, 240, 230, 0.5)' }} />
                <Bar dataKey="yield" fill="#4CAF50" barSize={40} radius={[4, 4, 0, 0]} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Crop Status & Inventory */}
        <div className="space-y-6">
          {/* Crop Status */}
          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Sprout className="h-5 w-5 mr-2 text-green-600" />
                Crop Status
            </h2>
            <div className="space-y-4">
              {cropStatus.map((crop, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium text-sm text-gray-700">{crop.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      crop.health === 'good' ? 'bg-green-100 text-green-700' :
                      crop.health === 'fair' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                    }`}>{crop.health}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{crop.status}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-full rounded-full ${
                        crop.health === 'good' ? 'bg-green-500' :
                        crop.health === 'fair' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${crop.progress}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-right text-gray-500">{crop.progress}% Complete</p>
                </div>
              ))}
            </div>
             <Link to="/crops" className="text-sm text-green-600 hover:text-green-800 mt-4 block text-right">Manage Crops →</Link>
          </div>

          {/* Inventory Highlights */}
          <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Package className="h-5 w-5 mr-2 text-blue-600" />
                Inventory Watchlist
            </h2>
            <div className="space-y-3">
              {inventoryHighlights.map((item, index) => (
                 <div key={index} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2 last:border-b-0">
                    <div>
                        <p className="text-gray-700 font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">Reorder at {item.reorderPoint} {item.unit}</p>
                    </div>
                    <span className={`font-bold ${item.quantity <= item.reorderPoint ? 'text-red-600' : 'text-gray-800'}`}>
                        {item.quantity} {item.unit}
                    </span>
                 </div>
              ))}
            </div>
             <Link to="/inventory" className="text-sm text-green-600 hover:text-green-800 mt-4 block text-right">Manage Inventory →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Need to add Link import
