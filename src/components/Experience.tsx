import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaCode, FaGlobe, FaShoppingCart } from "react-icons/fa";
import { useRef } from "react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Ewnet Communication",
    type: "Internship",
    year: "2023",
    description:
      "Worked on designing and developing web interfaces, improving UI/UX, and enhancing the user experience with modern front-end technologies.",
    icon: <FaBriefcase className="text-blue-400" size={22} />,
  },
  {
    title: "Website Designer & Developer",
    company: "Maid Finder Project",
    type: "Group Project",
    year: "2024",
    description:
      "Designed and developed an online platform that connects customers with domestic workers. Built interactive UI components using Bootstrap, Vue.js, and Tailwind CSS.",
    icon: <FaCode className="text-yellow-400" size={22} />,
  },
  {
    title: "Frontend Developer",
    company: "Muyategna Freelancing Website",
    type: "Senior Project",
    year: "2024",
    description:
      "Developed a freelancing platform for hiring professionals and handymen. Implemented dynamic filtering, user dashboards, and interactive job posting features.",
    icon: <FaGlobe className="text-purple-400" size={22} />,
  },
  {
    title: "Fullstack Developer",
    company: "ROBI Shopping",
    type: "Personal Project",
    year: "2025",
    description:
      "Built a fullstack e-commerce platform with React, Redux, Tailwind CSS, and Stripe. Features include product listings, user authentication, cart functionality, and payment integration.",
    icon: <FaShoppingCart className="text-pink-400" size={22} />,
  },
];

const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const progressRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: progressRef });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={ref}
      className="px-6 py-20 text-white md:px-16 lg:px-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Section Heading */}
      <motion.h2
        className="relative text-4xl font-extrabold tracking-tight text-center text-transparent mb-14 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text"
        initial={{ y: -30, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        Experience
        <span className="block w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
      </motion.h2>

      <div className="relative" ref={progressRef}>
        {/* Static Dashed Timeline */}
        <div className="absolute top-0 z-0 h-full border-l-2 border-green-600 border-dashed left-6 md:left-8"></div>

        {/* Scroll Indicator Line */}
        <motion.div
          className="absolute top-0 z-10 w-1 origin-top bg-green-400 rounded-full left-6 md:left-8"
          style={{ scaleY }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative pl-12 mb-12 md:pl-16 group"
          >
            <div className="absolute left-0 z-10 p-3 bg-gray-800 rounded-full shadow-lg top-2 animate-pulse">
              {exp.icon}
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="p-5 transition-all duration-300 bg-gray-900 rounded-lg shadow-md bg-opacity-70 hover:shadow-xl hover:bg-opacity-90 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <span className="text-sm font-medium text-gray-400">{exp.year}</span>
              </div>
              <p className="font-medium text-green-400">
                {exp.company} | <small>{exp.type}</small>
              </p>
              <p className="mt-2 text-sm text-gray-300">{exp.description}</p>
              <div className="w-16 h-1 mt-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
