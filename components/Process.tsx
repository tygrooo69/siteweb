
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Étude & Diagnostic",
      desc: "Analyse topographique, études de sol et chiffrage précis pour sécuriser la viabilité du projet."
    },
    {
      num: "02",
      title: "Planification",
      desc: "Ordonnancement rigoureux des phases et coordination avec les acteurs publics et privés."
    },
    {
      num: "03",
      title: "Exécution Terrain",
      desc: "Déploiement de nos équipes et de notre parc d'engins sous la supervision d'un chef de chantier dédié."
    },
    {
      num: "04",
      title: "Réception & Suivi",
      desc: "Contrôle qualité final, remise des ouvrages et accompagnement post-livraison."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">NOTRE MÉTHODOLOGIE</span>
          <h2 className="text-4xl font-bold mt-4 text-slate-900 uppercase">Le Parcours <span className="text-blue-600">BatiFlow</span></h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Un cadre de travail structuré pour garantir le respect des délais et des budgets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 p-8 text-center group">
              <div className="w-16 h-16 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
