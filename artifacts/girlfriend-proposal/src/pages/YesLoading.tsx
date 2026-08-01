import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function YesLoading({ onNext }: { onNext: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 1500);
    const timer2 = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer2);
          setTimeout(onNext, 1000);
          return 100;
        }
        // Speed up near the end
        const increment = p > 80 ? 1 : p > 50 ? 5 : 2;
        return p + increment;
      });
    }, 50);

    return () => {
      clearTimeout(timer1);
      clearInterval(timer2);
    };
  }, [onNext]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-destructive text-destructive-foreground font-black text-2xl px-6 py-2 rounded-xl mb-8 uppercase tracking-widest transform -rotate-2"
      >
        WAIT.
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-2xl font-bold text-center mb-10"
      >
        Did you actually just say YES?
      </motion.h2>

      <div className="w-full bg-card p-6 rounded-2xl shadow-sm border border-card-border">
        <div className="flex justify-between text-xs font-mono font-bold mb-2 text-muted-foreground uppercase">
          <span>{phase === 0 ? 'Verifying...' : 'Checking if typo...'}</span>
          <span>{progress}%</span>
        </div>
        
        <div className="font-mono text-primary font-bold overflow-hidden whitespace-nowrap text-xs tracking-tighter">
          {'█'.repeat(Math.floor(progress / 2))}
          {'_'.repeat(50 - Math.floor(progress / 2))}
        </div>
        
        <div className="w-full h-2 bg-muted rounded-full mt-3 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
