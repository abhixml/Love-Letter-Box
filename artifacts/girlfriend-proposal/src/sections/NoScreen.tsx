import React from 'react';
import { motion } from 'framer-motion';
import { CuteButton } from '../components/CuteButton';

export function NoScreen({ onBack, onRestart }: { onBack: () => void, onRestart: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[100dvh] flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto"
    >
      <div className="text-7xl mb-8 grayscale opacity-80">
        🐧
      </div>
      
      <h2 className="text-2xl font-bold mb-4">The penguin is devastated.</h2>
      
      <div className="space-y-2 mb-10 text-muted-foreground">
        <p>...but no pressure. For real. ❤️</p>
        <p>Take your time. Or don't. Either way the penguin will be here.</p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <CuteButton onClick={onBack} variant="secondary">
          Actually wait →
        </CuteButton>
        <button 
          onClick={onRestart}
          className="text-sm text-muted-foreground hover:text-foreground mt-4 underline underline-offset-4"
        >
          No really, I'm sure
        </button>
        <p className="text-xs text-muted-foreground mt-2 opacity-60">
          Okay 🐧❤️ the offer stands.
        </p>
      </div>
    </motion.div>
  );
}
