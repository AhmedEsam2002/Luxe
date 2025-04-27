
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ValueProposition from '@/components/home/ValueProposition';
import { MessageSquare } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <FeaturedProducts />
        <section className="section bg-luxury text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Transform Your Space</h2>
              <p className="text-lg mb-8 text-white/80">Ready to elevate your interior with our bespoke luxury pieces? Our design consultants are ready to help you create the perfect space.</p>
              <a href="/contact" className="btn-primary bg-white text-luxury hover:bg-luxury-accent hover:text-white">
                Get in Touch
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

export default Index;
