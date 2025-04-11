import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
  const [dataCircle, setDataCircle] = useState(0);
  
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
  
  // Data circle pulse animation
  useEffect(() => {
    const dataCircleInterval = setInterval(() => {
      setDataCircle((prev) => (prev + 1) % 100);
    }, 30);
    
    return () => clearInterval(dataCircleInterval);
  }, []);
  
  const sizeClasses = {
    small: 'w-16 h-16 sm:w-20 sm:h-20',
    medium: 'w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52',
    large: 'w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80'
  };
  
  return (
    <motion.div
      className={`relative ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer glow effect */}
      <div className={cn(
        "absolute inset-0 rounded-full blur-xl opacity-30",
        active ? "bg-ceres-purple" : "bg-ceres-blue/50",
        sizeClasses[size]
      )}></div>
      
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
        {/* Holographic border glow */}
        <div className="absolute inset-0 rounded-full border-2 border-ceres-blue z-50 opacity-60"></div>
        
        {/* Grid overlay and hologram effects */}
        <div className="absolute inset-0 rounded-full border border-ceres-purple/30 z-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ceres-purple/40 z-30"></div>
        
        {/* Digital circuit patterns */}
        <div className="absolute inset-0 bg-[url('/grid-overlay.png')] bg-repeat opacity-20 z-25 mix-blend-overlay"></div>
        
        {/* Scan lines multiple */}
        {Array.from({length: 5}).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute left-0 right-0 h-0.5 bg-ceres-blue/70 z-35 mix-blend-screen"
            style={{ 
              top: `${(scanLine + i * 20) % 100}%`,
              opacity: 0.3 + (i * 0.1)
            }}
          ></motion.div>
        ))}
        
        {/* Data visualization circular elements */}
        {active && Array.from({length: 3}).map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-ceres-blue/60 z-20"
            style={{
              top: '50%',
              left: '50%',
              width: `${30 + i * 20}%`,
              height: `${30 + i * 20}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [(0.8 + i * 0.05), (1 + i * 0.05), (0.8 + i * 0.05)],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 - i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Digital data circle */}
        {active && (
          <motion.div
            className="absolute w-[40%] h-[40%] rounded-full border-2 border-ceres-blue/60 z-20"
            style={{
              bottom: '5%',
              right: '5%',
            }}
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 rounded-full border border-ceres-pink/40"></div>
          </motion.div>
        )}
        
        {/* Glitch elements */}
        {glitching && (
          <>
            <motion.div 
              className="absolute inset-0 bg-ceres-pink/30 z-25 mix-blend-screen"
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.2, times: [0, 0.5, 1] }}
            ></motion.div>
            <motion.div 
              className="absolute inset-0 bg-ceres-blue/30 z-25 mix-blend-screen"
              style={{ left: '-5px' }}
              animate={{ opacity: [0, 0.7, 0] }}
              transition={{ duration: 0.3, times: [0, 0.5, 1], delay: 0.1 }}
            ></motion.div>
          </>
        )}
        
        {/* Ambient glow */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-ceres-purple/10 to-ceres-blue/20 z-15"
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
        
        {/* Holographic shimmer effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            x: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            opacity: { repeat: Infinity, duration: 2, ease: "easeInOut" }
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
          {/* Apply an overlay effect to the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-ceres-blue/10 to-ceres-purple/10 mix-blend-overlay z-10"></div>
          
          {/* Base image */}
          <img 
            src={imageUrl} 
            alt={name}
            className={cn(
              "w-full h-full object-cover",
              "brightness-110 contrast-125"
            )}
          />
          
          {/* Digital distortion overlay */}
          <div className="absolute inset-0 bg-[url('/grid-overlay.png')] bg-repeat opacity-10 mix-blend-overlay"></div>
        </motion.div>
        
        {/* Glow effect beneath when active */}
        {active && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full z-5">
            <div className="w-3/4 h-40 bg-ceres-blue/30 blur-3xl mx-auto"></div>
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
          <div className="w-full h-full rounded-full bg-ceres-blue glow-effect"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HologramAvatar;
