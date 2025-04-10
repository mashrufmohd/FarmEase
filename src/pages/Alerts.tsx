import React from 'react';
import { Bell, AlertTriangle, CheckSquare, X } from 'lucide-react';
import type { Alert } from '../types'; // Import the type

// Sample Alert Data
const alertData: Alert[] = [
  { id: 'a1', type: 'inventory', severity: 'medium', message: 'Low Fertilizer Stock: Urea Nitrogen level is at 18 bags (Reorder point: 20 bags).', date: '2024-07-18 09:15', acknowledged: false },
  { id: 'a2', type: 'pest', severity: 'high', message: 'Aphid infestation detected in Field C-West (Soybeans). Threshold exceeded.', date: '2024-07-17 14:30', acknowledged: false },
  { id: 'a3', type: 'weather', severity: 'low', message: 'Light frost (0°C) possible overnight tonight. Sensitive crops may need protection.', date: '2024-07-16 11:00', acknowledged: true },
  { id: 'a4', type: 'crop', severity: 'medium', message: 'Field B (Corn) showing signs of moderate Nitrogen deficiency in Zone 3.', date: '2024-07-18 10:00', acknowledged: false },
  { id: 'a5', type: 'task', severity: 'high', message: 'Task "Apply Fungicide - Field B" is overdue (Due: 2024-07-18 14:00).', date: '2024-07-18 14:05', acknowledged: false },
  { id: 'a6', type: 'inventory', severity: 'low', message: 'Baler Twine stock is at 25 rolls (Reorder point: 10 rolls).', date: '2024-07-18 11:30', acknowledged: true },
];

// Helper for severity styling
const getSeverityInfo = (severity: Alert['severity']) => {
  switch (severity) {
    case 'critical': return { icon: AlertTriangle, color: 'text-red-700', bgColor: 'bg-red-100', border: 'border-red-500' };
    case 'high': return { icon: AlertTriangle, color: 'text-red-600', bgColor: 'bg-red-100', border: 'border-red-400' };
    case 'medium': return { icon: AlertTriangle, color: 'text-yellow-600', bgColor: 'bg-yellow-100', border: 'border-yellow-400' };
    case 'low': return { icon: Bell, color: 'text-blue-600', bgColor: 'bg-blue-100', border: 'border-blue-400' };
    default: return { icon: Bell, color: 'text-gray-600', bgColor: 'bg-gray-100', border: 'border-gray-400' };
  }
};

// Helper for date formatting
const formatDateTime = (dateString: string) => new Date(dateString).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });

function Alerts() {
  const [alerts, setAlerts] = React.useState(alertData);
  const [filterSeverity, setFilterSeverity] = React.useState<Alert['severity'] | 'all'>('all');

  const handleSeverityFilterChange = (severity: Alert['severity'] | 'all') => {
    setFilterSeverity(severity);
  };
  // Removed unused filterType and setFilterType state
  const [showAcknowledged, setShowAcknowledged] = React.useState(false);

  const toggleAcknowledge = (id: string) => {
    setAlerts(prevAlerts =>
      prevAlerts.map(alert =>
        alert.id === id ? { ...alert, acknowledged: !alert.acknowledged } : alert
      )
    );
  };

  const filteredAlerts = alerts.filter(alert => {
      if (!showAcknowledged && alert.acknowledged) return false;
      if (filterSeverity !== 'all' && alert.severity !== filterSeverity) return false;
      // Removed filterType condition as it is unused
      return true;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort newest first

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Filtering options */}
         <div className="flex items-center space-x-2">
             <select
                 value={filterSeverity}
                 onChange={(e) => handleSeverityFilterChange(e.target.value as Alert['severity'] | 'all')}
                 className="border rounded-md px-3 py-1.5 text-xs font-medium focus:outline-none"
             >
                 <option value="all">All Severities</option>
                 <option value="critical">Critical</option>
                 <option value="high">High</option>
                 <option value="medium">Medium</option>
                 <option value="low">Low</option>
             </select>
            Alerts & Notifications
        </div>
        {/* Filtering options could go here */}
         <div className="flex items-center space-x-2">
             <button
                 onClick={() => setShowAcknowledged(!showAcknowledged)}
                 className={`inline-flex items-center px-3 py-1.5 border rounded-md text-xs font-medium focus:outline-none ${
                     showAcknowledged ? 'bg-gray-200 border-gray-400 text-gray-800' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                 }`}
             >
                 {showAcknowledged ? <X className="h-4 w-4 mr-1"/> : <CheckSquare className="h-4 w-4 mr-1"/>}
                 {showAcknowledged ? 'Hide Ack' : 'Show Ack'}
             </button>
             {/* Add more filters if needed */}
         </div>
      </div>

      {/* Alert List */}
      <div className="space-y-4">
        {filteredAlerts.length > 0 ? filteredAlerts.map((alert) => {
          const { icon: SeverityIcon, color: severityColor, bgColor: severityBgColor, border: severityBorder } = getSeverityInfo(alert.severity);
          return (
            <div key={alert.id} className={`bg-white shadow rounded-lg border-l-4 ${severityBorder} ${alert.acknowledged ? 'opacity-60' : ''}`}>
              <div className="p-4 flex items-start space-x-4">
                 <div className={`p-1.5 rounded-full ${severityBgColor} flex-shrink-0 mt-1`}>
                    <SeverityIcon className={`h-5 w-5 ${severityColor}`} />
                 </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                     <span className={`text-xs font-semibold uppercase px-2 py-0.5 rounded ${severityBgColor} ${severityColor}`}>{alert.severity} - {alert.type}</span>
                     <span className="text-xs text-gray-500">{formatDateTime(alert.date)}</span>
                  </div>
                  <p className="text-sm text-gray-800 mt-2">{alert.message}</p>
                </div>
                <button
                    onClick={() => toggleAcknowledge(alert.id)}
                    title={alert.acknowledged ? "Mark as Unacknowledged" : "Acknowledge Alert"}
                    className={`p-1 rounded hover:bg-gray-200 ${alert.acknowledged ? 'text-gray-400' : 'text-green-600'}`}
                >
                   {alert.acknowledged ? <X className="h-5 w-5"/> : <CheckSquare className="h-5 w-5"/>}
                </button>
              </div>
            </div>
          );
        }) : (
          <div className="text-center py-10 text-gray-500 bg-white rounded-lg shadow border border-gray-200">
            No alerts match the current filters. All clear!
          </div>
        )}
      </div>
    </div>
  );
}

export default Alerts;