import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AIPage from './pages/AIPage';
import EcommercePage from './pages/EcommercePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;