import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { Services } from './pages/Services';
import { MarketStats } from './pages/MarketStats';
import { Evaluation } from './pages/Evaluation';
import { Newsletter } from './pages/Newsletter';
import { Contact } from './pages/Contact';
import { Testimonials } from './pages/Testimonials';
import About from './pages/About';
import { ScrollToTop } from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main key={location.pathname} className="flex-grow page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings key={location.key} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/market-stats" element={<MarketStats />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;