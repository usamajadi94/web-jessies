'use client';
import Link from 'next/link';
// import { Link } from 'lucide-react';
import { useState } from 'react';

export default function HoverDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button */}
      <button
        type="button"
        className="text-white   font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
      >
        SHOP
        <svg
          className="w-2.5 h-2.5 ml-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 z-10 text-black  divide-y divide-gray-100 rounded-lg shadow-sm w-36 bg-white">
          <ul className="py-2 text-sm text-black ">
            <li>
              <Link
                href="checkout"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Checkout
              </Link>
            </li>
           
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover-text-[white] hover:bg-[gray]"
              >
                My Profile
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
