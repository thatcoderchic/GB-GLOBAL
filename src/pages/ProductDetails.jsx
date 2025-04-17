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
        <div className="bg-secondary-50 p-8 rounded-xl shadow-soft text-center">
          <h2 className="text-2xl font-bold text-secondary-800 font-display">Product not found</h2>
          <p className="mt-2 text-secondary-600">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start bg-white rounded-xl shadow-card p-6 lg:p-8 border border-secondary-100">
        {/* Image gallery */}
        <div className="flex flex-col-reverse">
          <div className="w-full aspect-w-1 aspect-h-1">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-center object-cover rounded-xl shadow-soft"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-secondary-800 font-display">{product.name}</h1>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <div className="text-base text-secondary-700 leading-relaxed">{product.description}</div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-secondary-800 font-display">Features</h3>
            <div className="mt-4 bg-secondary-50 p-4 rounded-lg">
              <ul className="pl-4 list-disc space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-secondary-700">{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-secondary-200 pt-8">
            <h3 className="text-lg font-medium text-secondary-800 font-display">Additional Information</h3>
            <p className="mt-4 text-secondary-700">
              For detailed specifications, availability, and compatibility information,
              please contact our support team.
            </p>
            <div className="mt-6">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition duration-150 ease-in-out font-medium">
                Request Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}