import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Car, BookOpen, Mail, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">{t('siteName')}</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
                <Home className="h-4 w-4 mr-1" />
                {t('nav.home')}
              </Link>
              <Link to="/cars" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
                <Car className="h-4 w-4 mr-1" />
                {t('nav.cars')}
              </Link>
              <Link to="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                {t('nav.blog')}
              </Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                {t('nav.contact')}
              </Link>
            </div>
            <LanguageSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 ml-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-4 w-4 mr-2" />
              {t('nav.home')}
            </Link>
            <Link 
              to="/cars" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Car className="h-4 w-4 mr-2" />
              {t('nav.cars')}
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              {t('nav.blog')}
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="h-4 w-4 mr-2" />
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;