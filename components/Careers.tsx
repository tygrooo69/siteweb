
import React from 'react';

const Careers: React.FC = () => {
  const jobs = [
    { title: "Chef de Chantier VRD", type: "CDI", loc: "Lyon" },
    { title: "Conducteur d'Engins (H/F)", type: "CDI", loc: "Valence" },
    { title: "Ingénieur Bureau d'Études", type: "CDI", loc: "Lyon" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-sm overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-16">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm text-center lg:text-left block">RECRUTEMENT</span>
            <h2 className="text-4xl font-bold mt-4 mb-6 text-white uppercase text-center lg:text-left">Rejoignez l'aventure <span className="text-blue-500">BatiQuest</span></h2>
            <p className="text-slate-400 mb-10 text-center lg:text-left">
              Nous recherchons des passionnés du terrain pour construire les infrastructures de demain. Formation continue et matériel de pointe garantis.
            </p>
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 transition-colors border-l-4 border-blue-600">
                  <div>
                    <h4 className="text-white font-bold">{job.title}</h4>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">{job.type} • {job.loc}</p>
                  </div>
                  <button className="text-blue-500 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div 
            className="lg:w-1/2 bg-cover bg-center min-h-[400px]"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop")' }}
          >
            <div className="w-full h-full bg-blue-600/20 backdrop-grayscale-[0.5]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
