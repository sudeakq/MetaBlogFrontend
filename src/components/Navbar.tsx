import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter to get the current path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Access the router object

  // Function to check if the current route matches the link
  const isActive = (path: string) => {
    return router.pathname === path ? "font-bold text-black" : "text-gray-600";
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex justify-between items-center py-4 px-[11rem] container mx-auto">
        <div className="flex items-center space-x-2">
          <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Menü */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden block text-gray-600 focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Menü */}
        <ul
          className={`lg:flex lg:space-x-8 text-gray-600 absolute lg:static bg-white w-full lg:w-auto lg:translate-x-0 transition-transform transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:items-center lg:flex-row flex flex-col top-16 left-0 z-40`}
        >
          <li className={`hover:text-black cursor-pointer p-4 lg:p-0 ${isActive("/")}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`hover:text-black cursor-pointer p-4 lg:p-0 ${isActive("/blogListing")}`}>
            <Link href="/blogListing">Blog</Link>
          </li>
          <li className={`hover:text-black cursor-pointer p-4 lg:p-0 ${isActive("/singlePost")}`}>
            <Link href="/singlePost">Single Post</Link>
          </li>
          <li className="hover:text-black cursor-pointer p-4 lg:p-0">Pages</li>
          <li className="hover:text-black cursor-pointer p-4 lg:p-0">Contact</li>
        </ul>

        {/* Arama ve Tema Butonu */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute right-2 top-1.5 text-gray-400">🔍</span>
          </div>
          <button className="border rounded-full px-4 py-1 bg-gray-100 hover:bg-gray-200">
            ☀️
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
