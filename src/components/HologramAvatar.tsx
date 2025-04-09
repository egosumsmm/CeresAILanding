
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HologramAvatarProps {
  imageUrl: string;
  name: string;
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  onClick?: () => void;
}

const HologramAvatar: React.FC<HologramAvatarProps> = ({
  imageUrl,
  name,
  size = 'medium',
  active = false,
  onClick
}) => {
  const [glitching, setGlitching] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  
  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 200 + Math.random() * 300);
      }
    }, 2000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Scanning effect
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanLine((prev) => (prev + 1) % 100);
    }, 50);
    
    return () => clearInterval(scanInterval);
  }, []);
  
  const sizeClasses = {
    small: 'w-20 h-20',
    medium: 'w-40 h-40 md:w-52 md:h-52',
    large: 'w-60 h-60 md:w-80 md:h-80'
  };
  
  return (
    <motion.div
      className={`relative ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`hologram rounded-full overflow-hidden ${sizeClasses[size]} relative`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -5, 0],
          filter: glitching ? 'hue-rotate(30deg) brightness(1.2)' : 'hue-rotate(0deg)'
        }}
        transition={{ 
          y: { 
            repeat: Infinity, 
            duration: 3,
            repeatType: 'reverse',
            ease: 'easeInOut' 
          }
        }}
      >
        {/* Grid overlay and hologram effects */}
        <div className="absolute inset-0 rounded-full border border-ceres-purple/30 z-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ceres-purple/20 z-30"></div>
        
        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-overlay.png')] bg-repeat opacity-20 z-20 mix-blend-overlay"></div>
        
        {/* Scan line */}
        <motion.div 
          className="absolute left-0 right-0 h-1 bg-ceres-blue/50 z-30 mix-blend-overlay"
          style={{ top: `${scanLine}%` }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1, repeat: Infinity }}
        ></motion.div>
        
        {/* Glitch elements */}
        {glitching && (
          <>
            <motion.div 
              className="absolute inset-0 bg-ceres-pink/10 z-25 mix-blend-screen"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.2, times: [0, 0.5, 1] }}
            ></motion.div>
            <motion.div 
              className="absolute inset-0 bg-ceres-blue/10 z-25 mix-blend-screen"
              style={{ left: '-5px' }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.3, times: [0, 0.5, 1], delay: 0.1 }}
            ></motion.div>
          </>
        )}
        
        <motion.div 
          className="absolute inset-0 bg-ceres-purple/10 z-15"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            repeatType: 'reverse' 
          }}
        ></motion.div>
        
        {/* Circular pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-ceres-blue/30 z-25"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        ></motion.div>
        
        {/* Main image with pixel distortion effect */}
        <motion.div 
          className="relative w-full h-full z-10 overflow-hidden"
          animate={{
            x: glitching ? [0, -2, 3, 0] : 0,
            y: glitching ? [0, 1, -1, 0] : 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut"
          }}
        >
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Glow effect beneath when active */}
        {active && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full z-5">
            <div className="w-3/4 h-40 bg-ceres-purple/10 blur-3xl mx-auto"></div>
          </div>
        )}
      </motion.div>
      
      {name && (
        <motion.div 
          className="absolute -bottom-8 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gradient font-sora font-medium">{name}</p>
        </motion.div>
      )}
      
      {active && (
        <motion.div 
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            repeatType: 'reverse'
          }}
        >
          <div className="w-full h-full rounded-full bg-ceres-purple glow-effect"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HologramAvatar;
