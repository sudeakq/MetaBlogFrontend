import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Logo Bölümü */}
      <div className="flex items-center space-x-2">
        <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Hamburger Menü (Mobil) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden block text-gray-600 focus:outline-none"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Menü Linkleri */}
      <ul
        className={`lg:flex lg:space-x-8 text-gray-600 absolute lg:static bg-white w-full lg:w-auto lg:translate-x-0 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:items-center lg:flex-row flex flex-col top-16 left-0`}
      >
        <li className="hover:text-black cursor-pointer p-4 lg:p-0">Home</li>
        <li className="hover:text-black cursor-pointer p-4 lg:p-0">Blog</li>
        <li className="hover:text-black cursor-pointer p-4 lg:p-0">Single Post</li>
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
        <button className="border rounded-full px-4 py-1 bg-gray-100 hover:bg-gray-200">☀️</button>
      </div>
    </nav>
  );
};

export default Navbar;
