"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center lg:gap-y-2 gap-y-4 gap-x-4 w-full max-w-screen-xl mx-auto">
        
        <h1 className="text-3xl font-bold uppercase">Mubeen's <span className="text-4xl font-serif text-blue-500 items-center">Chatbot</span></h1>

        {/* Menu Button for Large Devices */}
        <div className="hidden lg:flex ml-auto space-x-6 items-center">
          <Link
            href="/"
            className="hover:text-[#007bff] text-[#007bff] font-bold text-[15px]"
          >
            Home
          </Link>
          <Link
            href="/trychatbot"
            className="hover:text-white text-gray-600 font-bold text-[15px] bg-blue-400 px-3 py-1 rounded-lg"
          >
            Try Chatbot
          </Link>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden ml-auto rounded-full bg-white w-9 h-9 flex items-center justify-center border"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14M3 10h14M3 15h14"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-4`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>
          </button>

          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                href="/"
                className="hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]"
                onClick={toggleMenu} // Close the menu when clicked
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]"
                onClick={toggleMenu} // Close the menu when clicked
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/trychatbot"
                className="hover:text-white text-gray-600 block font-bold text-[15px] bg-blue-400 px-3 py-1 rounded-lg"
                onClick={toggleMenu} // Close the menu when clicked
              >
                Try Chatbot
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
