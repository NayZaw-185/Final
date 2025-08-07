import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './index.css';
import n1 from "/public/profile.jpg"

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

function App() {
  return (
    <div className="scroll-smooth font-sans">
      <Navbar />
      <Section id="home" title="Hi, I’m Nay Zaw Naing" subtitle="Front-End Developer" content="I craft fast, beautiful, and accessible web experiences using React, Tailwind CSS, and JavaScript." />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Nay Zaw Naing</div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
        <ul className={`md:flex gap-6 text-gray-700 font-medium ${open ? 'block' : 'hidden'} md:block`}>
          {sections.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="hover:text-blue-500 capitalize">
                {id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Section({ id, title, subtitle, content }) {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 pt-24 text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-2xl text-blue-600 font-medium mb-3">{subtitle}</p>}
      {content && <p className="text-lg text-gray-700 max-w-xl">{content}</p>}
    </section>
  );
}

function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-white px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={n1}
          alt="Nay Zaw Naing"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-blue-500 shadow-md"
        />

        <div className="text-gray-700 text-lg leading-relaxed space-y-5">
          <p>
            I’m a <strong>Front-End Developer</strong> based in <strong>Mandalay, Myanmar</strong>. I build responsive, interactive, and accessible web interfaces using <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern tools.
          </p>
          <p>
            My focus is creating clean, pixel-perfect user experiences that perform well across all devices. I care about usability, design systems, and writing maintainable code.
          </p>
          <p>
            Outside of development, I enjoy UI/UX design, tech writing, and contributing to open-source projects.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="/Nexa core final.pdf"
              download
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Download CV
            </a>
            <div className="flex gap-4 text-blue-600 text-2xl">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {['Portfolio Website', 'Todo App', 'T-shirt Wesite'].map((title, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-2">Short description of {title} project.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const skills = ['React', 'Tailwind CSS', 'JavaScript', 'C++', 'Git', 'Figma', 'HTML', 'CSS'];

  return (
    <section id="skills" className="py-20 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {skills.map((skill) => (
          <div key={skill} className="bg-white p-4 rounded shadow text-gray-700 font-medium">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-lg text-gray-700 mb-4">Let's work together!</p>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
        <textarea placeholder="Message" className="w-full p-3 border rounded h-32"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      &copy; {new Date().getFullYear()} Nay Zaw Naing • All rights reserved
    </footer>
  );
}

export default App;
