import React from 'react';

function Clients() {
  const clientLogos = [
    { name: "CP WORLD", src: "/cpworld.png", fallback: "🌐" },
    { name: "TOTAL TRANSPORT SYSTEMS", src: "/total-transport.png", fallback: "🚢" },
    { name: "SJ SHIPPING", src: "/sj-shipping.png", fallback: "⚓" },
    { name: "CARGO ALLIANCE", src: "/cargo-alliance.png", fallback: "📦" },
    { name: "TRAVEZEE", src: "/travezee.png", fallback: "✈️" }
  ];

  return (
    <section id="clients" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5 relative">
      
      {/* बैकग्राउंड में एक सूक्ष्म एम्बिएंट रेड ग्लो (वेबसाइट की डार्क थीम के लिए) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brandRed/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white">
            OUR <span className="text-brandRed">CLIENTS</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brandRed to-red-600 mx-auto mt-3 rounded-full shadow-[0_0_8px_#brandRed]"></div>
        </div>

        {/* Grid wrapper */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
          {clientLogos.map((client, idx) => (
            <div 
              key={idx} 
              /* 
                🎯 डिफ़ॉल्ट वाइट कार्ड्स को अब हल्का सा बॉर्डर दिया गया है। 
                होवर करने पर यह स्मूथली ऊपर उठेगा और नीचे एक खूबसूरत ब्रैंडेड शैडो ग्लो करेगा।
              */
              className="bg-white rounded-xl p-6 h-32 flex items-center justify-center border border-white/10 shadow-md transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(239,68,68,0.25)] hover:border-brandRed/50 group cursor-pointer"
            >
              {/* Image tag looking into the public directory */}
              <img 
                src={client.src} 
                alt={client.name}
                /* 
                  🎯 बदलाव: 'filter grayscale' को हटा दिया गया है ताकि डिफ़ॉल्ट रूप से लोगो कलरफुल दिखे।
                  सॉफ्ट ओपेसिटी (opacity-90) रखी है जो होवर पर पूरी चमक (opacity-100) और बेहतरीन कंट्रास्ट के साथ ज़ूम होगी।
                */
                className="max-h-20 max-w-full object-contain opacity-90 group-hover:opacity-100 contrast-[1.02] group-hover:contrast-110 transition-all duration-300 transform group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-center text-slate-800 font-bold text-xs">
                <span className="text-xl block mb-1">{client.fallback}</span>
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Clients;