import React from 'react';
import { Sprout, PlusCircle } from 'lucide-react';
import type { CropData } from '../types'; // Import the type

// Sample Crop Data
const cropData: CropData[] = [
  { id: 'crop1', name: 'Wheat', variety: 'Winter Star', field: 'North Field', stage: 'Flowering', plantingDate: '2023-10-15', expectedHarvest: '2024-07-20', health: 'good', notes: 'Irrigation normal, no pest issues.' },
  { id: 'crop2', name: 'Corn', variety: 'DKC65-95', field: 'South Field', stage: 'Vegetative (V8)', plantingDate: '2024-04-20', expectedHarvest: '2024-09-15', health: 'good', notes: 'Slight nitrogen deficiency noted.' },
  { id: 'crop3', name: 'Soybeans', variety: 'Asgrow AG38X8', field: 'East Field', stage: 'Pod Development (R3)', plantingDate: '2024-05-05', expectedHarvest: '2024-10-01', health: 'fair', notes: 'Japanese beetle presence observed.' },
  { id: 'crop4', name: 'Alfalfa', variety: 'Vernal', field: 'West Field', stage: 'Post-1st Cutting', plantingDate: '2023-08-20', expectedHarvest: '2024-06-10 (2nd cut)', health: 'good', notes: 'Regrowth looks strong.' },
];

// Helper to format date string
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Helper for health badge styling
const getHealthBadgeStyle = (health: CropData['health']) => {
  switch (health) {
    case 'good': return 'bg-green-100 text-green-800';
    case 'fair': return 'bg-yellow-100 text-yellow-800';
    case 'poor': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

function CropManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0 flex items-center">
            <Sprout className="h-6 w-6 mr-2 text-green-600" />
            Crop Management
        </h1>
        <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <PlusCircle className="h-5 w-5 mr-1.5" />
            Add New Crop Record
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop / Variety</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Planted</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Harvest</th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Health</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cropData.map((crop) => (
                <tr key={crop.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{crop.name}</div>
                    <div className="text-xs text-gray-500">{crop.variety}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{crop.field}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{crop.stage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatDate(crop.plantingDate)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formatDate(crop.expectedHarvest)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${getHealthBadgeStyle(crop.health)}`}>
                      {crop.health}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate" title={crop.notes}>{crop.notes}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              ))}
               {cropData.length === 0 && (
                 <tr>
                    <td colSpan={8} className="text-center py-10 text-gray-500">No crop data available.</td>
                 </tr>
               )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CropManagement;