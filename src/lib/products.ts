export interface ProductType {
  id: number;
  name: string;
  category: string;
  image: string;
  images: string[];
  colors: string[];
  rating: number;
  reviewCount: number;
  description: string;
  details: string[];
  price: string;
}

export const products: ProductType[] = [
  {
    id: 1,
    name: "Aria Sofa",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Ivory", "Charcoal", "Forest Green"],
    rating: 4.8,
    reviewCount: 24,
    description: "Elegant and comfortable sofa with premium upholstery",
    details: [
      "Premium velvet upholstery",
      "Solid wood frame",
      "High-density foam cushions",
      "Dimensions: 84\" W x 36\" D x 32\" H",
      "Available in multiple colors"
    ],
    price: "Pricing available upon request"
  },
  {
    id: 2,
    name: "Marble Dining Table",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1617098650990-217c7cf9de26?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1617098650990-217c7cf9de26?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["White Carrara", "Black Marquina", "Emperador Brown"],
    rating: 4.9,
    reviewCount: 18,
    description: "Exquisite marble dining table for sophisticated dining experiences",
    details: [
      "Premium Italian Carrara marble",
      "Solid brass base",
      "Seats up to 8 people",
      "Dimensions: 96\" L x 42\" W x 30\" H",
      "Each piece is unique with natural marble variations"
    ],
    price: "Pricing available upon request"
  },
  {
    id: 3,
    name: "Celestial Chandelier",
    category: "Lighting",
    image: "https://m.media-amazon.com/images/I/61b2hHLsuqL._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61b2hHLsuqL._AC_SL1500_.jpg",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Crystal", "Brass", "Black"],
    rating: 4.7,
    reviewCount: 12,
    description: "Statement lighting piece to elevate your interior design",
    details: [
      "Hand-crafted crystal elements",
      "Dimmable LED lighting",
      "Adjustable hanging height",
      "Diameter: 32\"",
      "ETL certified"
    ],
    price: "Pricing available upon request"
  },
  {
    id: 4,
    name: "Velvet Armchair",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Ruby Red", "Navy Blue", "Sage Green"],
    rating: 4.6,
    reviewCount: 31,
    description: "Luxurious velvet armchair for ultimate comfort and style",
    details: [
      "Premium velvet upholstery",
      "Solid walnut legs",
      "Foam and down filling",
      "Dimensions: 32\" W x 34\" D x 33\" H",
      "Available in multiple colors"
    ],
    price: "Pricing available upon request"
  },
  {
    id: 5,
    name: "Sculptural Coffee Table",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["White Marble/Brass", "Black Marble/Chrome", "Green Marble/Bronze"],
    rating: 4.9,
    reviewCount: 16,
    description: "Artistic coffee table that serves as a functional centerpiece",
    details: [
      "Handcrafted by artisans",
      "Natural marble top",
      "Solid brass base",
      "Dimensions: 48\" L x 28\" W x 16\" H",
      "Each piece is unique"
    ],
    price: "Pricing available upon request"
  },
  {
    id: 6,
    name: "Geometric Side Table",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533377088493-1f89598cf3c8?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Brass/Glass", "Chrome/Glass", "Black/Smoked Glass"],
    rating: 4.5,
    reviewCount: 8,
    description: "Contemporary side table with geometric design elements",
    details: [
      "Solid brass construction",
      "Tempered glass top",
      "Hand-polished finish",
      "Dimensions: 18\" Diameter x 22\" H",
      "Anti-scratch protective feet"
    ],
    price: "Pricing available upon request"
  },
  {
    id: 7,
    name: "Modern Dining Chairs",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548869206-93b036dbaaa7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Cream Linen", "Gray Linen", "Black Leather"],
    rating: 4.7,
    reviewCount: 42,
    description: "Set of elegantly designed dining chairs for refined dining",
    details: [
      "Set of 4 chairs",
      "Premium linen upholstery",
      "Solid oak frame",
      "Dimensions: 20\" W x 22\" D x 34\" H",
      "Stain-resistant fabric"
    ],
    price: "Pricing available upon request"
  },
  {
    id: 8,
    name: "Marble Bookshelf",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594126311668-46ab2b60f5ed?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588191949040-932cf3eee176?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["White/Brass", "Black/Brass", "Green/Brass"],
    rating: 4.8,
    reviewCount: 14,
    description: "Sophisticated bookshelf combining marble and brass elements",
    details: [
      "Solid brass frame",
      "Marble shelves",
      "Five-tier design",
      "Dimensions: 36\" W x 12\" D x 72\" H",
      "Assembly required"
    ],
    price: "Pricing available upon request"
  },
  {
    id: 9,
    name: "Designer Floor Lamp",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1543198126-08ff4bc1320d?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1543198126-08ff4bc1320d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567459169668-95d355371bda?q=80&w=800&auto=format&fit=crop"
    ],
    colors: ["Brass/White", "Black/Black", "Nickel/Gray"],
    rating: 4.6,
    reviewCount: 19,
    description: "Statement floor lamp with adjustable features and artistic design",
    details: [
      "Handcrafted brass construction",
      "Mouth-blown glass shade",
      "Dimmable LED lighting",
      "Height: 68\"",
      "Rotatable arm design"
    ],
    price: "Pricing available upon request"
  }
];

export const categories = ["All", "Living Room", "Dining", "Lighting", "Storage"];

// Utility functions for products
export const getProductById = (id: number): ProductType | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: ProductType, limit: number = 3): ProductType[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

export const getProductsByCategory = (category: string): ProductType[] => {
  return category === "All" 
    ? products 
    : products.filter(product => product.category === category);
}; 