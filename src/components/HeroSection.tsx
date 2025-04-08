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
    <section className="relative flex items-center justify-center w-full min-h-screen px-4 pt-24 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black md:px-8 md:pt-0">
      {/* Logo */}
      <div className="absolute z-50 top-6 left-4">
        <motion.img
          src="/images/logo8.png"
          alt="Robel Logo"
          className="w-auto h-20 md:h-32 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            filter: "drop-shadow(0 0 12px #4E9F3D)",
          }}
          key="logo-animation"
        />
      </div>

      <div className="w-[90%] max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
        {/* Left Text Section */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <motion.h1
            className="text-3xl font-bold leading-tight md:text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Hi, I'm Robel Doba
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
            className="mt-2 text-lg font-semibold text-green-500"
          />

          <motion.p
            className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          >
            Passionate web developer crafting seamless digital experiences. Skilled in frontend and backend technologies, I build
            user-friendly and scalable applications.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 mt-6 sm:flex-row md:justify-start">
            <motion.a
              href="/images/RobelCV.pdf"
              download="RobelCV.pdf"
              className="px-6 py-2 border-2 border-[#4E9F3D] border-solid text-[#4E9F3D] rounded-full text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
            >
              My Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="px-6 py-2 bg-[#4E9F3D] text-white rounded-full text-sm sm:text-base"
              whileHover={{ scale: 1.05, backgroundColor: "#3C7A2F" }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
            >
              Contact
            </motion.a>
          </div>
        </div>

        {/* Right Profile & Social */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          {/* Profile Image */}
          <motion.div
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#4E9F3D] border-solid shadow-xl"
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              opacity: { duration: 0.8, ease: "easeInOut" },
              scale: { duration: 0.8, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.03, rotate: [0, 3, -3, 0] }}
          >
            <img src="/images/profile.jpg" alt="Profile" className="object-cover w-full h-full" />
          </motion.div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-3xl md:text-4xl">
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
                className="text-white hover:text-[#4E9F3D]"
                whileHover={{
                  scale: 1.3,
                  rotate: [0, 15, -15, 0],
                  transition: { duration: 0.6 },
                }}
                style={{
                  textShadow: "0 0 10px #4E9F3D",
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeInOut" }}
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