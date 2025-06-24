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
import Lottie from "lottie-react";
import devAnimation from "../assets/Animation - 1750176167634.json";
import GalaxyBackground from "./GalaxyBackground";
import BottomNavigation from "./BottomNavigation";
import "../styles/galaxy.css";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative flex flex-col items-center justify-between w-full min-h-screen px-4 pt-12 pb-6 overflow-hidden text-white"
    >
      {/* Galaxy Background */}
      <GalaxyBackground />

      {/* Glowing Logo */}
      <motion.div
        className="absolute z-50 top-4 left-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/images/logo8.png"
          alt="Robel Logo"
          className="h-14 md:h-20"
          style={{
            filter: "drop-shadow(0 0 15px #4E9F3D)",
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="z-10 flex flex-col-reverse items-center justify-between w-[90%] max-w-7xl gap-4 md:flex-row">
        {/* Left Side - Text */}
        <div className="w-full text-center md:text-left md:w-1/2">
          <motion.h1
            className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-[#215616]">Robel Doba</span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer 🚀",
              2000,
              "React & Nuxt Enthusiast 💻",
              2000,
              "Responsive Design 🎨",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="block mt-2 text-lg font-semibold text-green-400"
          />

          <motion.p
            className="mt-2 text-sm text-gray-300 sm:text-base md:text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I craft beautiful, fast, and accessible web interfaces. Passionate about clean code and creating stunning user experiences across modern frameworks.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 mt-4 sm:flex-row md:justify-start">
            <motion.a
              href="/images/Robel_Doba_Resume.pdf"
              download="RobelCV.pdf"
              className="px-6 py-2 text-sm font-medium text-[#4E9F3D] border border-[#4E9F3D] border-solid rounded-full transition-all hover:bg-[#4E9F3D] hover:text-black shadow-md backdrop-blur-sm"
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
              className="px-6 py-2 text-sm font-medium text-black bg-[#4E9F3D] rounded-full shadow-md hover:bg-[#3C7A2F] transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </div>

        {/* Right Side - Vector Animation */}
        <div className="relative flex flex-col items-center justify-center w-full md:w-1/2">
          <div className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px]">
            <Lottie
              animationData={devAnimation}
              loop={true}
              style={{ transform: "translateY(-10px)", animation: "bounce 2s infinite ease-in-out" }}
            />
          </div>

          {/* Socials */}
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-2xl">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Navigation */}
      <BottomNavigation />
    </section>
  );
};

export default HeroSection;