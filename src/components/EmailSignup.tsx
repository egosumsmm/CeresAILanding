import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email.includes('@') || email.trim().length < 5) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert the email into the signupswarm table.
      const { error } = await supabase
        .from('signupswarm')
        .insert([{ email: email.trim() }]);

      if (error) {
        // Check for duplicate key violation (Postgres error code 23505).
        if (error.code === '23505') {
          toast.error('This email is already signed up.');
        } else {
          console.error('Error saving email to Supabase:', error);
          toast.error('Something went wrong. Please try again.');
        }
      } else {
        setEmail('');
        toast.success('Welcome to CeresAI! You will hear from us soon.');
      }
    } catch (err) {
      console.error('Exception when saving email:', err);
      toast.error('Connection error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-2 sm:px-0">
      <motion.form 
        onSubmit={handleSubmit}
        className="p-1.5 rounded-xl bg-gradient-to-r from-ceres-purple via-ceres-blue to-ceres-pink"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex bg-card rounded-lg p-1.5 overflow-hidden neon-border">
          <div className="flex-grow relative">
            <Input
              type="email"
              placeholder=""
              className="flex-grow terminal-input border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-card pl-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="absolute top-0 left-0 h-full flex items-center pl-2 text-ceres-purple">
              &gt;
            </div>
            {email === '' && showCursor && (
              <div className="absolute top-0 left-6 h-full flex items-center">
                <div className="h-5 w-2 bg-ceres-purple-light animate-pulse"></div>
              </div>
            )}
          </div>
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
                Accessing...
              </span>
            ) : 'Join Beta'}
          </Button>
        </div>
      </motion.form>
      <motion.p 
        className="text-center text-sm text-ceres-neutral mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.3 }}
      >
        Enter clearance code for AI companion access
      </motion.p>
    </div>
  );
};

export default EmailSignup;
