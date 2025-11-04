import React, { useState } from 'react';
import { Page, NavLink } from '../types';
import { NAV_LINKS, LOGO_URL } from '../constants';
import Icon from './Icon';
import logo from 'living-paraguay/assets/logo-living-paraguay.png'

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  const NavItem: React.FC<{ link: NavLink }> = ({ link }) => (
    <button
      onClick={() => handleNavClick(link.page)}
      className={`py-2 px-3 text-sm font-medium transition-colors duration-300 relative ${
        activePage === link.page
          ? 'text-py-red'
          : 'text-py-blue-dark hover:text-py-red'
      }`}
    >
      {link.name}
      {activePage === link.page && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-py-red rounded-full"></span>
      )}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 bg-py-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => setActivePage('home')} className="flex items-center gap-2 flex-shrink-0">
            <img src={LOGO_URL} alt="Living Paraguay Logo" className="h-14 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}
          </nav>

          {/* Desktop CTA & Mobile Menu Button */}
          <div className="flex items-center">
             <button onClick={() => setActivePage('contact')} className="hidden lg:block bg-py-red hover:bg-opacity-90 text-white font-bold py-2 px-5 rounded-full transition-transform duration-300 hover:scale-105">
                Iniciar Trámite
             </button>
            <button
              className="lg:hidden p-2 rounded-md text-py-blue-dark hover:bg-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? 'close' : 'menu'} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-py-white shadow-lg">
          <nav className="flex flex-col items-center px-2 pt-2 pb-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page)}
                className={`block w-full text-center px-3 py-2 rounded-md text-base font-medium ${
                  activePage === link.page
                    ? 'bg-py-blue text-white'
                    : 'text-py-blue-dark hover:bg-gray-100'
                }`}
              >
                {link.name}
              </button>
            ))}
             <button onClick={() => setActivePage('contact')} className="mt-4 w-full bg-py-red hover:bg-opacity-90 text-white font-bold py-2 px-5 rounded-full transition-transform duration-300 hover:scale-105">
                Iniciar Trámite
             </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
