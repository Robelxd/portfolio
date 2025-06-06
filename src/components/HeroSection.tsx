import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen px-4 pt-24 text-white bg-gradient-to-br from-black via-gray-900 to-gray-800 md:px-8">
      {/* Glowing Logo */}
      <motion.div
        className="absolute z-50 top-6 left-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/images/logo8.png"
          alt="Robel Logo"
          className="h-20 md:h-28"
          style={{
            filter: "drop-shadow(0 0 15px #4E9F3D)",
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="z-10 flex flex-col-reverse items-center justify-between w-[90%] max-w-7xl gap-10 md:flex-row">
        {/* Left Side - Text */}
        <div className="w-full text-center md:text-left md:w-1/2">
          <motion.h1
            className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-[#4E9F3D]">Robel Doba</span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer 🚀",
              2000,
              "React & Nuxt Enthusiast 💻",
              2000,
              "UI/UX Designer 🎨",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="block mt-4 text-xl font-semibold text-green-400"
          />

          <motion.p
            className="mt-6 text-sm text-gray-300 sm:text-base md:text-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I craft beautiful, fast, and accessible web interfaces. Passionate about clean code and creating stunning user experiences across modern frameworks.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row md:justify-start">
            <motion.a
              href="/images/Robel_Doba_Resume.pdf"
              download="RobelCV.pdf"
              className="px-6 py-2 text-sm font-medium text-[#4E9F3D] border border-[#4E9F3D] border-solid rounded-full transition-all hover:bg-[#4E9F3D] hover:text-black shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-2 text-sm font-medium text-black bg-[#4E9F3D] rounded-full shadow-md hover:bg-[#3C7A2F] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </div>

        {/* Right Side - Avatar + Socials */}
        <div className="relative flex flex-col items-center justify-center w-full md:w-1/2">
          {/* Animated Avatar */}
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#4E9F3D] border-solid shadow-2xl bg-black/20 backdrop-blur-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              opacity: { duration: 0.6 },
              scale: { duration: 0.8 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/profile.jpg"
              alt="Animated Avatar"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Socials */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-3xl">
            {[
              {
                href: "https://www.linkedin.com/in/robel-doba-13bb72351/",
                icon: <FaLinkedin />,
              },
              {
                href: "https://github.com/Robelxd",
                icon: <FaGithub />,
              },
              {
                href: "https://www.instagram.com/robie_dp?igsh=OGltZXRycmppbjY3",
                icon: <FaInstagram />,
              },
              {
                href: "https://x.com/robel_tech?t=9oZw3qIbuwQPRnNQqauqEw&s=09",
                icon: <FaTwitter />,
              },
              {
                href: "tel:+251-33-621793",
                icon: <FaPhoneAlt />,
              },
            ].map(({ href, icon }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#4E9F3D] transition-all"
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
