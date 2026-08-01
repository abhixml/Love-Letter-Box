import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CuteButton } from '@/components/CuteButton';
import { ProgressBar } from '@/components/ProgressBar';

export function ScientificStudy({ onNext }: { onNext: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1500); // show rows
    const timer2 = setTimeout(() => setStep(2), 3500); // show loading
    const timer3 = setTimeout(() => setStep(3), 6000); // show success
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  return (
    <div className="w-full flex flex-col">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-serif font-bold text-foreground mb-8 text-center"
      >
        I conducted a highly scientific study.
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-card rounded-2xl shadow-sm border border-card-border overflow-hidden mb-8"
      >
        <div className="bg-muted p-3 border-b border-border text-center font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
          RESEARCH PAPER VOL. 1
        </div>
        <div className="p-0">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Do I like you?", "yes"],
                ["Do I enjoy talking to you?", "unfortunately yes"],
                ["Do I think you're cute?", "very much yes"],
                ["Am I normal about this?", "absolutely not"],
              ].map((row, idx) => (
                <motion.tr 
                  key={idx}
                  initial={{ opacity: 0, backgroundColor: 'rgba(255,255,255,0)' }}
                  animate={step >= 1 ? { opacity: 1, backgroundColor: 'var(--color-card)' } : {}}
                  transition={{ delay: idx * 0.4 }}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 text-right font-bold text-primary">{row[1]}</td>
                </motion.tr>
              ))}
              
              <motion.tr 
                initial={{ opacity: 0 }}
                animate={step >= 1 ? { opacity: 1 } : {}}
                transition={{ delay: 2.0 }}
                className="bg-primary/5"
              >
                <td className="p-4 font-bold text-foreground">Would I like you to be my girlfriend?</td>
                <td className="p-4 text-right font-bold text-primary/50 text-lg">...</td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {step >= 2 && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-card p-5 rounded-2xl shadow-sm border border-card-border mb-8 text-center"
        >
          <p className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-widest">Calculating courage...</p>
          <ProgressBar label="" targetPercent={100} delay={0} />
          
          {step >= 3 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 flex flex-col items-center"
            >
              <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                Courage.exe successfully launched
              </div>
              <div className="relative inline-block">
                <div className="text-6xl">🐱👓</div>
                <div className="absolute -bottom-2 -right-4 text-2xl">📋</div>
              </div>
              <p className="text-xs text-muted-foreground font-medium italic mt-3">
                * peer-reviewed by the cat council *
              </p>
            </motion.div>
          )}
        </motion.div>
      )}

      <AnimatePresence>
        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <CuteButton onClick={onNext} fullWidth>
              View council verdict →
            </CuteButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
