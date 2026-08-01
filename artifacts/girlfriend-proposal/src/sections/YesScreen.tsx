import React from 'react';
import { motion } from 'framer-motion';
import { Confetti } from '../components/Confetti';
import { HeartFloat } from '../components/HeartFloat';

export function YesScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-[100dvh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
    >
      <Confetti />
      <HeartFloat />
      
      <div className="z-10 flex flex-col items-center">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-7xl mb-6"
        >
          🐧
        </motion.div>
        
        <h1 className="text-5xl font-bold mb-4 text-primary font-serif">
          OH MY GOD. 🎉
        </h1>
        
        <p className="text-lg text-foreground font-medium mb-8">
          She said yes. The penguin council is THRIVING.
        </p>

        <div className="bg-card border border-card-border p-4 rounded-2xl shadow-sm text-sm mb-12 max-w-sm w-full">
          <p className="text-muted-foreground line-through decoration-destructive mb-1">
            Before: emotionally chaotic
          </p>
          <p className="text-primary font-bold">
            After: emotionally chaotic but make it official ❤️
          </p>
        </div>

        <button 
          onClick={onRestart}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
        >
          restart ↻
        </button>
      </div>
    </motion.div>
  );
}
