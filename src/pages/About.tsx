import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MessageSquare } from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="h-[60vh] relative flex items-center ">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1600&auto=format&fit=crop" 
              alt="Our Workshop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="container-custom relative z-10 text-white ">
            <div className="max-w-3xl animate-fade-up opacity-100">
              <span className="uppercase tracking-widest text-luxury-accent font-medium">About Us</span>
              <h1 className="heading-xl mt-4">Our Story</h1>
            </div>
          </div>
        </section>
        
        {/* Brand Story */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm uppercase tracking-widest text-luxury-accent font-medium">Our Heritage</span>
                <h2 className="heading-lg mt-2 mb-6">Where Tradition Meets Innovation</h2>
                <p className="body-md mb-6">LUXE was founded in 2005 with a singular vision: to create furniture that stands at the intersection of timeless craftsmanship and bold, contemporary design.</p>
                <p className="body-md mb-6">Drawing inspiration from the rich design heritage of Italian masters like Minotti, we've cultivated a global perspective that embraces multicultural influences, resulting in pieces that feel both familiar and refreshingly new.</p>
                <p className="body-md">Our team of designers and artisans work collaboratively to push boundaries while honoring traditional techniques, creating collections that transcend trends and become part of your family's story for generations.</p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?q=80&w=800&auto=format&fit=crop"
                  alt="Craftsman at Work" 
                  className="w-full rounded-tr-[100px]"
                />
                
                <div className="absolute -bottom-8 -left-8 bg-luxury-accent p-8 rounded-bl-[50px]">
                  <p className="text-white font-display text-xl italic">"Excellence is not a skill. It's an attitude."</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision */}
        <section className="section bg-luxury-muted">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm uppercase tracking-widest text-luxury-accent font-medium">Our Vision</span>
              <h2 className="heading-lg mt-2 mb-4">Global Influences, Timeless Appeal</h2>
              <p className="text-lg text-gray-600">We believe that exceptional design transcends cultural boundaries, drawing inspiration from diverse traditions while maintaining a commitment to timeless elegance.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-display font-medium mb-4">Sustainability</h3>
                <p className="text-gray-600">We are committed to responsible sourcing and production methods that minimize environmental impact while maximizing quality.</p>
              </div>
              
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-display font-medium mb-4">Innovation</h3>
                <p className="text-gray-600">We continually explore new materials, techniques and designs to create furniture that is both beautiful and functional.</p>
              </div>
              
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-display font-medium mb-4">Community</h3>
                <p className="text-gray-600">We support local artisans and craftspeople, preserving traditional skills while creating economic opportunities.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm uppercase tracking-widest text-luxury-accent font-medium">Our Team</span>
              <h2 className="heading-lg mt-2 mb-4">The Creators Behind LUXE</h2>
              <p className="text-lg text-gray-600">Our diverse team brings together expertise from design, craftsmanship, and business to create exceptional furniture and experiences.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team member placeholders */}
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" 
                    alt="Sofia Rossi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-medium">Sofia Rossi</h3>
                <p className="text-luxury-accent">Creative Director</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop" 
                    alt="Marco Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-medium">Marco Chen</h3>
                <p className="text-luxury-accent">Lead Designer</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop" 
                    alt="Anya Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-medium">Anya Patel</h3>
                <p className="text-luxury-accent">Master Craftsperson</p>
              </div>
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

export default About;
