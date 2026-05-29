import React, { useState, useEffect } from 'react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "🚀 Product Engineering Matrix",
      title: "Driving",
      accentTitle: "Innovation",
      desc: "Using technologies to innovate newer methods to optimise resources and scale global enterprise applications.",
      // High-end premium developer interaction with dynamic holographic UI/UX interface
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", 
      glowColor: "from-brandRed/30"
    },
    {
      badge: "🔄 System Modernization Node",
      title: "Resilient",
      accentTitle: "Re-Engineering",
      desc: "Glad to help companies to migrate their Legacy systems into high-speed modern cloud framework architectures seamlessly.",
      // Real developer workstation with crisp multi-monitor code and matrix line structures
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop", 
      glowColor: "from-techSky/20"
    },
    {
      badge: "🤝 Global Technical Resource Matrix",
      title: "Out Sourcing &",
      accentTitle: "Consultancy",
      desc: "Allow us to take care of all your back office requirements, custom relational storage systems, and enterprise data models.",
      // Premium modern tech consultancy session with a corporate development strategy panel
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop", 
      glowColor: "from-blue-500/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 overflow-hidden bg-techDark">
      
      {/* Immersive 3D Digital Grid Network Backdrop */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Dynamic Ambient Background Aura */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-radial from-transparent to-transparent ${slides[currentSlide].glowColor} opacity-30 blur-[140px] transition-all duration-1000 pointer-events-none`}></div>

      {/* Main Split Layout Wrapper */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 pt-24 pb-12">
        
        {/* LEFT COLUMN: Core Content Frame */}
        <div className="lg:col-span-7 text-left space-y-6 flex flex-col justify-center h-full">
          
          {/* Slider Badge */}
          <div className="inline-flex items-center gap-2 bg-techSurface border border-white/5 text-techSky px-4 py-2 rounded-full text-[11px] font-black tracking-widest uppercase transition-all duration-500 shadow-xl shadow-black/30">
            <span className="w-2 h-2 rounded-full bg-brandRed shadow-[0_0_8px_#dc2626]"></span>
            {slides[currentSlide].badge}
          </div>

          {/* Master Sliding Text Box */}
          <div className="min-h-[140px] sm:min-h-[180px] flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[1.05] uppercase transition-all duration-500">
              {slides[currentSlide].title} <br />
              <span className="bg-gradient-to-r from-brandRed via-white to-techSky bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(220,38,38,0.25)]">
                {slides[currentSlide].accentTitle}
              </span>
            </h1>
          </div>

          {/* Animated Description Strata */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl min-h-[60px]">
            {slides[currentSlide].desc}
          </p>

          {/* Core Interactive Action Controllers */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#products" 
              className="bg-brandRed hover:bg-brandRedGlow text-white font-black text-center px-8 py-4 rounded-xl shadow-xl shadow-brandRed/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs tracking-widest uppercase"
            >
              Explore Solutions
            </a>
            <a 
              href="#contact" 
              className="border border-white/10 text-white hover:border-techSky/40 font-black text-center px-8 py-4 rounded-xl hover:bg-white/5 transition-all text-xs tracking-widest uppercase"
            >
              Get In Touch →
            </a>
          </div>

          {/* Slide Progress Dash Indicators */}
          <div className="flex gap-2 pt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? 'w-8 bg-brandRed' : 'w-2 bg-white/20'}`}
              ></button>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: HIGH-CONTRAST GLASS CARD WITH PREMIUM REAL TECH IMAGES */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end items-center relative group">
          
          <div className="w-[320px] sm:w-[400px] h-[340px] sm:h-[420px] bg-slate-900/60 border-2 border-white/15 rounded-3xl backdrop-blur-2xl relative flex items-center justify-center p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden group-hover:border-brandRed/50 transition-all duration-500">
            
            {/* Ambient Interior Glow */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-brandRed/20 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Ultra-Premium Image Frame with Crisp Scaling and No Invert distortions */}
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].accentTitle}
              className="w-full h-full object-cover rounded-2xl shadow-2xl transform lg:rotate-[-3deg] lg:scale-100 hover:scale-102 hover:rotate-0 transition-all duration-700 select-none pointer-events-none brightness-[0.95]"
            />

            {/* Futuristic Tech Frame Border Corners */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brandRed/80"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brandRed/80"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brandRed/80"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brandRed/80"></div>
          </div>

          {/* Floating Glass Status Badge */}
          <div className="absolute -bottom-4 -left-4 sm:left-4 bg-techSurface/95 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-xl flex items-center gap-3 shadow-2xl pointer-events-none">
            <div className="w-8 h-8 rounded-lg bg-brandRed/20 border border-brandRed/40 flex items-center justify-center text-sm font-bold text-brandRed">✓</div>
            <div className="text-left">
              <p className="text-[9px] uppercase tracking-wider font-black text-techSky">Active Architecture</p>
              <p className="text-xs font-black text-white">Verified Node</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;