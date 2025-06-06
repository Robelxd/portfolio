import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAndroid, FaCode, FaCalendarAlt } from "react-icons/fa";

// Certificate data now includes 'date'
const certificates = [
  {
    title: "Android Developer Fundamentals",
    provider: "Udacity",
    date: "March 2025",
    icon: <FaAndroid className="text-3xl text-blue-400" />,
    link: "https://www.udacity.com/certificate/e/6edd4628-0350-11f0-905a-dba748dca340",
  },
  {
    title: "Programming Fundamentals",
    provider: "Udacity",
    date: "March 2025",
    icon: <FaCode className="text-3xl text-yellow-400" />,
    link: "https://www.udacity.com/certificate/e/d99827ec-04b0-11f0-b74c-3b03c493f152",
  },
];

// Motion variants for staggering
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const CertificateSection = () => {
  return (
    <section
      id="certificates"
      className="px-6 py-20 text-white md:px-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Section Heading */}
      <motion.h2
        className="relative mb-16 text-4xl font-extrabold tracking-tight text-center text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Certifications
        <span className="block w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></span>
      </motion.h2>

      {/* Animated Card Container */}
      <motion.div
        className="grid gap-10 sm:grid-cols-1 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-700 border-solid transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-3 mb-2">
              {cert.icon}
              <h3 className="text-lg font-semibold text-green-400 transition group-hover:text-green-300">
                {cert.title}
              </h3>
            </div>

            {/* Provider and Date */}
            <p className="text-sm text-gray-400">{cert.provider}</p>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
              <FaCalendarAlt className="text-xs text-blue-300" />
              <span>{cert.date}</span>
            </div>

            {/* Certificate Link */}
            <div className="flex items-center gap-2 mt-4 text-sm font-medium text-blue-400 transition group-hover:text-blue-300">
              View Certificate <FaExternalLinkAlt className="text-xs" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default CertificateSection;
