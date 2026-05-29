import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechHub from './components/TechHub';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import WhatsAppToggle from "./components/WhatsAppToggle";
import EnquiryModal from "./components/EnquiryModal"; // <-- 1. Modal Component Import Kiya

function App() {
  return (
    <div className="min-h-screen bg-techDark text-gray-100 selection:bg-brandRed selection:text-white antialiased">
      <Navbar />
      <EnquiryModal /> {/* <-- 2. Modal Core Framework Block Attach Kiya */}
      
      <main className="pt-4">
        <Hero />
        <Services />
        <TechHub />
        <Clients />
        <Testimonials />
        <Contact />
        <Footer /> 
        <WhatsAppToggle />
      </main>
    </div>
  );
}

export default App;