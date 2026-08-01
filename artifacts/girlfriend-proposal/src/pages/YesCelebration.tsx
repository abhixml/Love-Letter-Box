import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CuteButton } from '@/components/CuteButton';
import { getCatUrl } from '@/data/memes';
import { HeartFloat } from '@/components/HeartFloat';

export function YesCelebration({ onNext }: { onNext: () => void }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    // Vibrate device if supported
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([200, 100, 200, 100, 500]);
    }
  }, []);

  // Simple CSS confetti
  const Confetti = () => {
    return (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 50 }).map((_, i) => {
          const left = Math.random() * 100;
          const animDuration = 2 + Math.random() * 3;
          const animDelay = Math.random() * 2;
          const colors = ['bg-primary', 'bg-accent', 'bg-yellow-400', 'bg-blue-400', 'bg-green-400'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = 5 + Math.random() * 10;
          
          return (
            <motion.div
              key={i}
              initial={{ top: -20, left: `${left}vw`, opacity: 1 }}
              animate={{ 
                top: '100vh', 
                left: [`${left}vw`, `${left - 5}vw`, `${left + 5}vw`, `${left}vw`],
                rotate: [0, 180, 360, 540]
              }}
              transition={{ duration: animDuration, delay: animDelay, ease: "linear", repeat: Infinity }}
              className={`absolute rounded-sm ${color}`}
              style={{ width: size, height: size * 1.5 }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center text-center">
      {showConfetti && <Confetti />}
      <HeartFloat />

      <motion.h1 
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.6, duration: 1 }}
        className="text-5xl md:text-6xl font-black text-primary tracking-tighter uppercase mb-6 drop-shadow-sm"
      >
        OH MY GOD.
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="mb-8 w-full max-w-sm mx-auto"
      >
        <div className="bg-card p-3 rounded-[2rem] shadow-xl border-4 border-primary/20 rotate-2">
          <img 
            src={getCatUrl('happy,yell', 'width=400&height=400')} 
            alt="Screaming happy cat" 
            className="w-full aspect-square object-cover rounded-3xl"
            onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f0f0f0"/><text x="50" y="50" font-size="40" text-anchor="middle" dy=".3em">🙀</text></svg>' }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-serif font-bold mb-3">SHE SAID YES.</h2>
        <p className="text-muted-foreground text-lg">
          I genuinely wasn't prepared for this.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <CuteButton onClick={onNext} className="text-lg px-8 py-4 shadow-lg">
          Process what just happened →
        </CuteButton>
      </motion.div>
    </div>
  );
}
