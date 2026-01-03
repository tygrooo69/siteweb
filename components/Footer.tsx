
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold font-heading tracking-tighter text-white mb-6 block">
              BATI<span className="text-blue-500">QUEST</span>
            </span>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Excellence opérationnelle et innovation au service des infrastructures de demain. Nous bâtissons le socle de vos ambitions territoriales.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'linkedin', 'instagram', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-slate-400 mask-center"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terrassement</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Voirie & Réseaux</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Génie Civil</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Démolition</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Bureau d'études</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Liens Utiles</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">À propos de nous</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">Nos projets</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Espace Presse</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm italic">Suivez nos chantiers et nos innovations mensuellement.</p>
            <form className="flex">
              <input type="email" placeholder="Email" className="bg-slate-800 border-none p-3 flex-1 rounded-l-sm outline-none text-sm" />
              <button className="bg-blue-600 px-4 py-3 rounded-r-sm hover:bg-blue-700 transition-colors">OK</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 BatiQuest Travaux Publics. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Mentions Légales</a>
            <a href="#" className="hover:text-slate-300">Confidentialité</a>
            <a href="#" className="hover:text-slate-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
