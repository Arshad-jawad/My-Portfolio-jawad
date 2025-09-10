import React, { useState } from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaYoutube, FaGithub, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full py-3 bg-white bg-opacity-20 backdrop-blur-md rounded-b-lg shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent opacity-90 hover:opacity-100 transition-all duration-300"
        >
          JAWAD
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 text-white items-center">
          <li>
            <a href="#hero" className="hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#tech" className="hover:text-blue-400 transition-colors">
              Tech
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop social icons */}
        <ul className="hidden md:flex items-center space-x-4 text-white">
          <li>
            <a
              href="https://www.facebook.com/modasir.jawad.3/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-80 hover:opacity-100 hover:text-red-500 transition-colors"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohammad-modasir-jawad-2678b613a/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-80 hover:opacity-100 hover:text-blue-600 transition-colors"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_modasir_jawad/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-80 hover:opacity-100 hover:text-sky-400 transition-colors"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Arshad-jawad"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-80 hover:opacity-100 hover:text-orange-400 transition-colors"
            >
              <FaGithub />
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-sm px-4 pt-2 pb-4">
          <ul className="flex flex-col space-y-2 text-white">
            <li>
              <a
                href="#hero"
                onClick={() => setOpen(false)}
                className="block py-2 px-1 hover:text-blue-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tech"
                onClick={() => setOpen(false)}
                className="block py-2 px-1 hover:text-blue-400"
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="block py-2 px-1 hover:text-blue-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block py-2 px-1 hover:text-blue-400"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center space-x-4 mt-3 text-white">
            <a
              href="https://www.facebook.com/modasir.jawad.3"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-80 hover:opacity-100 hover:text-red-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-modasir-jawad-2678b613a"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-80 hover:opacity-100 hover:text-blue-600"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_modasir_jawad"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-80 hover:opacity-100 hover:text-sky-400"
            >
              <BsInstagram />
            </a>
            <a
              href="https://github.com/Arshad-jawad"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl opacity-80 hover:opacity-100 hover:text-orange-900"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
