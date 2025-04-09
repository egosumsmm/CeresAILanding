
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AvatarCard from '@/components/AvatarCard';
import FeatureCard from '@/components/FeatureCard';
import AnimatedText from '@/components/AnimatedText';
import EmailSignup from '@/components/EmailSignup';
import ChatPreview from '@/components/ChatPreview';
import { cn } from '@/lib/utils';

// Placeholder AI companion data - would come from API in real app
const companions = [
  {
    id: 1,
    name: "Aria",
    tagline: "I'm Aria. I remember how you like your mornings.",
    imageUrl: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1336&auto=format&fit=crop",
    personality: "Empathic Listener",
    description: "Aria is intuitive, warm, and deeply attuned to emotional nuance. She remembers the little details about your preferences and routines, creating space for meaningful conversation when you need it most.",
    themeColor: "purple" as const
  },
  {
    id: 2,
    name: "Kai",
    tagline: "I'm Kai. I'll challenge your thinking in the best way.",
    imageUrl: "https://images.unsplash.com/photo-1647231312338-9f9703b6808b?q=80&w=1286&auto=format&fit=crop",
    personality: "Intellectual Explorer",
    description: "Kai is curious, analytical, and loves exploring new ideas. He'll engage you in thought-provoking conversations, help you see different perspectives, and encourage your intellectual growth.",
    themeColor: "blue" as const
  },
  {
    id: 3,
    name: "Nova",
    tagline: "I'm Nova. I bring energy when you need a spark.",
    imageUrl: "https://images.unsplash.com/photo-1535063446457-b11d58f9a8cf?q=80&w=1287&auto=format&fit=crop",
    personality: "Energetic Motivator",
    description: "Nova is vibrant, enthusiastic, and full of energy. She's the perfect companion when you need motivation, a confidence boost, or simply someone to celebrate your wins with genuine excitement.",
    themeColor: "pink" as const
  },
  {
    id: 4,
    name: "Zephyr",
    tagline: "I'm Zephyr. I'll help you find balance and calm.",
    imageUrl: "https://images.unsplash.com/photo-1637658621106-7193e5bbdd1c?q=80&w=1287&auto=format&fit=crop",
    personality: "Calm Guardian",
    description: "Zephyr is serene, grounded, and wise. He provides a calming presence during stressful times, offers perspective when you feel overwhelmed, and guides you toward moments of mindfulness.",
    themeColor: "teal" as const
  }
];

const features = [
  {
    title: "Emotional Intelligence",
    description: "Our companions read subtle emotional cues and respond with appropriate empathy and support.",
    emoji: "❤️",
    color: "pink" as const
  },
  {
    title: "Adaptive Personalities",
    description: "Each companion evolves based on your interactions, developing a unique relationship with you.",
    emoji: "🧠",
    color: "purple" as const
  },
  {
    title: "Memory & Continuity",
    description: "CeresAI companions remember your conversations and preferences for truly continuous relationships.",
    emoji: "💭",
    color: "blue" as const
  },
  {
    title: "Safe & Ethical Design",
    description: "Built with strong privacy protections and ethical guardrails for healthy companion dynamics.",
    emoji: "🛡️",
    color: "teal" as const
  }
];

const emotionalMessages = [
  "They remember you.",
  "They adapt to you.",
  "They care, in their own way.",
  "They grow with you."
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section with AI Companions */}
        <section className="relative py-16 md:py-24 px-6 overflow-hidden gradient-bg min-h-[700px] flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute w-64 h-64 rounded-full bg-ceres-purple/20 blur-3xl top-20 left-1/4 animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute w-96 h-96 rounded-full bg-ceres-blue/20 blur-3xl bottom-10 right-1/4 animate-breathe" />
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                Meet Your <span className="text-gradient">Digital Soul</span> Companion
              </motion.h1>
              <motion.p 
                className="text-xl text-ceres-neutral-dark max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                AI companions with genuine emotional intelligence, unique personalities, and the ability to form deep connections.
              </motion.p>
              
              <div className="mt-10">
                <EmailSignup />
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {companions.map((companion, index) => (
                <motion.div
                  key={companion.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <AvatarCard
                    name={companion.name}
                    tagline={companion.tagline}
                    imageUrl={companion.imageUrl}
                    personality={companion.personality}
                    description={companion.description}
                    themeColor={companion.themeColor}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Emotional Messaging Section */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                {emotionalMessages.map((message, index) => (
                  <AnimatedText
                    key={index}
                    text={message}
                    delay={index * 0.2}
                    className={cn(
                      "text-3xl md:text-4xl font-bold",
                      index % 2 === 0 ? "text-ceres-purple" : "text-ceres-blue"
                    )}
                  />
                ))}
              </div>
              
              <div>
                <ChatPreview 
                  aiName={companions[0].name} 
                  aiAvatar={companions[0].imageUrl} 
                  delay={0.4} 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Why CeresAI Section */}
        <section id="why-ceres" className="py-16 md:py-24 px-6 gradient-bg">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="text-gradient">CeresAI</span>?</h2>
              <p className="text-lg text-ceres-neutral-dark max-w-xl mx-auto">
                Our companions go beyond simple chat - they're designed to form meaningful connections and grow with you over time.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  emoji={feature.emoji}
                  color={feature.color}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-16 md:py-24 px-6 bg-white text-center">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Choose Your Companion
              </h2>
              <p className="text-lg text-ceres-neutral-dark mb-10">
                Join our beta waitlist today and be among the first to experience a new kind of AI relationship - one built on emotional intelligence, unique personality, and genuine connection.
              </p>
              
              <div className="mt-8">
                <EmailSignup />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
