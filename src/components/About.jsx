import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import n2 from "/Users/nayzawnaing/My-portfolio/src/assets/image/nzn.png";
import n1 from "/public/profile.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
function About() {
  return (
    <section
      id="about"
      className="min-h-130 py-20 dark:bg-[#161A2C] px-4 sm:px-6 md:px-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#40ffaa] dark:to-[#4079ff] bg-gradient-to-r from-[#3C467B] to-[#50589c] text-transparent bg-clip-text">
        About Me
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <motion.img
          src={n2}
          alt="Nay Zaw Naing"
          className="w-32 h-32 sm:w-80 sm:h-100 md:w-56 md:h-80 object-cover border-4 shadow-xl rounded-2xl"
          animate={{ y: [0, -10, 0], rotate: [0, 1.5, -1.5, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />

        <div className="text-lg sm:text-xl md:text-lg leading-relaxed space-y-4 sm:space-y-5 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-[#40ffaa] dark:to-[#4079ff] text-transparent bg-clip-text bg-gradient-to-r from-[#3C467B] to-[#50589C]">
          <p className="font-serif text-xl">
            I’m a <strong>Front-End Developer</strong> based in{" "}
            <strong>Mandalay, Myanmar</strong>. I build responsive, interactive,
            and accessible web interfaces using <strong>React</strong>,{" "}
            <strong>Tailwind CSS</strong>, and modern tools.
          </p>
          <p className="font-serif text-xl">
            My focus is creating clean, pixel-perfect user experiences that
            perform well across all devices. I care about usability, design
            systems, and writing maintainable code.
          </p>
          <p className="font-serif text-xl">
            Outside of development, I enjoy UI/UX design, tech writing, and
            contributing to open-source projects.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
   
            <motion.a
              href="/NayZawNaingCV.pdf" 
              download
              className="px-6 py-3 rounded-full text-white dark:text-black dark:bg-gradient-to-r dark:from-[#40ffaa] dark:to-[#4079ff] bg-gradient-to-r from-[#3C467B] to-[#50589c] shadow-lg hover:scale-105 transition font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>

           
            <div className="flex gap-4 text-2xl">
              <motion.a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition text-[#3C467B] dark:text-[#40ffaa]"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition text-[#3C467B] dark:text-[#40ffaa]"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com/yourtwitter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition text-[#3C467B] dark:text-[#40ffaa]"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About