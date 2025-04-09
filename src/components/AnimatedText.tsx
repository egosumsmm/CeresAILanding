
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
  glitch?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  delay = 0,
  className = "",
  glitch = false
}) => {
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
