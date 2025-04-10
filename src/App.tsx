import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CropManagement from './pages/CropManagement';
import Weather from './pages/Weather';
import Inventory from './pages/Inventory';
import Tasks from './pages/Task';
import Analytics from './pages/Analytics';
import Planning from './pages/planning';
import Sustainability from './pages/Sustainability';
import Market from './pages/Market';
import Alerts from './pages/Alerts';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crops" element={<CropManagement />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/market" element={<Market />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;