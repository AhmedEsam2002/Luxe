import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section - Added parallax effect and smoother fade */}
        <section className="h-[40vh] relative flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 transform transition-transform duration-[2s] hover:scale-110">
            <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1600&auto=format&fit=crop" 
              alt="Contact Us" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
          </div>
          
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl animate-fade-up opacity-100">
              <span className="inline-block px-4 py-1 bg-luxury-accent/20 backdrop-blur-sm rounded-full text-sm uppercase tracking-widest text-luxury-accent font-medium mb-4">Get in Touch</span>
              <h1 className="heading-xl mt-4 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">Contact Us</h1>
            </div>
          </div>
        </section>
        
        {/* Contact Info & Form - Enhanced with animations and card styling */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information - Added hover effects and smooth transitions */}
              <div className="space-y-8 animate-fade-up opacity-100 [--animate-delay:200ms]">
                <div>
                  <span className="inline-block px-3 py-1 bg-luxury-muted rounded-full text-sm uppercase tracking-widest text-luxury-accent font-medium">Reach Out</span>
                  <h2 className="heading-lg mt-4 mb-6">We'd Love to Hear From You</h2>
                  <p className="body-md mb-8 text-gray-600">Whether you're interested in our products, have questions about customization, or want to discuss a B2B partnership, our team is ready to assist you.</p>
                </div>
                
                <div className="space-y-6 group">
                  <div className="flex items-start transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-luxury-muted p-4 rounded-xl mr-5 group-hover:bg-luxury-accent/10">
                      <MapPin size={24} className="text-luxury-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Visit Us</h3>
                      <address className="not-italic text-gray-600">
                        123 Luxury Avenue<br />
                        Milano, Italy<br />
                        90210
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-luxury-muted p-4 rounded-xl mr-5 group-hover:bg-luxury-accent/10">
                      <Mail size={24} className="text-luxury-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Email Us</h3>
                      <a href="mailto:info@luxe.com" className="text-gray-600 hover:text-luxury-accent transition-colors">info@luxe.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start transition-all duration-300 hover:-translate-y-1">
                    <div className="bg-luxury-muted p-4 rounded-xl mr-5 group-hover:bg-luxury-accent/10">
                      <Phone size={24} className="text-luxury-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Call Us</h3>
                      <a href="tel:+123456789" className="text-gray-600 hover:text-luxury-accent transition-colors">+1 (234) 567-89</a>
                    </div>
                  </div>
                </div>
                
                {/* Business Hours - Added subtle card styling */}
                <div className="border border-gray-100 rounded-2xl bg-white p-8 shadow-sm">
                  <h3 className="font-medium mb-4">Business Hours</h3>
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex justify-between py-1">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between py-1">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between py-1">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Form - Enhanced with better card styling */}
              <div className="animate-fade-up opacity-100 [--animate-delay:400ms]">
                <div className="bg-luxury-muted rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-display font-medium mb-8">Send Us a Message</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section - Added subtle gradient overlay */}
        <section className="bg-white h-[400px] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Map placeholder</p>
              <p className="text-sm text-gray-500">(Google Maps would be embedded here)</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* WhatsApp Button - Enhanced with smoother transition */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button transition-all duration-300 hover:scale-110 hover:shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
    </>
  );
};

export default Contact;
