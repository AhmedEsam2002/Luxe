
import React from 'react';

const values = [
  {
    id: 1,
    title: "Craftsmanship",
    description: "Each piece is meticulously crafted by skilled artisans using time-honored techniques."
  },
  {
    id: 2,
    title: "Quality Materials",
    description: "We source only the finest materials from around the world to ensure lasting quality."
  },
  {
    id: 3,
    title: "Timeless Design",
    description: "Our designs transcend fleeting trends to become cherished heirlooms."
  }
];

const ValueProposition = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-luxury-accent font-medium">Our Philosophy</span>
          <h2 className="heading-lg mt-2 mb-4">Luxury in Every Detail</h2>
          <p className="text-lg text-gray-600">We believe that exceptional spaces are created through attention to detail, superior craftsmanship, and a bold vision that honors both heritage and innovation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.id} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 flex items-center justify-center bg-luxury-accent text-white rounded-full mb-6 text-2xl font-display">
                {value.id}
              </div>
              <h3 className="text-xl font-display font-medium mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
