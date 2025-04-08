import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Certificate from "./components/Certificate";

const App: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div className="min-h-screen font-sans text-white bg-gray-900"> {/* Added font-sans here */}
      {/* Hero Section */}
      <HeroSection />

      {/* About Section (Background Info) */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={aboutVariants}
        className="max-w-4xl px-6 py-12 mx-auto text-center bg-gray-800 border border-gray-700 border-solid shadow-lg rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30"
      >
        <h2 className="mt-6 mb-4 text-3xl font-bold text-gradient from-green-400 to-blue-500 bg-clip-text">
        Behind the Code
        </h2>
        <p className="text-lg leading-relaxed text-gray-300"> {/* Added leading-relaxed here */}
          <p>
            Hi, I'm <strong className="font-semibold text-green-400">Robel Doba</strong>, a passionate Frontend developer specializing in building
            user-friendly and interactive websites.
          </p>
          <p className="mt-4">
            I hold a Bachelor's degree in Computer Science from Hope University College with a CGPA of 3.67, where I gained a strong
            foundation in software development principles and algorithms.
          </p>
          <p className="mt-4">
            Beyond coding, I love exploring new technologies, collaborating with teams, and constantly improving my skills.
          </p>
        </p>
      </motion.section>

      {/* Experience Section */}
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