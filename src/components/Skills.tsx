import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap } from "react-icons/fa";
import { SiNuxtdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Vue", icon: <FaVuejs className="text-green-500" /> },
  { name: "Nuxt 3", icon: <SiNuxtdotjs className="text-green-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
];

const scrollSpeed = 25; // Adjusted scroll speed

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth);
    }
  }, []);

  return (
    <section id="skills" className="py-10 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <h2 className="mb-10 text-4xl font-bold text-center text-gradient from-green-400 to-blue-500 bg-clip-text">Proficiencies</h2>

      <div ref={containerRef} className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 w-max"
          animate={{
            x: [0, -containerWidth / 2], // Adjusted animation
          }}
          transition={{
            ease: "linear",
            duration: scrollSpeed,
            repeat: Infinity,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center w-32 h-32 p-6 bg-gray-800 shadow-lg cursor-pointer rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30"
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mb-2 text-5xl">{skill.icon}</div>
              <p className="text-sm font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;