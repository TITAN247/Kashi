import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from '@/sections/Navigation';
import Home from '@/pages/Home';
import UnexploredPage from '@/pages/UnexploredPage';
import TopPage from '@/pages/TopPage';
import CityLifePage from '@/pages/CityLifePage';
import SpiritualityPage from '@/pages/SpiritualityPage';
import FestivalsPage from '@/pages/FestivalsPage';
import MahashivratriPage from '@/pages/MahashivratriPage';
import { useEffect } from 'react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#2a1f1b] text-[#f8f5f2] selection:bg-[#f29066] selection:text-[#2a1f1b]">
        <ScrollToTop />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unexplored" element={<UnexploredPage />} />
          <Route path="/top" element={<TopPage />} />
          <Route path="/city-life" element={<CityLifePage />} />
          <Route path="/spirituality" element={<SpiritualityPage />} />
          <Route path="/festivals" element={<FestivalsPage />} />
          <Route path="/mahashivratri" element={<MahashivratriPage />} />
        </Routes>
      </div>
    </Router>
  );
}

