import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAndroid, FaCode } from "react-icons/fa";

const certificates = [
  {
    title: "Android Developer Fundamentals",
    provider: "Udacity",
    icon: <FaAndroid className="text-3xl text-blue-400" />,
    link: "https://www.udacity.com/certificate/e/6edd4628-0350-11f0-905a-dba748dca340",
  },
  {
    title: "Programming Fundamentals",
    provider: "Udacity",
    icon: <FaCode className="text-3xl text-yellow-400" />,
    link: "https://www.udacity.com/certificate/e/d99827ec-04b0-11f0-b74c-3b03c493f152",
  },
];

const CertificateSection = () => {
  return (
    <section id="certificates" className="px-6 py-16 text-white md:px-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <motion.h2
        className="mb-12 text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certificates
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1f1f1f] hover:bg-[#2a2a2a] p-6 rounded-2xl shadow-lg border border-gray-800 border-solid transition-all duration-300 hover:shadow-xl flex flex-col gap-4 group backdrop-filter backdrop-blur-lg bg-opacity-30"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              {cert.icon}
              <h3 className="text-lg font-semibold text-green-400 transition group-hover:text-green-300">
                {cert.title}
              </h3>
            </div>
            <p className="text-sm text-gray-400">{cert.provider}</p>
            <div className="flex items-center gap-2 text-sm font-medium text-green-500 transition group-hover:text-green-400">
              View Certificate <FaExternalLinkAlt className="text-xs" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;