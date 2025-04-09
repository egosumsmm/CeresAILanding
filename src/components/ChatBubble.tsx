
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatBubbleProps {
  message: string;
  sender: 'ai' | 'user';
  avatar?: string;
  aiName?: string;
  delay?: number;
  typing?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  sender,
  avatar,
  aiName = 'Ceres',
  delay = 0,
  typing = false
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  
  useEffect(() => {
    if (sender === 'ai' && typing && typingIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(message.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 30);
      
      return () => clearTimeout(timeout);
    } else if (sender === 'ai' && typing && typingIndex >= message.length) {
      setTypingComplete(true);
    } else if (!typing) {
      setDisplayedText(message);
    }
  }, [typing, typingIndex, message, sender]);
  
  const bubbleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.3 } }
  };
  
  return (
    <motion.div
      className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
      initial="hidden"
      animate="visible"
      variants={bubbleVariants}
    >
      {sender === 'ai' && (
        <div className="mr-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-full overflow-hidden hologram">
            {avatar ? (
              <img src={avatar} alt={aiName} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-ceres-purple flex items-center justify-center text-white font-bold">
                {aiName[0]}
              </div>
            )}
          </div>
        </div>
      )}
      
      <div 
        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
          sender === 'user' 
            ? 'bg-ceres-purple text-white rounded-br-none' 
            : 'bg-card border border-ceres-purple/30 glow-effect rounded-bl-none'
        }`}
      >
        {sender === 'ai' && typing && !typingComplete ? (
          <>
            <p className="text-sm">{displayedText}</p>
            <AnimatePresence>
              {typingIndex < message.length && (
                <motion.span
                  className="inline-block ml-1"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
                >
                  ▌
                </motion.span>
              )}
            </AnimatePresence>
          </>
        ) : (
          <p className="text-sm">{message}</p>
        )}
      </div>
      
      {sender === 'user' && (
        <div className="ml-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white">
            <span className="text-xs">You</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ChatBubble;
