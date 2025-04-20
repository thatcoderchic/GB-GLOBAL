import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GearBoxRaja() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This array contains all the image filenames from the Gearbox-RAJA folder
    const imageFiles = [
      'gearbox01raja.jpeg',
      'gearbox02raja.jpeg',
      'gearbox07raja.jpeg',
      'gearbox08raja.jpeg',
      'gearbox09raja.jpeg',
      'gearbox10raja.jpeg',
      'gearbox11raja.jpeg',
      'gearbox12raja.jpeg',
      'gearbox13nraja.jpeg',
      'gearbox13raja.jpeg',
      'gearbox14raja.jpeg',
      'gearbox16raja.jpeg',
      'gearbox17raja.jpeg',
      'gearbox18raja.jpeg',
      'gearbox21raja.jpeg',
      'gearbox22nraja.jpeg',
      'gearbox22raja.jpeg',
      'gearbox23raja.jpeg',
      'gearbox25raja.jpeg',
      'gearbox27raja.jpeg',
      'gearbox28raja.jpeg',
      'gearbox29raja.jpeg',
      'gearbox31raja.jpeg',
      'gearbox32raja.jpeg',
      'gearbox33raja.jpeg',
      'gearbox34raja.jpeg',
      'gearbox35raja.jpeg',
      'gearbox36raja.jpeg',
      'gearbox41raja.jpeg',
    ];

    // Create an array of image objects with paths and formatted names
    const formattedImages = imageFiles.map(filename => {
      // Format the name by removing the file extension and formatting it
      const name = filename
        .replace('.jpeg', '')
        .replace(/([0-9]+)([a-z]+)/, '$1 $2') // Add space between numbers and letters
        .split(/(?=[A-Z])/).join(' ') // Add space before capital letters
        .replace(/\bn\b/i, '') // Remove standalone 'n'
        .toUpperCase(); // Convert to uppercase

      return {
        path: `/images/gearbox-raja/${filename}`,
        name: name,
        id: filename.replace('.jpeg', '')
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
                <span className="ml-2 text-neutral-600 font-medium">Gear Box RAJA</span>
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
            Gear Box RAJA Collection
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-xl text-brand-100 sm:max-w-3xl text-center">
            Premium quality Gear Box RAJA parts for washing machines
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="border-b border-neutral-200 pb-5 mb-8">
          <h2 className="text-3xl font-bold text-neutral-800 font-display">Our Collection</h2>
          <p className="mt-2 text-neutral-600">Browse our extensive range of Gear Box RAJA parts</p>
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
                  <div className="mt-4 flex items-center text-sm text-brand-600 font-medium">
                    <span>Request Information</span>
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-150 ease-in-out" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
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
                  Our team of experts is ready to help you find the perfect Gear Box RAJA part for your washing machine.
                  Contact us today for pricing, availability, and compatibility information.
                </p>
              </div>
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors duration-150 ease-in-out">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-xl shadow-elevated p-8">
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Request Information</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="block w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition duration-150 ease-in-out"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition duration-150 ease-in-out"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition duration-150 ease-in-out"
                      placeholder="Tell us what you need"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors duration-150 ease-in-out"
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
