import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  ArrowLeft, 
  MessageSquare, 
  Heart, 
  Check, 
  ChevronRight, 
  ZoomIn, 
  Star, 
  StarHalf, 
  Share2,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  ShoppingBag,
  ChevronLeft
} from 'lucide-react';

// Using the same product data from Collection.tsx for consistency
const products = [
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

// Image zoom modal component
const ImageZoomModal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Handle swipe gestures for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      onNext();
    }
    if (isRightSwipe) {
      onPrev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 text-white hover:text-luxury-accent z-10"
        aria-label="Close zoom view"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <button 
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <img 
          src={images[currentIndex]} 
          alt={`Product view ${currentIndex + 1}`} 
          className="max-w-full max-h-[90vh] object-contain transition-opacity duration-300"
        />
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button 
              key={index}
              onClick={() => onNext(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <button 
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full z-10"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

// Social Share Popover
const SocialSharePopover = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const shareUrl = window.location.href;
  const shareText = `Check out this amazing ${product.name} from Luxury Furniture!`;
  
  return (
    <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-lg p-4 z-20 min-w-[200px] animate-fade-in">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium">Share</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {[
          { name: 'Facebook', icon: 'facebook', color: 'bg-[#1877F2]', link: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
          { name: 'Twitter', icon: 'twitter', color: 'bg-[#1DA1F2]', link: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}` },
          { name: 'Pinterest', icon: 'pinterest', color: 'bg-[#E60023]', link: `https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareText}` },
          { name: 'Email', icon: 'mail', color: 'bg-gray-600', link: `mailto:?subject=${shareText}&body=${shareUrl}` }
        ].map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} text-white rounded-full w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity`}
            aria-label={`Share on ${social.name}`}
          >
            <i className={`ri-${social.icon}-line`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

// Collapsible section component
const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left focus:outline-none"
      >
        <h2 className="font-medium text-lg">{title}</h2>
        {isOpen ? (
          <ChevronUp size={18} className="text-luxury ml-2" />
        ) : (
          <ChevronDown size={18} className="text-luxury ml-2" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] pb-6' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === Number(productId));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [showSharePopover, setShowSharePopover] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Handle back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Modal navigation
  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };
  
  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };
  
  if (!product) {
    return (
      <>
        <Navbar />
        <main className="pt-20">
          <div className="container-custom py-20 text-center">
            <h1 className="heading-lg">Product Not Found</h1>
            <p className="mt-4 text-lg">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/collection" className="btn-primary mt-8">Return to Collection</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  // Generate rating stars
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} size={16} className="fill-luxury-accent text-luxury-accent" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" size={16} className="fill-luxury-accent text-luxury-accent" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} size={16} className="text-gray-300" />);
    }
    
    return stars;
  };
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-luxury-muted py-3">
          <div className="container-custom">
            <nav className="flex items-center text-sm">
              <Link to="/" className="text-gray-600 hover:text-luxury-accent transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2 text-gray-400" />
              <Link to="/collection" className="text-gray-600 hover:text-luxury-accent transition-colors">Collection</Link>
              <ChevronRight size={14} className="mx-2 text-gray-400" />
              <span className="text-luxury-accent">{product.name}</span>
            </nav>
          </div>
        </div>
        
        {/* Product Details */}
        <section className="section py-12 md:py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Product Images Gallery */}
              <div className="lg:col-span-7 space-y-6">
                <div className="relative overflow-hidden rounded-lg bg-luxury-muted aspect-square">
                  <img 
                    src={product.images[selectedImage]} 
                    alt={`${product.name} - View ${selectedImage + 1}`} 
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity flex items-center justify-center opacity-0 hover:opacity-100">
                    <button
                      onClick={() => setShowZoom(true)}
                      className="bg-white p-3 rounded-full shadow-lg transform transition-transform hover:scale-105"
                      aria-label="Zoom image"
                    >
                      <ZoomIn size={20} className="text-luxury" />
                    </button>
                  </div>
                  
                  {/* Left/Right navigation arrows for desktop */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-luxury p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-luxury p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                
                <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-luxury-accent">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-md overflow-hidden ${
                        selectedImage === index ? 'ring-2 ring-luxury-accent' : 'opacity-70 hover:opacity-100'
                      } transition-all duration-200`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - Thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="lg:col-span-5 flex flex-col h-full lg:sticky lg:top-28 lg:self-start">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-sm uppercase tracking-widest text-luxury-accent font-medium">{product.category}</span>
                      <h1 className="heading-lg mt-2 leading-tight">{product.name}</h1>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setIsWishlisted(prev => !prev)}
                        className={`p-2.5 rounded-full transition-all ${
                          isWishlisted 
                            ? 'bg-luxury-accent/10 text-luxury-accent' 
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart size={20} className={isWishlisted ? "fill-luxury-accent" : ""} />
                      </button>
                      
                      <div className="relative">
                        <button 
                          onClick={() => setShowSharePopover(!showSharePopover)}
                          className="p-2.5 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
                          aria-label="Share product"
                        >
                          <Share2 size={20} />
                        </button>
                        <SocialSharePopover 
                          product={product} 
                          isOpen={showSharePopover} 
                          onClose={() => setShowSharePopover(false)} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mt-2 mb-6">
                    <div className="flex items-center">
                      {renderRatingStars(product.rating)}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-700">{product.description}</p>
                  
                  {/* Color Options */}
                  <div className="mt-8">
                    <h2 className="font-medium text-base text-gray-900 mb-3">Available Finishes</h2>
                    <div className="flex flex-wrap gap-3">
                      {product.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(index)}
                          className={`group relative px-4 py-2 border rounded-md transition-all ${
                            selectedColor === index 
                              ? 'border-luxury-accent bg-luxury-accent/5' 
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <span>{color}</span>
                          {selectedColor === index && (
                            <Check size={16} className="absolute top-1 right-1 text-luxury-accent" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Collapsible Sections */}
                  <div className="mt-8 space-y-0">
                    <CollapsibleSection title="Product Details" defaultOpen={true}>
                      <ul className="space-y-2 text-gray-700">
                        {product.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="h-2 w-2 rounded-full bg-luxury-accent mt-2 mr-3"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleSection>
                    
                    <CollapsibleSection title="Shipping & Returns">
                      <div className="space-y-4 text-gray-700">
                        <p>We offer white-glove delivery service for all our luxury pieces.</p>
                        <p>Delivery times vary based on your location and customization options.</p>
                        <p>Returns accepted within 14 days of delivery for items in original condition.</p>
                      </div>
                    </CollapsibleSection>
                    
                    <CollapsibleSection title="Care Instructions">
                      <div className="space-y-4 text-gray-700">
                        <p>Clean with a soft, dry cloth. Avoid harsh chemicals.</p>
                        <p>Keep away from direct sunlight to preserve the finish.</p>
                        <p>For detailed care instructions specific to your piece, please refer to the included documentation.</p>
                      </div>
                    </CollapsibleSection>
                  </div>
                </div>
                
                {/* Price and Actions */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="font-display text-xl font-medium">{product.price}</h3>
                    <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">Made to Order</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link 
                      to="/contact" 
                      className="btn-primary flex items-center justify-center transform hover:translate-y-[-2px] transition-all h-12"
                    >
                      <ShoppingBag size={18} className="mr-2" />
                      Request Pricing
                    </Link>
                    <a 
                      href={`https://wa.me/1234567890?text=I'm%20interested%20in%20the%20product%20named%20'${product.name}'%20in%20${product.colors[selectedColor]}%20finish.`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-secondary flex items-center justify-center transform hover:translate-y-[-2px] transition-all h-12"
                    >
                      <MessageSquare size={18} className="mr-2" />
                      Chat on WhatsApp
                    </a>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Need help? Call us at <a href="tel:+12345678900" className="text-luxury-accent">+1 (234) 567-8900</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Reviews Section */}
        <section className="section py-16 border-t border-gray-200 bg-luxury-muted/30">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-10">Customer Reviews</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                <div className="md:col-span-4 flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-sm">
                  <div className="text-5xl font-display font-medium">{product.rating}</div>
                  <div className="flex my-2">
                    {renderRatingStars(product.rating)}
                  </div>
                  <div className="text-sm text-gray-500">Based on {product.reviewCount} reviews</div>
                  
                  <div className="w-full mt-6 space-y-2">
                    {[5, 4, 3, 2, 1].map(star => {
                      // Calculate percentage for this star rating (mock data)
                      const percentage = star === 5 ? 65 : star === 4 ? 25 : star === 3 ? 7 : star === 2 ? 2 : 1;
                      
                      return (
                        <div key={star} className="flex items-center">
                          <span className="w-2 mr-2">{star}</span>
                          <Star size={14} className="fill-luxury-accent text-luxury-accent mr-2" />
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-luxury-accent rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-500">{percentage}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="md:col-span-8">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm animate-fade-in">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h3 className="font-medium">Margaret T.</h3>
                          <div className="flex items-center text-sm">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="fill-luxury-accent text-luxury-accent" />
                              ))}
                            </div>
                            <span className="ml-2 text-gray-600">2 months ago</span>
                          </div>
                        </div>
                        <span className="text-sm bg-luxury-accent/10 text-luxury-accent px-2 py-0.5 rounded">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        Absolutely stunning piece of furniture. The craftsmanship is exceptional and it has transformed our living space. Well worth the investment.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-sm animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h3 className="font-medium">David R.</h3>
                          <div className="flex items-center text-sm">
                            <div className="flex">
                              {[...Array(4)].map((_, i) => (
                                <Star key={i} size={14} className="fill-luxury-accent text-luxury-accent" />
                              ))}
                              <Star size={14} className="text-gray-300" />
                            </div>
                            <span className="ml-2 text-gray-600">3 months ago</span>
                          </div>
                        </div>
                        <span className="text-sm bg-luxury-accent/10 text-luxury-accent px-2 py-0.5 rounded">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        Beautiful design and excellent quality. Delivery took longer than expected, but the wait was worth it. Would recommend.
                      </p>
                    </div>
                    
                    <div className="text-center mt-8">
                      <button className="btn-secondary inline-flex items-center">
                        Read all {product.reviewCount} reviews
                        <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Products Section */}
        <section className="section py-16">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-3">You May Also Like</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              Explore other pieces that complement {product.name} perfectly
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct, index) => (
                  <div key={relatedProduct.id} className="group animate-fade-up bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <Link 
                          to={`/collection/${relatedProduct.id}`} 
                          className="text-white font-medium text-lg hover:underline"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-luxury-accent">{relatedProduct.category}</span>
                      <h3 className="text-xl font-display font-medium mt-1 group-hover:text-luxury-accent transition-colors">{relatedProduct.name}</h3>
                      <div className="flex items-center mt-2">
                        {renderRatingStars(relatedProduct.rating)}
                        <span className="ml-2 text-sm text-gray-500">({relatedProduct.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/collection" className="btn-primary inline-flex items-center">
                View All Collection <ChevronRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Recently Viewed Section (placeholder) */}
        <section className="section py-12 bg-luxury-muted/30 border-t border-gray-200">
          <div className="container-custom">
            <h2 className="heading-md text-center mb-8">Recently Viewed</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {products.slice(0, 6).map((product, index) => (
                <Link 
                  key={index} 
                  to={`/collection/${product.id}`}
                  className="group"
                >
                  <div className="aspect-square rounded-md overflow-hidden bg-white">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium mt-2 group-hover:text-luxury-accent transition-colors truncate">{product.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/1234567890?text=I'm%20interested%20in%20the%20product%20named%20'${product.name}'%20in%20${product.colors[selectedColor]}%20finish.`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-luxury text-white p-3 rounded-full shadow-lg transform hover:scale-105 transition-all z-30 animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
      
      {/* Image Zoom Modal */}
      {showZoom && (
        <ImageZoomModal 
          images={product.images}
          currentIndex={selectedImage}
          onClose={() => setShowZoom(false)} 
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
      
      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease forwards;
        }
        
        .animate-fade-up {
          animation: fade-up 0.5s ease forwards;
        }
        
        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        .scrollbar-thumb-luxury-accent::-webkit-scrollbar-thumb {
          background: var(--color-luxury-accent);
        }
      `}</style>
    </>
  );
};

export default ProductDetails; 