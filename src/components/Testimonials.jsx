import React from 'react';

function Testimonials() {
  // 1. Array mapping your exact company heads and their public folder 'T' image paths
  const testimonialData = [
    {
      id: 1,
      name: "Mr Makarand Prabhakar Pradhan",
      designation: "Managing Director",
      company: "Total Transport Systems",
      src: "/total-transportT.png",
      review: "JAG Software's customized ecosystem completely modernized our supply chain workflows. Their automated framework handles millions of logistics data routing segments with absolute system uptime and integrity."
    },
    {
      id: 2,
      name: "Mr Shrikant Damodar Nibandhe",
      designation: "Director & Co-Founder",
      company: "CP World",
      src: "/cpworldT.png",
      review: "The migration of our legacy systems into their modern web framework architecture was exceptionally flawless. The resource optimization metrics we achieve daily are phenomenal."
    },
    {
      id: 3,
      name: "Mr. Kulshekhar Kumar",
      designation: "Head of Shipping Operations",
      company: "SJ Shipping (SJA)",
      src: "/sj-shippingT.png",
      review: "Their flagship container stuffing product changed how we calculate volume layouts. Predictive automation saves us thousands of operational hours across our global shipping networks."
    },
    {
      id: 4,
      name: "Kaushaal Buch",
      designation: "Chief Executive Officer",
      company: "i Cargo Alliance",
      src: "/cargo-allianceT.png",
      review: "Exceptional technical consulting and outsourcing capability. From secure database schemas to responsive web DOM structures, JAG Software delivers pure enterprise engineering excellence."
    },

    {
      id: 5,
      name: "Mr. Manish Pradhan ",
      designation: "Chief Executive Officer",
      company: "Travezee",
      src: "/travezeeT.png",
      review: "Exceptional technical consulting and outsourcing capability. From secure database schemas to responsive web DOM structures, JAG Software delivers pure enterprise engineering excellence."
    }
  ];

  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="text-center mb-16">
        <span className="text-xs font-bold text-techSky uppercase tracking-widest">Leadership Reviews</span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 text-white">
          TRUST FROM THE <span className="text-brandRed">VETERANS</span>
        </h2>
        <div className="w-20 h-1 bg-brandRed mx-auto mt-4"></div>
      </div>

      {/* Responsive Grid - 1 col on mobile, 2 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonialData.map((item) => (
          <div 
            key={item.id} 
            className="bg-techSurface border border-white/[0.03] rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-brandRed/30 transition-all duration-300 group shadow-xl"
          >
            {/* Quote Icon Background Indicator */}
            <div className="text-gray-600 text-4xl font-serif leading-none mb-4 select-none group-hover:text-brandRed transition-colors">“</div>
            
            {/* Real Customized Review Text */}
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-medium mb-6 italic">
              {item.review}
            </p>

            {/* Profile Row: Connecting with your public folder files */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <img 
                  src={item.src} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback avatar in case an image asset name has a typo
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback initial generator block */}
                <div className="hidden w-full h-full bg-brandRed text-white font-bold text-xs items-center justify-center">
                  {item.name.charAt(3)}
                </div>
              </div>

              <div className="text-left">
                <h4 className="text-sm font-black text-white group-hover:text-techSky transition-colors">{item.name}</h4>
                <p className="text-[10px] text-gray-400 font-bold tracking-wide mt-0.5 uppercase">
                  {item.designation} — <span className="text-gray-500">{item.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;