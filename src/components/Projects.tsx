import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaVuejs, FaReact, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiI18Next,
  SiVite,
  SiBootstrap,
  SiNuxtdotjs,
  SiRedux,
  SiStripe,
} from "react-icons/si";

const projects = [
  {
    title: "Muyategna",
    description:
      "A freelancing web platform that connects customers with professionals and handymen, enabling job posting, professional applications, and a subscription-based payment model.",
    image: "/images/moya1-img.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaVuejs, SiI18Next, FaJs],
    liveLink: "https://muyategna.vercel.app",
  },
  {
    title: "Maid Finder",
    description:
      "A web platform designed to connect customers with domestic help services, allowing users to find and hire maids, cleaners, and other household service providers easily.",
    image: "/images/md1-img.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaJs, FaVuejs],
    liveLink: "https://maidfinder.vercel.app",
  },
  {
    title: "ROBI Shopping",
    description:
      "A modern e-commerce site for shopping electronics, clothes, and more. Supports cart, Stripe payment, and Redux-powered global state.",
    image: "/images/shop.jpg",
    technologies: [FaReact, FaJs, SiTailwindcss, SiRedux, SiStripe],
    liveLink: "https://robi-shopping.vercel.app",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <motion.div
      className="flex flex-col px-6 py-20 gap-14 sm:px-12 md:px-20 lg:px-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="projects"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-transparent text-white bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
        variants={projectVariants}
      >
        My Projects
      </motion.h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-[#2f2e2e] rounded-3xl p-6 shadow-xl hover:shadow-green-600/50 transition-all duration-300 flex flex-col md:flex-row gap-8 md:items-center group overflow-hidden"
          variants={projectVariants}
          whileHover={{ scale: 1.01 }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="object-cover w-full transition duration-300 transform h-60 md:h-64 rounded-xl md:w-1/2 group-hover:scale-105"
            whileHover={{ rotate: 1 }}
          />
          <div className="space-y-4 md:w-1/2">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-gray-300 sm:text-base">{project.description}</p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              {project.technologies.map((Icon, i) => (
                <motion.div
                  key={i}
                  className="text-2xl text-green-400 transition-transform duration-200 hover:text-green-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon />
                </motion.div>
              ))}
            </div>

            {index === 2 && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 mt-4 text-sm font-medium text-white transition-all bg-green-600 rounded-full hover:bg-green-700"
                whileHover={{ scale: 1.05 }}
              >
                Live Demo <FaExternalLinkAlt />
              </motion.a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
