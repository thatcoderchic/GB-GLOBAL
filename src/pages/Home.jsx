import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const allProducts = [
  {
    category: 'washing-machine',
    id: 'motor',
    name: 'Washing Machine Motor',
    description: 'High-quality replacement motors for various washing machine brands',
    image: 'https://images.unsplash.com/photo-1621369116334-37136f8e8917?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'washing-machine',
    id: 'gear-raja',
    name: 'Gear Raja',
    description: 'Premium quality Gear Raja for washing machines',
    image: 'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'washing-machine',
    id: 'gear-xindi',
    name: 'Gear Xindi',
    description: 'Durable Gear Xindi components for washing machines',
    image: 'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'washing-machine',
    id: 'timer',
    name: 'Washing Machine Timer',
    description: 'Precise timers for all washing machine models',
    image: 'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'washing-machine',
    id: 'clutch',
    name: 'Washing Machine Clutch',
    description: 'Reliable clutch mechanisms for washing machines',
    image: 'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'washing-machine',
    id: 'spin-bellow',
    name: 'Spin Bellow',
    description: 'High-quality spin bellows for washing machines',
    image: 'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'washing-machine',
    id: 'inlet-valve',
    name: 'Inlet Valve',
    description: 'Durable inlet valves for washing machines',
    image: 'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'washing-machine',
    id: 'drain-motor',
    name: 'Drain Motor',
    description: 'Efficient drain motors for washing machines',
    image: 'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'washing-machine',
    id: 'pressure-switch',
    name: 'Pressure Switch',
    description: 'Reliable pressure switches for washing machines',
    image: 'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'microwave',
    id: 'magnatron',
    name: 'Microwave Magnatron',
    description: 'Reliable magnatrons for microwave repair and replacement',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'microwave',
    id: 'transformer',
    name: 'Microwave Transformer',
    description: 'High-quality transformers for microwave ovens',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'microwave',
    id: 'glass-tray',
    name: 'Microwave Glass Tray',
    description: 'Replacement glass trays for various microwave models',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'microwave',
    id: 'fuse',
    name: 'Microwave Fuse',
    description: 'Safety fuses for microwave ovens',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'car-washer',
    id: 'washer',
    name: 'Car Washer',
    description: 'Complete car washer units for home and professional use',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'car-washer',
    id: 'head',
    name: 'Car Washer Head',
    description: 'Replacement and upgrade heads for car washers',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'car-washer',
    id: 'pipe',
    name: 'Car Washer Pipe',
    description: 'Durable pipes for car washer systems',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=400',
  },
  {
    category: 'car-washer',
    id: 'adopter',
    name: 'Car Washer Adopter',
    description: 'Universal adopters for car washer connections',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=400',
  },
  // Door Lock products
  {
    category: 'washing-machine',
    id: 'black-big-door-lock-lg',
    name: 'Black Big Door Lock for LG',
    description: 'Premium black door lock specifically designed for LG washing machines',
    image: '/GBPICS/Washing Machine spare pic/Door Lock/Black Big Door lock for LG.jpeg',
  },
  {
    category: 'washing-machine',
    id: 'door-lock-ifb',
    name: 'Door Lock IFB',
    description: 'High-quality door lock compatible with IFB washing machines',
    image: '/GBPICS/Washing Machine spare pic/Door Lock/Door Lock IFB.jpeg',
  },
  {
    category: 'washing-machine',
    id: 'door-lock-lg',
    name: 'Door Lock for LG',
    description: 'Reliable door lock replacement for LG washing machine models',
    image: '/GBPICS/Washing Machine spare pic/Door Lock/Door Lock for LG.jpeg',
  },
  {
    category: 'washing-machine',
    id: 'door-lock-ss',
    name: 'Door Lock for SS',
    description: 'Durable door lock designed for SS washing machines',
    image: '/GBPICS/Washing Machine spare pic/Door Lock/Door Lock for SS.jpeg',
  },
  {
    category: 'washing-machine',
    id: 'red-dori-door-lock-lg',
    name: 'Red Dori Door Lock for LG',
    description: 'Red Dori style door lock for LG washing machines',
    image: '/GBPICS/Washing Machine spare pic/Door Lock/Red Dori Door lock for LG.jpeg',
  },
  {
    category: 'washing-machine',
    id: 'white-door-lock-lg',
    name: 'White Door Lock for LG',
    description: 'White door lock replacement for LG washing machines',
    image: '/GBPICS/Washing Machine spare pic/Door Lock/White Door Lock for LG.jpeg',
  },
  {
    category: 'washing-machine',
    id: 'blue-single-dc-inlet-valve-lg',
    name: 'Blue Single DC Inlet Valve for LG',
    description: 'Blue single DC inlet valve for LG washing machines',
    image: '/GBPICS/Washing Machine spare pic/Door Lock/Blue Single DC Inlet Valve for LG.jpeg',
  },
  {
    category: 'washing-machine',
    id: 'grey-double-long-inlet-valve-lg',
    name: 'Grey Double Long Inlet Valve for LG',
    description: 'Grey double long inlet valve for LG washing machines',
    image: '/GBPICS/Washing Machine spare pic/Door Lock/Grey Double Long Inlet Valve for LG.jpeg',
  }
  // Add more products here as needed
];

export default function Home() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery]);

  const categories = [
    {
      title: 'Washing Machine Spares',
      description: 'Quality parts for all major washing machine brands including motors, gears, timers, and more',
      image: '/GBPICS/Washing Machine spare pic/Motor/Spin Motor/Motor spin 01.jpeg',
      id: 'washing-machine',
      itemCount: '50+ Products',
    },
    {
      title: 'Microwave Spares',
      description: 'Reliable components for microwave repair including magnetrons, transformers, and glass trays',
      image: '/GBPICS/Microwave spare pic/Magnetron/Magnetron 210 witol.jpeg',
      id: 'microwave',
      itemCount: '15+ Products',
    },
    {
      title: 'Car Washer Parts',
      description: 'High-quality components for car washers including guns, pipes, filters, and adopters',
      image: '/GBPICS/Car washer/Washer Gun/Washer gun.jpeg',
      id: 'car-washer',
      itemCount: '20+ Products',
    },
  ];

  // Function to trigger navbar dropdown programmatically
  const handleExploreCategory = (categoryId) => {
    // Add visual feedback
    const clickedElement = document.querySelector(`[data-category-card="${categoryId}"]`);
    if (clickedElement) {
      clickedElement.style.transform = 'scale(0.98)';
      setTimeout(() => {
        clickedElement.style.transform = '';
      }, 150);
    }

    // Scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Wait for scroll to complete, then trigger dropdown
    setTimeout(() => {
      const navbarButton = document.querySelector(`[data-category="${categoryId}"]`);
      if (navbarButton) {
        // Add a subtle highlight to the navbar
        navbarButton.style.backgroundColor = '#f0f9ff';
        navbarButton.click();

        // Remove highlight after a moment
        setTimeout(() => {
          navbarButton.style.backgroundColor = '';
        }, 2000);
      }
    }, 600);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 mb-12 lg:mb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Elements - Hidden on mobile for better performance */}
        <div className="hidden lg:block absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="hidden lg:block absolute top-40 right-20 w-32 h-32 bg-brand-400/10 rounded-full blur-2xl animate-float delay-1000"></div>
        <div className="hidden lg:block absolute bottom-20 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-float delay-500"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8 safe-top">
          {/* Main Heading */}
          <div className="text-center">
            <div className="mb-4 lg:mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-brand-600/20 text-brand-100 border border-brand-400/30 backdrop-blur-sm">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted Quality Since Years
              </span>
            </div>

            <h1 className="text-responsive-xl font-extrabold tracking-tight text-white font-display mb-4 lg:mb-6 leading-tight">
              Welcome to{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white to-brand-100 bg-clip-text text-transparent">
                  GB GLOBA
                </span>
                <span className="relative">
                  L
                  <sup className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-right-5 text-sm sm:text-xl lg:text-2xl text-brand-200">®</sup>
                </span>
              </span>
            </h1>

            <p className="mt-4 lg:mt-6 max-w-2xl mx-auto text-responsive text-brand-100 leading-relaxed">
              Your trusted source for premium quality spare parts for washing machines, microwaves, and car washers.
              <span className="block mt-2 text-sm sm:text-base lg:text-lg text-brand-200">Find exactly what you need, when you need it.</span>
            </p>

            {/* Stats */}
            <div className="mt-8 lg:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
                <div className="text-xs sm:text-sm text-brand-200">Products</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-brand-200">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                <div className="text-xs sm:text-sm text-brand-200">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 lg:mt-12 max-w-md mx-auto sm:max-w-xl flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4">
              <a
                href="#categories"
                className="group w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-sm sm:text-base font-semibold rounded-xl text-brand-700 bg-white hover:bg-brand-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out touch-target"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Explore Categories
              </a>
              <a
                href="#about"
                className="group w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-brand-400/30 text-sm sm:text-base font-semibold rounded-xl text-white bg-brand-600/20 backdrop-blur-sm hover:bg-brand-600/30 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out touch-target"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchQuery && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16 animate-fade-in-up">
          <div className="border-b border-neutral-200 pb-4 lg:pb-5 mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-800 font-display">Search Results</h2>
            <p className="mt-2 text-sm text-neutral-500">Showing results for "{searchQuery}"</p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid-responsive">
              {filteredProducts.map((product, index) => (
                <Link
                  key={index}
                  to={`/product/${product.category}/${product.id}`}
                  className="card group flex flex-col h-full"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-neutral-200 overflow-hidden rounded-t-xl">
                    <img
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 lg:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg lg:text-xl font-semibold text-neutral-800 group-hover:text-brand-600 transition-colors duration-150 ease-in-out line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm lg:text-base text-neutral-600 flex-1 line-clamp-3">{product.description}</p>
                    <div className="mt-4 flex items-center text-sm text-brand-600 font-medium">
                      <span>View details</span>
                      <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-150 ease-in-out" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 lg:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-neutral-700 font-medium">No products found matching your search.</p>
              <p className="mt-2 text-sm text-neutral-500">Try searching for a different term or browse our categories below.</p>
            </div>
          )}
        </div>
      )}

      {/* Categories Section */}
      <div id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 font-display mb-4">Browse Our Categories</h2>
          <p className="mt-3 max-w-2xl mx-auto text-base lg:text-xl text-neutral-500">Find the exact part you need for your appliance</p>
          <div className="mt-4 lg:mt-6 flex justify-center">
            <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 stagger-animation">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-card overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-elevated cursor-pointer touch-target"
              onClick={() => handleExploreCategory(category.id)}
              data-category-card={category.id}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <ImageWithFallback
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />
                {/* Product Count Badge */}
                <div className="absolute top-3 right-3 lg:top-4 lg:right-4 z-20">
                  <span className="inline-flex items-center px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs font-medium bg-brand-600 text-white shadow-lg backdrop-blur-sm">
                    {category.itemCount}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold font-display mb-2 lg:mb-3 text-neutral-800 group-hover:text-brand-600 transition-colors duration-200">
                  {category.title}
                </h3>
                <p className="text-sm lg:text-base text-neutral-600 mb-4 lg:mb-6 leading-relaxed line-clamp-3">
                  {category.description}
                </p>

                {/* Explore Button */}
                <div className="flex items-center justify-between">
                  <button className="btn-primary text-xs lg:text-sm px-4 lg:px-6 py-2 lg:py-3 group-hover:shadow-lg transform group-hover:scale-105">
                    Explore Products
                    <svg className="ml-1 lg:ml-2 -mr-1 h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Category Icon */}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors duration-200">
                    {category.id === 'washing-machine' && (
                      <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )}
                    {category.id === 'microwave' && (
                      <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    )}
                    {category.id === 'car-washer' && (
                      <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">Can't find what you're looking for?</h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Our expert team is here to help you find the exact spare part you need. Contact us for personalized assistance.
            </p>
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all duration-200">
              Contact Our Experts
              <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 font-display sm:text-4xl">About GB Global</h2>
              <div className="mt-6 text-lg text-neutral-600 space-y-4">
                <p>
                  GB Global is a leading provider of high-quality spare parts for home appliances.
                  With years of experience in the industry, we specialize in supplying genuine parts
                  for washing machines, microwaves, and car washers.
                </p>
                <p>
                  Our extensive inventory and expertise ensure that we can help you find the exact
                  part you need to keep your appliances running smoothly.
                </p>
              </div>
              <div className="mt-8">
                <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors duration-150 ease-in-out">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl shadow-card p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-md flex items-center justify-center bg-brand-100 text-brand-600 mb-4">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-800">Quality Assurance</h3>
                  <p className="mt-2 text-sm text-neutral-500">All our parts are tested and guaranteed to meet or exceed OEM specifications.</p>
                </div>
                <div className="bg-white rounded-xl shadow-card p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-md flex items-center justify-center bg-brand-100 text-brand-600 mb-4">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L12 23l-6.328-4.219A6 6 0 013 13.79V3.802a1 1 0 01.783-.976zM5 4.604v9.185a4 4 0 001.781 3.328L12 20.597l5.219-3.48A4 4 0 0019 13.79V4.604L12 3.05 5 4.604z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-800">Warranty Protection</h3>
                  <p className="mt-2 text-sm text-neutral-500">Every part comes with a warranty to ensure your satisfaction.</p>
                </div>
                <div className="bg-white rounded-xl shadow-card p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-md flex items-center justify-center bg-brand-100 text-brand-600 mb-4">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM4 10h17v2H4v-2zm0 7h17v2H4v-2zm0-3.5h13v2H4v-2zM4.5 18.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-800">Extensive Inventory</h3>
                  <p className="mt-2 text-sm text-neutral-500">We stock thousands of parts for all major appliance brands.</p>
                </div>
                <div className="bg-white rounded-xl shadow-card p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-md flex items-center justify-center bg-brand-100 text-brand-600 mb-4">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-neutral-800">Fast Shipping</h3>
                  <p className="mt-2 text-sm text-neutral-500">Quick delivery to minimize your downtime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}