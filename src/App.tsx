import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { motion } from "framer-motion";
import Certificate from "./components/Certificate";

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section (Background Info) */}
      <motion.section 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        className="max-w-4xl px-6 py-12 mx-auto text-center"
      >
        <h2 className="mt-6 mb-4 text-3xl font-bold text-green-500">About Me</h2>
        <p className="text-lg text-gray-300">
        <p>Hi, I'm <strong>Robel Doba</strong>, a passionate Computer Science graduate specializing in web development. I love building user-friendly and interactive websites.</p>
                        <p>Beyond coding, I love exploring new technologies, collaborating with teams, and constantly improving my skills.</p>
                        </p>
      </motion.section>

     {/* Projects Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Certificate Section */}
      <Certificate />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="py-6 text-center text-gray-400"
      >
        <p>© {new Date().getFullYear()} Robel Doba | All Rights Reserved</p>
      </motion.footer>
    </div>
  );
};

export default App;
