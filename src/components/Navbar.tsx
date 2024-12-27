import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaSun } from "react-icons/fa";
import { GoMoon } from "react-icons/go";
import { MdOutlineSearch } from "react-icons/md";
import { useDarkMode } from "../hooks/darkMode"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode(); 
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? "font-bold text-black dark:text-white" : "text-gray-600 dark:text-gray-300";
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 gap-10 ">
      <div className="flex justify-between items-center py-4 lg:px-[11rem] md:px-[5rem] px-4
      container mx-auto ">
        <div className="flex items-center space-x-2">
          {darkMode ? (
            <img src="/LogoLight.png" alt="Logo" className="lg:h-10 h-5 max-w-7xl" />
          ) : (
            <img src="/Logo.png" alt="Logo" className="lg:h-10 h-5 max-w-7xl" />
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden block text-gray-600 dark:text-gray-300 focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <ul
          className={`lg:flex lg:space-x-8 text-gray-600 dark:text-gray-300 absolute lg:static bg-white dark:bg-gray-900 w-full lg:w-auto lg:translate-x-0 transition-transform transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:items-center lg:flex-row flex flex-col top-16 left-0 z-40`}
        >
          <li className={`hover:text-black dark:hover:text-white cursor-pointer p-4 lg:p-0 ${isActive("/")}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`hover:text-black dark:hover:text-white cursor-pointer p-4 lg:p-0 ${isActive("/blogListing")}`}>
            <Link href="/blogListing">Blog</Link>
          </li>
          <li className={`hover:text-black dark:hover:text-white cursor-pointer p-4 lg:p-0 ${isActive("/singlePost")}`}>
            <Link href="/singlePost">Single Post</Link>
          </li>
          <li className="hover:text-black dark:hover:text-white cursor-pointer p-4 lg:p-0">Pages</li>
          <li className="hover:text-black dark:hover:text-white cursor-pointer p-4 lg:p-0">Contact</li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-300"
            />
            <span className="absolute right-2 top-2.5 text-gray-400 dark:text-gray-500">
              <MdOutlineSearch className="dark:text-gray-200" />
            </span>
          </div>

          <button
            onClick={toggleDarkMode}
            className="relative flex items-center justify-center border rounded-full px-4 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 w-16 h-10 overflow-hidden"
          >
            <span
              className={`absolute transform transition-transform duration-300 ${
                darkMode ? "translate-x-[-50%]" : "translate-x-[50%]"
              }`}
            >
              {darkMode ? <GoMoon /> : <FaSun />}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
