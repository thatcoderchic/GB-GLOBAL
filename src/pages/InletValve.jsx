import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function InletValve() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This array contains all the image filenames from the Inlet Valve folder
    const imageFiles = [
      ' Double Inlet Valve for SS.jpeg',
      'Blue Red Double DC Inlet Valvue for LG.jpeg',
      'Grey Single Inlet Valve for SS.jpeg',
      'Inlet valve 3 coil DC suitable for LG.jpeg',
      'Inlet valve double coil DC suitable for LG.jpeg',
      'Inlet valve double suitable for LG.jpeg',
      'Inlet valve double suitable for bosch.jpeg',
      'Inlet valve single DC suitable for LG.jpeg',
      'Inlet valve single suitable for LG.jpeg',
      'Inlet valve single suitable for samsung.jpeg',
      'Inlet valve single suitable for woi.jpeg',
      'Single DC 12V Inlet Valve for LG.jpeg',
      'Single DC 220V Inlet Valve for LG.jpeg',
      'Triple DC Inlet Valve for LG.jpeg',
      'Triple DC Inlet Valve for SS.jpeg',
    ];

    // Create an array of image objects with paths and formatted names
    const formattedImages = imageFiles.map(filename => {
      // Format the name by removing the file extension and trimming spaces
      const name = filename.replace('.jpeg', '').trim();

      return {
        path: `/GBPICS/Washing Machine spare pic/Inlet Valve/${filename}`,
        name: name,
        id: filename.replace('.jpeg', '').replace(/\s+/g, '-').toLowerCase()
      };
    });

    setImages(formattedImages);
    setLoading(false);
  }, []);

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
                  Washing Machine
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-neutral-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-neutral-600 font-medium">Inlet Valve</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-brand-900 mb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-brand-800 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display text-center">
            Inlet Valve Collection
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-xl text-brand-100 sm:max-w-3xl text-center">
            High-quality Inlet Valves for washing machines
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="border-b border-neutral-200 pb-5 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 font-display">Our Collection</h2>
          <p className="mt-2 text-neutral-600">Browse our extensive range of Inlet Valve parts</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-card overflow-hidden animate-pulse">
                <div className="aspect-w-1 aspect-h-1 bg-neutral-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-neutral-100 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div key={image.id} className="group bg-white rounded-xl shadow-card overflow-hidden hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-w-1 aspect-h-1 bg-neutral-100 overflow-hidden">
                  <img
                    src={image.path}
                    alt={image.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-brand-600 transition-colors duration-150 ease-in-out">
                    {image.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Premium quality spare part
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-brand-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 font-display sm:text-4xl">Why Choose Our Inlet Valves</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
              Our inlet valves are designed for durability, efficiency, and reliable performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-card">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Precise Control</h3>
              <p className="text-neutral-600">
                Our valves provide accurate water flow control for optimal washing performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-card">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Long Lasting</h3>
              <p className="text-neutral-600">
                Built with high-quality materials to ensure extended service life and reliability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-card">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Easy Installation</h3>
              <p className="text-neutral-600">
                Designed for simple installation and maintenance with standard fittings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 font-display sm:text-4xl">Need assistance?</h2>
            <div className="mt-6 text-lg text-neutral-600 space-y-4">
              <p>
                Our team of experts is ready to help you find the perfect Inlet Valve for your washing machine.
                Contact us today for pricing, availability, and compatibility information.
              </p>
            </div>
            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors duration-150 ease-in-out">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
