import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import logo from '../assets/GB_global_logo_withoutbg.png';
import { getItemImagePath } from '../utils/imageUtils';


const categories = {
  'Washing Machine': [
    {
      name: 'Motor',
      id: 'motor',
      subItems: [
        { name: 'Spin Motor', id: 'spin-motor' },
        { name: 'Wash Motor', id: 'wash-motor' },
        { name: 'Drain Motor', id: 'drain-motor' },
      ]
    },
    {
      name: 'Gear Box',
      id: 'gear-box',
      subItems: [
        { name: 'Gear Box RAJA', id: 'gear-box-raja' },
        { name: 'Gear Box Xindi', id: 'gear-box-xindi' },
      ]
    },
    { name: 'Timer', id: 'timer' },
    { name: 'Clutch', id: 'clutch' },
    { name: 'Spin Bellow', id: 'spin-bellow' },
    { name: 'Inlet Valve', id: 'inlet-valve' },
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
                      <Popover.Panel className="absolute z-10 mt-3 transform -translate-x-1/4 w-screen max-w-xs lg:max-w-md">
                        <div className="rounded-xl shadow-elevated bg-white ring-1 ring-black ring-opacity-5 overflow-visible">
                          <div className="relative grid gap-1 bg-white px-5 py-6 overflow-visible">
                            {items.map((item) => (
                              item.subItems ? (
                                <div key={item.id} className="relative group/flyout overflow-visible">
                                  <div className="flex items-center p-3 rounded-lg hover:bg-brand-50 transition duration-150 ease-in-out cursor-pointer">
                                    <div className="ml-3 flex items-center justify-between w-full">
                                      <p className="text-base font-medium text-neutral-800">
                                        {item.name}
                                      </p>
                                      <svg
                                        className="ml-2 h-4 w-4 text-neutral-400 group-hover/flyout:text-brand-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  {/* Flyout menu */}
                                  <div className="absolute left-full top-0 w-56 opacity-0 invisible group-hover/flyout:opacity-100 group-hover/flyout:visible transition-all duration-200 ease-in-out z-50 shadow-elevated">
                                    <div className="bg-white rounded-xl shadow-elevated overflow-hidden border border-neutral-100">
                                      <div className="py-2">
                                        {item.subItems.map((subItem) => (
                                          <Link
                                            key={subItem.id}
                                            to={`/product/${category.toLowerCase()}/${subItem.id}`}
                                            className="flex items-center px-4 py-2 hover:bg-brand-50 transition duration-150 ease-in-out"
                                          >
                                            {getItemImagePath(category, subItem.id) && (
                                              <div className="flex-shrink-0 h-10 w-10 rounded-md overflow-hidden">
                                                <img
                                                  src={getItemImagePath(category, subItem.id)}
                                                  alt={subItem.name}
                                                  className="h-full w-full object-cover"
                                                  onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.style.display = 'none';
                                                  }}
                                                />
                                              </div>
                                            )}
                                            <div className="ml-3">
                                              <p className="text-sm font-medium text-neutral-700">
                                                {subItem.name}
                                              </p>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={item.id}
                                  to={`/product/${category.toLowerCase()}/${item.id}`}
                                  className="flex items-center p-3 rounded-lg hover:bg-brand-50 transition duration-150 ease-in-out"
                                >
                                  {getItemImagePath(category, item.id) && (
                                    <div className="flex-shrink-0 h-10 w-10 rounded-md overflow-hidden">
                                      <img
                                        src={getItemImagePath(category, item.id)}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                        onError={(e) => {
                                          e.target.onerror = null;
                                          e.target.style.display = 'none';
                                        }}
                                      />
                                    </div>
                                  )}
                                  <div className="ml-3">
                                    <p className="text-base font-medium text-neutral-800">
                                      {item.name}
                                    </p>
                                  </div>
                                </Link>
                              )
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
                    item.subItems ? (
                      <div key={item.id}>
                        <div className="px-3 py-2 text-base font-medium text-neutral-700 flex items-center justify-between">
                          <span>{item.name}</span>
                          <ChevronDownIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
                        </div>
                        <div className="pl-6 space-y-1 mt-1 border-l-2 border-brand-100">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={`/product/${category.toLowerCase()}/${subItem.id}`}
                              className="flex items-center px-3 py-2 text-sm font-medium text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-md transition duration-150 ease-in-out"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {getItemImagePath(category, subItem.id) && (
                                <div className="flex-shrink-0 h-8 w-8 rounded-md overflow-hidden mr-2">
                                  <img
                                    src={getItemImagePath(category, subItem.id)}
                                    alt={subItem.name}
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.style.display = 'none';
                                    }}
                                  />
                                </div>
                              )}
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.id}
                        to={`/product/${category.toLowerCase()}/${item.id}`}
                        className="flex items-center px-3 py-2 text-base font-medium text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-md transition duration-150 ease-in-out"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {getItemImagePath(category, item.id) && (
                          <div className="flex-shrink-0 h-8 w-8 rounded-md overflow-hidden mr-2">
                            <img
                              src={getItemImagePath(category, item.id)}
                              alt={item.name}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                        {item.name}
                      </Link>
                    )
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