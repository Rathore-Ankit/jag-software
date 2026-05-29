import React from 'react';

function Contact() {
  // Mumbai Office Address string formatted for Google Maps iframe integration
  const mumbaiMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2254341901844!2d72.94639417598463!3d19.185311848545804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9196b0ca8df%3A0xc6cb1e85bf09b0b1!2sEcstasy%20Business%20Park!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 pt-24 pb-16 border-t border-white/5 relative">
      
      {/* बैकग्राउंड में हल्का सा ग्लो इफ़ेक्ट */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brandRed/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* 1. ABOUT OUR COMPANY BLOCK */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="text-[11px] font-black tracking-[0.25em] text-brandRed uppercase bg-brandRed/10 px-4 py-1.5 rounded-full border border-brandRed/20">
          Discover Our Core
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-6 mb-6 uppercase text-white">
          ABOUT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandRed to-red-500">COMPANY</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium tracking-wide">
          JAG SOFTWARE was started by a group of young, dynamic, and enterprising individuals with an intent to provide customized software to support companies within India and overseas.
        </p>
      </div>

      {/* 2. WHO WE ARE DETAILED TEXT MATRIX BLOCK (Height Balanced & Space Filled) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-28 relative z-10">
        
        {/* Left Side Elements Matrix Grid */}
        <div className="lg:col-span-7 bg-white/[0.02] border border-white/[0.05] p-6 md:p-8 rounded-[2.5rem] flex flex-col justify-between space-y-6 backdrop-blur-xl shadow-2xl">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-6 bg-brandRed rounded-full shadow-[0_0_12px_#brandRed]"></span>
              <h3 className="text-xl font-black text-white uppercase tracking-wider">
                Who We Are & Our Legacy
              </h3>
            </div>
            
            {/* Dynamic Micro Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-brandRed/30 hover:bg-white/[0.03] transition-all duration-300 group">
                <div className="text-xl mb-2 group-hover:scale-110 transition-transform w-fit bg-white/5 p-1.5 rounded-lg">📈</div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Cost Optimization</h4>
                <p className="text-gray-400 text-[11px] leading-relaxed font-medium">
                  Leveraging operational experience to lower client resource costs, directly boosting their business profitability margins.
                </p>
              </div>

              <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-brandRed/30 hover:bg-white/[0.03] transition-all duration-300 group">
                <div className="text-xl mb-2 group-hover:scale-110 transition-transform w-fit bg-white/5 p-1.5 rounded-lg">🌍</div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Global Horizons</h4>
                <p className="text-gray-400 text-[11px] leading-relaxed font-medium">
                  Incepted with a single assignment in the United Kingdom, today executing architectures across all Europe & Asian grids.
                </p>
              </div>

              <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-brandRed/30 hover:bg-white/[0.03] transition-all duration-300 group">
                <div className="text-xl mb-2 group-hover:scale-110 transition-transform w-fit bg-white/5 p-1.5 rounded-lg">🤝</div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Trust Matrix</h4>
                <p className="text-gray-400 text-[11px] leading-relaxed font-medium">
                  Endorsed by our global system network users via strong recommendations, technical references, and sustained retention.
                </p>
              </div>

              <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-brandRed/30 hover:bg-white/[0.03] transition-all duration-300 group">
                <div className="text-xl mb-2 group-hover:scale-110 transition-transform w-fit bg-white/5 p-1.5 rounded-lg">⚙️</div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Scale Capabilities</h4>
                <p className="text-gray-400 text-[11px] leading-relaxed font-medium">
                  Evolved from a couple of associates to a robust multi-project team executing swift turnaround releases seamlessly.
                </p>
              </div>

            </div>
          </div>

          {/* Industry Vertical Tech Tags Stack Footer */}
          <div className="pt-4 border-t border-white/5">
            <span className="block text-[10px] text-brandRed font-black tracking-widest uppercase mb-2">Core ERP Vertical Coverage</span>
            <div className="flex flex-wrap gap-1.5">
              {["Fabrication Units", "Service Nodes", "NVOCC Systems", "Freight Forwarding", "Consolidators", "Container Stuffing"].map((tag, tIdx) => (
                <span key={tIdx} className="text-[9px] bg-white/5 border border-white/5 text-gray-300 px-2.5 py-1 rounded-md font-bold uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
        
        {/* Right Side: Mock Monitor Design Graphic Frame (🎯 खाली स्पेस भरने के लिए मैट्रिक्स और लाइव लॉगर जोड़ा गया है) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-[2.5rem] p-5 flex flex-col justify-between font-mono text-[10px] relative overflow-hidden backdrop-blur-xl shadow-2xl h-full">
          
          {/* टर्मिनल हेडर */}
          <div className="flex justify-between items-center text-gray-400 border-b border-white/5 pb-3 mb-3">
            <span className="font-bold tracking-wider text-[9px] flex items-center gap-2 text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
              SYSTEM OVERVIEW
            </span>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/40"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-500/40"></span>
              <span className="w-2 h-2 rounded-full bg-green-500/40"></span>
            </div>
          </div>

          {/* 🎯 नया सेक्शन: लाइव सिस्टम मैट्रिक्स (यह ऊपर के खाली हिस्से को शानदार लुक देगा) */}
          <div className="grid grid-cols-3 gap-2 mb-3 text-center">
            <div className="bg-black/30 border border-white/[0.02] p-2 rounded-xl">
              <p className="text-gray-500 text-[8px] uppercase font-bold">CPU Load</p>
              <p className="text-emerald-400 font-bold mt-0.5">12.4%</p>
            </div>
            <div className="bg-black/30 border border-white/[0.02] p-2 rounded-xl">
              <p className="text-gray-500 text-[8px] uppercase font-bold">RAM Usg</p>
              <p className="text-techSky font-bold mt-0.5">4.2 GB</p>
            </div>
            <div className="bg-black/30 border border-white/[0.02] p-2 rounded-xl">
              <p className="text-gray-500 text-[8px] uppercase font-bold">Network</p>
              <p className="text-amber-400 font-bold mt-0.5">14ms</p>
            </div>
          </div>

          {/* 🎯 नया सेक्शन: लाइव इंजेक्टेड टर्मिनल लॉग्स (स्पेस फिलर) */}
          <div className="space-y-1.5 text-gray-500 text-[9px] border-b border-white/5 pb-3 mb-3 bg-black/10 p-2.5 rounded-xl">
            <p className="text-gray-400 flex justify-between"><span>&gt;_ initializing_metric_cluster...</span><span className="text-emerald-500/70">[OK]</span></p>
            <p className="text-gray-500">&gt;_ fetching secure t-sql metadata endpoints</p>
            <p className="text-gray-500 flex justify-between"><span>&gt;_ sync_cargo_ stuffing_matrices...</span><span className="text-emerald-500/70">[100%]</span></p>
          </div>

          {/* आपका मूल कोर स्टेटस कोड ब्लॉक्स (अब बिना खाली स्पेस के परफेक्ट दिखेगा) */}
          <div className="space-y-2 flex-grow flex flex-col justify-center">
            <div className="p-2.5 bg-black/40 rounded-xl border border-white/[0.03]">
              <p className="text-brandRed font-bold tracking-wide"><span className="text-gray-600 mr-1.5">#</span>erp_status: ACTIVE</p>
            </div>
            <div className="p-2.5 bg-black/40 rounded-xl border border-white/[0.03]">
              <p className="text-white font-medium"><span className="text-gray-600 mr-1.5">#</span>regions: [EUROPE, ASIA, UK, INDIA]</p>
            </div>
            <div className="p-2.5 bg-black/40 rounded-xl border border-white/[0.03]">
              <p className="text-gray-300 font-medium leading-normal"><span className="text-gray-600 mr-1.5">#</span>verticals: LOGISTICS, TRUCKING, FABRICATION, CARGO</p>
            </div>
            <div className="p-2.5 bg-black/40 rounded-xl border border-white/[0.03]">
              <p className="text-red-400/90 font-bold tracking-wide"><span className="text-gray-600 mr-1.5">#</span>db_nodes: T-SQL ENGINES</p>
            </div>
          </div>

          {/* टर्मिनल फुटर */}
          <div className="text-[8px] text-right text-gray-500 border-t border-white/5 pt-3 mt-3 tracking-wider">
            METRIC ENGINE v4.0
          </div>
        </div>
      </div>

      {/* 3. GET IN TOUCH FORM & ADDRESS DETAILS */}
      <div id="contact" className="pt-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandRed to-red-500">TOUCH WITH US</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm mt-3 max-w-xl mx-auto font-medium">
            Feel free to ask if you have any questions regarding our services or if you just want to say Hello. We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Grid Block */}
          <div className="lg:col-span-6 bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between space-y-8 backdrop-blur-xl shadow-2xl hover:border-white/10 transition-colors">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs md:text-sm">
              <div className="space-y-2 p-4 bg-white/[0.01] border border-white/[0.03] rounded-xl hover:border-brandRed/20 transition-all duration-300">
                <h4 className="font-bold text-white uppercase text-xs tracking-widest text-brandRed flex items-center gap-2">
                  <span>📍</span> Mumbai HQ
                </h4>
                <p className="text-gray-300 leading-relaxed font-medium pl-6">
                  807-B Ecstasy, Business Park,<br />
                  Station Road, Mulund West,<br />
                  Mumbai 400080, India.
                </p>
              </div>
              
              <div className="space-y-2 p-4 bg-white/[0.01] border border-white/[0.03] rounded-xl hover:border-brandRed/20 transition-all duration-300">
                <h4 className="font-bold text-white uppercase text-xs tracking-widest text-brandRed flex items-center gap-2">
                  <span>📍</span> Bhopal Branch
                </h4>
                <p className="text-gray-300 leading-relaxed font-medium pl-6">
                  44 Tulsivihar,<br />
                  Bagsewaniya, Bhopal,<br />
                  India.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-1">
                <span className="block text-gray-500 font-bold uppercase tracking-wider text-[10px]">Corporate Phone Lines</span>
                <p className="text-gray-200 font-bold tracking-wide transition-colors hover:text-white">+91 76663 03554</p>
                <p className="text-gray-300/80 font-medium tracking-wide">+91-22-25910317 / 18</p>
              </div>
              <div className="space-y-1">
                <span className="block text-gray-500 font-bold uppercase tracking-wider text-[10px]">Electronic Mailing Network</span>
                <a href="mailto:info@jagsoftware.in" className="block text-brandRed font-black text-sm mt-1 tracking-wide hover:text-red-400 transition-colors group w-fit">
                  info@jagsoftware.in
                  <span className="block h-0.5 bg-brandRed w-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>

            {/* Quick Contact Action Button */}
            <div className="pt-4">
              <a 
                href="mailto:info@jagsoftware.in"
                className="block w-full bg-gradient-to-r from-brandRed to-red-600 hover:from-red-600 hover:to-brandRed text-white font-black text-center py-4 rounded-xl transition-all duration-300 shadow-lg shadow-brandRed/10 hover:shadow-brandRed/30 text-xs tracking-widest uppercase transform hover:-translate-y-0.5"
              >
                Open Official Communication Link
              </a>
            </div>
          </div>

          {/* Right Side: LIVE GOOGLE MAP INTERACTION FRAME */}
          <div className="lg:col-span-6 h-full min-h-[380px] bg-white/[0.02] border border-white/[0.05] rounded-[2rem] overflow-hidden relative shadow-2xl group">
            <iframe 
              title="JAG Software Solutions Mumbai Live Location Radar"
              src={mumbaiMapEmbedUrl}
              className="w-full h-full border-0 absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-500 invert-[92%] hue-rotate-[180deg] saturation-50" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
          </div>
          
        </div>
      </div>

    </section>
  );
}

export default Contact;