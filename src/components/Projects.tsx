import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSupabase, SiTypescript } from "react-icons/si";
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
  SiNuxtdotjs,
  SiRedux,
} from "react-icons/si";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const projects = [
  {
    title: "Muyategna",
    description:
      "A freelance platform where users can post jobs and professionals can apply, subscribe to plans, and manage offers. Built with Nuxt 3 and Tailwind for a responsive, scalable experience.",
    features: [
      "Job posting & applications",
      "Subscription-based user access",
      "Custom dashboards for users",
      "Multilingual support (i18n)",
    ],
    image: "/images/moya1-img.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaVuejs, SiI18Next, FaJs],
    liveLink: null,
    githubLink: null,
  },
  {
    title: "Maid Finder",
    description:
      "A sleek platform to easily find and hire verified domestic help like maids and cleaners. Users can browse profiles, send direct requests, and manage bookings seamlessly.",
    features: [
      "Profile-based search",
      "Job request and connection",
      "Mobile-first responsive UI",
    ],
    image: "/images/md1-img.jpg",
    technologies: [SiNuxtdotjs, SiTailwindcss, FaJs, FaVuejs],
    liveLink: null,
    githubLink: null,
  },
  {
    title: "ROBI Shopping",
    description:
      "An e-commerce platform for browsing and purchasing electronics, clothing, and more. Features a seamless cart, Stripe integration, and global state with Redux.",
    features: [
      "Responsive product listings",
      "Redux state management",
      "Stripe checkout integration",
    ],
    image: "/images/shop.jpg",
    technologies: [FaReact, FaJs, SiTailwindcss, SiRedux],
    liveLink: "https://robi-shopping.vercel.app",
    githubLink: "https://github.com/robelxd/robi-shopping",
  },
  {
  title: "PropertyPulse",
  description:
    "A modern real estate platform built with Next.js and Supabase, enabling users to discover, filter, and manage properties in a seamless, responsive experience.",
  features: [
    " Browse and filter real estate listings",
    " Save favorites and manage listings",
    " Authentication and user profiles",
    " Supabase real-time data & row-level security",
    " Property maps, trends & mortgage tools",
  ],
  image: "/images/realstate.jpg", // Add your actual image
  technologies: [TbBrandNextjs, SiTailwindcss, SiSupabase, SiTypescript, FaJs],
  liveLink: "https://robisproperty.vercel.app", // Change to actual
  githubLink: "https://github.com/robelxd/property-pulse", // Change to actual
},

{
  title: "AI Tools Explorer",
  description:
    "A sleek frontend web app to browse, search, and filter the best AI tools by category. Built with Next.js App Router, Tailwind CSS, and Framer Motion — no backend required.",
  features: [
    " Browse tools by category and pricing",
    " Search bar with real-time filtering",
    " Responsive grid cards with animations",
    " Light/Dark mode with LocalStorage",
    " Favorite tools saved locally",
  ],
  image: "/images/ai.jpg", // Replace with your image
  technologies: [TbBrandNextjs, SiTailwindcss, SiTypescript, FaJs],
  liveLink: "https://favaitools.vercel.app", // Replace with your actual URL
  githubLink: "https://github.com/robelxd/ai-tools", // Replace with your GitHub repo
},


  {
    title: "My Portfolio",
    description:
      "A visually dynamic personal portfolio built with React, Tailwind, Framer Motion, and Three.js. Includes animated sections, responsive design, and interactive 3D visuals.",
    features: [
      "Framer Motion transitions",
      "3D sections using Three.js",
      "Smooth scroll & responsive layout",
    ],
    image: "/images/port-img.jpg",
    technologies: [FaReact, SiTailwindcss, FaJs, SiVite, FaGithub],
    liveLink: "https://robeldoba.vercel.app",
    githubLink: "https://github.com/robelxd/portfolio",
  },
];


  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-10 px-6 py-20 overflow-hidden sm:px-10 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          background:
            "radial-gradient(circle at top left, #3b82f640, transparent), radial-gradient(circle at bottom right, #10b98140, transparent)",
        }}
      />

      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
      />

      <motion.h2
        style={{ scale, opacity }}
        className="relative z-10 mb-16 text-5xl font-extrabold leading-tight text-center"
      >
        <span className="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
          Projects
        </span>
        <span className="block w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
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
              className="p-5 transition-all duration-300 border border-gray-700 border-solid shadow-xl rounded-2xl bg-gray-900/70 hover:shadow-green-400/30 hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full mb-4 transition-transform duration-300 h-44 rounded-xl hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-gray-300">{project.description}</p>

              {/* Animated Features */}
              <motion.ul
                className="mt-3 ml-1 space-y-1 text-sm text-gray-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listVariants}
              >
                {project.features.map((feature, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    🔹 {feature}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Tech icons */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {project.technologies.map((Icon, i) => (
                  <Icon
                    key={i}
                    className="text-xl text-green-400 transition-transform hover:scale-125"
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all bg-green-600 rounded-full hover:bg-green-700"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all bg-gray-700 rounded-full hover:bg-gray-800"
                  >
                    GitHub <FaGithub />
                  </a>
                )}
              </div>

              {!project.liveLink && !project.githubLink && (
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
