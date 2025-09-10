import React, { useState } from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaYoutube, FaGithub, FaFacebook } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full py-3 bg-white rounded-b-lg shadow-md bg-opacity-20 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-6xl px-4 mx-auto">
        <a
          href="#home"
          className="text-xl font-bold text-transparent transition-all duration-300 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text opacity-90 hover:opacity-100"
        >
          JAWAD
        </a>

        {/* Desktop links */}
        <ul className="items-center hidden space-x-6 text-white md:flex">
          <li>
            <a href="#hero" className="transition-colors hover:text-orange-400">
              <span className="text-orange-400">01.</span> Home
            </a>
          </li>
          <li>
            <a href="#tech" className="transition-colors hover:text-orange-400">
              <span className="text-orange-400">02.</span> Tech
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition-colors hover:text-orange-400"
            >
              <span className="text-orange-400">03.</span> Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-colors hover:text-orange-400"
            >
              <span className="text-orange-400">04.</span> Contact
            </a>
          </li>

        </ul>


        <ul className="items-center hidden space-x-4 text-white md:flex">
          <li>
            <a
              href="https://www.facebook.com/modasir.jawad.3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-colors cursor-pointer opacity-80 hover:opacity-100 hover:text-red-500"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohammad-modasir-jawad-2678b613a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-colors cursor-pointer opacity-80 hover:opacity-100 hover:text-blue-600"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_modasir_jawad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-colors cursor-pointer opacity-80 hover:opacity-100 hover:text-sky-400"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Arshad-jawad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-colors cursor-pointer opacity-80 hover:opacity-100 hover:text-orange-400"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl transition-colors cursor-pointer opacity-80 hover:opacity-100 hover:text-orange-500"
            >
              <IoDocumentText className="mr-1" /> Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
                className="w-6 h-6"
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
        <div className="px-4 pt-2 pb-4 bg-white md:hidden bg-opacity-10 backdrop-blur-sm">
          <ul className="flex flex-col space-y-2 text-white">
            <li>
              <a
                href="#hero"
                onClick={() => setOpen(false)}
                className="block px-1 py-2 hover:text-blue-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tech"
                onClick={() => setOpen(false)}
                className="block px-1 py-2 hover:text-blue-400"
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="block px-1 py-2 hover:text-blue-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block px-1 py-2 hover:text-blue-400"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center mt-3 space-x-4 text-white">
            <a
              href="https://www.facebook.com/modasir.jawad.3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl cursor-pointer opacity-80 hover:opacity-100 hover:text-red-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-modasir-jawad-2678b613a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl cursor-pointer opacity-80 hover:opacity-100 hover:text-blue-600"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_modasir_jawad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl cursor-pointer opacity-80 hover:opacity-100 hover:text-sky-400"
            >
              <BsInstagram />
            </a>
            <a
              href="https://github.com/Arshad-jawad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl cursor-pointer opacity-80 hover:opacity-100 hover:text-orange-900"
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
