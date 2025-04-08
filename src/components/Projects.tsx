import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaVuejs, FaReact, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiI18Next, SiVite, SiBootstrap, SiNuxtdotjs } from "react-icons/si";

const projects = [
  {
    title: "Muyategna",
    description:
      "A freelancing web platform that connects customers with professionals and handymen, enabling job posting, professional applications, and a subscription-based payment model.",
    image: "/images/moya1-img.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaVuejs, SiI18Next, FaJs],
    liveLink: "YOUR_LIVE_LINK_HERE", // Add live link
  },
  {
    title: "Maid Finder",
    description:
      "A web platform designed to connect customers with domestic help services, allowing users to find and hire maids, cleaners, and other household service providers easily.",
    image: "/images/md1-img.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaJs, FaVuejs],
    liveLink: "YOUR_LIVE_LINK_HERE", // Add live link
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="flex flex-col gap-10 px-6 py-20 sm:px-12 md:px-20 lg:px-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl font-bold text-center text-gradient from-green-400 to-blue-500 bg-clip-text sm:text-4xl"
        variants={projectVariants}
      >
        My Projects
      </motion.h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-[#2f2e2e] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col md:flex-row gap-6 md:items-center backdrop-filter backdrop-blur-lg bg-opacity-30 group" // Added group class
          variants={projectVariants}
        >
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-auto transition-transform rounded-lg md:w-1/2 transform-gpu group-hover:scale-105" // Added image hover effect
          />
          <div className="md:w-1/2">
            <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
            <p className="text-sm text-gray-300 sm:text-base">{project.description}</p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              {project.technologies.map((Icon, i) => (
                <Icon
                  key={i}
                  className="text-xl text-green-400 transition duration-300 sm:text-2xl hover:text-green-500"
                />
              ))}
              
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;