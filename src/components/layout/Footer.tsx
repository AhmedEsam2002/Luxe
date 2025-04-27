
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold mb-4 inline-block">LUXE</Link>
            <p className="text-gray-300 mt-4 mb-6">Creating timeless luxury for modern living spaces. Crafted with passion and precision.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-luxury-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@luxe.com" className="text-white hover:text-luxury-accent transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+123456789" className="text-white hover:text-luxury-accent transition-colors" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/collection" className="text-gray-300 hover:text-white transition-colors">Collection</Link></li>
              <li><Link to="/b2b" className="text-gray-300 hover:text-white transition-colors">B2B</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Collection Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Collections</h3>
            <ul className="space-y-2">
              <li><Link to="/collection" className="text-gray-300 hover:text-white transition-colors">Living Room</Link></li>
              <li><Link to="/collection" className="text-gray-300 hover:text-white transition-colors">Dining</Link></li>
              <li><Link to="/collection" className="text-gray-300 hover:text-white transition-colors">Bedroom</Link></li>
              <li><Link to="/collection" className="text-gray-300 hover:text-white transition-colors">Lighting</Link></li>
              <li><Link to="/collection" className="text-gray-300 hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-gray-300 mb-2">123 Luxury Avenue</p>
              <p className="text-gray-300 mb-2">Milano, Italy</p>
              <p className="text-gray-300 mb-4">90210</p>
              <p className="text-gray-300 mb-2">
                <a href="tel:+123456789" className="hover:text-white transition-colors">+1 (234) 567-89</a>
              </p>
              <p className="text-gray-300">
                <a href="mailto:info@luxe.com" className="hover:text-white transition-colors">info@luxe.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center sm:text-left">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
