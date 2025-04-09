
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  return (
    <motion.header
      className="py-4 px-6 flex items-center justify-between max-w-7xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <motion.div 
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-ceres-purple via-ceres-blue to-ceres-purple flex items-center justify-center text-white font-bold text-xl mr-3"
          whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          C
        </motion.div>
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-r from-ceres-purple to-ceres-blue bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          CeresAI
        </motion.h1>
      </div>
      
      <nav className="hidden md:flex items-center space-x-6">
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#why-ceres">Why CeresAI</NavLink>
        <NavLink href="#companions">Companions</NavLink>
        <Button className="bg-ceres-purple hover:bg-ceres-purple-dark">
          Join Beta
        </Button>
      </nav>
      
      <div className="md:hidden">
        <Button variant="ghost" size="icon" className="text-ceres-neutral-dark">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
    </motion.header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="text-ceres-neutral-dark hover:text-ceres-purple transition-colors relative group"
    >
      {children}
      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-ceres-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </a>
  );
};

export default Header;
