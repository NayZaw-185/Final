import React from 'react'

function Footer() {
  return (
    <footer className="  py-4 text-center text-white dark:bg-[#161A2C] bg-[#3C467B]">
      &copy; {new Date().getFullYear()} Nay Zaw Naing • All rights reserved
    </footer>
  );
}

export default Footer