
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold">LUXE</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-luxury hover:text-luxury-accent transition-colors">Home</Link>
          <Link to="/about" className="text-luxury hover:text-luxury-accent transition-colors">About</Link>
          <Link to="/collection" className="text-luxury hover:text-luxury-accent transition-colors">Collection</Link>
          <Link to="/b2b" className="text-luxury hover:text-luxury-accent transition-colors">B2B</Link>
          <Link to="/contact" className="text-luxury hover:text-luxury-accent transition-colors">Contact</Link>
        </div>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-luxury hover:text-luxury-accent transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-luxury hover:text-luxury-accent transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/collection" 
              className="text-luxury hover:text-luxury-accent transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Collection
            </Link>
            <Link 
              to="/b2b" 
              className="text-luxury hover:text-luxury-accent transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              B2B
            </Link>
            <Link 
              to="/contact" 
              className="text-luxury hover:text-luxury-accent transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
