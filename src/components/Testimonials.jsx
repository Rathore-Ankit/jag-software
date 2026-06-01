import React from 'react';

function Testimonials() {

  const testimonialData = [
    {
      id: 1,
      name: "Mr Makarand Prabhakar Pradhan",
      designation: "Managing Director",
      company: "Total Transport Systems",
      src: "/total-transportT.png",
      review:
        "JAG Software's customized ecosystem completely modernized our supply chain workflows. Their automated framework handles millions of logistics data routing segments with absolute system uptime and integrity."
    },

    {
      id: 2,
      name: "Mr Shrikant Damodar Nibandhe",
      designation: "Director & Co-Founder",
      company: "CP World",
      src: "/cpworldT.png",
      review:
        "The migration of our legacy systems into their modern web framework architecture was exceptionally flawless. The resource optimization metrics we achieve daily are phenomenal."
    },

    {
      id: 3,
      name: "Mr. Kulshekhar Kumar",
      designation: "Head of Shipping Operations",
      company: "SJ Shipping (SJA)",
      src: "/sj-shippingT.png",
      review:
        "Their flagship container stuffing product changed how we calculate volume layouts. Predictive automation saves us thousands of operational hours across our global shipping networks."
    },

    {
      id: 4,
      name: "Kaushaal Buch",
      designation: "Chief Executive Officer",
      company: "i Cargo Alliance",
      src: "/cargo-allianceT.png",
      review:
        "Exceptional technical consulting and outsourcing capability. From secure database schemas to responsive web DOM structures, JAG Software delivers pure enterprise engineering excellence."
    },

    {
      id: 5,
      name: "Mr. Manish Prakash Pradhan",
      designation: "Chief Executive Officer",
      company: "Travezee",
      src: "/travezeeT.png",
      review:
        "The migration of our legacy systems into their modern web framework architecture was exceptionally flawless. The resource optimization metrics we achieve daily are phenomenal."
    }
  ];

  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
    >

      <div className="text-center mb-16">

        <span className="text-xs font-bold text-techSky uppercase tracking-widest">
          Leadership Reviews
        </span>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-3 text-white">
          TRUST FROM THE{" "}
          <span className="text-brandRed">
            VETERANS
          </span>
        </h2>

        <div className="w-20 h-1 bg-brandRed mx-auto mt-4 rounded-full"></div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {testimonialData.map((item) => (

          <div
            key={item.id}
            className="bg-techSurface border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-brandRed/30 transition-all duration-300 group shadow-xl"
          >

            {/* Quote */}
            <div className="text-gray-600 text-5xl font-serif leading-none mb-5 select-none group-hover:text-brandRed transition-colors">
              “
            </div>

            {/* Review */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-8">
              {item.review}
            </p>

            {/* Profile */}
            <div className="flex items-center gap-5 pt-5 border-t border-white/5">

              {/* Bigger Image */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center shrink-0">

                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />

                {/* Fallback */}
                <div className="hidden w-full h-full bg-brandRed text-white font-bold text-lg items-center justify-center">
                  {item.name.charAt(0)}
                </div>

              </div>

              {/* Text */}
              <div className="text-left">

                <h4 className="text-base font-black text-white group-hover:text-techSky transition-colors">
                  {item.name}
                </h4>

                <p className="text-xs text-gray-400 font-semibold tracking-wide mt-1 uppercase">
                  {item.designation}
                </p>

                <p className="text-[11px] text-gray-500 font-bold mt-1 uppercase tracking-wider">
                  {item.company}
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