import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import GearBoxRaja from './pages/GearBoxRaja';
import SpinMotor from './pages/SpinMotor';
import WashMotor from './pages/WashMotor';
import DoorLock from './pages/DoorLock';
import DrainMotor from './pages/DrainMotor';
import InletValve from './pages/InletValve';
import SpinBellow from './pages/SpinBellow';
import Timer from './pages/Timer';
import PressureSwitch from './pages/PressureSwitch';
import GearBoxXindi from './pages/GearBoxXindi';
import Clutch from './pages/Clutch';
import Magnetron from './pages/Magnetron';
import Transformer from './pages/Transformer';
import GlassTray from './pages/GlassTray';
import Fuse from './pages/Fuse';
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
            <Route path="/spin-motor" element={<SpinMotor />} />
            <Route path="/wash-motor" element={<WashMotor />} />
            <Route path="/door-lock" element={<DoorLock />} />
            <Route path="/drain-motor" element={<DrainMotor />} />
            <Route path="/inlet-valve" element={<InletValve />} />
            <Route path="/spin-bellow" element={<SpinBellow />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/pressure-switch" element={<PressureSwitch />} />
            <Route path="/gear-box-xindi" element={<GearBoxXindi />} />
            <Route path="/clutch" element={<Clutch />} />
            <Route path="/magnetron" element={<Magnetron />} />
            <Route path="/transformer" element={<Transformer />} />
            <Route path="/glass-tray" element={<GlassTray />} />
            <Route path="/fuse" element={<Fuse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;