
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
  
  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 200);
      }
    }, 3000);
    
    return () => clearInterval(glitchInterval);
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
          filter: glitching ? 'hue-rotate(30deg)' : 'hue-rotate(0deg)'
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
        <div className="absolute inset-0 rounded-full border border-ceres-purple/30 z-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ceres-purple/20 z-20"></div>
        <div className="absolute inset-0 grid-bg z-10"></div>
        
        <motion.div 
          className="absolute inset-0 bg-ceres-purple/10 z-5"
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
        
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover relative z-0"
        />
        
        {active && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full">
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
