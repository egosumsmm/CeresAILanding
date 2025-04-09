
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  emoji: string;
  color: "purple" | "blue" | "pink" | "teal";
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  emoji,
  color,
  delay = 0
}) => {
  const bgColors = {
    purple: "bg-ceres-purple/10",
    blue: "bg-ceres-blue/10",
    pink: "bg-ceres-pink/10",
    teal: "bg-ceres-teal/10"
  };
  
  const textColors = {
    purple: "text-ceres-purple",
    blue: "text-ceres-blue",
    pink: "text-ceres-pink",
    teal: "text-ceres-teal"
  };
  
  const borderColors = {
    purple: "border-ceres-purple/20",
    blue: "border-ceres-blue/20",
    pink: "border-ceres-pink/20",
    teal: "border-ceres-teal/20"
  };
  
  const glowColors = {
    purple: "shadow-[0_0_15px_rgba(123,87,194,0.2)]",
    blue: "shadow-[0_0_15px_rgba(66,165,245,0.2)]",
    pink: "shadow-[0_0_15px_rgba(236,64,122,0.2)]",
    teal: "shadow-[0_0_15px_rgba(38,166,154,0.2)]"
  };
  
  return (
    <motion.div
      className={cn(
        "feature-card backdrop-blur-sm", 
        borderColors[color], 
        glowColors[color]
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex items-start gap-4">
        <motion.div 
          className={cn("emoji-bg", bgColors[color])}
          whileHover={{ scale: 1.1, rotate: [0, -10, 10, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            role="img"
            aria-label={title}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 3,
              repeatType: 'reverse'
            }}
          >
            {emoji}
          </motion.span>
        </motion.div>
        <div>
          <h3 className={cn("text-lg font-semibold mb-2 font-sora", textColors[color])}>{title}</h3>
          <p className="text-ceres-neutral-light">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
