
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email.includes('@') || email.trim().length < 5) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast.success('Thank you for joining! We\'ll be in touch soon.');
    }, 1500);
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <motion.form 
        onSubmit={handleSubmit}
        className="p-1.5 rounded-xl bg-gradient-to-r from-ceres-purple via-ceres-blue to-ceres-pink"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex bg-white rounded-lg p-1.5 overflow-hidden">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit"
            className="bg-ceres-purple hover:bg-ceres-purple-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : 'Join Beta'}
          </Button>
        </div>
      </motion.form>
      <motion.p 
        className="text-center text-sm text-ceres-neutral-dark mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.3 }}
      >
        Get early access to your AI companion
      </motion.p>
    </div>
  );
};

export default EmailSignup;
