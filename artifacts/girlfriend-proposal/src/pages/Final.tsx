import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '@/data/config';
import { CuteButton } from '@/components/CuteButton';

export function Final({ onRestart }: { onRestart: () => void }) {
  const [distance, setDistance] = useState(100);

  useEffect(() => {
    const timer1 = setTimeout(() => setDistance(60), 1000);
    const timer2 = setTimeout(() => setDistance(20), 2500);
    const timer3 = setTimeout(() => setDistance(0), 4000);
    
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center text-center min-h-[60vh]">
      <div className="relative w-full max-w-[280px] h-32 flex items-end justify-center mb-12">
        <motion.div 
          className="absolute text-5xl"
          initial={{ left: '0%' }}
          animate={{ left: `${50 - (distance/2)}%`, x: '-100%' }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          🐈
        </motion.div>
        
        <div className="w-full border-b-2 border-dashed border-muted-foreground/30 absolute bottom-2 left-0 z-[-1]"></div>
        
        <motion.div 
          className="absolute text-5xl"
          initial={{ right: '0%' }}
          animate={{ right: `${50 - (distance/2)}%`, x: '100%' }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          🐈‍⬛
        </motion.div>
      </div>

      <div className="font-mono text-sm font-bold text-muted-foreground mb-12 flex justify-center w-full">
        <span className="w-12 text-right">ME</span>
        <span className="w-4 flex justify-center">📍</span>
        <div className="w-40 flex items-center justify-center px-2 overflow-hidden">
          <motion.div 
            className="h-[2px] bg-muted-foreground/40 origin-center"
            initial={{ width: '100%' }}
            animate={{ width: `${distance}%`, opacity: distance === 0 ? 0 : 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
          {distance === 0 && (
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-primary font-bold text-lg"
            >
              US
            </motion.span>
          )}
        </div>
        <span className="w-4 flex justify-center">📍</span>
        <span className="w-12 text-left">YOU</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.5, duration: 1 }}
        className="w-full"
      >
        <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
          Goodnight, {CONFIG.nickname || 'girlfriend'}. ❤️
        </h1>
        <p className="text-muted-foreground text-sm italic mb-12">
          Now go before I make another website.
        </p>

        <CuteButton onClick={onRestart} variant="ghost" className="text-xs uppercase tracking-widest text-muted-foreground mx-auto">
          Restart this ridiculous experience ↻
        </CuteButton>
      </motion.div>
    </div>
  );
}
