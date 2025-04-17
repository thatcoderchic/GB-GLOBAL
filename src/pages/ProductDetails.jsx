import { useParams } from 'react-router-dom';

const productData = {
  'washing-machine': {
    'motor': {
      name: 'Washing Machine Motor',
      description: 'High-quality replacement motors for various washing machine brands',
      features: [
        'Compatible with multiple brands',
        'Long-lasting performance',
        'Energy efficient',
        'Easy installation',
      ],
      images: [
        'https://images.unsplash.com/photo-1621369116334-37136f8e8917?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'gear-raja': {
      name: 'Gear Raja',
      description: 'Premium quality Gear Raja for washing machines',
      features: [
        'Durable construction',
        'Precision engineered',
        'Noise reduction',
        'Extended lifespan',
      ],
      images: [
        'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'gear-xindi': {
      name: 'Gear Xindi',
      description: 'Durable Gear Xindi components for washing machines',
      features: [
        'High-grade materials',
        'Smooth operation',
        'Reduced vibration',
        'Compatible with major brands',
      ],
      images: [
        'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'timer': {
      name: 'Washing Machine Timer',
      description: 'Precise timers for all washing machine models',
      features: [
        'Accurate timing',
        'Multiple cycle options',
        'Easy to program',
        'Reliable performance',
      ],
      images: [
        'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'clutch': {
      name: 'Washing Machine Clutch',
      description: 'Reliable clutch mechanisms for washing machines',
      features: [
        'Smooth engagement',
        'Reduced wear and tear',
        'Quiet operation',
        'Extended service life',
      ],
      images: [
        'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'spin-bellow': {
      name: 'Spin Bellow',
      description: 'High-quality spin bellows for washing machines',
      features: [
        'Leak-proof design',
        'Flexible material',
        'Resistant to detergents',
        'Long-lasting durability',
      ],
      images: [
        'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'inlet-valve': {
      name: 'Inlet Valve',
      description: 'Durable inlet valves for washing machines',
      features: [
        'Precise water control',
        'Leak-free operation',
        'Compatible with standard connections',
        'Easy installation',
      ],
      images: [
        'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'drain-motor': {
      name: 'Drain Motor',
      description: 'Efficient drain motors for washing machines',
      features: [
        'Powerful drainage',
        'Quiet operation',
        'Energy efficient',
        'Resistant to blockages',
      ],
      images: [
        'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'pressure-switch': {
      name: 'Pressure Switch',
      description: 'Reliable pressure switches for washing machines',
      features: [
        'Accurate water level detection',
        'Consistent performance',
        'Safety certified',
        'Compatible with most models',
      ],
      images: [
        'https://images.unsplash.com/photo-1610557892470-55d587a6e7b4?auto=format&fit=crop&q=80&w=400',
      ],
    },
  },
  'microwave': {
    'magnatron': {
      name: 'Microwave Magnatron',
      description: 'Reliable magnatrons for microwave repair and replacement',
      features: [
        'High-performance components',
        'Durable construction',
        'Compatible with major brands',
        'Professional grade',
      ],
      images: [
        'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'transformer': {
      name: 'Microwave Transformer',
      description: 'High-quality transformers for microwave ovens',
      features: [
        'Efficient power conversion',
        'Thermal protection',
        'Long service life',
        'Universal compatibility',
      ],
      images: [
        'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'glass-tray': {
      name: 'Microwave Glass Tray',
      description: 'Replacement glass trays for various microwave models',
      features: [
        'Heat-resistant glass',
        'Precise fit',
        'Easy to clean',
        'Dishwasher safe',
      ],
      images: [
        'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'fuse': {
      name: 'Microwave Fuse',
      description: 'Safety fuses for microwave ovens',
      features: [
        'Quick response time',
        'Overload protection',
        'Easy replacement',
        'Safety certified',
      ],
      images: [
        'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=400',
      ],
    },
  },
  'car-washer': {
    'washer': {
      name: 'Car Washer',
      description: 'Complete car washer units for home and professional use',
      features: [
        'High pressure cleaning',
        'Adjustable spray patterns',
        'Durable construction',
        'Energy efficient motor',
      ],
      images: [
        'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'head': {
      name: 'Car Washer Head',
      description: 'Replacement and upgrade heads for car washers',
      features: [
        'Multiple spray patterns',
        'Durable materials',
        'Universal fitting',
        'Improved cleaning efficiency',
      ],
      images: [
        'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'pipe': {
      name: 'Car Washer Pipe',
      description: 'Durable pipes for car washer systems',
      features: [
        'High pressure resistant',
        'Flexible design',
        'UV protected',
        'Kink resistant',
      ],
      images: [
        'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=400',
      ],
    },
    'adopter': {
      name: 'Car Washer Adopter',
      description: 'Universal adopters for car washer connections',
      features: [
        'Compatible with most brands',
        'Leak-proof seal',
        'Easy installation',
        'Durable construction',
      ],
      images: [
        'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=400',
      ],
    },
  },
};

export default function ProductDetails() {
  const { category, id } = useParams();
  const product = productData[category]?.[id];

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-brand-50 p-8 rounded-xl shadow-card text-center border border-brand-100">
          <svg className="h-16 w-16 text-brand-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-neutral-800 font-display">Product not found</h2>
          <p className="mt-2 text-neutral-600">The product you're looking for doesn't exist or has been removed.</p>
          <div className="mt-6">
            <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <div>
                <Link to="/" className="text-neutral-500 hover:text-brand-600 transition-colors duration-150 ease-in-out">
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-neutral-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
                <Link to="#" className="ml-2 text-neutral-500 hover:text-brand-600 transition-colors duration-150 ease-in-out">
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-neutral-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-neutral-600 font-medium">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-elevated overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 lg:items-start">
            {/* Image gallery */}
            <div className="lg:col-span-1 lg:border-r lg:border-neutral-200">
              <div className="aspect-w-1 aspect-h-1 bg-neutral-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="p-6 lg:p-10 lg:col-span-1">
              <div className="lg:col-span-2 lg:pr-8">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-800 font-display">{product.name}</h1>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="text-base text-neutral-700 leading-relaxed">{product.description}</div>
              </div>

              <div className="mt-8">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-neutral-800 font-display">Features</h3>
                  <div className="ml-4 flex-shrink-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800">
                      Premium Quality
                    </span>
                  </div>
                </div>
                <div className="mt-4 bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-brand-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-neutral-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-neutral-200 pt-8">
                <h3 className="text-lg font-medium text-neutral-800 font-display">Additional Information</h3>
                <p className="mt-4 text-neutral-700">
                  For detailed specifications, availability, and compatibility information,
                  please contact our support team.
                </p>
                <div className="mt-6 flex space-x-4">
                  <button className="flex-1 bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition duration-150 ease-in-out font-medium shadow-sm">
                    Request Information
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 border border-neutral-300 rounded-lg text-neutral-700 bg-white hover:bg-neutral-50 transition duration-150 ease-in-out">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-800 font-display mb-6">You might also need</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-w-1 aspect-h-1 bg-neutral-100">
                  <div className="w-full h-full bg-neutral-200 animate-pulse"></div>
                </div>
                <div className="p-4">
                  <div className="h-4 bg-neutral-200 rounded animate-pulse mb-2"></div>
                  <div className="h-3 bg-neutral-100 rounded animate-pulse w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}