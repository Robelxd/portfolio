import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaBlogger } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#1E1E1E] text-white">
      <div className="w-[80%] max-w-6xl flex flex-col md:flex-row items-center gap-8">
        {/* Left Side */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#4E9F3D]">
            <img
              src="src/assets/profile.jpg" // Change this to your image
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-4xl">
  <a
    href="https://linkedin.com/in/your-profile"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#4E9F3D] transition duration-300 cursor-pointer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/your-username"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#4E9F3D] transition duration-300 cursor-pointer"
  >
    <FaGithub />
  </a>

  <a
    href="https://twitter.com/your-handle"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#4E9F3D] transition duration-300 cursor-pointer"
  >
    <FaTwitter />
  </a>
</div>

        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold">Hi, I'm Robel Doba</h1>

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
  className="mt-2 text-lg font-semibold text-green-600"
/>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Passionate web developer crafting seamless digital experiences. 
            Skilled in frontend and backend technologies, I build user-friendly and scalable applications.
          </p>
          {/* Buttons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <button className="px-6 py-2 bg-transparent border-2 border-[#4E9F3D] text-[#4E9F3D] rounded-full hover:bg-[#4E9F3D] hover:text-white transition duration-300">
            <a href="src/assets/robeldoba_cv.pdf" download="robeldoba_cv.pdf">
            My Resume </a>
            </button>
            <button className="px-6 py-2 bg-[#4E9F3D] text-white rounded-full hover:bg-[#3C7A2F] transition duration-300">
            <a href="https://linkedin.com/in/robel-doba" target="_blank" rel="noopener noreferrer">
    Contact
  </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
