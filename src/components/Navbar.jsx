import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Solutions", href: "#solutions" },
    { label: "Technologies", href: "#technologies" },
    { label: "Clients", href: "#clients" },
    { label: "Reviews", href: "#testimonials" }, // <-- Naya Link Target
    { label: "About", href: "#about" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-techDark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider text-white">
          JAG<span className="text-brandRed font-extrabold drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]">SOFTWARE</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="text-gray-400 hover:text-brandRed transition-colors text-xs uppercase font-bold tracking-wider">{item.label}</a>
          ))}
          <a href="#contact" className="bg-brandRed text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg shadow-brandRed/20 hover:scale-105 transition-transform uppercase tracking-wider">Connect</a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white focus:outline-none">
          <div className={`w-6 h-0.5 bg-white transition-all my-1 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all my-1 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all my-1 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-techSurface border-b border-white/5 flex flex-col gap-3 p-6">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} onClick={() => setIsOpen(false)} className="text-gray-200 text-sm font-semibold uppercase">{item.label}</a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-brandRed text-white p-3 text-center rounded-lg font-bold text-xs uppercase tracking-wider mt-2">Connect</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;