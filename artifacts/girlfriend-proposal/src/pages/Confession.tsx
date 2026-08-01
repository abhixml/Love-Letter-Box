import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CuteButton } from '@/components/CuteButton';
import { HeartFloat } from '@/components/HeartFloat';
import { StarField } from '@/components/StarField';

export function Confession({ onNext }: { onNext: () => void }) {
  const lines = [
    "Okay.",
    "No more jokes for a second.",
    "I genuinely really like you.",
    "I like talking to you.",
    "I like having you in my life.",
    "And even though there are kilometres between us, somehow you've become someone I really look forward to hearing from.",
    "I don't know exactly what the future looks like.",
    "But I'd really like to find out.",
    "With you."
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      // Calculate delay based on line length so longer lines stay on screen longer
      const delay = Math.max(2500, lines[currentLineIndex].length * 60);
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowQuestion(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, lines.length, lines]);

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center relative">
      <HeartFloat />
      <StarField />
      
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4">
        <AnimatePresence mode="wait">
          {!showQuestion ? (
            currentLineIndex < lines.length && (
              <motion.p
                key={currentLineIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed max-w-md"
              >
                {lines[currentLineIndex]}
              </motion.p>
            )
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-xl font-serif text-muted-foreground mb-4"
              >
                So...
              </motion.span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight drop-shadow-sm">
                Will you be my girlfriend? ❤️
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="text-sm text-muted-foreground italic mb-12"
              >
                — from someone who has clearly spent too much time making this website
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
              >
                <CuteButton onClick={onNext} className="text-lg px-8 py-4 shadow-lg shadow-primary/20">
                  Time to answer
                </CuteButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
