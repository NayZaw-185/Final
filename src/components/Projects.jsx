import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      title: "Portfolio Website",
      value: "https://portfolio-one-gamma-o9y5c6ps48.vercel.app/",
      description:
        "A personal portfolio website to showcase my projects and skills.",
    },
    {
      title: "Todo App",
      value: "https://todo-app-example.com",
      description:
        "A Simple App Made with React & Tailwind & JavaScript for Managing Tasks.",
    },
    {
      title: "T-shirt Website",
      value: "https://tshirt-website-example.com",
      description: "An E-commerce website for selling T-shirts.",
    },
    {
      title: "Inventory Management System",
      value: "https://inventory-izk5.vercel.app/",
      description: "A web application for managing inventory and stock levels.",
    },
    {
      title: "CRUD Application",
      value: "https://crud-app-example.com",
      description:
        "A web application for performing Create, Read, Update, and Delete operations.",
    },
    {
      title: "Note App",
      value: "https://note-app-example.com",
      description: "A web application for taking and organizing notes.",
    },
    {
      title: "Movie App",
      value: "https://movie-ashen-gamma.vercel.app/",
      description:
        "A web application for searching and viewing Movies For Relax.",
    },
    {
      title: "Weather App",
      value: "https://weather-app-example.com",
      description: "A web application for checking the weather forecast.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="py-20 dark:bg-[#161A2C] px-4 sm:px-6 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#3C467B] to-[#50589c] dark:from-[#40ffaa] dark:to-[#4079ff] bg-clip-text text-transparent">
        My Projects
      </h2>

      <button
        onClick={() => setShowProjects(!showProjects)}
        className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#3C467B] to-[#50589c] dark:from-[#40ffaa] dark:to-[#4079ff] hover:scale-105 transition"
      >
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      <AnimatePresence>
        {showProjects && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(64,255,170,0.15)",
                }}
                transition={{ type: "spring", stiffness: 220 }}
                className="relative bg-white dark:bg-[#1c2137] rounded-xl p-6 text-left border border-transparent hover:border-[#40ffaa]/50 hover:shadow-[#1c213] dark:hover:border-[#40ffaa]/50 cursor-pointer shadow-md hover:shadow-xl"
              >
                <h3 className="text-lg sm:text-xl font-bold dark:text-white text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open(project.value, "_blank")}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#3C467B] to-[#50589c] dark:from-[#40ffaa] dark:to-[#4079ff] text-white font-semibold shadow hover:shadow-lg transition"
                >
                  View Project
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;