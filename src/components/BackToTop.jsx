
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 dark:from-[#40ffaa] dark:to-[#4079ff] text-white p-3 rounded-full shadow-lg hover:bg-[#3C467B] transition bg-gradient-to-r from-[#3C467B] to-[#50589c]${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
    >
      ↑
    </motion.button>
  );
}

export default BackToTop
