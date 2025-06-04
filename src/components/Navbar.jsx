import { Fragment, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import logo from '../assets/GB_global_logo_withoutbg.png';



const categories = {
  'Washing Machine': [
    {
      name: 'Motor',
      id: 'motor',
      subItems: [
        { name: 'Spin Motor', id: 'spin-motor', customLink: '/spin-motor' },
        { name: 'Wash Motor', id: 'wash-motor', customLink: '/wash-motor' },
      ]
    },
    {
      name: 'Gear Box',
      id: 'gear-box',
      subItems: [
        { name: 'Gear Box RAJA', id: 'gear-box-raja', customLink: '/gearbox-raja' },
        { name: 'Gear Box Xindi', id: 'gear-box-xindi' },
      ]
    },
    { name: 'Door Lock', id: 'door-lock', customLink: '/door-lock' },
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
    {
      name: 'Washer',
      id: 'washer',
      subItems: [
        { name: "Car washer 2701", id: "car-washer-2701", image: "/GBPICS/Car washer/Washer/Car washer 2701.jpeg" },
        // Add more washer images as needed
      ]
    },
    {
      name: 'Adopter',
      id: 'adopter',
      subItems: [
        { name: "Washer's clear adopter", id: "clear-adopter", image: "/GBPICS/Car washer/Adopter/Washer's clear adopter.jpeg" },
        { name: "Washer's quick adopter", id: "quick-adopter", image: "/GBPICS/Car washer/Adopter/Washer's quick adopter.jpeg" },
      ]
    },
    {
      name: 'Pipe',
      id: 'pipe',
      subItems: [
        { name: "Washer's pipe 05 mtr", id: "pipe-05mtr", image: "/GBPICS/Car washer/Pipe/Washer's pipe 05 mtr.jpeg" },
        { name: "Washer's pipe 08 mtr", id: "pipe-08mtr", image: "/GBPICS/Car washer/Pipe/Washer's pipe 08 mtr.jpeg" },
        { name: "Washer's pipe black heavy 07 mtr", id: "pipe-black-heavy-07mtr", image: "/GBPICS/Car washer/Pipe/Washer's pipe black heavy 07 mtr.jpeg" },
        { name: "Washer's pipe normal 05 mtr", id: "pipe-normal-05mtr", image: "/GBPICS/Car washer/Pipe/Washer's pipe normal 05 mtr.jpeg" },
        { name: "Washer's pipe small hole", id: "pipe-small-hole", image: "/GBPICS/Car washer/Pipe/Washer's pipe small hole.jpeg" },
      ]
    },
    // Add other folders like Washer Filter, Washer Gun, Washer Switch as needed
  ],
  'Washing Machine Spare': [
    {
      name: 'Drain Motor',
      id: 'drain-motor',
      subItems: [
        { name: 'Drain motor black suitable for Samsung', id: 'drain-motor-black-samsung', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor black suitable for Samsung.jpeg' },
        { name: 'Drain motor suitable for GOD', id: 'drain-motor-god', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor suitable for GOD.jpeg' },
        { name: 'Drain motor suitable for IFB', id: 'drain-motor-ifb', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor suitable for IFB.jpeg' },
        { name: 'Drain motor suitable for LG', id: 'drain-motor-lg', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor suitable for LG.jpeg' },
        { name: 'Drain motor suitable for vcon', id: 'drain-motor-vcon', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor suitable for vcon.jpeg' },
        { name: 'Drain motor suitable for w:pool', id: 'drain-motor-wpool', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor suitable for w:pool.jpeg' },
        { name: 'Drain motor white suitable for Samsung', id: 'drain-motor-white-samsung', image: '/GBPICS/Washing Machine spare pic/Drain Motor/Drain motor white suitable for Samsung.jpeg' },
      ]
    }
  ],
};

// Search suggestions data
const searchSuggestions = [
  // Door Lock products
  { name: 'Black Big Door Lock for LG', category: 'washing-machine', id: 'black-big-door-lock-lg' },
  { name: 'Door Lock IFB', category: 'washing-machine', id: 'door-lock-ifb' },
  { name: 'Door Lock for LG', category: 'washing-machine', id: 'door-lock-lg' },
  { name: 'Door Lock for SS', category: 'washing-machine', id: 'door-lock-ss' },
  { name: 'Red Dori Door Lock for LG', category: 'washing-machine', id: 'red-dori-door-lock-lg' },
  { name: 'White Door Lock for LG', category: 'washing-machine', id: 'white-door-lock-lg' },
  { name: 'Blue Single DC Inlet Valve for LG', category: 'washing-machine', id: 'blue-single-dc-inlet-valve-lg' },
  { name: 'Grey Double Long Inlet Valve for LG', category: 'washing-machine', id: 'grey-double-long-inlet-valve-lg' },
  // Motor products
  { name: 'Washing Machine Motor', category: 'washing-machine', id: 'motor' },
  { name: 'Spin Motor', category: 'washing-machine', id: 'spin-motor' },
  { name: 'Wash Motor', category: 'washing-machine', id: 'wash-motor' },
  // Drain Motor images
  { name: 'Drain motor black suitable for Samsung', category: 'washing-machine-spare', id: 'drain-motor-black-samsung' },
  { name: 'Drain motor suitable for GOD', category: 'washing-machine-spare', id: 'drain-motor-god' },
  { name: 'Drain motor suitable for IFB', category: 'washing-machine-spare', id: 'drain-motor-ifb' },
  { name: 'Drain motor suitable for LG', category: 'washing-machine-spare', id: 'drain-motor-lg' },
  { name: 'Drain motor suitable for vcon', category: 'washing-machine-spare', id: 'drain-motor-vcon' },
  { name: 'Drain motor suitable for w:pool', category: 'washing-machine-spare', id: 'drain-motor-wpool' },
  { name: 'Drain motor white suitable for Samsung', category: 'washing-machine-spare', id: 'drain-motor-white-samsung' },
  // Gear products
  { name: 'Gear Raja', category: 'washing-machine', id: 'gear-raja' },
  { name: 'Gear Xindi', category: 'washing-machine', id: 'gear-xindi' },
  { name: 'Gear Box RAJA', category: 'washing-machine', id: 'gear-box-raja' },
  { name: 'Gear Box Xindi', category: 'washing-machine', id: 'gear-box-xindi' },
  // Other washing machine parts
  { name: 'Timer', category: 'washing-machine', id: 'timer' },
  { name: 'Clutch', category: 'washing-machine', id: 'clutch' },
  { name: 'Spin Bellow', category: 'washing-machine', id: 'spin-bellow' },
  { name: 'Inlet Valve', category: 'washing-machine', id: 'inlet-valve' },
  { name: 'Pressure Switch', category: 'washing-machine', id: 'pressure-switch' },
  // Microwave parts
  { name: 'Microwave Magnatron', category: 'microwave', id: 'magnatron' },
  { name: 'Microwave Transformer', category: 'microwave', id: 'transformer' },
  { name: 'Microwave Glass Tray', category: 'microwave', id: 'glass-tray' },
  { name: 'Microwave Fuse', category: 'microwave', id: 'fuse' },
  // Car washer parts
  { name: 'Car Washer', category: 'car-washer', id: 'washer' },
  { name: 'Car Washer Head', category: 'car-washer', id: 'head' },
  { name: 'Car Washer Pipe', category: 'car-washer', id: 'pipe' },
  { name: 'Car Washer Adopter', category: 'car-washer', id: 'adopter' },
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = searchSuggestions.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5); // Show max 5 suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setShowSuggestions(false);
    navigate(`/?search=${encodeURIComponent(suggestion.name)}`);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
                                            to={subItem.customLink || `/product/${category.toLowerCase()}/${subItem.id}`}
                                            className="flex items-center px-4 py-2 hover:bg-brand-50 transition duration-150 ease-in-out"
                                          >
                                            {subItem.image && (
                                              <img
                                                src={subItem.image}
                                                alt={subItem.name}
                                                className="h-8 w-8 object-cover rounded mr-3 border"
                                                style={{ minWidth: 32 }}
                                              />
                                            )}
                                            <div>
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
                                  to={item.customLink || `/product/${category.toLowerCase()}/${item.id}`}
                                  className="flex items-center p-3 rounded-lg hover:bg-brand-50 transition duration-150 ease-in-out"
                                >

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
            <form onSubmit={handleSearch} className="flex relative" ref={searchRef}>
              <div className="relative rounded-md shadow-sm">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                  className="block w-full pl-4 pr-10 py-2 border border-neutral-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm transition duration-150 ease-in-out"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
                </div>

                {/* Search Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-2 hover:bg-brand-50 focus:bg-brand-50 focus:outline-none transition duration-150 ease-in-out border-b border-neutral-100 last:border-b-0"
                      >
                        <div className="text-sm font-medium text-neutral-800">{suggestion.name}</div>
                        <div className="text-xs text-neutral-500 capitalize">{suggestion.category.replace('-', ' ')}</div>
                      </button>
                    ))}
                  </div>
                )}
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
                              to={subItem.customLink || `/product/${category.toLowerCase()}/${subItem.id}`}
                              className="flex items-center px-3 py-2 text-sm font-medium text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-md transition duration-150 ease-in-out"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.image && (
                                <img
                                  src={subItem.image}
                                  alt={subItem.name}
                                  className="h-6 w-6 object-cover rounded mr-2 border inline-block"
                                  style={{ minWidth: 24 }}
                                />
                              )}
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.id}
                        to={item.customLink || `/product/${category.toLowerCase()}/${item.id}`}
                        className="flex items-center px-3 py-2 text-base font-medium text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-md transition duration-150 ease-in-out"
                        onClick={() => setMobileMenuOpen(false)}
                      >

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
                onChange={handleSearchChange}
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