import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-gray-200 transition-colors"
          >
            ModyTube
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white font-light hover:font-medium hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white font-light hover:font-medium hover:text-gray-200 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white font-light hover:font-medium hover:text-gray-200 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gray-200 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`${
            isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col justify-center items-center space-y-4 py-4">
            <Link 
              to="/" 
              className="text-white hover:font-medium hover:text-gray-200 transition-colors font-thin"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:font-medium hover:text-gray-200 transition-colors font-thin"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:font-medium hover:text-gray-200 transition-colors font-thin"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;