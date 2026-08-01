import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CuteButton } from '../components/CuteButton';
import { HeartFloat } from '../components/HeartFloat';

const NO_WARNINGS = [
  "...are you sure? 🥺 the penguin is watching.",
  "the penguin is crying. this is on you. 🐧😭",
];

export function TheAsk({ onYes, onNo: _onNo }: { onYes: () => void; onNo: () => void }) {
  const [step, setStep] = useState(0);
  const [noCount, setNoCount] = useState(0);

  const lines = [
    "Okay.",
    "No more jokes.",
    "I genuinely like you a lot.",
    "You feel like someone I don't want to imagine my days without.",
    "So..."
  ];

  useEffect(() => {
    if (step < lines.length) {
      const timer = setTimeout(() => setStep(s => s + 1), 1500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [step, lines.length]);

  const handleNo = () => {
    setNoCount(c => c + 1);
  };

  // Scale factor: 1 → 0.65 → 0.35 then gone
  const noScales = [1, 0.65, 0.35];
  const noScale = noScales[noCount] ?? 0;
  const noGone = noCount >= 2;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[100dvh] flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full relative overflow-hidden"
    >
      <HeartFloat />

      <div className="z-10 w-full text-center space-y-6 flex flex-col items-center justify-center flex-1">
        <div className="space-y-4 mb-12 min-h-[150px]">
          <AnimatePresence>
            {lines.map((line, i) =>
              i < step ? (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-foreground/80 font-serif text-lg"
                >
                  {line}
                </motion.p>
              ) : null
            )}
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
            <p className="text-xs text-muted-foreground italic mb-8">
              — from someone who made an entire website and has zero chill
            </p>

            {/* Warning message */}
            <AnimatePresence mode="wait">
              {noCount > 0 && !noGone && (
                <motion.p
                  key={noCount}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm text-rose-400 font-medium mb-4"
                >
                  {NO_WARNINGS[noCount - 1]}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 w-full max-w-[220px]">
              {/* YES button — always full size */}
              <CuteButton
                onClick={onYes}
                className="w-full py-4 text-lg bg-primary text-white shadow-xl shadow-primary/40 hover:scale-105 transition-transform"
              >
                YES ❤️
              </CuteButton>

              {/* After 2 nos: replace NO with a second YES option */}
              <AnimatePresence mode="wait">
                {noGone ? (
                  <motion.div
                    key="yes-or-yes"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="w-full"
                  >
                    <CuteButton
                      onClick={onYes}
                      className="w-full py-3 text-base bg-pink-200 text-primary font-bold hover:scale-105 transition-transform"
                    >
                      yes (but make it cute) 🐧
                    </CuteButton>
                    <p className="text-[10px] text-muted-foreground mt-1 text-center">
                      the no button has been removed for everyone's safety
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-btn"
                    animate={{ scale: noScale }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{ transformOrigin: 'center' }}
                    className="w-full"
                  >
                    <CuteButton
                      onClick={handleNo}
                      variant="ghost"
                      className="w-full text-sm hover:bg-black/5"
                    >
                      No 🥺
                    </CuteButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
