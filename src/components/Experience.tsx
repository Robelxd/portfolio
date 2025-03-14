import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaGlobe } from "react-icons/fa";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Ewnet Communication",
    type: "Internship",
    description:
      "Worked on designing and developing web interfaces, improving UI/UX, and enhancing the user experience with modern front-end technologies.",
    icon: <FaBriefcase className="text-green-500" size={24} />,
    delay: 0.3,
  },
  {
    title: "Website Designer & Developer",
    company: "Maid Finder Project",
    type: "Group Project",
    description:
      "Designed and developed an online platform that connects customers with domestic workers. Built interactive UI components using Bootstrap, Vue.js, and Tailwind CSS.",
    icon: <FaCode className="text-green-500" size={24} />,
    delay: 0.5,
  },
  {
    title: "Frontend Developer",
    company: "Muyategna Freelancing Website",
    type: "Senior Project",
    description:
      "Developed a freelancing platform for hiring professionals and handymen. Implemented dynamic filtering, user dashboards, and interactive job posting features.",
    icon: <FaGlobe className="text-green-500" size={24} />,
    delay: 0.7,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 px-32 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-green-500 text-primary mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        {/* Timeline Wrapper */}
        <div className="border-l-4 border-green-500 ml-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: exp.delay }}
              className="mb-8 ml-6"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-3 rounded-full">{exp.icon}</div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
              </div>
              <p className="text-green-400 font-medium">{exp.company} | <small>{exp.type}</small></p>
              <p className="text-gray-400">{exp.description}</p>
              <div className="mt-2 h-1 w-20 bg-green-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
