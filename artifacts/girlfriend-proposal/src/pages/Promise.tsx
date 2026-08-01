import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarField } from '@/components/StarField';
import { HeartFloat } from '@/components/HeartFloat';

export function PromisePage({ onNext }: { onNext: () => void }) {
  const lines = [
    "You might be far away.",
    "But you're not far from my thoughts.",
    "Until we can actually sit next to each other,",
    "I'll happily keep crossing the distance",
    "one call,",
    "one conversation,",
    "one stupid meme,",
    "and one goodnight at a time."
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    // Darken body background smoothly
    document.body.style.transition = 'background-color 2s ease';
    document.body.style.backgroundColor = 'hsl(330 15% 10%)'; // Dark mode background
    document.documentElement.classList.add('dark'); // Force dark mode variables if supported

    return () => {
      document.body.style.backgroundColor = '';
      document.documentElement.classList.remove('dark');
    };
  }, []);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const delay = Math.max(2000, lines[currentLineIndex].length * 60);
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowFinal(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, lines.length, lines]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[80vh] relative z-10 text-white">
      <StarField />
      <HeartFloat />
      
      <div className="flex items-center justify-center w-full mb-16 h-12 relative">
        <motion.div 
          className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)]"
          initial={{ x: -100 }}
          animate={{ x: showFinal ? -30 : -100 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <div className="absolute left-1/2 -translate-x-1/2 w-48 border-t-2 border-dashed border-white/20 h-0" />
        <motion.div 
          className="w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_var(--color-accent)]"
          initial={{ x: 100 }}
          animate={{ x: showFinal ? 30 : 100 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      <div className="h-48 flex items-center justify-center text-center px-4 w-full">
        <AnimatePresence mode="wait">
          {!showFinal ? (
            currentLineIndex < lines.length && (
              <motion.p
                key={currentLineIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
                className="text-xl md:text-2xl font-serif text-white/90 font-medium"
              >
                {lines[currentLineIndex]}
              </motion.p>
            )
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center cursor-pointer"
              onClick={onNext}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 drop-shadow-[0_0_15px_rgba(255,100,130,0.5)]">
                Distance doesn't stand a chance. ❤️
              </h2>
              <span className="text-xs text-white/40 uppercase tracking-widest animate-pulse mt-4">
                Tap to continue
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
