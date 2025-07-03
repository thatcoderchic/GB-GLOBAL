import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import MetaTags from './components/MetaTags';
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
import CarWasher from './pages/CarWasher';
import CarWasherAdopter from './pages/CarWasherAdopter';
import CarWasherPipe from './pages/CarWasherPipe';
import CarWasherFilter from './pages/CarWasherFilter';
import CarWasherGun from './pages/CarWasherGun';
import CarWasherSwitch from './pages/CarWasherSwitch';
import ImageTest from './pages/ImageTest';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <MetaTags />
        <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white font-sans ios-optimized android-optimized">
          <Navbar />
          <main className="pb-12 lg:pb-16 overflow-hidden">
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
              <Route path="/car-washer" element={<CarWasher />} />
              <Route path="/car-washer-adopter" element={<CarWasherAdopter />} />
              <Route path="/car-washer-pipe" element={<CarWasherPipe />} />
              <Route path="/car-washer-filter" element={<CarWasherFilter />} />
              <Route path="/car-washer-gun" element={<CarWasherGun />} />
              <Route path="/car-washer-switch" element={<CarWasherSwitch />} />
              <Route path="/image-test" element={<ImageTest />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;