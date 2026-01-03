
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "BatiQuest a livré le chantier VRD de l'éco-quartier avec deux semaines d'avance, tout en respectant un niveau de finition exemplaire.",
      author: "Marc Lefebvre",
      role: "Directeur Technique, Métropole de Lyon",
      initials: "ML"
    },
    {
      quote: "Une réactivité rare. Leur bureau d'études a su trouver des solutions techniques complexes pour le soutènement de notre plateforme logistique.",
      author: "Sophie Durand",
      role: "Responsable Grands Projets, LogiNord",
      initials: "SD"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">TÉMOIGNAGES</span>
            <h2 className="text-4xl font-bold mt-4 text-slate-900 uppercase leading-tight">Ils nous font <span className="text-blue-600">confiance</span></h2>
            <p className="mt-6 text-slate-600">
              La satisfaction de nos clients est le socle de notre pérennité. Découvrez les retours d'expérience de nos partenaires.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 shadow-sm border border-slate-100 rounded-sm relative">
                <div className="absolute -top-4 -left-4 text-6xl text-blue-100 font-serif leading-none">“</div>
                <p className="text-slate-600 italic mb-8 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.author}</p>
                    <p className="text-blue-600 text-xs font-medium uppercase tracking-tighter">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
