import React from 'react';
import { motion } from 'framer-motion';
import { CuteButton } from '../components/CuteButton';
import { ProgressBar } from '../components/ProgressBar';
import { CONFIG } from '../data/config';

export function Survey({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-[100dvh] flex flex-col justify-center p-6 max-w-md mx-auto w-full"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">I ran a survey.</h2>
        <p className="text-muted-foreground">About {CONFIG.herName}. The results are extremely accurate.</p>
      </div>

      <div className="bg-card border border-card-border rounded-3xl p-6 shadow-sm mb-8">
        <ProgressBar label="Cuteness level" percentage={110} caption="chart is broken" />
        <ProgressBar label="Clingy-ness" percentage={97} caption="we love this" />
        <ProgressBar label="Yapping (words per minute)" percentage={99} caption="never stop" />
        <ProgressBar label="Penguin energy" percentage={100} caption="🐧🐧🐧🐧🐧" isCustomFill="🐧🐧🐧🐧🐧" />
        <ProgressBar label="Height" percentage={12} caption="pocket-sized. iconic." />
        
        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground italic">
            Survey conducted by: {CONFIG.myName} (I have no regrets)
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <CuteButton onClick={onNext}>
          Continue →
        </CuteButton>
      </div>
    </motion.div>
  );
}
