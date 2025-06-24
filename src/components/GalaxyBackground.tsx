
import React from 'react';

const GalaxyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Galaxy Container */}
      <div className="galaxy-container">
        {/* Central Galaxy Core */}
        <div className="galaxy-core"></div>
        
        {/* Spiral Arms */}
        <div className="spiral-arm arm-1"></div>
        <div className="spiral-arm arm-2"></div>
        <div className="spiral-arm arm-3"></div>
        <div className="spiral-arm arm-4"></div>
        
        {/* Star Field */}
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Nebula Clouds */}
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
        
        {/* Cosmic Dust */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="cosmic-dust"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
    </div>
  );
};

export default GalaxyBackground;