import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechHub from './components/TechHub';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials'; // <-- Naya Import Here
import Contact from './components/Contact';
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
        <Testimonials /> {/* <-- Naya Testimonial Module Attached */}
        <Contact />
        <WhatsAppToggle />
      </main>
    </div>
  );
}

export default App;