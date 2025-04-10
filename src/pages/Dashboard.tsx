import React from 'react';
import { 
  Thermometer,
  Droplets,
  Wind,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</div>
      </div>

      {/* Weather Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-blue-500 mb-2">
            <Thermometer className="h-5 w-5" />
            <h3 className="font-medium">Temperature</h3>
          </div>
          <p className="text-2xl font-bold">24°C</p>
          <p className="text-sm text-gray-500">Optimal for crop growth</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-blue-500 mb-2">
            <Droplets className="h-5 w-5" />
            <h3 className="font-medium">Humidity</h3>
          </div>
          <p className="text-2xl font-bold">65%</p>
          <p className="text-sm text-gray-500">Moderate humidity levels</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-blue-500 mb-2">
            <Wind className="h-5 w-5" />
            <h3 className="font-medium">Wind Speed</h3>
          </div>
          <p className="text-2xl font-bold">12 km/h</p>
          <p className="text-sm text-gray-500">Light breeze</p>
        </div>
      </div>

      {/* Alerts and Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
              <div>
                <p className="font-medium">Low Fertilizer Stock</p>
                <p className="text-sm text-gray-500">Nitrogen fertilizer needs reordering</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="font-medium">Pest Alert</p>
                <p className="text-sm text-gray-500">Possible aphid infestation in sector B</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Today's Tasks</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="font-medium">Irrigation Check</p>
                <p className="text-sm text-gray-500">Completed at 8:00 AM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
              <div>
                <p className="font-medium">Apply Fertilizer</p>
                <p className="text-sm text-gray-500">Due by 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crop Status */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Crop Status Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Wheat', status: 'Growing', health: 'good', progress: 65 },
            { name: 'Corn', status: 'Seedling', health: 'good', progress: 20 },
            { name: 'Soybeans', status: 'Ready to Harvest', health: 'good', progress: 95 },
          ].map((crop, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="font-medium">{crop.name}</h3>
              <p className="text-sm text-gray-500">{crop.status}</p>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${crop.progress}%` }}
                ></div>
              </div>
              <p className="mt-1 text-sm text-gray-500">{crop.progress}% Complete</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}