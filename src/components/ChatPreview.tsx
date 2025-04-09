
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  avatar?: string;
}

interface ChatPreviewProps {
  aiName: string;
  aiAvatar: string;
  delay?: number;
}

const ChatPreview: React.FC<ChatPreviewProps> = ({
  aiName,
  aiAvatar,
  delay = 0
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  
  const conversation = [
    {
      id: 1,
      text: `Hi ${aiName}, how are you today?`,
      sender: 'user' as const
    },
    {
      id: 2,
      text: "I'm doing well! I was just thinking about you. How has your day been?",
      sender: 'ai' as const,
      avatar: aiAvatar
    },
    {
      id: 3,
      text: "It's been busy but productive. I could use some relaxation though.",
      sender: 'user' as const
    },
    {
      id: 4,
      text: "I remember you enjoy ambient music when relaxing. Would you like me to find something new for you to try?",
      sender: 'ai' as const,
      avatar: aiAvatar
    }
  ];
  
  useEffect(() => {
    if (currentStep < conversation.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, conversation[currentStep]]);
        setCurrentStep(currentStep + 1);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep, conversation]);
  
  return (
    <motion.div
      className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-ceres-neutral-light"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="bg-ceres-purple p-4 text-white flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src={aiAvatar} alt={aiName} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-medium">{aiName}</h3>
      </div>
      
      <div className="p-4 h-64 overflow-y-auto flex flex-col gap-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`max-w-[80%] ${
              message.sender === 'user'
                ? 'bg-ceres-neutral-light rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-ceres-neutral-darkest'
                : 'bg-ceres-purple/10 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-ceres-neutral-darkest'
            } p-3 relative`}>
              {message.sender === 'ai' && (
                <div className="absolute left-[-16px] bottom-0 w-4 h-4 overflow-hidden">
                  <img 
                    src={message.avatar} 
                    alt={aiName} 
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </div>
              )}
              <p className="text-sm">{message.text}</p>
            </div>
          </motion.div>
        ))}
        
        {currentStep < conversation.length && (
          <div className="flex items-center justify-center py-2">
            <span className="w-2 h-2 bg-ceres-purple rounded-full animate-pulse mr-1"></span>
            <span className="w-2 h-2 bg-ceres-purple rounded-full animate-pulse mx-1" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-ceres-purple rounded-full animate-pulse ml-1" style={{ animationDelay: '0.4s' }}></span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChatPreview;
