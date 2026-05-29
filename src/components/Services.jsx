import React from 'react';

function Services() {
  const servicesData = [
    { id: 1, icon: "💻", title: "SOFTWARE DEVELOPMENT", desc: "Customized software development architecture, robust automation workflows, and tailored backend systems for enterprise operations." },
    { id: 2, icon: "🔄", title: "MIGRATION & RE-ENGINEERING", desc: "Transforming legacy products into modern frameworks without operational disturbance, ensuring complete data integrity." },
    { id: 3, icon: "📱", title: "MOBILITY APPLICATION", desc: "Fluid and native mobile application engineering ecosystems built across multiple mobile OS platforms, including iOS & Android." },
    { id: 4, icon: "🤝", title: "OUTSOURCING & CONSULTING", desc: "Premium IT consulting, certified technical resource outsourcing, and high-end project management delivery." }
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          OUR <span className="text-brandRed">SERVICES</span>
        </h2>
        <div className="w-20 h-1 bg-brandRed mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service) => (
          <div key={service.id} className="bg-techSurface border border-white/[0.03] rounded-2xl p-8 hover:border-brandRed/40 transition-all duration-300 group hover:-translate-y-2">
            <div className="text-3xl w-14 h-14 bg-brandRed/5 border border-brandRed/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brandRed/20 transition-colors text-brandRed">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold mb-3 tracking-wider text-white">{service.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;