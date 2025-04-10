import React from 'react';
import { Map, PlusCircle, Edit, Trash2 } from 'lucide-react';
import type { FieldPlan } from '../types'; // Import the type

// Sample Planning Data
const planningData: FieldPlan[] = [
  { id: 'plan1', fieldName: 'North Field', sizeAcres: 120, currentCrop: 'Wheat', plannedCrop: 'Soybeans', soilType: 'Clay Loam', lastActivity: 'Harvested Wheat - 2024-07-15' },
  { id: 'plan2', fieldName: 'South Field', sizeAcres: 150, currentCrop: 'Corn', plannedCrop: 'Wheat (Winter)', soilType: 'Silty Clay', lastActivity: 'Applied Herbicide - 2024-06-20' },
  { id: 'plan3', fieldName: 'East Field', sizeAcres: 80, currentCrop: 'Soybeans', plannedCrop: 'Corn', soilType: 'Sandy Loam', lastActivity: 'Planted Soybeans - 2024-05-05' },
  { id: 'plan4', fieldName: 'West Field', sizeAcres: 100, currentCrop: 'Alfalfa (Year 2)', plannedCrop: 'Alfalfa (Year 3)', soilType: 'Loam', lastActivity: '1st Cutting Hay - 2024-06-10' },
  { id: 'plan5', fieldName: 'Pasture', sizeAcres: 50, currentCrop: 'Mixed Grass', plannedCrop: 'Mixed Grass (Overseed)', soilType: 'Varies', lastActivity: 'Grazing Rotation - Ongoing' },
];

// Helper function to shorten long text
const truncate = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
}

function Planning() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0 flex items-center">
            <Map className="h-6 w-6 mr-2 text-orange-600" />
            Farm Planning
        </h1>
        <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <PlusCircle className="h-5 w-5 mr-1.5" />
            Add New Field Plan
        </button>
      </div>

      {/* Add introduction text */}
      <p className="text-gray-600">
        Manage field layouts, crop rotation schedules, and planned activities. Visualize your farm's operational plan for the upcoming seasons.
      </p>

      {/* Planning Table */}
       <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field Name</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Size (Acres)</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Crop</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Planned Crop</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Soil Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
                 <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {planningData.map((plan) => (
                <tr key={plan.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{plan.fieldName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-700">{plan.sizeAcres}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{plan.currentCrop}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold">{plan.plannedCrop}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.soilType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" title={plan.lastActivity}>
                      {truncate(plan.lastActivity, 35)}
                  </td>
                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                    <button title="Edit Plan" className="text-indigo-600 hover:text-indigo-900">
                        <Edit className="h-4 w-4 inline" />
                    </button>
                     <button title="Delete Plan" className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4 inline" />
                    </button>
                  </td>
                </tr>
              ))}
               {planningData.length === 0 && (
                 <tr>
                    <td colSpan={7} className="text-center py-10 text-gray-500">No field plans available.</td>
                 </tr>
               )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Planning;