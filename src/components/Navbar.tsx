// components/Navbar.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 py-4 text-white shadow-md bg-black/70 backdrop-blur-md md:px-8">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <motion.img
          src="/images/logo8.png"
          alt="Logo"
          className="h-12 md:h-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            filter: "drop-shadow(0 0 10px #4E9F3D)",
          }}
        />

        {/* Desktop Nav */}
        <div className="hidden space-x-8 text-sm font-semibold md:flex">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              className="hover:text-[#4E9F3D] transition-all"
              whileHover={{ scale: 1.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 flex flex-col w-full gap-6 px-6 py-6 text-lg font-medium text-white top-full bg-black/90 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                className="hover:text-[#4E9F3D] transition-all"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
