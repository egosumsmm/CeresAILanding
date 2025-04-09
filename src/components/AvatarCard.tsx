
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AvatarCardProps {
  name: string;
  tagline: string;
  imageUrl: string;
  personality: string;
  description: string;
  themeColor: "purple" | "blue" | "pink" | "teal";
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  name,
  tagline,
  imageUrl,
  personality,
  description,
  themeColor
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const themeColors = {
    purple: "bg-ceres-purple",
    blue: "bg-ceres-blue",
    pink: "bg-ceres-pink",
    teal: "bg-ceres-teal"
  };
  
  return (
    <>
      <motion.div 
        className="avatar-card group cursor-pointer h-96"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-full h-full overflow-hidden">
          <motion.div 
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10",
              isHovered && "to-black/30"
            )}
            animate={{ opacity: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Badge */}
          <div className={cn(
            "absolute top-3 right-3 z-20 text-xs px-2 py-1 rounded-full text-white font-medium",
            themeColors[themeColor]
          )}>
            {personality}
          </div>
          
          {/* Avatar details */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-5 z-20 text-white"
            initial={{ y: 5, opacity: 0.9 }}
            animate={{ y: isHovered ? 0 : 5, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
            >
              <p className="text-sm opacity-90 mb-3">{tagline}</p>
              <motion.button
                className={cn(
                  "text-sm font-medium px-3 py-1 rounded-full",
                  themeColors[themeColor]
                )}
                whileHover={{ opacity: 0.9 }}
              >
                Meet {name}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Avatar Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <motion.div
            className="bg-white rounded-2xl overflow-hidden max-w-md w-full shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="h-48 relative">
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
              )} />
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
              
              <div className="absolute top-3 right-3">
                <button 
                  className="bg-white/20 backdrop-blur-sm rounded-full p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="absolute bottom-4 left-4 text-white">
                <div className={cn(
                  "inline-block text-xs px-2 py-1 rounded-full text-white font-medium mb-2",
                  themeColors[themeColor]
                )}>
                  {personality}
                </div>
                <h3 className="text-2xl font-semibold">{name}</h3>
              </div>
            </div>
            
            <div className="p-5">
              <p className="text-lg font-medium mb-3 italic">{tagline}</p>
              <p className="text-sm text-gray-600">{description}</p>
              
              <div className="mt-6 flex justify-end">
                <button className={cn(
                  "px-4 py-2 rounded-lg text-white font-medium",
                  themeColors[themeColor]
                )}>
                  Choose {name}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AvatarCard;
