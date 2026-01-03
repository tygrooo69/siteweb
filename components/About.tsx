
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { label: 'Années d\'expérience', value: '25+' },
    { label: 'Projets réalisés', value: '1.2k' },
    { label: 'Collaborateurs', value: '150' },
    { label: 'Engins propres', value: '45' },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 right-10 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                alt="Chantier BatiQuest" 
                className="rounded-lg shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-lg shadow-xl text-white hidden md:block">
                <p className="text-4xl font-bold mb-1">Certifié</p>
                <p className="text-sm font-medium uppercase tracking-widest">ISO 9001 & 14001</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">NOTRE HISTOIRE</span>
            <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">
              Une expertise forgée par le terrain depuis plus de 25 ans
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              BatiQuest accompagne les collectivités et les acteurs privés dans la transformation du territoire. De la préparation des sols aux finitions les plus complexes, notre approche allie performance technique et respect des enjeux environnementaux.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-4xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-slate-500 text-sm font-medium uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold hover:bg-slate-800 transition-colors">
              NOTRE PHILOSOPHIE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
