import React from 'react';
import { motion } from 'framer-motion';
import { CatMeme } from '@/components/CatMeme';
import { CuteButton } from '@/components/CuteButton';
import { getCatUrl } from '@/data/memes';

export function Landing({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block bg-accent/20 text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-sm"
      >
        ⚠️ IMPORTANT INTERNET BUSINESS ⚠️
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 leading-tight"
      >
        I made you a website.
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-muted-foreground text-lg mb-10 max-w-sm"
      >
        Which is either incredibly cute or a sign that I need adult supervision.
      </motion.p>
      
      <CatMeme 
        url={getCatUrl('cute,confused', 'width=400&height=400')} 
        caption="bro what did you build" 
        alt="Confused cute cat"
        delay={1.2}
        className="mb-10 w-full"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.0 }}
        className="w-full"
      >
        <CuteButton onClick={onNext} fullWidth className="text-lg py-4">
          Okay... what is this?
        </CuteButton>
      </motion.div>
    </div>
  );
}
