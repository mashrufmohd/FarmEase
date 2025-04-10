import React from 'react';
import { Leaf, TrendingUp, TrendingDown, Minus, Target, Droplet, Recycle, Tractor } from 'lucide-react';
import type { SustainabilityMetric } from '../types'; // Import the type

// Sample Sustainability Metrics
const metricsData: SustainabilityMetric[] = [
  { id: 'sus1', metric: 'Water Usage Reduction', value: '15% (YTD)', target: '10%', trend: 'improving', lastUpdated: '2024-07-15' },
  { id: 'sus2', metric: 'Soil Organic Matter', value: '3.2%', target: '3.5%', trend: 'stable', lastUpdated: '2024-06-01' },
  { id: 'sus3', metric: 'Cover Crop Adoption', value: '60% of Acres', target: '75%', trend: 'improving', lastUpdated: '2024-05-20' },
  { id: 'sus4', metric: 'Pesticide Use (Risk Index)', value: 'Score 45', target: '< 40', trend: 'declining', lastUpdated: '2024-07-01' },
  { id: 'sus5', metric: 'On-Farm Energy Efficiency', value: '8% Improvement', target: '10%', trend: 'stable', lastUpdated: '2024-07-10' },
  { id: 'sus6', metric: 'Waste Recycling Rate', value: '70%', target: '80%', trend: 'improving', lastUpdated: '2024-06-25' },
];

// Helper for trend icon and color
const getTrendInfo = (trend: SustainabilityMetric['trend']) => {
  switch (trend) {
    case 'improving': return { icon: TrendingUp, color: 'text-green-600', label: 'Improving' };
    case 'stable': return { icon: Minus, color: 'text-gray-600', label: 'Stable' };
    case 'declining': return { icon: TrendingDown, color: 'text-red-600', label: 'Declining' };
    default: return { icon: Minus, color: 'text-gray-600', label: 'Stable' };
  }
};

// Simple icon mapping based on metric name keywords
const getMetricIcon = (metricName: string) => {
    const lowerCaseName = metricName.toLowerCase();
    if (lowerCaseName.includes('water')) return Droplet;
    if (lowerCaseName.includes('soil')) return Leaf;
    if (lowerCaseName.includes('waste') || lowerCaseName.includes('recycling')) return Recycle;
    if (lowerCaseName.includes('energy') || lowerCaseName.includes('fuel')) return Tractor;
    if (lowerCaseName.includes('crop') || lowerCaseName.includes('pesticide')) return Sprout; // Re-using Sprout from Layout import? Need to import it here too.
    return Target; // Default icon
};
import { Sprout } from 'lucide-react'; // Import Sprout if not already imported


function Sustainability() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Leaf className="h-6 w-6 mr-2 text-emerald-600" />
          Sustainability Dashboard
        </h1>
        {/* Add report generation button if needed */}
      </div>

      <p className="text-gray-600">
        Track key environmental and social metrics for your farm. Monitor progress towards sustainability goals and identify areas for improvement.
      </p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {metricsData.map((metric) => {
          const { icon: TrendIcon, color: trendColor, label: trendLabel } = getTrendInfo(metric.trend);
          const MetricIcon = getMetricIcon(metric.metric);
          return (
             <div key={metric.id} className="bg-white p-5 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200">
                 <div>
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-2">
                             <MetricIcon className="h-6 w-6 text-emerald-700 flex-shrink-0" />
                             <h3 className="text-md font-semibold text-gray-700 leading-tight">{metric.metric}</h3>
                        </div>
                        <div className={`flex items-center space-x-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                            metric.trend === 'improving' ? 'bg-green-100 text-green-700' :
                            metric.trend === 'stable' ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-700'
                        }`}>
                           <TrendIcon className={`h-3.5 w-3.5 ${trendColor}`} />
                           <span>{trendLabel}</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                        <p className="text-sm text-gray-500">Target: {metric.target}</p>
                    </div>
                 </div>
                 <div className="text-xs text-gray-400 mt-2 text-right">
                    Last Updated: {new Date(metric.lastUpdated).toLocaleDateString('en-CA')}
                 </div>
            </div>
          );
        })}
         {metricsData.length === 0 && (
             <p className="col-span-full text-center py-10 text-gray-500">No sustainability metrics defined yet.</p>
         )}
      </div>

        {/* Recommendations Section */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Improvement Opportunities</h2>
            <ul className="space-y-3 list-disc list-inside text-sm text-gray-700">
                <li>Consider precision nutrient application to further reduce fertilizer runoff and improve soil health scores.</li>
                <li>Explore options for solar panel installation on shed roofs to improve on-farm energy efficiency.</li>
                <li>Increase cover crop trials on fields planned for corn next season to enhance soil organic matter.</li>
                <li>Review pesticide application records to identify potential for using lower-risk alternatives where effective.</li>
            </ul>
        </div>
    </div>
  );
}

export default Sustainability;