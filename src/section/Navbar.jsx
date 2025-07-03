import React, { useState } from 'react'
import '../index.css'
import {motion} from "motion/react"

function Navigation() {
  return (
    <ul className="flex gap-8 text-white text-xl items-center"> {/* Increased gap here */}
      <li className="nav-li">
        <a href="#ParallaxBackground" className="nav-link hover:text-2xl hover:font-semibold">Home</a>
      </li>
      <li className="nav-li">
        <a href="#About " className="nav-link hover:text-2xl hover:font-semibold">About</a>
      </li>
      <li className="nav-li">
        <a href="#Skills" className="nav-link hover:text-2xl hover:font-semibold">Tech Stack</a>
      </li>
      <li className="nav-li">
        <a href="#ProjectDetails" className="nav-link hover:text-2xl hover:font-semibold">My Projects</a>
      </li>
      <li className="nav-li">
        <a href="#Contact" className="nav-link hover:text-2xl hover:font-semibold">Contact</a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50 flex flex-auto w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl w-full px-6">
        <div className="flex items-center justify-between py-4 sm:py-6">
          {/* Viraj on the far left */}
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            
          </a>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>

          {/* Hamburger menu toggle for small screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex items-center text-neutral-400 ml-auto"
          >
            <img
              src={isOpen ? "/assets/close.jpg" : "/assets/menu.jpg"}
              alt="toggle"
              className="h-6 bg-black"
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <motion.div
          className="text-center block w-full sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};
export default Navbar;