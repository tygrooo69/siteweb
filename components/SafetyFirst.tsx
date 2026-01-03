
import React from 'react';

const SafetyFirst: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Visual background element representing caution/construction */}
      <div className="absolute top-0 right-0 w-64 h-full bg-yellow-500/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-slate-900 font-bold text-xs uppercase tracking-tighter mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Priorité Absolue
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-6 leading-tight">Objectif <span className="text-yellow-500">Zéro Accident</span> sur nos chantiers</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              La sécurité de nos collaborateurs et du public est au cœur de chaque décision. Nous investissons massivement dans la formation continue et le renouvellement de nos équipements de protection individuelle (EPI).
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-yellow-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 italic">100% de Personnel Formé</h4>
                  <p className="text-slate-500 text-sm">Certifications CACES et SST à jour pour toutes nos équipes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-yellow-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 italic">Audit QHSE Hebdomadaire</h4>
                  <p className="text-slate-500 text-sm">Contrôles inopinés pour garantir le respect strict des procédures.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400" alt="Sécurité" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="https://images.unsplash.com/photo-1544161515-4ad6ce6e8340?q=80&w=400" alt="Equipement" className="rounded-sm mt-8 grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            {/* Counter badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 p-6 text-slate-900 rounded-full shadow-2xl border-4 border-slate-900">
              <div className="text-center">
                <span className="text-3xl font-black block">450+</span>
                <span className="text-[10px] font-bold uppercase leading-none">Jours sans accident</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyFirst;
