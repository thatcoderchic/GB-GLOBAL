import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import logo from '../assets/GB_global_logo_withoutbg.png';

const categories = {
  'Washing Machine': [
    { name: 'Motors', id: 'motors' },
    { name: 'Pumps', id: 'pumps' },
    { name: 'Control Boards', id: 'control-boards' },
  ],
  'Microwave': [
    { name: 'Magnetrons', id: 'magnetrons' },
    { name: 'Turntable Motors', id: 'turntable-motors' },
    { name: 'Door Switches', id: 'door-switches' },
  ],
  'Refrigeration': [
    { name: 'Compressors', id: 'compressors' },
    { name: 'Thermostats', id: 'thermostats' },
    { name: 'Fan Motors', id: 'fan-motors' },
  ],
  'Door Locks': [
    { name: 'Digital Locks', id: 'digital-locks' },
    { name: 'Mechanical Locks', id: 'mechanical-locks' },
    { name: 'Smart Locks', id: 'smart-locks' },
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
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 relative">
          {/* Logo - positioned on the left */}
          <div className="absolute left-0 flex items-center h-full">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="GB Global" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop menu - centered */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center h-full absolute left-1/2 transform -translate-x-1/2">
            {Object.entries(categories).map(([category, items]) => (
              <Popover key={category} className="relative">
                {() => (
                  <>
                    <Popover.Button className="inline-flex items-center text-gray-500 hover:text-gray-700 px-1 pt-1 text-sm font-medium">
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
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {items.map((item) => (
                              <Link
                                key={item.id}
                                to={`/product/${category.toLowerCase()}/${item.id}`}
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
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
                className="px-4 py-2 border border-r-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Mobile menu button - positioned on the right for mobile */}
          <div className="absolute right-0 flex items-center sm:hidden h-full">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="px-4 py-2">
                <div className="font-medium text-gray-900 mb-2">{category}</div>
                <div className="pl-4 space-y-1">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${category.toLowerCase()}/${item.id}`}
                      className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <form onSubmit={handleSearch} className="px-4 flex">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-r-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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