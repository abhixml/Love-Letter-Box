import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CuteButton } from '../components/CuteButton';
import { HeartFloat } from '../components/HeartFloat';

export function TheAsk({ onYes, onNo }: { onYes: () => void, onNo: () => void }) {
  const [step, setStep] = useState(0);

  const lines = [
    "Okay.",
    "No more jokes.",
    "I genuinely like you a lot.",
    "You feel like someone I don't want to imagine my days without.",
    "So..."
  ];

  useEffect(() => {
    if (step < lines.length) {
      const timer = setTimeout(() => {
        setStep(s => s + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [step, lines.length]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backgroundColor: "hsl(340, 20%, 99%)" }}
      exit={{ opacity: 0 }}
      className="min-h-[100dvh] flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full relative overflow-hidden"
    >
      <HeartFloat />
      
      <div className="z-10 w-full text-center space-y-6 flex flex-col items-center justify-center flex-1">
        <div className="space-y-4 mb-12 min-h-[150px]">
          <AnimatePresence>
            {lines.map((line, i) => (
              i < step && (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-foreground/80 font-serif text-lg"
                >
                  {line}
                </motion.p>
              )
            ))}
          </AnimatePresence>
        </div>

        {step >= lines.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4 leading-tight">
              Will you be my girlfriend? 🐧❤️
            </h1>
            <p className="text-xs text-muted-foreground italic mb-12">
              — from someone who made an entire website and has zero chill
            </p>

            <div className="flex flex-col gap-4 w-full max-w-[200px]">
              <CuteButton onClick={onYes} className="w-full py-4 text-lg bg-primary text-white shadow-xl shadow-primary/40 hover:scale-105 transition-transform">
                YES ❤️
              </CuteButton>
              <CuteButton onClick={onNo} variant="ghost" className="w-full text-sm hover:bg-black/5">
                No 🥺
              </CuteButton>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
