import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechHub from './components/TechHub';
import Staff from './components/companylife/Staff'; 
import Gallery from './components/companylife/Gallery'; // 🎯 Mapped strictly with lowercase folder
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import WhatsAppToggle from "./components/WhatsAppToggle";
import EnquiryModal from "./components/EnquiryModal"; 

// 🎯 Main Landing Page Layout
const MainLandingPage = () => (
  <>
    <Hero />
    <Services />
    <TechHub />
    <Clients />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-techDark text-gray-100 selection:bg-brandRed selection:text-white antialiased relative">
        {/* Global Components Layout */}
        <Navbar />
        <EnquiryModal /> 
        
        <main className="pt-20 relative z-10">
          <Routes>
            {/* Main Home Route */}
            <Route path="/" element={<MainLandingPage />} />
            
            {/* 🎯 Staff Page Route */}
            <Route path="/staff" element={<Staff />} />

            {/* 🎯 Gallery Page Route */}
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <Footer /> 
        <WhatsAppToggle />
      </div>
    </Router>
  );
}

export default App;