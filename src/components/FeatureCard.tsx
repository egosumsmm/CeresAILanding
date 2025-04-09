
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
  
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex items-start gap-4">
        <div className={cn("emoji-bg", bgColors[color])}>
          <span role="img" aria-label={title}>{emoji}</span>
        </div>
        <div>
          <h3 className={cn("text-lg font-semibold mb-2", textColors[color])}>{title}</h3>
          <p className="text-ceres-neutral-dark">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
