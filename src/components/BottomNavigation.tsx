import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, User, Wrench, Phone } from 'lucide-react';

const BottomNavigation = () => {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', href: '#home', icon: Home, label: 'Home' },
    { id: 'experience', href: '#experience', icon: User, label: 'Experience' },
    { id: 'projects', href: '#projects', icon: Briefcase, label: 'Projects' },
    { id: 'tech-stack', href: '#tech-stack', icon: Wrench, label: 'Skills' },
    { id: 'contact', href: '#contact', icon: Phone, label: 'Contact' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveNav(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed z-50 flex items-center justify-center w-full bottom-3"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      <div className="relative px-2">
        {/* Glowing Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4E9F3D]/20 via-[#4E9F3D]/30 to-[#4E9F3D]/20 rounded-full blur-xl"></div>

        {/* Navigation Bar */}
        <div className="relative flex items-center justify-center gap-3 px-3 py-2 sm:gap-4 sm:px-4 sm:py-2 bg-black/80 backdrop-blur-xl border border-[#4E9F3D]/30 rounded-full shadow-2xl min-w-[250px] sm:min-w-[320px] md:min-w-[360px]">
          {/* Active Background */}
          <motion.div
            className="absolute top-0 bottom-0 my-auto h-10 bg-gradient-to-r from-[#4E9F3D]/20 to-[#4E9F3D]/40 rounded-full"
            layoutId="activeBackground"
            style={{
              width: '44px',
              left: `calc(${navItems.findIndex(item => item.id === activeNav) * 52}px + 6px)`,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />

          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.href)}
                className="relative z-10 flex flex-col items-center justify-center w-11 h-11"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <motion.div
                  className={`transition-all duration-300 ${
                    isActive
                      ? 'text-[#4E9F3D] scale-110'
                      : 'text-white/70 hover:text-[#4E9F3D] hover:scale-105'
                  }`}
                  animate={isActive ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={18} />
                </motion.div>

                {/* Tooltip only on Active */}
                {isActive && (
                  <motion.div
                    className="absolute -top-11 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/90 text-white text-[10px] rounded-md whitespace-nowrap"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {item.label}
                    <div className="absolute w-0 h-0 transform -translate-x-1/2 border-t-4 border-l-4 border-r-4 top-full left-1/2 border-l-transparent border-r-transparent border-t-black/90"></div>
                  </motion.div>
                )}

                {/* Glow pulse */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-[#4E9F3D]/20 rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default BottomNavigation;
