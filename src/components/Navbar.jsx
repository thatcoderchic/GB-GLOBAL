import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import logo from '../assets/GB_global_logo_withoutbg.png';

const categories = {
  'Washing Machine': [
    { name: 'Motor', id: 'motor' },
    { name: 'Gear Raja', id: 'gear-raja' },
    { name: 'Gear Xindi', id: 'gear-xindi' },
    { name: 'Timer', id: 'timer' },
    { name: 'Clutch', id: 'clutch' },
    { name: 'Spin Bellow', id: 'spin-bellow' },
    { name: 'Inlet Valve', id: 'inlet-valve' },
    { name: 'Drain Motor', id: 'drain-motor' },
    { name: 'Pressure Switch', id: 'pressure-switch' },
  ],
  'Microwave': [
    { name: 'Magnatron', id: 'magnatron' },
    { name: 'Transformer', id: 'transformer' },
    { name: 'Glass Tray', id: 'glass-tray' },
    { name: 'Fuse', id: 'fuse' },
  ],
  'Car Washer': [
    { name: 'Washer', id: 'washer' },
    { name: 'Head', id: 'head' },
    { name: 'Pipe', id: 'pipe' },
    { name: 'Adopter', id: 'adopter' },
  ],
};

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${encodeURIComponent(searchQuery)}`);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 relative">
          {/* Logo - positioned on the left */}
          <div className="absolute left-0 flex items-center h-full pl-2">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="GB Global" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop menu - centered */}
          <div className="hidden sm:flex sm:space-x-10 sm:items-center h-full absolute left-1/2 transform -translate-x-1/2">
            {Object.entries(categories).map(([category, items]) => (
              <Popover key={category} className="relative">
                {() => (
                  <>
                    <Popover.Button className="inline-flex items-center text-secondary-600 hover:text-primary-600 px-1 pt-1 text-sm font-medium transition duration-150 ease-in-out">
                      {category}
                      <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-xs px-2 sm:px-0">
                        <div className="rounded-lg shadow-card ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-6 sm:p-8">
                            {items.map((item) => (
                              <Link
                                key={item.id}
                                to={`/product/${category.toLowerCase()}/${item.id}`}
                                className="-m-3 p-3 block rounded-md hover:bg-primary-50 transition duration-150 ease-in-out"
                              >
                                <p className="text-base font-medium text-secondary-800">
                                  {item.name}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ))}
          </div>

          {/* Search form - positioned on the right */}
          <div className="hidden sm:flex items-center absolute right-0 h-full">
            <form onSubmit={handleSearch} className="flex-shrink-0 flex">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-r-0 border-secondary-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150 ease-in-out"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-4 py-2 rounded-r-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150 ease-in-out"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Mobile menu button - positioned on the right for mobile */}
          <div className="absolute right-0 flex items-center sm:hidden h-full">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition duration-150 ease-in-out"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="px-4 py-2">
                <div className="font-medium text-secondary-800 mb-2 font-display">{category}</div>
                <div className="pl-4 space-y-1">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${category.toLowerCase()}/${item.id}`}
                      className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition duration-150 ease-in-out"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-secondary-200">
            <form onSubmit={handleSearch} className="px-4 flex">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-r-0 border-secondary-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150 ease-in-out"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-4 py-2 rounded-r-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-150 ease-in-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}