import React from 'react';
import { useNavigate } from 'react-router-dom';
import Features from '../components/Features';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

function Home() {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate('/download');
  };

  return (
    <main>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20" style={{ display: "flex", justifyContent: "center", flexDirection: "row-reverse" }}>
          {/* Text Content - Right Side */}
          <div className="order-2 md:order-1">
            <div className="text-right">
              <h1 className="text-5xl font-bold text-cyan-500 relative">
                <span className="absolute -top-8 right-0 text-6xl text-cyan-200 opacity-50">رفيق</span>
                مرحبا بك في رفيق
              </h1>
              <div className="mt-4 text-lg text-gray-600">
                رحلتك نحو صحة نفسية أفضل تبدأ هنا
              </div>
              <button 
                onClick={handleStartNow}
                className="mt-8 bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-all duration-200 transform hover:scale-105"
              >
                ابدأ الآن
              </button>
            </div>
          </div>
          
          {/* Image - Left Side */}
          <div style={{ width: "50%" }} className="order-1 md:order-2">
          <img 
              src="../../src/dist/assets/2.jpeg" 
              alt="Mental health support"
              className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{ width: "70%" }}
            />
          </div>
        </div>
      </div>
      <Features />
      <About />
      <Testimonials />
      <CallToAction />
    </main>
  );
}

export default Home;