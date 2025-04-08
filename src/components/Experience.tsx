import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaCode, FaGlobe } from "react-icons/fa";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Ewnet Communication",
    type: "Internship",
    description:
      "Worked on designing and developing web interfaces, improving UI/UX, and enhancing the user experience with modern front-end technologies.",
    icon: <FaBriefcase className="text-blue-400" size={24} />,
    delay: 0.3,
  },
  {
    title: "Website Designer & Developer",
    company: "Maid Finder Project",
    type: "Group Project",
    description:
      "Designed and developed an online platform that connects customers with domestic workers. Built interactive UI components using Bootstrap, Vue.js, and Tailwind CSS.",
    icon: <FaCode className="text-yellow-400" size={24} />,
    delay: 0.5,
  },
  {
    title: "Frontend Developer",
    company: "Muyategna Freelancing Website",
    type: "Senior Project",
    description:
      "Developed a freelancing platform for hiring professionals and handymen. Implemented dynamic filtering, user dashboards, and interactive job posting features.",
    icon: <FaGlobe className="text-purple-400" size={24} />,
    delay: 0.7,
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <section
      id="experience"
      className="px-6 py-12 text-white md:px-16 lg:px-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="container mx-auto">
        <motion.h2
          className="mb-10 text-3xl font-bold text-center text-gradient from-green-400 to-blue-500 bg-clip-text md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h2>

        <div className="relative">
          <div className="absolute top-0 h-full border-l-2 border-green-500 border-solid left-6 md:left-8"></div>

          {experiences.map((exp, index) => (
            <motion.div
              ref={ref}
              key={index}
              initial="hidden"
              animate={controls}
              variants={experienceVariants}
              transition={{ delay: exp.delay }}
              className="relative pl-12 mb-8 md:pl-16 group" // Added group for hover effects
            >
              <div className="absolute left-0 p-3 bg-gray-800 rounded-full top-2">
                {exp.icon}
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold md:text-xl">{exp.title}</h3>
                <p className="font-medium text-green-400">
                  {exp.company} | <small>{exp.type}</small>
                </p>
                <motion.p
                  className="text-sm text-gray-400 md:text-base"
                  whileHover={{ scale: 1.02 }} // Added hover effect
                  transition={{ duration: 0.3 }}
                >
                  {exp.description}
                </motion.p>
                <div className="w-20 h-1 mt-2 bg-gradient-to-r from-green-400 to-blue-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;