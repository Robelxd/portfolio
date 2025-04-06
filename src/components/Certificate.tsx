import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

// Replace with your actual Udacity logo image path
import UdacityLogo from "/images/Udacity.png"; // Example for another provider

const certificates = [
  {
    title: "Android Developer Fundamentals",
    provider: "Udacity",
    logo: UdacityLogo,
    link: "https://www.udacity.com/certificate/e/6edd4628-0350-11f0-905a-dba748dca340",
  },
  {
    title: "Programming Fundamentals",
    provider: "Udacity",
    logo: UdacityLogo,
    link: "https://www.udacity.com/certificate/e/d99827ec-04b0-11f0-b74c-3b03c493f152",
  },
];

const CertificateSection = () => {
  return (
    <section id="certificates" className="px-6 py-16 text-white md:px-32 bg-gray-950">
      <motion.h2
        className="mb-12 text-3xl font-bold text-center text-green-500 md:text-4xl"
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
            className="bg-[#1f1f1f] hover:bg-[#2a2a2a] p-6 rounded-lg shadow-lg border border-gray-800 transition-all duration-300 hover:shadow-xl flex flex-col gap-4 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <img src={cert.logo} alt={cert.provider} className="object-contain w-12 h-12 bg-slate-500" />
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
