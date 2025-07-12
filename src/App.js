import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './webpages/navbar';
import Dashboard from './pages/dash';
import Inventory from './pages/inventory';
import Orders from './pages/Orders';
import Retailers from './pages/Retailers';
import Payments from './pages/Payments';

import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/retailers" element={<Retailers />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
