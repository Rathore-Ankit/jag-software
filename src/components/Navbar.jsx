import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  // होमपेज पर जाने और टॉप पर स्क्रॉल करने के लिए फंक्शन (🎯 Gallery और Birthday भी इसी का उपयोग करेंगे)
  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveDropdown(null);
    
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  // ड्रॉपडाउन या मेनू के अन्य एंकर लिंक्स (#about, #testimonials आदि) को हैंडल करने के लिए फंक्शन
  const handleSectionClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveDropdown(null);

    const targetSection = href.replace('/', ''); 

    if (location.pathname === '/') {
      const element = document.querySelector(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  // Home anchors mapping back to core structure
  const coreLinks = [
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/#products" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Technologies", href: "/#technologies" },
    { label: "Clients", href: "/#clients" },
  ];

  // 🎯 यहाँ Activity Gallery और Birthday Logs का 'to: "/staff"' हटाकर उन्हें होमपेज से लिंक कर दिया गया है
  const companyLifeItems = [
    { label: "Office Staff & Team", to: "/staff", desc: "Meet our developers & database analysts group.", icon: "👥" },
    { label: "Activity Gallery", isHomeTop: true, desc: "Glance inside our corporate events and workspace.", icon: "🖼️" },
    { label: "Birthday Logs", isHomeTop: true, desc: "Celebrating milestones and employee moments.", icon: "🎂" },
    { label: "About Overview", href: "/#about", desc: "Our core structural engineering roadmap.", icon: "🏢" },
    { label: "Client Reviews", href: "/#testimonials", desc: "Feedback loop from global shipping leaders.", icon: "⭐️" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-techDark/80 backdrop-blur-md border-b border-white/5 select-none">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* BRAND IDENTITY */}
        <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3 group focus:outline-none">
          <img 
            src="/Jaglogo.png" 
            alt="JAG Logo" 
            className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </Link>
        
        {/* DESKTOP NAVIGATION MATRIX */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" onClick={handleHomeClick} className="relative text-gray-400 hover:text-brandRed transition-colors text-xs uppercase font-bold tracking-wider py-2 group/link">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brandRed transition-all duration-300 group-hover/link:w-full"></span>
          </Link>

          {coreLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              onClick={(e) => handleSectionClick(e, item.href)}
              className="relative text-gray-400 hover:text-brandRed transition-colors text-xs uppercase font-bold tracking-wider py-2 group/link"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brandRed transition-all duration-300 group-hover/link:w-full"></span>
            </a>
          ))}

          {/* DYNAMIC MEGA MENU TRIGGER */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-gray-400 hover:text-brandRed text-xs uppercase font-bold tracking-wider cursor-pointer focus:outline-none py-1">
              Company Life
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180 text-brandRed' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* MEGA MENU LAYER */}
            <div className={`absolute top-full -right-24 w-80 pt-3 transition-all duration-300 origin-top ${activeDropdown === 'company' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="bg-techSurface/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl grid grid-cols-1 gap-2">
                {companyLifeItems.map((subItem, subIdx) => {
                  if (subItem.to) {
                    return (
                      /* केवल Office Staff & Team दूसरे पेज (/staff) पर जाएगा */
                      <Link 
                        key={subIdx} 
                        to={subItem.to}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group/sub"
                      >
                        <span className="text-xl bg-techDark/50 w-9 h-9 flex items-center justify-center rounded-lg border border-white/5 group-hover/sub:border-brandRed/30 transition-colors">
                          {subItem.icon}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-white group-hover/sub:text-brandRed transition-colors uppercase tracking-wide">
                            {subItem.label}
                          </h4>
                          <p className="text-[10px] text-gray-400 mt-0.5 font-medium leading-tight">
                            {subItem.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  } else if (subItem.isHomeTop) {
                    return (
                      /* 🎯 Activity Gallery और Birthday Logs पर क्लिक करने पर होमपेज पर ही रहेगा और ऊपर स्क्रॉल होगा */
                      <a 
                        key={subIdx} 
                        href="/"
                        onClick={handleHomeClick}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group/sub"
                      >
                        <span className="text-xl bg-techDark/50 w-9 h-9 flex items-center justify-center rounded-lg border border-white/5 group-hover/sub:border-brandRed/30 transition-colors">
                          {subItem.icon}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-white group-hover/sub:text-brandRed transition-colors uppercase tracking-wide">
                            {subItem.label}
                          </h4>
                          <p className="text-[10px] text-gray-400 mt-0.5 font-medium leading-tight">
                            {subItem.desc}
                          </p>
                        </div>
                      </a>
                    );
                  } else {
                    return (
                      /* About और Reviews संबंधित सेक्शन्स पर स्क्रॉल करेंगे */
                      <a 
                        key={subIdx} 
                        href={subItem.href}
                        onClick={(e) => handleSectionClick(e, subItem.href)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group/sub"
                      >
                        <span className="text-xl bg-techDark/50 w-9 h-9 flex items-center justify-center rounded-lg border border-white/5 group-hover/sub:border-brandRed/30 transition-colors">
                          {subItem.icon}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-white group-hover/sub:text-brandRed transition-colors uppercase tracking-wide">
                            {subItem.label}
                          </h4>
                          <p className="text-[10px] text-gray-400 mt-0.5 font-medium leading-tight">
                            {subItem.desc}
                          </p>
                        </div>
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          <a href="/#contact" onClick={(e) => handleSectionClick(e, "/#contact")} className="bg-brandRed text-white px-5 py-2 rounded-xl text-xs font-bold shadow-lg shadow-brandRed/20 hover:bg-brandRedGlow hover:scale-[1.03] transition-all uppercase tracking-wider">Connect</a>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white focus:outline-none cursor-pointer z-50">
          <div className={`w-6 h-0.5 bg-white transition-all my-1.5 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all my-1.5 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all my-1.5 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`lg:hidden fixed inset-x-0 top-0 bg-techSurface/98 border-b border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[100vh] opacity-100 pt-20 pb-8' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-3 px-6 max-h-[70vh] overflow-y-auto">
          <Link to="/" onClick={handleHomeClick} className="text-gray-300 text-sm font-bold uppercase tracking-wider py-1">Home</Link>
          
          {coreLinks.map((item, index) => (
            <a key={index} href={item.href} onClick={(e) => handleSectionClick(e, item.href)} className="text-gray-300 text-sm font-bold uppercase tracking-wider py-1">{item.label}</a>
          ))}
          
          <div className="w-full h-px bg-white/5 my-2"></div>
          <span className="text-[10px] text-techSky font-black tracking-widest uppercase mb-1">Extended Activity Matrix</span>
          
          {companyLifeItems.map((subItem, subIdx) => {
            if (subItem.to) {
              return (
                <Link key={subIdx} to={subItem.to} onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 text-gray-400 text-xs font-semibold uppercase py-1.5 pl-1">
                  <span>{subItem.icon}</span> {subItem.label}
                </Link>
              );
            } else if (subItem.isHomeTop) {
              /* 🎯 मोबाइल व्यू में भी Activity और Birthday लिंक होमपेज पर ले जाएँगे */
              return (
                <a key={subIdx} href="/" onClick={handleHomeClick} className="flex items-center gap-2.5 text-gray-400 text-xs font-semibold uppercase py-1.5 pl-1">
                  <span>{subItem.icon}</span> {subItem.label}
                </a>
              );
            } else {
              return (
                <a key={subIdx} href={subItem.href} onClick={(e) => handleSectionClick(e, subItem.href)} className="flex items-center gap-2.5 text-gray-400 text-xs font-semibold uppercase py-1.5 pl-1">
                  <span>{subItem.icon}</span> {subItem.label}
                </a>
              );
            }
          })}
          
          <a href="/#contact" onClick={(e) => handleSectionClick(e, "/#contact")} className="bg-brandRed text-white p-3.5 text-center rounded-xl font-bold text-xs uppercase tracking-wider mt-4">Connect</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;