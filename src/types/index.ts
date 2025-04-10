export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo: string;
  priority: 'low' | 'medium' | 'high'; // Added priority
}

export interface CropData {
  id: string;
  name: string;
  variety?: string; // Optional variety
  field: string; // Added field location
  stage: string;
  plantingDate: string;
  expectedHarvest: string;
  health: 'good' | 'fair' | 'poor'; // Adjusted health levels
  notes: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'seeds' | 'fertilizers' | 'pesticides' | 'tools' | 'equipment' | 'other'; // Expanded categories
  quantity: number;
  unit: string;
  reorderPoint: number;
  lastRestocked: string;
  location?: string; // Optional location
}

export interface WeatherData { // Kept simple for now, used in Weather.tsx directly
  date: string;
  temperature: number;
  condition: string;
  humidity: number;
  rainfall: number;
  windSpeed: number;
}

export interface Alert {
  id: string;
  type: 'weather' | 'inventory' | 'pest' | 'task' | 'crop'; // Added crop type
  severity: 'low' | 'medium' | 'high' | 'critical'; // Added critical severity
  message: string;
  date: string;
  acknowledged: boolean; // Added status
}

export interface SalesRecord {
  id: string;
  cropName: string;
  quantity: number;
  unit: 'kg' | 'ton' | 'bushel'; // Added unit
  pricePerUnit: number; // Changed from 'price'
  totalPrice: number; // Added total
  date: string;
  buyer: string;
}

export interface CommunityPost {
  id: string;
  author: string;
  timestamp: string;
  title: string;
  content: string;
  replies: number;
}

export interface FieldPlan {
  id: string;
  fieldName: string;
  sizeAcres: number;
  currentCrop: string;
  plannedCrop: string;
  soilType: string;
  lastActivity: string;
}

export interface SustainabilityMetric {
    id: string;
    metric: string;
    value: string;
    target: string;
    trend: 'improving' | 'stable' | 'declining';
    lastUpdated: string;
}