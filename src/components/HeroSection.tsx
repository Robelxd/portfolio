import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#1E1E1E] text-white">
      <div className="w-[80%] max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Profile Image & Social Icons */}
        <div className="relative flex flex-col items-center w-full md:w-1/2">
          {/* Animated Image */}
          <motion.div
            className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#4E9F3D] shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}src/assets/profile.jpg`} // Update with your image path
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-4xl">
            <motion.a
              href="https://www.linkedin.com/in/robel-doba-13bb72351/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4E9F3D]"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://github.com/Robelxd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4E9F3D]"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>

        {/* Right Side - Text & Buttons */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold">Hi, I'm Robel Doba</h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer 🚀", 2000,
              "React & Nuxt Enthusiast 💻", 2000,
              "UI/UX Designer 🎨", 2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="mt-2 text-lg font-semibold text-green-500"
          />

          <p className="mt-4 leading-relaxed text-gray-300">
            Passionate web developer crafting seamless digital experiences. 
            Skilled in frontend and backend technologies, I build user-friendly and scalable applications.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6 md:justify-start">
            <motion.a
              href="src/assets/robeldoba_cv.pdf"
              download="robeldoba_cv.pdf"
              className="px-6 py-2 border-2 border-[#4E9F3D] text-[#4E9F3D] rounded-full transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="absolute inset-0 bg-[#4E9F3D] opacity-0 hover:opacity-100 transition-all duration-300"></span>
              <span className="relative z-10">My Resume</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/robel-doba"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#4E9F3D] text-white rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#3C7A2F" }}
              whileTap={{ scale: 0.9 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
