import Link from "next/link";
import CreateDropdown from "./create-dropdown";
import CountryDropdown from "./countryDropdown";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <CountryDropdown />

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md pl-4 pr-4 py-2 focus:outline-none focus:border-red-600 placeholder:pl-6"
          />
          <div className="absolute inset-y-0 left-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm6-2l4 4"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/other">
            <button className="inline-flex items-center px-2 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
              </svg>
            </button>
          </Link>

          <CreateDropdown />

          <Link href="/pricing">
            <button className="inline-flex items-center space-x-2 px-4 py-2 bg-tdRed text-white rounded-md hover:bg-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 7H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM3 9h18v10H3V9zm16 4h-3v2h3v-2zM5 11h8v2H5v-2z" />
              </svg>
              Pricing
            </button>
          </Link>

          <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer"></div>
        </div>
      </div>
    </header>
  );
}
