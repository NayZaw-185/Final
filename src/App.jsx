import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import n1 from "/public/profile.jpg";
import n2 from "/Users/nayzawnaing/My-portfolio/src/assets/image/nzn.png";
import { TypeAnimation } from "react-type-animation";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./App.css";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const sections = ["home", "about", "projects", "skills", "contact"];

function App() {
  return (
        <motion.div
          className="scroll-smooth font-sans dark:bg-[#161A2C] bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
    
    
          <div className="min-h-220 flex flex-col md:flex-row items-center justify-center px-6 md:px-12 pt-24 md:pt-32 gap-10">
          
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start text-left max-w-xl"
            >
              <TypeAnimation
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#3C467B] to-[#50589c] dark:from-[#40ffaa] dark:to-[#4079ff] text-transparent bg-clip-text font-serif mb-4"
                sequence={[
                  "Hi, I’m Nay Zaw Naing .",
                  3000,
                  "Front-End Developer .",
                  2500,
                  "Creating Beautiful Web Experiences .",
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
    
              <p className=" md:text-lg mt-4 text-gray-600 dark:text-gray-300 font-serif">
                <strong>I</strong> craft <strong>Fast</strong>, <strong>Beautiful</strong>, <strong>Responsive</strong>, and Accessible Web Apps using
                <strong>React</strong>, <strong>TailWind Css</strong> & <strong>Java Script</strong>.
              </p>
    
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex gap-4 mt-6"
              >
                <button className="px-5 py-2 bg-gradient-to-r from-[#3C467B] to-[#50589c] dark:from-[#40ffaa] dark:to-[#4079ff] rounded-full text-white font-semibold shadow-md hover:scale-105 transition"
                  onClick={() => window.location.href = '#projects'}
                >
                  View My Work 🔍
                </button>
                <button className="px-5 py-2 border border-gray-400 dark:border-gray-600 rounded-full font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200/30 dark:hover:bg-white/10 transition"
                 onClick={() => window.location.href = '#contact'}>
                  Contact Me 📞
                </button>
              </motion.div>
            </motion.div>
    
    
      <motion.div
      whileHover={{ rotate: -2, scale: 1.02 }}
      className="bg-white dark:bg-[#1b2036] rounded-xl shadow-xl p-4 w-60 md:w-72"
    >
      <img
        src={n2}
        alt="Profile"
        className="rounded-lg object-cover h-72 w-full"
      />
      <p className="mt-3 text-center font-semibold dark:text-gray-200 text-gray-700">
        Nay Zaw Naing 📌
      </p>
    </motion.div>
          </div>
    
    
          <About />
          <Projects />
          <Skills />
          <Contact />
          <BackToTop />
          <Footer />
        </motion.div>
  );
}



export default App;
