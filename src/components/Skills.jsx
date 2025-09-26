import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiCplusplus, SiFigma } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", level: 90, icon: <FaReact className="text-sky-500" /> },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", level: 80, icon: <SiJavascript className="text-yellow-400" /> },
    { name: "C++", level: 75, icon: <SiCplusplus className="text-blue-400" /> },
    { name: "Git", level: 70, icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Figma", level: 65, icon: <SiFigma className="text-pink-500" /> },
    { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-20 dark:bg-[#161A2C] px-4 sm:px-6 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-gradient-to-r from-[#3C467B] to-[#50589c] dark:from-[#40ffaa] dark:to-[#4079ff] bg-clip-text text-transparent">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-[#1c2137] rounded-xl shadow p-5 text-left flex flex-col gap-3"
          >
           
            <div className="flex items-center gap-3">
              <div className="text-3xl">{skill.icon}</div>
              <h3 className="text-lg font-semibold dark:text-white text-gray-800">
                {skill.name}
              </h3>
            </div>

      
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-3 rounded-full bg-gradient-to-r from-[#3C467B] to-[#50589c] dark:from-[#40ffaa] dark:to-[#4079ff]"
              />
            </div>

          
            <p className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;