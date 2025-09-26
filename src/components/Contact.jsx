import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl text-blue-600" />,
      title: "Email",
      value: "zawn63081@gmail.com",
      link: "mailto:zawn63081@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="text-xl text-green-500" />,
      title: "Phone",
      value: "+95 959131860",
      link: "tel:+959959131860",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-red-500" />,
      title: "Location",
      value: "Mandalay, Myanmar",
      link: null,
    },
  ];

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/NayZaw-185" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/share/17RybCWFQ1/?mibextid=wwXIfr" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/nayzaww9?igsh=azJvajUydWdqZmQ2&utm_source=qr" },
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
      id="contact"
      className="py-20 px-4 sm:px-6 dark:bg-[#161A2C] text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#3C467B] to-[#50589c] dark:from-[#40ffaa] dark:to-[#4079ff] bg-clip-text text-transparent">
        Contact
      </h2>
      <p className="text-lg sm:text-xl mb-10 bg-gradient-to-r from-[#3C467B] to-[#50589c] dark:from-[#40ffaa] dark:to-[#4079ff] bg-clip-text text-transparent">
        Let’s work together!
      </p>

      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-[#1c2137] rounded-xl shadow p-6 flex flex-col items-center gap-3"
          >
            {info.icon}
            <h3 className="text-lg font-semibold dark:text-white text-gray-800">
              {info.title}
            </h3>
            {info.link ? (
              <a
                href={info.link}
                className="text-gray-600 dark:text-gray-300 hover:text-[#40ffaa] dark:hover:text-[#40ffaa] transition"
              >
                {info.value}
              </a>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
            )}
          </motion.div>
        ))}
      </motion.div>


      <motion.div
        className="flex justify-center gap-6 text-2xl dark:text-white text-gray-800"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {socials.map((s, index) => (
          <motion.a
            key={index}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ scale: 1.2, color: "#3C467B" }}
            className="transition text- dark:text-white dark:hover:text-green-400"
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Contact;