import React from 'react';
import { Calendar, PlusCircle, Clock, CheckCircle, AlertOctagon, User } from 'lucide-react';
import type { Task } from '../types'; // Import the type

// Sample Task Data
const taskData: Task[] = [
  { id: 't1', title: 'Irrigation Check - Sector A', description: 'Check emitters and pressure in Sector A system.', dueDate: '2024-07-18', status: 'completed', assignedTo: 'John D.', priority: 'medium' },
  { id: 't2', title: 'Apply Fungicide - Field B (Corn)', description: 'Apply recommended fungicide for gray leaf spot prevention.', dueDate: '2024-07-18', status: 'pending', assignedTo: 'Sarah K.', priority: 'high' },
  { id: 't3', title: 'Scout for Pests - Field C (Soybeans)', description: 'Look for Japanese beetles and aphids, report findings.', dueDate: '2024-07-19', status: 'in-progress', assignedTo: 'Mike R.', priority: 'medium' },
  { id: 't4', title: 'Inventory Check - Seeds', description: 'Verify remaining seed stock and update inventory levels.', dueDate: '2024-07-18', status: 'pending', assignedTo: 'Admin', priority: 'low' },
  { id: 't5', title: 'Mow Waterways', description: 'Mow grass waterways in North and West fields.', dueDate: '2024-07-20', status: 'pending', assignedTo: 'John D.', priority: 'low' },
  { id: 't6', title: 'Repair Fence - Pasture Gate', description: 'Fix broken latch on the main pasture gate.', dueDate: '2024-07-19', status: 'pending', assignedTo: 'Mike R.', priority: 'medium' },
];

// Helper for date formatting
const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-CA'); // YYYY-MM-DD format

// Helper for status icon and color
const getStatusInfo = (status: Task['status']) => {
  switch (status) {
    case 'pending': return { icon: Clock, color: 'text-gray-500', bgColor: 'bg-gray-100' };
    case 'in-progress': return { icon: AlertOctagon, color: 'text-blue-500', bgColor: 'bg-blue-100' };
    case 'completed': return { icon: CheckCircle, color: 'text-green-500', bgColor: 'bg-green-100' };
    default: return { icon: Clock, color: 'text-gray-500', bgColor: 'bg-gray-100' };
  }
};

// Helper for priority color
const getPriorityStyle = (priority: Task['priority']) => {
  switch (priority) {
    case 'high': return 'border-l-4 border-red-500';
    case 'medium': return 'border-l-4 border-yellow-500';
    case 'low': return 'border-l-4 border-gray-300';
    default: return '';
  }
};

function Tasks() {
  const [filter, setFilter] = React.useState<'all' | 'pending' | 'in-progress' | 'completed'>('all');

  const filteredTasks = taskData.filter(task => filter === 'all' || task.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0 flex items-center">
          <Calendar className="h-6 w-6 mr-2 text-purple-600" />
          Task Management
        </h1>
        <div className="flex items-center space-x-2">
           {/* Basic Filter Dropdown Placeholder */}
           <div className="relative inline-block text-left">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as typeof filter)}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                 >
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <PlusCircle className="h-5 w-5 mr-1.5" />
                Create New Task
            </button>
        </div>

      </div>

      {/* Task List */}
      <div className="space-y-4">
        {filteredTasks.length > 0 ? filteredTasks.map((task) => {
          const { icon: StatusIcon, color: statusColor, bgColor: statusBgColor } = getStatusInfo(task.status);
          const priorityStyle = getPriorityStyle(task.priority);

          return (
            <div key={task.id} className={`bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden ${priorityStyle}`}>
              <div className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                  </div>
                  <div className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium ${statusBgColor} ${statusColor} flex-shrink-0`}>
                    <StatusIcon className={`h-3.5 w-3.5 ${statusColor}`} />
                    <span className="capitalize">{task.status.replace('-', ' ')}</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 space-y-1 sm:space-y-0">
                   <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Due: {formatDate(task.dueDate)}</span>
                   </div>
                   <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Assigned To: {task.assignedTo}</span>
                   </div>
                    <div className="flex items-center space-x-1">
                        <span className={`capitalize px-1.5 py-0.5 rounded text-xs font-medium ${
                            task.priority === 'high' ? 'bg-red-100 text-red-700' :
                            task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'
                        }`}>{task.priority} Priority</span>
                    </div>
                </div>
              </div>
               {/* Optional: Actions Footer */}
               <div className="bg-gray-50 px-4 py-2 border-t border-gray-200 text-right">
                   <button className="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-3">Edit</button>
                   <button className="text-xs text-red-600 hover:text-red-800 font-medium">Delete</button>
               </div>
            </div>
          );
        }) : (
             <div className="text-center py-10 text-gray-500 bg-white rounded-lg shadow border border-gray-200">
                 No tasks match the current filter.
            </div>
        )}
      </div>
    </div>
  );
}

export default Tasks;