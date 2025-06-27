'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function HoverDropdown({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // delay the close slightly to allow time to move into the dropdown
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Button */}
      <button
        type="button"
        className={`${scrolled ? "text-black" : "text-white"} font-semibold tracking-[0.188rem] rounded-lg text-sm px-5 py-2.5 inline-flex items-center`}
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
        <div className="absolute mt-2 z-10 text-black divide-y divide-gray-100 rounded-lg shadow-sm w-36 bg-white">
          <ul className="py-2 text-sm text-black">
            <li>
              <Link
                href="/checkout"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Checkout
              </Link>
            </li>
            <li>
              <Link
                href="/myprofile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
