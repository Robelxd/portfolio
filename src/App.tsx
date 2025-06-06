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

      {/* Navbar Section */}
      

      {/* Hero Section */}
      <HeroSection />

      <motion.section
  ref={ref}
  initial="hidden"
  animate={controls}
  variants={aboutVariants}
  className="relative max-w-5xl px-8 py-16 mx-auto overflow-hidden text-center border border-gray-700 border-solid shadow-xl rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black backdrop-blur-md"
>
  {/* Background animated gradient blob */}
  <div className="absolute z-0 rounded-full -top-10 -left-10 w-72 h-72 bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 filter blur-3xl opacity-30 animate-pulse"></div>

  {/* Animated Avatar Emoji */}
  <motion.div
    className="relative z-10 mx-auto mb-6 text-6xl w-fit"
    initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
    animate={{ rotate: 0, scale: 1, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    👨‍💻
  </motion.div>

  {/* Gradient Heading */}
  <motion.h2
    className="z-10 mb-6 text-4xl font-extrabold text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    Behind the Code
  </motion.h2>

  {/* Paragraphs with Tech Icons */}
  <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-gray-300">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      👨‍💻 I'm <span className="font-semibold text-green-400">Robel Doba</span>, a Frontend Developer focused on crafting smooth, interactive UIs using frameworks like <span className="text-blue-400">React</span>, <span className="text-cyan-300">Next.js</span>, and <span className="text-indigo-300">Nuxt</span>.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      🎓 I graduated from <span className="font-medium text-yellow-300">Hope University College</span> with a degree in Computer Science and a CGPA of <span className="font-semibold text-green-400">3.67</span>, where I built strong foundations in algorithms and software principles.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      🛠 I enjoy bringing ideas to life in the browser. My toolkit includes <span className="text-pink-400">Tailwind CSS</span>, <span className="text-purple-400">Framer Motion</span>, and <span className="text-green-400">TypeScript</span>.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.0 }}
    >
      💡 I'm driven by curiosity and creativity — always learning, building, and pushing for clean, beautiful code and meaningful user experiences.
    </motion.p>
  </div>
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