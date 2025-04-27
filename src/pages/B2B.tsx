import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import { MessageSquare, Check } from 'lucide-react';

const B2B = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="h-[50vh] relative flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=1600&auto=format&fit=crop" 
              alt="B2B Partnerships" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl animate-fade-up opacity-100">
              <span className="uppercase tracking-widest text-luxury-accent font-medium">Professional Solutions</span>
              <h1 className="heading-xl mt-4">B2B Partnerships</h1>
            </div>
          </div>
        </section>
        
        {/* B2B Overview */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm uppercase tracking-widest text-luxury-accent font-medium">For Professionals</span>
                <h2 className="heading-lg mt-2 mb-6">Custom Solutions for Designers & Developers</h2>
                <p className="body-md mb-6">LUXE works with interior designers, architects, real estate developers, and hospitality groups to create bespoke furniture solutions for projects of any scale.</p>
                <p className="body-md mb-6">Our dedicated B2B team provides personalized support throughout the entire process, from initial concept to final installation.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={20} className="text-luxury-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Custom design and manufacturing services</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-luxury-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Dedicated project manager for seamless coordination</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-luxury-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Trade pricing and flexible payment terms</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-luxury-accent mt-1 mr-2 flex-shrink-0" />
                    <span>White-glove delivery and installation</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=800&auto=format&fit=crop" 
                  alt="Luxury Interior" 
                  className="w-full rounded-bl-[100px]"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Services */}
        <section className="section bg-luxury-muted">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm uppercase tracking-widest text-luxury-accent font-medium">Our Services</span>
              <h2 className="heading-lg mt-2 mb-4">Tailored B2B Solutions</h2>
              <p className="text-lg text-gray-600">We offer a comprehensive range of services designed to meet the specific needs of professional clients.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-display font-medium mb-4">Custom Design</h3>
                <p className="text-gray-600">Work with our designers to create unique pieces that perfectly match your project requirements.</p>
              </div>
              
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-display font-medium mb-4">Project Management</h3>
                <p className="text-gray-600">Dedicated project managers ensure smooth execution from concept to installation.</p>
              </div>
              
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-display font-medium mb-4">Bulk Ordering</h3>
                <p className="text-gray-600">Special pricing and production schedules for large-scale projects.</p>
              </div>
              
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-display font-medium mb-4">White-Glove Delivery</h3>
                <p className="text-gray-600">Professional installation and setup services for a hassle-free experience.</p>
              </div>
              
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-display font-medium mb-4">Trade Program</h3>
                <p className="text-gray-600">Exclusive benefits for registered design professionals.</p>
              </div>
              
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-display font-medium mb-4">Customization</h3>
                <p className="text-gray-600">Modify existing designs or create entirely new pieces to suit your needs.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm uppercase tracking-widest text-luxury-accent font-medium">Success Stories</span>
              <h2 className="heading-lg mt-2 mb-4">Featured Projects</h2>
              <p className="text-lg text-gray-600">Explore some of our successful collaborations with design professionals and property developers.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=800&auto=format&fit=crop" 
                    alt="Luxury Hotel Project" 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium text-lg">View Project</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-display font-medium mt-1">The Grand Hotel Renovation</h3>
                  <p className="mt-2 text-gray-600">Complete furnishing of 120 luxury suites for a 5-star hotel chain.</p>
                </div>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" 
                    alt="Residential Development" 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium text-lg">View Project</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-display font-medium mt-1">Azure Residences</h3>
                  <p className="mt-2 text-gray-600">Custom furniture for a luxury apartment complex with 45 units.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="section bg-luxury-muted">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm uppercase tracking-widest text-luxury-accent font-medium">Get Started</span>
                <h2 className="heading-lg mt-2 mb-4">Collaborate With Us</h2>
                <p className="text-lg text-gray-600">Fill out the form below to discuss your project requirements with our B2B team.</p>
              </div>
              
              <div className="bg-white p-8 md:p-12 shadow-sm">
                <ContactForm />
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

export default B2B;
