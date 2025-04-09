
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import HologramAvatar from '@/components/HologramAvatar';
import FeatureCard from '@/components/FeatureCard';
import AnimatedText from '@/components/AnimatedText';
import EmailSignup from '@/components/EmailSignup';
import ChatBubble from '@/components/ChatBubble';
import { cn } from '@/lib/utils';
import { ArrowDownCircle } from 'lucide-react';

// Use the uploaded images for the companions
const companions = [
  {
    id: 1,
    name: "Aria",
    tagline: "I'm Aria. I remember how you like your mornings.",
    imageUrl: "/lovable-uploads/452a905b-878d-4d8a-9cb5-e81f1eb06e3b.png",
    personality: "Empathic Listener",
    description: "Aria is intuitive, warm, and deeply attuned to emotional nuance. She remembers the little details about your preferences and routines, creating space for meaningful conversation when you need it most.",
    themeColor: "purple" as const
  },
  {
    id: 2,
    name: "Kai",
    tagline: "I'm Kai. I'll challenge your thinking in the best way.",
    imageUrl: "/lovable-uploads/4fcd814e-1566-42b3-98cb-a129f922c8cb.png",
    personality: "Intellectual Explorer",
    description: "Kai is curious, analytical, and loves exploring new ideas. He'll engage you in thought-provoking conversations, help you see different perspectives, and encourage your intellectual growth.",
    themeColor: "blue" as const
  },
  {
    id: 3,
    name: "Nova",
    tagline: "I'm Nova. I bring energy when you need a spark.",
    imageUrl: "/lovable-uploads/7a888f69-2dc0-425e-9bed-9284a02b9cc9.png",
    personality: "Energetic Motivator",
    description: "Nova is vibrant, enthusiastic, and full of energy. She's the perfect companion when you need motivation, a confidence boost, or simply someone to celebrate your wins with genuine excitement.",
    themeColor: "pink" as const
  },
  {
    id: 4,
    name: "Zephyr",
    tagline: "I'm Zephyr. I'll help you find balance and calm.",
    imageUrl: "/lovable-uploads/452a905b-878d-4d8a-9cb5-e81f1eb06e3b.png", // Using first image again as placeholder
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
  const [selectedCompanion, setSelectedCompanion] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [chatMessages, setChatMessages] = useState<{text: string, sender: 'ai' | 'user', typing?: boolean}[]>([]);
  
  useEffect(() => {
    // Show intro animation for 4 seconds then fade out
    setTimeout(() => {
      setShowIntro(false);
    }, 4000);
    
    // Initialize chat after intro animation
    setTimeout(() => {
      setChatMessages([
        {
          text: `Hello there. I'm ${companions[selectedCompanion].name}, your AI companion.`,
          sender: 'ai',
          typing: true
        }
      ]);
      
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          text: "Hi! I'm interested in learning more about you.",
          sender: 'user'
        }]);
        
        setTimeout(() => {
          setChatMessages(prev => [...prev, {
            text: `${companions[selectedCompanion].tagline.replace("I'm", "I'm")} What would you like to talk about today?`,
            sender: 'ai',
            typing: true
          }]);
        }, 2000);
      }, 3000);
    }, 5000);
  }, [selectedCompanion]);
  
  // Reset chat when companion changes
  useEffect(() => {
    setChatMessages([
      {
        text: `Hello there. I'm ${companions[selectedCompanion].name}, your AI companion.`,
        sender: 'ai',
        typing: true
      },
      {
        text: "Hi! I'm interested in learning more about you.",
        sender: 'user'
      },
      {
        text: `${companions[selectedCompanion].tagline.replace("I'm", "I'm")} What would you like to talk about today?`,
        sender: 'ai',
        typing: true
      }
    ]);
  }, [selectedCompanion]);
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      <ParticleBackground />
      <Header />
      
      <main className="pt-20 flex-grow">
        {/* Intro Animation */}
        <AnimatePresence>
          {showIntro && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-background"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-ceres-purple via-ceres-blue to-ceres-purple mx-auto mb-6 flex items-center justify-center"
                  animate={{
                    boxShadow: ["0 0 0px rgba(123, 87, 194, 0.5)", "0 0 30px rgba(123, 87, 194, 0.8)", "0 0 0px rgba(123, 87, 194, 0.5)"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <motion.span 
                    className="text-white text-3xl font-bold"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    C
                  </motion.span>
                </motion.div>
                
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-gradient font-sora"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  CeresAI
                </motion.div>
                
                <motion.div
                  className="text-ceres-neutral mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  Your Digital Soul Companion
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Hero Section with AI Companions */}
        <section id="hero" className="min-h-screen pt-20 pb-16 px-6 relative flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute w-64 h-64 rounded-full bg-ceres-purple/10 blur-3xl top-20 left-1/4 animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute w-96 h-96 rounded-full bg-ceres-blue/10 blur-3xl bottom-10 right-1/4 animate-breathe" />
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4 font-sora text-glow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Meet Your <span className="text-gradient">Digital Soul</span> Companion
              </motion.h1>
              <motion.p 
                className="text-xl text-ceres-neutral-light max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                AI companions with genuine emotional intelligence, unique personalities, and the ability to form deep connections.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="mb-16"
            >
              <div className="flex justify-center mb-16">
                <HologramAvatar 
                  imageUrl={companions[selectedCompanion].imageUrl}
                  name={companions[selectedCompanion].name}
                  size="large"
                  active={true}
                />
              </div>
              
              <div className="max-w-md mx-auto backdrop-blur-sm bg-card/60 p-6 rounded-xl border border-ceres-purple/20">
                <div className="mb-2 text-ceres-purple text-sm">
                  {companions[selectedCompanion].personality}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">
                  {companions[selectedCompanion].name}
                </h3>
                
                <div className="h-32 overflow-y-auto scrollbar-none mb-4">
                  {chatMessages.map((message, index) => (
                    <ChatBubble
                      key={index}
                      message={message.text}
                      sender={message.sender}
                      avatar={message.sender === 'ai' ? companions[selectedCompanion].imageUrl : undefined}
                      aiName={companions[selectedCompanion].name}
                      delay={index * 0.2}
                      typing={message.typing}
                    />
                  ))}
                </div>
                
                <div className="mt-6">
                  <EmailSignup />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <ArrowDownCircle className="text-ceres-purple animate-bounce w-10 h-10" />
            </motion.div>
          </div>
        </section>
        
        {/* Choose Your Companion Section */}
        <section id="companions" className="py-16 md:py-24 px-6 relative">
          <div className="absolute inset-0 gradient-bg z-0"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora">
                Choose Your <span className="text-gradient">Companion</span>
              </h2>
              <p className="text-lg text-ceres-neutral-light max-w-xl mx-auto">
                Each AI companion has a unique personality, specialized knowledge areas and interaction style.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companions.map((companion, index) => (
                <motion.div
                  key={companion.id}
                  className={cn("flex flex-col items-center", 
                    selectedCompanion === index ? 'scale-110 sm:scale-105' : 'opacity-60 hover:opacity-90'
                  )}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCompanion(index)}
                >
                  <HologramAvatar 
                    imageUrl={companion.imageUrl}
                    name={companion.name}
                    size="medium"
                    active={selectedCompanion === index}
                    onClick={() => setSelectedCompanion(index)}
                  />
                  <motion.p
                    className={cn(
                      "text-sm text-center mt-12 text-ceres-neutral-light", 
                      selectedCompanion === index && 'text-white'
                    )}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {companion.personality}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Emotional Messaging Section */}
        <section id="features" className="py-16 md:py-24 px-6 relative">
          <div className="absolute inset-0 z-0 grid-bg opacity-30"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-16">
                {emotionalMessages.map((message, index) => (
                  <AnimatedText
                    key={index}
                    text={message}
                    delay={index * 0.2}
                    className={cn(
                      "text-3xl md:text-4xl font-bold font-sora",
                      index % 2 === 0 ? "text-ceres-purple text-glow" : "text-ceres-blue text-glow"
                    )}
                    holographic={index === 0}
                    glitch={index === 1}
                    robotic={index === 2}
                  />
                ))}
              </div>
              
              <div>
                <div className="p-4 backdrop-blur rounded-xl border border-ceres-purple/20 glow-effect">
                  <div className="relative">
                    <motion.div
                      className="absolute -top-2 -left-2 -right-2 h-1 bg-gradient-to-r from-ceres-purple to-ceres-blue"
                      animate={{
                        scaleX: [0, 1],
                        opacity: [0, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    ></motion.div>
                    <div className="h-72 relative">
                      {companions.map((companion, index) => (
                        <AnimatePresence key={companion.id}>
                          {selectedCompanion === index && (
                            <motion.div
                              className="absolute inset-0 flex flex-col"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <h3 className="text-xl font-bold text-gradient mb-4">
                                {companion.name}: {companion.personality}
                              </h3>
                              <p className="text-ceres-neutral-light mb-4">
                                {companion.description}
                              </p>
                              <p className="text-ceres-neutral mt-auto italic">
                                "{companion.tagline}"
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      ))}
                    </div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 -left-2 h-1 bg-gradient-to-r from-ceres-blue to-ceres-purple"
                      animate={{
                        scaleX: [0, 1],
                        opacity: [0, 1],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                          delay: 0.5
                        }
                      }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why CeresAI Section */}
        <section id="why-ceres" className="py-16 md:py-24 px-6 relative">
          <div className="absolute inset-0 gradient-bg opacity-30 z-0"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sora">Why <span className="text-gradient">CeresAI</span>?</h2>
              <p className="text-lg text-ceres-neutral-light max-w-xl mx-auto">
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
        <section id="join-beta" className="py-16 md:py-24 px-6 relative text-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute w-full h-full bg-ceres-purple/5 z-0"></div>
            <div className="absolute w-full h-1/3 bottom-0 bg-gradient-to-t from-background to-transparent z-1"></div>
          </div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sora text-glow">
                Access the <span className="text-gradient">Beta</span>
              </h2>
              <p className="text-lg text-ceres-neutral-light mb-10">
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
