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
    <nav className="bg-white shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {Object.entries(categories).map(([category, items]) => (
              <Popover key={category} className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition duration-200 ease-in-out ${open ? 'text-brand-700 bg-brand-50' : 'text-neutral-600 hover:text-brand-600 hover:bg-brand-50'}`}
                    >
                      <span>{category}</span>
                      <ChevronDownIcon
                        className={`ml-2 h-5 w-5 transition duration-150 ease-in-out ${open ? 'text-brand-600 rotate-180' : 'text-neutral-400 group-hover:text-brand-500'}`}
                        aria-hidden="true"
                      />
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
                      <Popover.Panel className="absolute z-10 mt-3 transform -translate-x-1/4 w-screen max-w-xs">
                        <div className="rounded-xl shadow-elevated bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-1 bg-white px-5 py-6">
                            {items.map((item) => (
                              <Link
                                key={item.id}
                                to={`/product/${category.toLowerCase()}/${item.id}`}
                                className="flex items-center p-3 rounded-lg hover:bg-brand-50 transition duration-150 ease-in-out"
                              >
                                <div className="ml-3">
                                  <p className="text-base font-medium text-neutral-800">
                                    {item.name}
                                  </p>
                                </div>
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

          {/* Search form */}
          <div className="hidden md:flex md:items-center">
            <form onSubmit={handleSearch} className="flex">
              <div className="relative rounded-md shadow-sm">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-4 pr-10 py-2 border border-neutral-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm transition duration-150 ease-in-out"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
                </div>
              </div>
              <button
                type="submit"
                className="ml-px inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition duration-150 ease-in-out"
              >
                Search
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 transition duration-150 ease-in-out"
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
      <Transition
        show={mobileMenuOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden bg-white shadow-elevated rounded-b-xl">
          <div className="pt-2 pb-3 space-y-1 divide-y divide-neutral-200">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="px-4 py-3">
                <div className="font-medium text-brand-700 mb-2 font-display">{category}</div>
                <div className="pl-4 space-y-1">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${category.toLowerCase()}/${item.id}`}
                      className="block px-3 py-2 text-base font-medium text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-md transition duration-150 ease-in-out"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 pb-5 border-t border-neutral-200">
            <form onSubmit={handleSearch} className="px-4 flex">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-r-0 border-neutral-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition duration-150 ease-in-out"
              />
              <button
                type="submit"
                className="bg-brand-600 text-white px-4 py-2 rounded-r-lg hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 transition duration-150 ease-in-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </Transition>
    </nav>
  );
}