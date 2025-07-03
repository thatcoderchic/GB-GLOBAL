import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createImageObject } from '../utils/imageUtils';

export default function DoorLock() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failedImages, setFailedImages] = useState(new Set());

  useEffect(() => {
    // This array contains all the image filenames from the Door Lock folder
    const imageFiles = [
      'Black Big Door lock for LG.jpeg',
      'Blue Single DC Inlet Valve for LG.jpeg',
      'Door Lock IFB.jpeg',
      'Door Lock for LG.jpeg',
      'Door Lock for SS.jpeg',
      'Door_Lock for LG.jpeg',
      'Door_Lock_for_LG.jpeg',
      'Grey Double Long Inlet Valve for LG.jpeg',
      'Red Dori Door lock for LG.jpeg',
      'White Door Lock for LG.jpeg',
    ];

    // Create an array of image objects with paths and formatted names
    const basePath = '/GBPICS/Washing Machine spare pic/Door Lock';
    const formattedImages = imageFiles.map(filename => {
      const imageObj = createImageObject(basePath, filename);
      // Apply custom formatting for door lock names
      imageObj.name = imageObj.name.replace(/_/g, ' '); // Replace underscores with spaces
      return imageObj;
    });

    setImages(formattedImages);
    setLoading(false);
  }, []);

  const handleImageError = (imageId) => {
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
                <span className="ml-2 text-neutral-600 font-medium">Door Lock</span>
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
            Door Lock Collection
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-xl text-brand-100 sm:max-w-3xl text-center">
            Premium quality Door Lock parts for washing machines
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="border-b border-neutral-200 pb-5 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 font-display">Our Collection</h2>
          <p className="mt-2 text-neutral-600">Browse our extensive range of Door Lock parts</p>
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
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      onError={() => handleImageError(image.id)}
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

      {/* Contact Section */}
      <div className="bg-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 font-display sm:text-4xl">Need assistance?</h2>
              <div className="mt-6 text-lg text-neutral-600 space-y-4">
                <p>
                  Our team of experts is ready to help you find the perfect Door Lock part for your washing machine.
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
    </div>
  );
}
