import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { MessageSquare } from 'lucide-react';

const products = [
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
    image: "https://images.unsplash.com/photo-1602628953337-76e5177f0ca4?q=80&w=800&auto=format&fit=crop",
    description: "Statement lighting piece to elevate your interior design"
  },
  {
    id: 4,
    name: "Velvet Armchair",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
    description: "Luxurious velvet armchair for ultimate comfort and style"
  },
  {
    id: 5,
    name: "Sculptural Coffee Table",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800&auto=format&fit=crop",
    description: "Artistic coffee table that serves as a functional centerpiece"
  },
  {
    id: 6,
    name: "Geometric Side Table",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop",
    description: "Contemporary side table with geometric design elements"
  },
  {
    id: 7,
    name: "Modern Dining Chairs",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
    description: "Set of elegantly designed dining chairs for refined dining"
  },
  {
    id: 8,
    name: "Marble Bookshelf",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?q=80&w=800&auto=format&fit=crop",
    description: "Sophisticated bookshelf combining marble and brass elements"
  },
  {
    id: 9,
    name: "Designer Floor Lamp",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1543198126-08ff4bc1320d?q=80&w=800&auto=format&fit=crop",
    description: "Statement floor lamp with adjustable features and artistic design"
  }
];

const categories = ["All", "Living Room", "Dining", "Lighting", "Storage"];

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="h-[50vh] relative flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1600&auto=format&fit=crop" 
              alt="Luxury Collection" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl animate-fade-up opacity-100">
              <span className="uppercase tracking-widest text-luxury-accent font-medium">Our Products</span>
              <h1 className="heading-xl mt-4">Collection</h1>
            </div>
          </div>
        </section>
        
        {/* Collection Filters */}
        <section className="py-10 bg-luxury-muted">
          <div className="container-custom">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button 
                  key={category} 
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-luxury text-white'
                      : 'bg-white text-luxury hover:bg-luxury/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  image={product.image}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Request Pricing CTA */}
        <section className="section bg-luxury text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Request Pricing</h2>
              <p className="text-lg mb-8 text-white/80">Interested in adding our luxury pieces to your space? Contact us for detailed pricing and customization options.</p>
              <a href="/contact" className="btn-primary bg-white text-luxury hover:bg-luxury-accent hover:text-white">
                Request Price
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
    </>
  );
};

export default Collection;
