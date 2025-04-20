import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import GearBoxRaja from './pages/GearBoxRaja';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white font-sans">
        <Navbar />
        <main className="pb-16 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:category/:id" element={<ProductDetails />} />
            <Route path="/gearbox-raja" element={<GearBoxRaja />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;