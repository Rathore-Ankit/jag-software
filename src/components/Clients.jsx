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
    <section id="clients" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          OUR <span className="text-brandRed">CLIENTS</span>
        </h2>
        <div className="w-16 h-1 bg-brandRed mx-auto mt-3"></div>
      </div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
        {clientLogos.map((client, idx) => (
          <div 
            key={idx} 
            /* Added hover:-translate-y-2, hover:shadow-2xl, and hover:border-brandRed/40 for smooth interactive lift */
            className="bg-white rounded-xl p-6 h-32 flex items-center justify-center border border-transparent shadow-md transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandRed/10 hover:border-brandRed/40 group cursor-pointer"
          >
            {/* Image tag looking into the public directory */}
            <img 
              src={client.src} 
              alt={client.name}
              /* Added hover:scale-105 to give a slight zoom to the logo inside */
              className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
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
    </section>
  );
}

export default Clients;