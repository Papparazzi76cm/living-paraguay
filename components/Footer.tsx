import React from 'react';
import { Page } from '../types';
import { NAV_LINKS, LOGO_URL } from '../constants';
import Icon from './Icon';

interface FooterProps {
    setActivePage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({setActivePage}) => {
  const socialLinks = [
    { name: 'facebook', href: '#' },
    { name: 'instagram', href: '#' },
    { name: 'youtube', href: '#' },
  ];

  const legalLinks = [
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos de Servicio', href: '#' },
  ];
  
  return (
    <footer className="bg-py-blue-dark text-py-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <button onClick={() => setActivePage('home')} className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Living Paraguay Logo" className="h-16 w-auto" />
            </button>
            <p className="text-sm text-gray-300">
              Su guía completa para una transición exitosa a la vida en Paraguay.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Navegación</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.slice(0,5).map((link) => (
                <li key={link.name}>
                  <button onClick={() => setActivePage(link.page)} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Síganos</h3>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-gray-300 hover:text-white transition-transform duration-300 hover:scale-125">
                  <span className="sr-only">{social.name}</span>
                  <Icon name={social.name} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Living Paraguay. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;