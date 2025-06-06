import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaCode, FaGlobe, FaShoppingCart } from "react-icons/fa";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Ewnet Communication",
    type: "Internship",
    description:
      "Worked on designing and developing web interfaces, improving UI/UX, and enhancing the user experience with modern front-end technologies.",
    icon: <FaBriefcase className="text-blue-400" size={24} />,
    delay: 0.2,
  },
  {
    title: "Website Designer & Developer",
    company: "Maid Finder Project",
    type: "Group Project",
    description:
      "Designed and developed an online platform that connects customers with domestic workers. Built interactive UI components using Bootstrap, Vue.js, and Tailwind CSS.",
    icon: <FaCode className="text-yellow-400" size={24} />,
    delay: 0.4,
  },
  {
    title: "Frontend Developer",
    company: "Muyategna Freelancing Website",
    type: "Senior Project",
    description:
      "Developed a freelancing platform for hiring professionals and handymen. Implemented dynamic filtering, user dashboards, and interactive job posting features.",
    icon: <FaGlobe className="text-purple-400" size={24} />,
    delay: 0.6,
  },
  {
    title: "Fullstack Developer",
    company: "ROBI Shopping",
    type: "Personal Project",
    description:
      "Built a fullstack e-commerce platform with React, Redux, Tailwind CSS, and Stripe. Features include product listings, user authentication, cart functionality, and payment integration.",
    icon: <FaShoppingCart className="text-pink-400" size={24} />,
    delay: 0.8,
  },
];

const ExperienceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const experienceVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="experience"
      className="px-6 py-16 text-white md:px-16 lg:px-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="relative text-4xl font-extrabold tracking-tight text-center text-transparent mb-14 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Experience
          <span className="block w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></span>
        </motion.h2>

        <div className="relative">
          <div className="absolute top-0 h-full border-l-2 border-green-500 border-dashed left-6 md:left-8"></div>

          {experiences.map((exp, index) => (
            <motion.div
              ref={ref}
              key={index}
              initial="hidden"
              animate={controls}
              variants={experienceVariants}
              transition={{ delay: exp.delay }}
              className="relative pl-12 mb-10 md:pl-16 group"
            >
              <div className="absolute left-0 p-3 bg-gray-800 rounded-full shadow-lg top-2">
                {exp.icon}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="p-5 transition-all duration-300 bg-gray-900 rounded-lg shadow-md bg-opacity-70 hover:bg-opacity-90 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="font-medium text-green-400">
                  {exp.company} | <small>{exp.type}</small>
                </p>
                <p className="mt-2 text-sm text-gray-300">{exp.description}</p>
                <div className="w-16 h-1 mt-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
