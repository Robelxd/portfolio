import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFigma,
  SiDocker,
  SiNuxtdotjs,
  SiSupabase,
  SiVscodium,
} from "react-icons/si";

const techs = [
  { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "white" },
  { name: "Nuxt.js", icon: <SiNuxtdotjs />, color: "#00DC82" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "Vue", icon: <FaVuejs />, color: "#42b883" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "GitHub", icon: <FaGithub />, color: "white" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Docker", icon: <SiDocker />, color: "#0db7ed" },
  { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
  { name: "VS Code", icon: <SiVscodium />, color: "#007ACC" },
];


const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="relative py-32 overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Title */}
      <h2 className="relative z-10 mb-16 text-5xl font-extrabold leading-tight text-center">
        <span className="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
          Expertise
        </span>
        <motion.span
          className="block w-28 h-1.5 mx-auto mt-4 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </h2>

      {/* Tech Grid */}
      <div className="relative flex flex-wrap justify-center max-w-6xl gap-10 px-4 mx-auto md:px-16">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-24 h-24 transition-transform duration-300 shadow-xl cursor-pointer md:w-28 md:h-28 group"
            style={{
              clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              background: `linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)`,
              boxShadow: `0 0 12px ${tech.color}`,
            }}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="text-4xl md:text-5xl"
              style={{ color: tech.color }}
              animate={{ y: [0, -4, 0], opacity: [1, 0.8, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              {tech.icon}
            </motion.div>
            <p className="mt-1 text-sm font-medium text-gray-200">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
