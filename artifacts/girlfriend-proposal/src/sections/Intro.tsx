import React from 'react';
import { motion } from 'framer-motion';
import { CuteButton } from '../components/CuteButton';

interface Props {
  onNext: () => void;
}

export function Intro({ onNext }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[100dvh] flex flex-col items-center justify-center p-6 text-center"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
        className="text-6xl mb-6"
      >
        🐧
      </motion.div>
      
      <div className="bg-destructive/10 text-destructive text-xs font-bold px-3 py-1 rounded-full tracking-wider mb-6">
        ⚠️ IMPORTANT ANNOUNCEMENT ⚠️
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
        I made you something.
      </h1>
      
      <p className="text-muted-foreground text-sm mb-12 italic">
        "No adults were consulted in this process."
      </p>
      
      <CuteButton onClick={onNext}>
        Okay what is this 🐧
      </CuteButton>
    </motion.div>
  );
}
