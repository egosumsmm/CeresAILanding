
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Add smooth scrolling with offset for the header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 py-4 px-6 z-50 transition-all duration-300",
          isScrolled ? "backdrop-blur-md bg-background/80 shadow-md" : "bg-transparent"
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <motion.div 
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-ceres-purple via-ceres-blue to-ceres-purple flex items-center justify-center text-white font-bold text-xl mr-3"
              whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                C
              </motion.span>
            </motion.div>
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-ceres-purple to-ceres-blue bg-clip-text text-transparent font-sora"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              CeresAI
            </motion.h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection("features")}>Features</NavLink>
            <NavLink onClick={() => scrollToSection("why-ceres")}>Why CeresAI</NavLink>
            <NavLink onClick={() => scrollToSection("companions")}>Companions</NavLink>
            <Button 
              className="bg-ceres-purple hover:bg-ceres-purple-dark bg-opacity-80 backdrop-blur-sm border border-ceres-purple/30 text-glow"
              onClick={() => scrollToSection("join-beta")}
            >
              Join Beta
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-ceres-purple hover:text-ceres-purple-light"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </motion.header>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden flex flex-col pt-24 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col space-y-4 items-center">
              <MobileNavLink onClick={() => scrollToSection("features")}>
                Features
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("why-ceres")}>
                Why CeresAI
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("companions")}>
                Companions
              </MobileNavLink>
              <Button 
                className="bg-ceres-purple hover:bg-ceres-purple-dark w-full mt-4 bg-opacity-80 backdrop-blur-sm border border-ceres-purple/30 text-glow"
                onClick={() => scrollToSection("join-beta")}
              >
                Join Beta
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-ceres-neutral-light group-hover:text-ceres-purple transition-colors relative z-10 font-medium tracking-wider">
        {children}
      </span>
      <motion.span 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-ceres-purple"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

const MobileNavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ 
  onClick,
  children 
}) => {
  return (
    <motion.button
      onClick={onClick}
      className="w-full py-4 border-b border-ceres-purple/20 text-center text-lg font-medium text-ceres-neutral-light hover:text-ceres-purple"
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Header;
