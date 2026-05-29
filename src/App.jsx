import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechHub from './components/TechHub';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer'; // <-- 1. Naya Import Yahan Kiya
import WhatsAppToggle from "./components/WhatsAppToggle";

function App() {
  return (
    <div className="min-h-screen bg-techDark text-gray-100 selection:bg-brandRed selection:text-white antialiased">
      <Navbar />
      
      <main className="pt-4">
        <Hero />
        <Services />
        <TechHub />
        <Clients />
        <Testimonials />
        <Contact />
        <Footer /> {/* <-- 2. Footer Yahan Attach Kiya */}
        <WhatsAppToggle />
      </main>
    </div>
  );
}

export default App;