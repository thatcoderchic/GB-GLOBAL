import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createImageObject } from '../utils/imageUtils';

export default function Timer() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failedImages, setFailedImages] = useState(new Set());

  useEffect(() => {
    // This array contains all the image filenames from the Timer folder
    const imageFiles = [
      ' LG 10 min.jpeg',
      ' haier 35 min 8 wire.jpeg',
      ' haier 4 pin 35 min.jpeg',
      ' onida 6084 35 min 7 wire.jpeg',
      ' samsung 35 min 4 wire.jpeg',
      ' vcon 35 min 4 wire 6049.jpeg',
      '6009 LG 15 min.jpeg',
      'Drain selector suitable for EKL.jpeg',
      'Drain selector suitable for onida .jpeg',
      'GOD 35 min 6 wire.jpeg',
      'LG 41.5 min.jpeg',
      'LG 5 min.jpeg',
      'SS 15 min.jpeg',
      'SS 35 min 4 wire 6075.jpeg',
      'Samsung 15 min 7 wire.jpeg',
      'Samsung 42 min.jpeg',
      'Timer double LG.jpeg',
      'Timer suitable for EKL 5 min.jpeg',
      'god 35 min 7 wire.jpeg',
      'haier 4 pin 15 min.jpeg',
      'timer_LG.jpeg',
      'vcon 5 min.jpeg',
      'vcon 6005.jpeg',
      'vcon 6072.jpeg',
      'vcon 6080.jpeg',
      'w:pool 35 min 8 wire.jpeg',
      'w:pool 35 min.jpeg',
      'w:pool 5 min.jpeg',
      'w:pool 6067.jpeg',
    ];

    // Create an array of image objects with paths and formatted names
    const basePath = '/GBPICS/Washing Machine spare pic/Timer';
    const formattedImages = imageFiles.map(filename =>
      createImageObject(basePath, filename)
    );

    setImages(formattedImages);
    setLoading(false);
  }, []);

  const handleImageError = (imageId, imageObj) => {
    console.log(`Image failed to load: ${imageId}`, imageObj);

    // Try alternative path first
    const img = document.querySelector(`img[data-image-id="${imageId}"]`);
    if (img && imageObj.alternativePath && !img.src.includes('/gbpics-test/')) {
      console.log(`Trying alternative path for ${imageId}:`, imageObj.alternativePath);
      img.src = imageObj.alternativePath;
      return;
    }

    console.log(`Both paths failed for ${imageId}, marking as failed`);
    setFailedImages(prev => new Set([...prev, imageId]));
  };

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
                <span className="ml-2 text-neutral-600 font-medium">Timer</span>
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
            Timer Collection
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-xl text-brand-100 sm:max-w-3xl text-center">
            High-quality Timers for washing machines
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="border-b border-neutral-200 pb-5 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 font-display">Our Collection</h2>
          <p className="mt-2 text-neutral-600">Browse our extensive range of Timer parts</p>
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
                  {failedImages.has(image.id) ? (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                      <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="mt-2 text-sm text-neutral-500">Image not available</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={image.path}
                      alt={image.name}
                      data-image-id={image.id}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      onError={() => handleImageError(image.id, image)}
                    />
                  )}
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
            <h2 className="text-3xl font-bold text-neutral-800 font-display sm:text-4xl">Why Choose Our Timers</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
              Our timers are designed for durability, efficiency, and reliable performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-card">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Precise Timing</h3>
              <p className="text-neutral-600">
                Our timers provide accurate timing control for optimal washing cycles.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Easy Installation</h3>
              <p className="text-neutral-600">
                Designed for simple installation and maintenance with standard connections.
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
                Our team of experts is ready to help you find the perfect Timer for your washing machine.
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
