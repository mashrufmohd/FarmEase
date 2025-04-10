export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo: string;
}

export interface CropData {
  id: string;
  name: string;
  stage: string;
  plantingDate: string;
  expectedHarvest: string;
  health: 'good' | 'warning' | 'critical';
  notes: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'seeds' | 'fertilizers' | 'tools' | 'other';
  quantity: number;
  unit: string;
  reorderPoint: number;
  lastRestocked: string;
}

export interface WeatherData {
  date: string;
  temperature: number;
  condition: string;
  humidity: number;
  rainfall: number;
  windSpeed: number;
}

export interface Alert {
  id: string;
  type: 'weather' | 'inventory' | 'pest' | 'task';
  severity: 'low' | 'medium' | 'high';
  message: string;
  date: string;
}

export interface SalesRecord {
  id: string;
  cropName: string;
  quantity: number;
  price: number;
  date: string;
  buyer: string;
}