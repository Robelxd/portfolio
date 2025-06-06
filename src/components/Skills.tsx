import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub,
  FaVuejs, FaBootstrap, FaNodeJs
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiFigma, SiRedux, SiDocker,
  SiTypescript // Added TypeScript icon as it's common and similar to the image
} from "react-icons/si";

// Define an array of tech objects, now including a custom color for the icon.
const techs = [
  { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" }, // Added
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "white" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "Vue", icon: <FaVuejs />, color: "#42b883" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "GitHub", icon: <FaGithub />, color: "white" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Docker", icon: <SiDocker />, color: "#0db7ed" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // Slightly faster stagger
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ background: 'radial-gradient(circle at top left, #60a5fa33, transparent), radial-gradient(circle at bottom right, #34d39933, transparent)' }}></div>

      <h2 className="relative z-10 mb-16 text-5xl font-extrabold leading-tight text-center">
        <span className="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
          Expertise
        </span>
        <motion.span
          className="block w-28 h-1.5 mx-auto mt-4 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.span>
      </h2>

      <motion.div
        className="relative z-10 grid grid-cols-2 gap-6 px-4 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-8 md:px-8 justify-items-center max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center justify-center w-32 h-32 overflow-hidden transition-all ease-in-out transform border border-gray-700 border-solid shadow-xl cursor-pointer group md:w-36 md:h-36 bg-gradient-to-br from-gray-500 to-gray-750 duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40"
            variants={itemVariants}
            whileHover={{ y: -6 }} // Subtle lift on hover
            // Custom styling for the honeycomb-like shape using clip-path
            style={{
              clipPath: 'polygon(50% 0%, 90% 20%, 90% 80%, 50% 100%, 10% 80%, 10% 20%)', // Octagonal/Hexagonal shape
              // Simulating facets with multiple background layers or pseudo-elements is complex in Tailwind,
              // so we'll use subtle gradients and shadows for a similar effect.
              // We'll also use a custom inner shadow for depth.
              boxShadow: '0 0 0 2px rgba(255,255,255,0.05) inset, 0 0 0 2px rgba(0,0,0,0.5) inset, 0px 8px 15px rgba(0,0,0,0.4)', // Outer and inner shadow
              background: `linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)`, // Base for facets
            }}
          >
            {/* Inner "facet" highlight - subtle gradient/pseudo-element approach */}
            <div
              className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                clipPath: 'polygon(50% 0%, 90% 20%, 90% 80%, 50% 100%, 10% 80%, 10% 20%)',
                background: `linear-gradient(45deg, rgba(255,255,255,0.15), transparent, rgba(255,255,255,0.05))`,
                filter: `drop-shadow(0 0 10px ${tech.color})`, // Icon specific glow
              }}
            ></div>

            {/* Icon container */}
            <div className="relative z-10 mb-1 text-5xl md:text-6xl" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            {/* Tech name */}
            <p className="relative z-10 text-sm font-semibold tracking-wide text-gray-200 md:text-base">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;