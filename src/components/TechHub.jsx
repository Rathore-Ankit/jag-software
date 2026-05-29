import React from 'react';

function TechHub() {
  const products = [
    { name: "eFabrication", subtitle: "Optimize Resources", src: "https://cdn-icons-png.flaticon.com/512/993/993928.png", desc: "Resource optimization solutions built specifically for heavy fabrication centers to minimize scrap and maximize asset utilization." },
    { name: "EDI", subtitle: "Electronic Data Interchange", src: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png", desc: "High-speed B2B communication gateways automating logistics and shipping bills seamlessly across global networks." },
    { name: "ePearl", subtitle: "Logistics Solution", src: "https://cdn-icons-png.flaticon.com/512/2897/2897785.png", desc: "Our flagship cargo and container stuffing optimization ecosystem built for international freight forwarders." },
    { name: "eTrans", subtitle: "Transport Management", src: "https://cdn-icons-png.flaticon.com/512/411/411763.png", desc: "Comprehensive software architecture engineered to streamline fleet management and automated bill generation reports." }
  ];

  // Technologies matrix with dedicated SVG components to prevent network drop errors
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
      // Bulletproof high-tech inline custom geometric brain/AI grid icon
      src: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-brandRed" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 6v12M6 12h12"/>
          <circle cx="12" cy="12" r="3" fill="currentColor" className="opacity-20" />
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
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png", 
      desc: "Metadata-driven business integration framework providing unmatched declarative logic development efficiency." 
    }
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
            <div key={idx} className="bg-techSurface border border-white/[0.02] rounded-2xl p-5 flex flex-col justify-between hover:border-brandRed/30 transition-all group">
              <div>
                <div className="w-full h-32 bg-techDark border border-white/5 rounded-xl flex items-center justify-center overflow-hidden mb-4 bg-linear-to-b from-brandRed/5 to-transparent">
                  <img 
                    src={prod.src} 
                    alt={prod.name} 
                    className="max-h-16 object-contain filter invert opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" 
                  />
                </div>
                <span className="text-[10px] text-brandRed font-bold uppercase tracking-wider">{prod.subtitle}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">{prod.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{prod.desc}</p>
              </div>
              <div className="text-xs text-brandRed font-bold mt-4 cursor-pointer hover:underline">Explore Core →</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ARCHITECTURE SOLUTIONS ================= */}
      <section id="solutions" className="max-w-6xl mx-auto px-6 pt-12 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">ENTERPRISE <span className="text-brandRed">SOLUTIONS</span></h2>
          <div className="w-16 h-1 bg-brandRed mx-auto mt-3"></div>
        </div>

        <div className="bg-techSurface border border-white/[0.03] rounded-2xl p-8 lg:p-10">
          <h3 className="text-xl md:text-2xl font-black text-white mb-4">CUSTOM SOFTWARE DEVELOPMENT MANAGEMENT</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            JAG is a perfect outsourced vendor who maps changing modern business frameworks by building secure architectures. Our highly skilled technical developers design custom blueprints from scratch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Onsite requirement matrix evaluation.", "Freeze scope profiles maintaining rigorous verification workflows.", "System analysis mapping using modular relational database schemas.", "Deploy framework prototypes utilizing optimized baseline templates."].map((step, sIdx) => (
              <div key={sIdx} className="bg-techDark/50 border border-white/5 rounded-xl p-4 text-xs text-gray-400 flex items-start gap-3">
                <span className="text-brandRed font-bold text-sm">0{sIdx+1}.</span>
                <span>{step}</span>
              </div>
            ))}
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
            <div key={tIdx} className="bg-techSurface border border-white/[0.02] rounded-2xl p-6 hover:border-brandRed/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden mb-5 border border-white/5 p-2.5">
                
                {/* Dynamic Conditional Rendering System checking icon asset types */}
                {tech.type === "img" ? (
                  <img 
                    src={tech.src} 
                    alt={tech.name} 
                    className="max-h-full max-w-full object-contain" 
                  />
                ) : (
                  // Direct clean inline render execution path
                  <div className="w-8 h-8 flex items-center justify-center">
                    {tech.src}
                  </div>
                )}

              </div>
              <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default TechHub;