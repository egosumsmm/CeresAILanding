
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ceres-neutral-lightest border-t border-ceres-neutral-light py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ceres-purple via-ceres-blue to-ceres-purple flex items-center justify-center text-white font-bold text-sm mr-2">
                C
              </div>
              <h3 className="text-xl font-bold text-gradient">CeresAI</h3>
            </div>
            <p className="text-sm text-ceres-neutral-dark max-w-xs">
              Creating emotionally intelligent AI companions for a more connected digital future.
            </p>
            <div className="mt-4 flex space-x-4">
              <SocialIcon icon="twitter" />
              <SocialIcon icon="instagram" />
              <SocialIcon icon="linkedin" />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-ceres-neutral-darkest mb-4">Product</h4>
            <ul className="space-y-2">
              <FooterLink>Features</FooterLink>
              <FooterLink>AI Companions</FooterLink>
              <FooterLink>Personality Types</FooterLink>
              <FooterLink>Roadmap</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-ceres-neutral-darkest mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Mission</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-ceres-neutral-darkest mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms of Use</FooterLink>
              <FooterLink>Data Protection</FooterLink>
              <FooterLink>AI Ethics</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-ceres-neutral-light text-sm text-ceres-neutral-dark text-center">
          <p>© 2025 CeresAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <li>
      <a href="#" className="text-ceres-neutral-dark hover:text-ceres-purple transition-colors">{children}</a>
    </li>
  );
};

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <a 
      href="#"
      className="w-8 h-8 rounded-full bg-ceres-neutral-light hover:bg-ceres-purple hover:text-white transition-colors flex items-center justify-center"
    >
      {icon === "twitter" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )}
      {icon === "instagram" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )}
      {icon === "linkedin" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )}
    </a>
  );
};

export default Footer;
