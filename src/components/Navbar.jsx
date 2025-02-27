import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import logo from '../assets/gb-global-logo.svg';

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

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="GB Global" className="h-16 w-auto" />
              <div className="ml-2 flex items-start">
                <span className="text-2xl font-bold text-gray-900">GB GLOBA<span className="relative">L<sup className="absolute -top-2 text-sm">®</sup></span></span>
              </div>
            </Link>
          </div>

          <div className="hidden sm:ml-16 sm:flex sm:space-x-8">
            {Object.entries(categories).map(([category, items]) => (
              <Popover key={category} className="relative">
                {({ open }) => (
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

          <div className="flex items-center">
            <form onSubmit={handleSearch} className="flex-shrink-0">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}