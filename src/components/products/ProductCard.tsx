
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, category, image, description }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <Link 
            to={`/collection/${id}`} 
            className="text-white font-medium text-lg hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <span className="text-sm text-luxury-accent">{category}</span>
        <h3 className="text-xl font-display font-medium mt-1">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
