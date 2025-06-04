import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

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
      description: 'Quality parts for all major washing machine brands',
      image: 'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Microwave Spares',
      description: 'Reliable components for microwave repair',
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Car Washer Parts',
      description: 'High-quality components for car washers',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-brand-900 mb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-brand-800 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display text-center">
            Welcome to GB GLOBA<span className="relative inline-block">L<sup className="absolute -top-3 -right-3 sm:-right-4 lg:-right-5 text-xl sm:text-2xl text-white">®</sup></span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-xl text-brand-100 sm:max-w-3xl text-center">
            Your trusted source for quality spare parts
          </p>
          <div className="mt-10 max-w-md mx-auto sm:max-w-xl sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <a href="#categories" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-700 bg-white hover:bg-brand-50 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out">
                Explore Categories
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchQuery && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 animate-slide-up">
          <div className="border-b border-neutral-200 pb-5 mb-6">
            <h2 className="text-3xl font-bold text-neutral-800 font-display">Search Results</h2>
            <p className="mt-2 text-sm text-neutral-500">Showing results for "{searchQuery}"</p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Link
                  key={index}
                  to={`/product/${product.category}/${product.id}`}
                  className="group bg-white rounded-xl shadow-card overflow-hidden hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-neutral-200 overflow-hidden">
                    <img
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-neutral-800 group-hover:text-brand-600 transition-colors duration-150 ease-in-out">{product.name}</h3>
                    <p className="mt-2 text-neutral-600 flex-1">{product.description}</p>
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
            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 text-center">
              <p className="text-neutral-600">No products found matching your search.</p>
              <p className="mt-2 text-sm text-neutral-500">Try searching for a different term or browse our categories below.</p>
            </div>
          )}
        </div>
      )}

      {/* Categories Section */}
      <div id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 font-display sm:text-4xl">Browse Our Categories</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-neutral-500">Find the exact part you need for your appliance</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-card overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-elevated">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                className="h-80 w-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                src={category.image}
                alt={category.title}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h3 className="text-2xl font-bold font-display mb-2">{category.title}</h3>
                <p className="text-white/90 mb-4">{category.description}</p>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors duration-150 ease-in-out">
                  Explore
                  <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
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