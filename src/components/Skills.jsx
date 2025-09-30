import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiFigma,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", level: 90, icon: <FaReact className="text-sky-400" /> },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: <SiTailwindcss className="text-teal-300" />,
    },
    {
      name: "JavaScript",
      level: 80,
      icon: <SiJavascript className="text-yellow-400" />,
    },
    { name: "C++", level: 75, icon: <SiCplusplus className="text-blue-300" /> },
    { name: "Git", level: 70, icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Figma", level: 65, icon: <SiFigma className="text-pink-400" /> },
    { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 text-center dark:bg-[#161A2C]"
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
            whileHover={{ scale: 1.03, translateY: -4 }}
            
            className="relative overflow-hidden rounded-xl p-5 flex flex-col gap-4
                       backdrop-blur-lg
                       bg-white/30 dark:bg-white/5
                       border border-white/20 dark:border-white/8
                       shadow-lg
                       text-left
                       transition-transform duration-300"
          >
            <span
              aria-hidden
              className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-gradient-to-tr from-white/10 to-white/4 dark:from-[#60b3ff]/8 dark:to-[#7ef0c7]/8 blur-3xl pointer-events-none"
            />

            <div className="flex items-center gap-3 z-10">
              <div className="text-3xl">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {skill.name}
              </h3>
            </div>

            <div
              className="w-full rounded-full h-3 overflow-hidden z-10
                            bg-white/40 dark:bg-white/5 border border-white/10 dark:border-white/6"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="h-3 rounded-full
                           bg-gradient-to-b from-[#3C467B]/90 to-[#50589c]/90
                           dark:from-[#40ffaa]/90 dark:to-[#4079ff]/90
                           shadow-sm"
              />
            </div>
            <div className="flex items-center justify-between z-10">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {skill.level}%
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Proficiency
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
