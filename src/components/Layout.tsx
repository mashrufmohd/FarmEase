import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Sprout,
  Cloud,
  Package,
  Calendar,
  BarChart,
  Map,
  Leaf,
  ShoppingCart,
  Bell,
  Users,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/crops', icon: Sprout, label: 'Crop Management' },
  { path: '/weather', icon: Cloud, label: 'Weather' },
  { path: '/inventory', icon: Package, label: 'Inventory' },
  { path: '/tasks', icon: Calendar, label: 'Tasks' },
  { path: '/analytics', icon: BarChart, label: 'Analytics' },
  { path: '/planning', icon: Map, label: 'Planning' },
  { path: '/sustainability', icon: Leaf, label: 'Sustainability' },
  { path: '/market', icon: ShoppingCart, label: 'Market & Sales' },
  { path: '/alerts', icon: Bell, label: 'Alerts' },
  { path: '/community', icon: Users, label: 'Community' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 w-64 h-screen transition-transform
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 bg-white border-r border-gray-200
      `}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">FarmEase</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg
                  ${isActive
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className="md:ml-64">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Bell className="h-6 w-6" />
              </button>
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}