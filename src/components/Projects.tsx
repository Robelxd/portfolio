import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaJs,
  FaVuejs,
  FaReact,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
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
      "Muyategna is a freelancing web platform that connects customers with professionals and handymen. It allows job postings, applications, subscriptions, and request limits based on plan. Built with Nuxt 3, Tailwind, i18n, and Vue for a modern experience.",
    image: "/images/moya1-img.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaVuejs, SiI18Next, FaJs],
    liveLink: null,
  },
  {
    title: "Maid Finder",
    description:
      "Maid Finder helps users hire domestic help such as cleaners and maids. Customers can post job requests, browse profiles, and connect directly with service providers. Features a responsive and localized design with Vue and Tailwind CSS.",
    image: "/images/md1-img.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaJs, FaVuejs],
    liveLink: null,
  },
  {
    title: "ROBI Shopping",
    description:
      "Modern e-commerce website to shop for electronics, clothing, and more. Features cart, Redux for state management, and responsive product listings.",
    image: "/images/shop.jpg",
    technologies: [FaReact, FaJs, SiTailwindcss, SiRedux],
    liveLink: "https://robi-shopping.vercel.app",
  },
  {
    title: "My Portfolio",
    description:
      "A dynamic and interactive portfolio website built with React, Framer Motion, Tailwind CSS, and Three.js. Features animated hero section, 3D effects, responsive design, and scroll-based transitions.",
    image: "/images/port-img.jpg",
    technologies: [FaReact, SiTailwindcss, FaJs, SiVite, FaGithub],
    liveLink: "https://your-portfolio.vercel.app", // Replace with actual
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section
      id="projects"
      className="relative z-10 px-6 py-20 overflow-hidden sm:px-10 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      ref={sectionRef}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{ background: 'radial-gradient(circle at top left, #3b82f640, transparent), radial-gradient(circle at bottom right, #10b98140, transparent)' }}
      ></div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
      />

      {/* Section heading */}
      <motion.h2
        style={{ scale, opacity }}
        className="relative z-10 mb-16 text-5xl font-extrabold leading-tight text-center"
      >
        <span className="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
          Projects
        </span>
         <span className="block w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></span>
      </motion.h2>

      {/* Grid layout */}
      <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.15}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="p-6 transition-all border border-gray-700 border-solid shadow-2xl rounded-2xl bg-gray-900/70 hover:shadow-green-500/30"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48 mb-4 transition-transform duration-300 rounded-xl hover:scale-105"
              />
              <h3 className="mb-2 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">{project.description}</p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {project.technologies.map((Icon, i) => (
                  <Icon key={i} className="text-2xl text-green-400 transition-transform hover:scale-125" />
                ))}
              </div>

              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 mt-5 text-sm font-medium text-white transition bg-green-600 rounded-full hover:bg-green-700"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
              ) : (
                <p className="mt-4 text-sm font-medium text-yellow-400">
                  Not yet deployed
                </p>
              )}
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
