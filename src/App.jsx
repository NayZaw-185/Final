import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import n1 from "/public/profile.jpg";
import n2 from './assets/image/nzn.png'
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
    
    
          <div className="min-h-220 flex flex-col sm:flex-col    md:flex-row items-center justify-center px-6 md:px-12 pt-24 md:pt-32 gap-10">
          
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => window.location.href = '#projects'}
                className="dark:from-[#40ffaa] dark:to-[#4079ff] dark:bg-gradient-to-r backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg border border-gray-100 flex items-center space-x-1 sm:space-x-2 mt-5 bg-[#3C467B]"
              >
                <span className="text-green-500 text-base sm:text-lg">🔍</span>
                <span className="text-xs sm:text-sm font-semibold text-white dark:text-black ">View My Work </span>
              </motion.div>
                  <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => window.location.href = '#contact'}
                className="backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg border border-gray-100 flex items-center space-x-1 sm:space-x-2 mt-5 dark:from-[#40ffaa] dark:to-[#4079ff] dark:bg-gradient-to-r bg-[#3C467B]"
              >
                <span className="text-white text-base sm:text-lg">📞</span>
                <span className="text-xs sm:text-sm font-semibold text-white dark:text-black">Contact </span>
              </motion.div>
              
            
            
            </motion.div>
            </motion.div>
    
    
      <motion.div
       id='img'
      // whileHover={{ rotate: -2, scale: 1.02 }}
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
