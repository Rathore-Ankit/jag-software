import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Staff() {
  // Automatically scroll to the exact top node when route mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🎯 Mapped 100% strictly according to your public directory setup
  const teamMembers = [
    {
      name: "Mr. Gopi Menon",
      role: "Director",
      isDirector: true, 
      src: "/Gopidp.png", 
      specialization: ["Corporate Strategy", "Global Operations", "Enterprise Leadership"],
      bio: "Spearheads the complete technological vision and organizational expansion of JAG Software across international frontiers."
    },
    {
      name: "Mr. Yogesh Namdeo",
      role: "Manager IT",
      isDirector: false,
      src: "/Yogeshdp.png", 
      specialization: ["IT Infrastructure", "Project Scopes Tracking", "System Workflows"],
      bio: "Manages server engineering networks, resource allocations, and maintains enterprise-grade uptime pipelines."
    },
    {
      name: "Geetanjali Teli",
      role: "Database Administrator & Quality Lead",
      isDirector: false,
      src: "/Geetanjalidp.png",
      specialization: ["Database Optimization", "Data Integrity", "QA Management"],
      bio: "Oversees large-scale system analysis layouts, metadata configurations, and rigorous validation parameters."
    },
    {
      name: "Aanchal Agre",
      role: "Software Developer",
      isDirector: false,
      src: "/Aanchaldp.png",
      specialization: ["Full-Stack Engineering", "Web UI Frameworks", "API Microservices"],
      bio: "Develops scalable software architectures, handling frontend logic and responsive interface optimization models."
    },
    {
      name: "Mr. Ankit Rathore",
      role: "Software Developer & Database Analyst",
      isDirector: false,
      src: "/Ankitdp.png",
      specialization: ["T-SQL Stored Procedures", "jQuery Core", "Relational Database Design"],
      bio: "Engineers complex table relationships, data indexing strategies, and automates high-speed timestamped reporting systems."
    },
    {
      name: "Manasi Kamble",
      role: "Software Developer",
      isDirector: false,
      src: "/Manasidp.png",
      specialization: ["Application Logic", "Module Integrations", "Data Mapping Wrappers"],
      bio: "Specializes in modern business framework mapping, declarative development efficiency, and UI responsive layers."
    },
    {
      name: "Mayank",
      role: "Junior Software Developer",
      isDirector: false,
      src: "/Mayankdp.png",
      specialization: ["JavaScript Essentials", "UI Customizations", "Frontend Testing"],
      bio: "Assists in deploying scalable application logic nodes, maintaining form validations, and optimization of frontend baseline modules."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 min-h-[85vh]">
      
      {/* Breadcrumb Navigation Link */}
      <div className="mb-10">
        <Link 
          to="/" 
          className="text-xs font-bold text-brandRed hover:text-brandRedGlow flex items-center gap-1 transition-colors uppercase tracking-wider w-fit"
        >
          ← Back to Systems Control (Home)
        </Link>
      </div>

      {/* Main Header Screen Branding */}
      <div className="text-center mb-16">
        <span className="text-[10px] text-techSky font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5 w-fit block mx-auto mb-3">
          Core Command Center Matrix
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
          OFFICE STAFF & TEAM <span className="text-brandRed">MATRIX</span>
        </h2>
        <div className="w-20 h-1 bg-brandRed mx-auto mt-4 rounded-full"></div>
      </div>

      {/* UNIFIED GRID ARCHITECTURE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {teamMembers.map((member, mIdx) => (
          <div 
            key={mIdx} 
            className="bg-techSurface border border-white/[0.02] rounded-[2.5rem] p-6 flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandRed/10 hover:border-brandRed/30 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Executive Badge */}
            {member.isDirector && (
              <div className="absolute top-4 left-4 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 animate-pulse z-20 select-none uppercase tracking-wide">
                ⭐ Executive
              </div>
            )}

            <div className="absolute -top-10 -right-10 w-24 h-24 bg-brandRed/5 rounded-full blur-xl group-hover:bg-brandRed/10 transition-all duration-300"></div>

            {/* 1. 🎯 UPGRADED PROFILE PHOTO CONTAINER (Bigger Size + Clean Hover Zoom Isolation) */}
            <div className="w-32 h-32 aspect-square bg-techDark border border-white/10 group-hover:border-brandRed/40 p-1 rounded-2xl flex items-center justify-center overflow-hidden mb-5 shadow-inner relative select-none">
              <img 
                src={member.src.startsWith('http') ? member.src : `${window.location.origin}${member.src}`} 
                alt={member.name} 
                /* 🎯 transition-transform duration-500 ease-out group-hover:scale-125 adds high-end responsive zoom inside the boundary */
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-125"
                onError={(e) => {
                  e.target.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${member.name}`;
                }}
              />
              <span className="absolute bottom-1 right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-techDark z-10 animate-pulse"></span>
            </div>

            {/* 2. Employee Name */}
            <h3 className="text-xl font-black text-white tracking-tight group-hover:text-techSky transition-colors">
              {member.name}
            </h3>

            {/* 3. Designation Role Label */}
            <p className="text-xs text-brandRed font-black uppercase tracking-widest mt-1.5">
              {member.role}
            </p>
            
            <p className="text-gray-400 text-xs leading-relaxed mt-4 mb-6 font-medium">
              {member.bio}
            </p>

            {/* Micro Skill Matrix Core Pills */}
            <div className="mt-auto flex flex-wrap gap-1.5 justify-center">
              {member.specialization.map((spec, sIdx) => (
                <span 
                  key={sIdx} 
                  className="text-[9px] bg-techDark text-gray-300 px-3 py-1 rounded-md border border-white/5 font-bold uppercase tracking-wider transition-colors duration-300 group-hover:border-brandRed/30"
                >
                  {spec}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Staff;