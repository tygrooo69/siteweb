
import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', 'Génie Civil', 'Terrassement', 'VRD'];
  
  const projects = [
    { id: 1, title: "Liaison Sud-Est", category: "VRD", location: "Lyon", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600" },
    { id: 2, title: "Viaduc des Arches", category: "Génie Civil", location: "Grenoble", img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600" },
    { id: 3, title: "Zone Industrielle Ouest", category: "Terrassement", location: "Nantes", img: "https://images.unsplash.com/photo-1531834351052-03d32158017c?q=80&w=600" },
    { id: 4, title: "Éco-quartier Belair", category: "VRD", location: "Bordeaux", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=600" },
    { id: 5, title: "Ouvrage Hydraulique X3", category: "Génie Civil", location: "Marseille", img: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=600" },
    { id: 6, title: "Extension Portuaire", category: "Terrassement", location: "Lorient", img: "https://images.unsplash.com/photo-1574067765502-320c4fb62441?q=80&w=600" },
  ];

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">RÉALISATIONS</span>
            <h2 className="text-4xl font-bold mt-4 text-slate-900 uppercase">Projets Majeurs</h2>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-bold uppercase transition-all border-b-2 ${
                  filter === cat ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-slate-900 aspect-[4/3]">
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-blue-400 text-xs font-bold uppercase mb-2">{project.category} — {project.location}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <button className="text-white text-sm font-bold border-b-2 border-blue-600 w-fit pb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  EN SAVOIR PLUS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
