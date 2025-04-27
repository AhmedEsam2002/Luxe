import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Aria Sofa",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=800&auto=format&fit=crop",
    description: "Elegant and comfortable sofa with premium upholstery"
  },
  {
    id: 2,
    name: "Marble Dining Table",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1617098650990-217c7cf9de26?q=80&w=800&auto=format&fit=crop",
    description: "Exquisite marble dining table for sophisticated dining experiences"
  },
  {
    id: 3,
    name: "Celestial Chandelier",
    category: "Lighting",
    image: "https://m.media-amazon.com/images/I/61b2hHLsuqL._AC_SL1500_.jpg",
    description: "Statement lighting piece to elevate your interior design"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section bg-luxury-muted">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <span className="text-sm uppercase tracking-widest text-luxury-accent font-medium">Our Selection</span>
            <h2 className="heading-lg mt-2">Featured Pieces</h2>
          </div>
          <Link to="/collection" className="mt-4 md:mt-0 flex items-center text-luxury font-medium hover:text-luxury-accent transition-colors">
            View All Collection <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <Link 
                    to={`/collection/${product.id}`} 
                    className="text-white font-medium text-lg hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <span className="text-sm text-luxury-accent">{product.category}</span>
                <h3 className="text-xl font-display font-medium mt-1">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
