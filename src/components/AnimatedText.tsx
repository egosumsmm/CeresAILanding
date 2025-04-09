
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
  glitch?: boolean;
  robotic?: boolean;
  holographic?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  delay = 0,
  className = "",
  glitch = false,
  robotic = false,
  holographic = false
}) => {
  if (holographic) {
    const letters = Array.from(text);
    
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: 0.04,
          delayChildren: delay
        }
      })
    };
    
    const child = {
      visible: {
        opacity: 1,
        y: 0,
        filter: "brightness(1.2)",
        textShadow: "0 0 8px rgba(100, 149, 237, 0.8)",
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200
        }
      },
      hidden: {
        opacity: 0,
        y: 20,
        filter: "brightness(1)",
        textShadow: "0 0 0px rgba(100, 149, 237, 0)",
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200
        }
      }
    };
    
    return (
      <motion.div
        className={`${className} inline-block text-ceres-blue`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className={letter === ' ' ? 'inline-block w-2' : 'inline-block'}
            style={{
              textShadow: "0 0 8px rgba(100, 149, 237, 0.8)",
              filter: "brightness(1.2)"
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }
  
  if (robotic) {
    const letters = Array.from(text);
    
    // Typing effect for robots
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: 0.06,
          delayChildren: delay
        }
      })
    };
    
    const child = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200
        }
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200
        }
      }
    };
    
    return (
      <motion.div
        className={`${className} inline-block`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className={letter === ' ' ? 'inline-block w-2' : 'inline-block'}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }
  
  if (glitch) {
    return (
      <motion.div
        className={`glitch ${className}`}
        data-text={text}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {text}
      </motion.div>
    );
  }
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
