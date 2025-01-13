"use client";

import { useState } from "react";

export default function CountryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Latvia");

  const countries = ["Latvia", "Estonia", "Lithuania", "Germany", "France"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setIsOpen(false); 
  };

  return (
    <div className="relative inline-block text-left">

      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-black text-tdGrey"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-tdGrey mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2C8.13401 2 5 5.13401 5 9c0 3.866 7 13 7 13s7-9.134 7-13c0-3.866-3.134-7-7-7z"
          />
          <circle cx="12" cy="9" r="2" />
        </svg>

        <span>{selectedCountry}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ml-2 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-200`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </button>


      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => handleCountryChange(country)}
              className={`block w-full px-4 py-2 text-left hover:bg-gray-200 text-tdGrey ${
                selectedCountry === country ? "font-semibold bg-gray-100" : ""
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
