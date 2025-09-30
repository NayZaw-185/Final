import { HiMenu, HiX } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const sections = ["home", "about", "projects", "skills", "contact"];
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? " dark:bg-[#161A2C] backdrop-blur-md  shadow-md text-black"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div
          className="text-xl sm:text-2xl font-serif dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#40ffaa] dark:to-[#4079ff] text-transparent bg-clip-text bg-gradient-to-r from-[#3C467B] to-[#50589c]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nay Zaw Naing
        </motion.div>

        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        <ul
          className={`md:flex gap-4 sm:gap-6 font-medium ${
            open ? "block mt-4" : "hidden"
          } md:block`}
        >
          {sections.map((id) => (
            <li key={id} className="group relative">
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="capitalize text-black sm:text-base md:text-lg hover:dark:text-transparent dark:text-white dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#40ffaa] dark:to-[#4079ff] dark:transition hover:text-transparent bg-clip-text bg-gradient-to-r from-[#3C467B] to-[#50589c] transition"
              >
                {id}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 dark:bg-gradient-to-r dark:from-[#40ffaa] dark:to-[#4079ff] transition-all duration-300 group-hover:w-full bg-gradient-to-r from-[#3C467B] to-[#50589c]"></span>
            </li>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 text-black dark:text-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navbar;