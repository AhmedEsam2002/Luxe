import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl animate-fade-up opacity-100">
          <span className="uppercase tracking-widest text-luxury-accent font-medium">Redefining Luxury</span>
          <h1 className="heading-xl mt-4 mb-6">Timeless Elegance for Modern Living</h1>
          <p className="body-lg mb-8 text-white/90">Discover our collection of meticulously crafted furniture that combines traditional craftsmanship with contemporary design.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/collection" className="btn-primary">
              Explore Collection
            </Link>
            <Link to="/contact" className="bg-transparent border border-white text-white px-6 py-3 inline-block font-medium transition-all hover:bg-white hover:text-luxury">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
