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
    id: 'magnetrons',
    name: 'Microwave Magnetrons',
    description: 'Reliable magnetrons for microwave repair and replacement',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
  },
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
      title: 'Refrigeration Spares',
      description: 'Essential parts for cooling systems',
      image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=400',
    },
    {
      title: 'Door Locks',
      description: 'Security solutions for all applications',
      image: 'https://images.unsplash.com/photo-1516162759129-aa35215a3936?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to GB Global<sup className="text-xl">®</sup>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Your trusted source for quality spare parts
        </p>
      </div>

      {/* Search Results */}
      {searchQuery && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Results</h2>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <Link
                  key={index}
                  to={`/product/${product.category}/${product.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    className="h-48 w-full object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="mt-2 text-gray-600">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No products found matching your search.</p>
          )}
        </div>
      )}

      {/* About Section */}
      <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          GB Global is a leading provider of high-quality spare parts for home appliances.
          With years of experience in the industry, we specialize in supplying genuine parts
          for washing machines, microwaves, refrigeration units, and security solutions.
        </p>
        <p className="text-lg text-gray-600">
          Our extensive inventory and expertise ensure that we can help you find the exact
          part you need to keep your appliances running smoothly.
        </p>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src={category.image}
              alt={category.title}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              <p className="mt-2 text-gray-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}