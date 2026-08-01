import React from 'react';
import { motion } from 'framer-motion';
import { ProgressBar } from '@/components/ProgressBar';
import { CuteButton } from '@/components/CuteButton';
import { CatMeme } from '@/components/CatMeme';
import { getCatUrl } from '@/data/memes';

export function Investigation({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full flex flex-col w-full">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm font-bold text-primary tracking-widest uppercase mb-2 text-center"
      >
        Stage 1
      </motion.h2>
      
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-serif font-bold text-foreground mb-4 text-center leading-tight"
      >
        THE OFFICIAL INVESTIGATION
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-muted-foreground mb-8 text-center"
      >
        I have conducted extensive research. By "research", I mean I overthought this for an unreasonable amount of time.
      </motion.p>
      
      <CatMeme 
        url={getCatUrl('nerd,glasses', 'width=400&height=400')} 
        caption="checking the data" 
        alt="Cat doing research"
        delay={0.6}
        className="mb-8 w-full"
      />
      
      <div className="bg-card p-5 rounded-2xl shadow-sm border border-card-border mb-8">
        <ProgressBar label="Thinking about you" targetPercent={97} delay={1.0} />
        <ProgressBar label="Acting normal" targetPercent={12} delay={1.2} />
        <ProgressBar label="Overthinking your messages" targetPercent={100} delay={1.4} />
        <ProgressBar label="Being productive" targetPercent={2} delay={1.6} />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0 }}
          className="text-xs text-center text-muted-foreground mt-4 italic border-t border-border pt-3"
        >
          Scientific accuracy: questionable<br/>
          Emotional accuracy: unfortunately very high
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5 }}
      >
        <CuteButton onClick={onNext} fullWidth>
          Continue investigation →
        </CuteButton>
      </motion.div>
    </div>
  );
}
