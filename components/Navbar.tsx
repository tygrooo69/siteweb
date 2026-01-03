
import React, { useState } from 'react';

// Constante pour l'URL externe, facilement modifiable ou injectable via env
const EXTERNAL_URL = 'https://google.fr';

interface NavLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'Accueil', href: '#' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Google', href: EXTERNAL_URL, isExternal: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold font-heading tracking-tighter text-white">
              BATI<span className="text-blue-500">QUEST</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-sm text-sm font-bold transition-all transform hover:scale-105"
              >
                DEVIS GRATUIT
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 shadow-xl absolute w-full top-full left-0 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-slate-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
