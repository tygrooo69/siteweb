
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">CONTACT</span>
            <h2 className="text-4xl font-bold mt-4 mb-8 uppercase tracking-tight">Démarrons votre projet ensemble</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-sm text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Siège Social</h4>
                  <p className="text-slate-400">12 rue de la République, 69002 Lyon, France</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-sm text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Téléphone</h4>
                  <p className="text-slate-400">+33 (0)4 72 00 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-sm text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-slate-400">contact@batiquest-tp.fr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl text-slate-900">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Prénom & Nom</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-blue-600 transition-colors" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-blue-600 transition-colors" placeholder="jean@exemple.fr" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Sujet</label>
                <select className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-blue-600 transition-colors">
                  <option>Demande de Devis</option>
                  <option>Partenariat</option>
                  <option>Recrutement</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-3 outline-none focus:border-blue-600 transition-colors" placeholder="Décrivez votre projet..."></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-sm transition-all transform hover:scale-[1.01]">
                ENVOYER LA DEMANDE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
