import React from 'react';

function TechHub() {
  const products = [
    { 
      name: "eFabrication", 
      subtitle: "Optimize Resources", 
      src: "/efabrication.png", 
      desc: "Resource optimization solutions built specifically for heavy fabrication centers to minimize scrap and maximize asset utilization.",
      targetHref: "#" 
    },
    { 
      name: "EDI", 
      subtitle: "Electronic Data Interchange", 
      src: "/edi.png", 
      desc: "High-speed B2B communication gateways automating logistics and shipping bills seamlessly across global networks.",
      targetHref: "#"
    },
    { 
      name: "ePearl", 
      subtitle: "Logistics Solution", 
      src: "/epearl.png", 
      desc: "Our flagship cargo and container stuffing optimization ecosystem built for international freight forwarders.",
      targetHref: "#"
    },
    { 
      name: "eTrans", 
      subtitle: "Transport Management", 
      src: "/etrans.png", 
      desc: "Comprehensive software architecture engineered to streamline fleet management and automated bill generation reports.",
      targetHref: "#"
    }
  ];

  const technologies = [
    { 
      name: "Microsoft .NET Eco", 
      type: "img",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", 
      desc: "Enterprise applications engineering using robust C# patterns and ASP.NET framework infrastructures." 
    },
    { 
      name: "Microsoft SQL Server", 
      type: "img",
      src: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg", 
      desc: "Relational database engines managing highly scalable T-SQL stored procedures, data table indexes, and complex structural logistics links." 
    },
    { 
      name: "Java Enterprise", 
      type: "img",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", 
      desc: "Highly secure, multi-threaded high-availability backend microservices tailored for structural database integrity." 
    },
    { 
      name: "AI & Predictive Radar", 
      type: "svg",
      src: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-brandRed" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 6v12M6 12h12"/>
          <circle cx="12" cy="12" r="4" fill="currentColor" className="opacity-30" />
        </svg>
      ),
      desc: "Next-gen machine learning layers running container cargo forecasting, optimized route patterns, and predictive stuffing models." 
    },
    { 
      name: "jQuery & Web UI", 
      type: "img",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg", 
      desc: "Dynamic web DOM manipulations, modal selection filtering list wrappers, and asynchronous API communication management." 
    },
    { 
      name: "Magic Software Platform", 
      type: "img",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg", 
      desc: "Metadata-driven business integration framework providing unmatched declarative logic development efficiency." 
    }
  ];

  // Upgraded rich implementation strategy workflow array
  const solutionSteps = [
    { title: "Requirement Matrix Evaluation", desc: "Deep onsite discovery mapping changing modern business frameworks, legacy bottlenecks, and data constraints from scratch." },
    { title: "Scope Profiles & Verification", desc: "Freezing scope profiles while maintaining rigorous multi-tier verification workflows to prevent architectural creep." },
    { title: "Relational Schema Mapping", desc: "Advanced system analysis mapping using modular relational database schemas, query indexing, and optimized T-SQL links." },
    { title: "Framework Prototype Deployment", desc: "Deploying bulletproof, scalable enterprise software prototypes utilizing high-performance baseline templates." }
  ];

  // Premium corporate metric track counters for the right panel
  const stats = [
    { count: "99.98%", label: "System Uptime Maintained", sub: "Enterprise SLA Grade" },
    { count: "24/7", label: "Automated Data Routing", sub: "Seamless EDI Gateway" },
    { count: "400K+", label: "Containers Stuffing Optimized", sub: "Predictive Models Active" },
    { count: "180ms", label: "Average Stored Procedure Speed", sub: "Highly Tuned T-SQL" }
  ];

  return (
    <div className="space-y-24 py-12 border-t border-white/5">
      
      {/* ================= PRODUCTS PAGE BLOCK ================= */}
      <section id="products" className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">OUR <span className="text-brandRed">PRODUCTS</span></h2>
          <div className="w-20 h-1 bg-brandRed mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <div key={idx} className="bg-techSurface border border-white/[0.02] rounded-2xl p-5 flex flex-col justify-between transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandRed/10 hover:border-brandRed/30 transition-all duration-300 group">
              <div>
                <div className="w-full h-32 bg-white rounded-xl flex items-center justify-center overflow-hidden mb-4 shadow-inner p-4">
                  <img 
                    src={prod.src} 
                    alt={prod.name} 
                    className="max-h-20 max-w-full object-contain transition-all duration-300 group-hover:scale-110" 
                    onError={(e) => {
                      e.target.style.opacity = '0.3';
                    }}
                  />
                </div>
                <span className="text-[10px] text-techSky font-bold uppercase tracking-wider">{prod.subtitle}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">{prod.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{prod.desc}</p>
              </div>
              <a 
                href={prod.targetHref} 
                className="text-xs text-brandRed font-bold mt-4 hover:underline flex items-center gap-1 w-fit select-none focus:outline-none"
              >
                Explore Core →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ARCHITECTURE SOLUTIONS (UPGRADED PRESTIGE SECTION) ================= */}
      <section id="solutions" className="max-w-6xl mx-auto px-6 pt-12 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">ENTERPRISE <span className="text-brandRed">SOLUTIONS</span></h2>
          <div className="w-20 h-1 bg-brandRed mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 2-Column Split Grid Master Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Extensive Strategy & Step Blueprint (Span 7) */}
          <div className="bg-techSurface border border-white/[0.03] rounded-3xl p-6 md:p-8 lg:col-span-7 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-[10px] text-techSky font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5 w-fit block mb-4">
                Architecture Blueprint
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
                CUSTOM SOFTWARE DEVELOPMENT MANAGEMENT
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                JAG is a perfect outsourced vendor who maps changing modern business frameworks by building highly secure, multi-threaded architectures. Our technical engineers design scalable blueprints from scratch to ensure unmatched declarative logic development efficiency.
              </p>
            </div>

            {/* Vertical Flow Steps Stack */}
            <div className="space-y-4">
              {solutionSteps.map((step, sIdx) => (
                <div 
                  key={sIdx} 
                  className="bg-techDark border border-white/5 rounded-2xl p-5 text-left flex gap-4 transform hover:scale-[1.01] hover:border-brandRed/30 transition-all duration-300 group/item cursor-default"
                >
                  <span className="text-brandRed font-black text-base md:text-lg select-none">
                    0{sIdx+1}.
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover/item:text-techSky transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Infrastructure Metric Tracker Panel (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {stats.map((stat, statIdx) => (
              <div 
                key={statIdx} 
                className="bg-techSurface border border-white/[0.03] rounded-3xl p-6 flex flex-col justify-center text-center transform hover:-translate-y-1 hover:border-brandRed/20 transition-all duration-300 shadow-xl group/stat relative overflow-hidden"
              >
                {/* Decorative Internal Cyber Dot */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-brandRed opacity-40 group-hover/stat:opacity-100 transition-opacity animate-pulse"></div>
                
                <h4 className="text-3xl md:text-4xl font-black text-brandRed tracking-tight select-none drop-shadow-[0_0_15px_rgba(220,38,38,0.1)]">
                  {stat.count}
                </h4>
                <p className="text-white text-xs font-bold mt-3 leading-snug tracking-wide uppercase px-2">
                  {stat.label}
                </p>
                <p className="text-[10px] text-techSky font-semibold tracking-wider uppercase mt-1 opacity-80">
                  {stat.sub}
                </p>
              </div>
            ))}
            
            {/* Added a unified mini-CTA card inside the matrix right side */}
            <div className="sm:col-span-2 bg-gradient-to-r from-brandRed/10 to-transparent border border-brandRed/20 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Ready to optimize database relations?</h4>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">Connect our elite data analysts group to test stuffing matrix latency benchmarks.</p>
              <a href="#contact" className="text-xs text-techSky font-extrabold hover:text-white transition-colors flex items-center gap-1 mt-4 select-none">
                Initialize System Discovery →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TECHNOLOGIES PAGE BLOCK ================= */}
      <section id="technologies" className="max-w-6xl mx-auto px-6 pt-12 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">CORE <span className="text-brandRed">TECHNOLOGIES</span></h2>
          <div className="w-20 h-1 bg-brandRed mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, tIdx) => (
            <div key={tIdx} className="bg-techSurface border border-white/[0.02] rounded-2xl p-6 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandRed/10 hover:border-brandRed/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden mb-5 shadow-lg p-2.5 transform group-hover:rotate-6 transition-transform duration-300">
                {tech.type === "img" ? (
                  <img 
                    src={tech.src} 
                    alt={tech.name} 
                    className="max-h-full max-w-full object-contain" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {tech.src}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-techSky transition-colors">{tech.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default TechHub;