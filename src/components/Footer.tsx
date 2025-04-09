
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-8 px-6 border-t border-ceres-purple/20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 flex items-center">
          <motion.div 
            className="w-8 h-8 rounded-xl bg-gradient-to-br from-ceres-purple via-ceres-blue to-ceres-purple flex items-center justify-center text-white font-bold text-lg mr-3"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.7 }}
          >
            C
          </motion.div>
          <motion.h2 
            className="text-xl font-bold bg-gradient-to-r from-ceres-purple to-ceres-blue bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            CeresAI
          </motion.h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <a href="#" className="text-ceres-neutral hover:text-ceres-purple transition-colors">Privacy</a>
          <a href="#" className="text-ceres-neutral hover:text-ceres-purple transition-colors">Terms</a>
          <a href="#" className="text-ceres-neutral hover:text-ceres-purple transition-colors">About</a>
          <a href="#" className="text-ceres-neutral hover:text-ceres-purple transition-colors">Contact</a>
        </div>
        
        <div className="mt-6 md:mt-0">
          <p className="text-sm text-ceres-neutral">© 2025 CeresAI. All rights reserved.</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ceres-purple/30 to-transparent"></div>
    </motion.footer>
  );
};

export default Footer;
