import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import About from './pages/About';
import QRCode from './pages/QRCode';
import QAComponent from './pages/QAComponent';
import QaAnswer from './pages/QaAnswer';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/QAComponent" element={<QAComponent />} />
        <Route path="/QaAnswer" element={<QaAnswer />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<QRCode />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;