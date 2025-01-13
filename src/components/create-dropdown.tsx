"use client";

import Link from "next/link";
import { useState } from "react";

export default function CreateDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center space-x-2 px-4 py-2 bg-tdLightRed text-tdRed rounded-md hover:bg-gray-200"
      >
        <span>Create</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-tdRed ml-1 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-200`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className={`absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10 transform transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <Link href="/draw">
          <button
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Draw
          </button>
        </Link>
        <Link href="/other-option">
          <button
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Other Option
          </button>
        </Link>
      </div>
    </div>
  );
}
