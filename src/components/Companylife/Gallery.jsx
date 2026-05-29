import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  // Automatically scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter Categories for the technical workspace gallery
  const [activeFilter, setActiveFilter] = useState('ALL');

  // 🎯 Strictly synchronized with your exact folder structure (public/gallery/) and extension (.jpeg)
  const galleryItems = [
    {
      title: "Team Outing & Dinner",
      category: "EVENTS",
      src: "/gallery/activity1.jpeg", // Pointing directly to public/gallery/activity1.jpeg
      date: "January 2026",
      desc: "Celebrating successful delivery of the core automated bill generation systems."
    },
    {
      title: "Tech Brainstorming Session",
      category: "WORKSPACE",
      src: "/gallery/activity2.jpeg", // Pointing directly to public/gallery/activity2.jpeg
      date: "February 2026",
      desc: "Mapping out complex relational database schemas and T-SQL stored procedures execution maps."
    },
    {
      title: "Quarterly Review Meet",
      category: "EVENTS",
      src: "/gallery/activity3.jpeg", // Pointing directly to public/gallery/activity3.jpeg
      date: "April 2026",
      desc: "Recognizing outstanding performance in logistics container stuffing optimization modules."
    },
    {
      title: "Workspace Collaboration Desk",
      category: "WORKSPACE",
      src: "/gallery/activity4.jpeg", // Pointing directly to public/gallery/activity4.jpeg
      date: "May 2026",
      desc: "Where dynamic jQuery scripts meet high-end enterprise full-stack configurations."
    },
    {
      title: "New Year Bash 2026",
      category: "CELEBRATIONS",
      src: "/gallery/activity5.jpeg", // Pointing directly to public/gallery/activity5.jpeg
      date: "January 2026",
      desc: "Ringing in new development horizons with the entire corporate management team."
    },
    {
      title: "Project Architecture Release",
      category: "WORKSPACE",
      src: "/gallery/activity6.jpeg", // Pointing directly to public/gallery/activity6.jpeg
      date: "March 2026",
      desc: "Freezing scopes and testing infrastructure deployment pipelines for overseas freight managers."
    }
  ];

  // Logic to filter cards on the fly
  const filteredItems = activeFilter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 min-h-[85vh]">
      
      {/* Breadcrumb Back Navigation Link */}
      <div className="mb-10">
        <Link 
          to="/" 
          className="text-xs font-bold text-brandRed hover:text-brandRedGlow flex items-center gap-1 transition-colors uppercase tracking-wider w-fit"
        >
          ← Back to Systems Control (Home)
        </Link>
      </div>

      {/* Main Header Matrix Title */}
      <div className="text-center mb-12">
        <span className="text-[10px] text-techSky font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5 w-fit block mx-auto mb-3">
          JAG Culture Logging Node
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
          ACTIVITY <span className="text-brandRed">GALLERY</span>
        </h2>
        <div className="w-20 h-1 bg-brandRed mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Dynamic Filter Buttons Controller Menu */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
        {['ALL', 'WORKSPACE', 'EVENTS', 'CELEBRATIONS'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase border transition-all cursor-pointer focus:outline-none ${
              activeFilter === cat
                ? "bg-brandRed text-white border-brandRed shadow-lg shadow-brandRed/20 scale-105"
                : "bg-techSurface text-gray-400 border-white/5 hover:border-brandRed/30 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3-Column Premium Portfolio Cards Grid layout with smooth Image Zoom */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredItems.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-techSurface border border-white/[0.02] rounded-[2.5rem] p-4 flex flex-col justify-between transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandRed/10 hover:border-brandRed/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div>
              {/* Cinematic Zoom Photo Wrapper */}
              <div className="w-full h-52 bg-techDark border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden mb-5 relative select-none">
                <img 
                  /* 🎯 Added window.location.origin configuration to avoid route mismatch glitches */
                  src={item.src.startsWith('http') ? item.src : `${window.location.origin}${item.src}`}
                  alt={item.title}
                  /* Seamless 1.25x Hover Zoom Logic */
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-125"
                  onError={(e) => {
                    // Fallback visually if image asset hasn't hit the public/gallery root folder node yet
                    e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80";
                  }}
                />
                {/* Micro Floating Category Badge */}
                <span className="absolute top-3 right-3 bg-techDark/80 backdrop-blur-md border border-white/10 text-brandRed text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider z-10">
                  {item.category}
                </span>
              </div>

              {/* Text Information Stack */}
              <div className="px-2 pb-2">
                <span className="text-[10px] text-techSky font-bold tracking-wide">{item.date}</span>
                <h3 className="text-xl font-black text-white tracking-tight mt-1 group-hover:text-techSky transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mt-2 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Gallery;