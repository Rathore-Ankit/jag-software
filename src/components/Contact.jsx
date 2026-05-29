import React from 'react';

function Contact() {
  // Mumbai Office Address string formatted for Google Maps iframe integration
  const mumbaiMapEmbedUrl = "https://maps.google.com/maps?q=Ecstasy%20Business%20Park,%20Mulund%20West,%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 pt-20 pb-10 border-t border-white/5">
      
      {/* 1. ABOUT OUR COMPANY BLOCK */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          ABOUT OUR <span className="text-brandRed">COMPANY</span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium tracking-wide uppercase">
          JAG SOFTWARE WAS STARTED BY A GROUP OF YOUNG DYNAMIC AND ENTERPRISING INDIVIDUALS WITH AN INTENT TO PROVIDE CUSTOMIZED SOFTWARE TO SUPPORT COMPANIES WITHIN INDIA AND OVERSEAS.
        </p>
      </div>

      {/* 2. WHO WE ARE DETAILED TEXT MATRIX BLOCK */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 bg-techSurface/30 border border-white/[0.02] p-8 rounded-2xl">
        <div className="space-y-4 text-xs md:text-sm text-gray-400 leading-relaxed">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">WHO WE ARE</h3>
          <p>
            JAG Software uses its experience and expertise to bring down the cost of resources for its clients, thereby increasing the profitability of their clients.
          </p>
          <p>
            Having started with one assignment in the UK, today we serve clients all across Europe and Asia.
          </p>
          <p>
            The clients have appreciated JAG's services and support; and they have given lot of strong references and recommended others to use our services.
          </p>
          <p>
            Today our ERP solutions cater to clients from various industry vertical, ranging from fabrication companies, Service providers, to inland & overseas logistics companies viz Transporters, NVOCC , Freight Forwarders, Consolidators, Palletising companies.
          </p>
          <p>
            JAG Software started with a couples of associates and today has a large team that can handle multiple projects and deliver them in a short time period.
          </p>
        </div>
        
        {/* Mock Monitor Design Graphic Frame */}
        <div className="bg-techDark border border-white/5 rounded-xl p-6 h-64 flex flex-col justify-between font-mono text-[10px] bg-radial from-brandRed/10 via-transparent">
          <div className="flex justify-between items-center text-gray-500 border-b border-white/5 pb-2">
            <span>📊 SYSTEM APPLICATION PLATFORM OVERVIEW</span>
            <div className="flex gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span><span className="w-2 h-2 rounded-full bg-yellow-500"></span><span className="w-2 h-2 rounded-full bg-green-500"></span></div>
          </div>
          <div className="space-y-2 text-gray-400">
            <p className="text-brandRed font-bold">&gt;_ erp_deployment_status: ACTIVE</p>
            <p>&gt; client_region: [EUROPE, ASIA, UK]</p>
            <p>&gt; industry_verticals: LOGISTICS, TRUCKING, INDUSTRIAL PRODUCTION</p>
            <p>&gt; database_nodes: SECURE REAL-TIME SQL SYSTEMS CLUSTERED</p>
          </div>
          <div className="text-[9px] text-right text-gray-600">JAG SOFTWARE METRIC ENGINE v4.0</div>
        </div>
      </div>

      {/* 3. GET IN TOUCH FORM & ADDRESS DETAILS */}
      <div id="contact" className="pt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            GET IN <span className="text-brandRed">TOUCH WITH US</span>
          </h2>
          <p className="text-gray-400 text-xs mt-2">Feel free to ask if you have any question regarding our services or if you just want to say Hello, we would love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Grid Block */}
          <div className="lg:col-span-6 bg-techSurface border border-white/[0.03] rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
              <div className="space-y-1">
                <h4 className="font-bold text-white uppercase text-xs tracking-wider text-brandRed">📍 Mumbai Headquarters</h4>
                <p className="text-gray-300 leading-relaxed pt-1">
                  1. # 807-B Ecstasy, Business Park,<br />
                  Station Road, Mulund West,<br />
                  Mumbai 400080, India.
                </p>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white uppercase text-xs tracking-wider text-brandRed">📍 Bhopal Branch Office</h4>
                <p className="text-gray-300 leading-relaxed pt-1">
                  2. 44 Tulsivihar,<br />
                  Bagsewaniya, Bhopal,<br />
                  India.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="block text-gray-500 font-bold uppercase tracking-wider text-[10px]">Corporate Phone Lines</span>
                <p className="text-gray-200 mt-1 font-semibold tracking-wide">+91 76663 03554</p>
                <p className="text-gray-200 font-semibold tracking-wide">+91-22-25910317</p>
                <p className="text-gray-200 font-semibold tracking-wide">+91-22-25910318</p>
              </div>
              <div>
                <span className="block text-gray-500 font-bold uppercase tracking-wider text-[10px]">Electronic Mailing Network</span>
                <p className="text-brandRed font-bold mt-1 tracking-wide hover:underline cursor-pointer">info@jagsoftware.in</p>
              </div>
            </div>

            {/* Quick Contact Action Button */}
            <div className="pt-4">
              <a 
                href="mailto:info@jagsoftware.in"
                className="block w-full bg-brandRed hover:bg-red-700 text-white font-bold text-center py-3 rounded-xl transition-all shadow-lg shadow-brandRed/20 text-xs tracking-widest uppercase"
              >
                Open Official Communication Link
              </a>
            </div>
          </div>

          {/* Right Side: LIVE GOOGLE MAP INTERACTION FRAME (Replaces old static box) */}
          <div className="lg:col-span-6 h-full min-h-[350px] bg-techSurface border border-white/[0.03] rounded-2xl overflow-hidden relative shadow-inner">
            <iframe 
              title="JAG Software Solutions Mumbai Live Location Radar"
              src={mumbaiMapEmbedUrl}
              className="w-full h-full border-0 absolute inset-0 opacity-80 hover:opacity-100 transition-opacity duration-300 invert-[90%] hue-rotate-[180deg]" // Gives it a customized dark tech matrix mode map overlay look
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

     

    </section>
  );
}

export default Contact;