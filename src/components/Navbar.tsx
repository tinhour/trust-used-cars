import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Car, BookOpen, Mail, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <span className="ml-2 text-xl font-bold">优选二手车</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
                <Home className="h-4 w-4 mr-1" />
                首页
              </Link>
              <Link to="/cars" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
                <Car className="h-4 w-4 mr-1" />
                在售车辆
              </Link>
              <Link to="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                汽车知识
              </Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                联系我们
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
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
              首页
            </Link>
            <Link 
              to="/cars" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Car className="h-4 w-4 mr-2" />
              在售车辆
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              汽车知识
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="h-4 w-4 mr-2" />
              联系我们
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;