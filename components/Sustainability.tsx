
import React from 'react';

const Sustainability: React.FC = () => {
  const commitments = [
    {
      title: "Recyclage In-Situ",
      desc: "Réutilisation de 85% des déblais de chantier pour limiter les rotations de camions.",
      icon: "♻️"
    },
    {
      title: "Engins Bas Carbone",
      desc: "Renouvellement constant de notre flotte vers des motorisations hybrides et électriques.",
      icon: "🌱"
    },
    {
      title: "Protection Biodiversité",
      desc: "Protocoles stricts de préservation de la faune et la flore sur chaque zone d'intervention.",
      icon: "🦋"
    }
  ];

  return (
    <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">ENGAGEMENT RSE</span>
          <h2 className="text-4xl font-bold mt-4 uppercase">Bâtir Durable, Penser Demain</h2>
          <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
            Chez BatiQuest, nous croyons que la performance technique ne doit jamais compromettre l'avenir de notre environnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {commitments.map((item, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/10 hover:border-blue-400 transition-all group">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-blue-100/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
