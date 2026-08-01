import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CuteButton } from '@/components/CuteButton';

export function DatePlanner({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const dates = [
    { icon: "🍿", title: "Movie Date", desc: "We watch something together and pretend we aren't both checking the other person's reaction." },
    { icon: "🎮", title: "Game Date", desc: "Warning: Highly competitive behaviour may occur." },
    { icon: "📞", title: "Call Date", desc: "Talk for approximately 17 hours straight." },
    { icon: "🍕", title: "Food Date", desc: "We both order food and pretend we're eating together." },
    { icon: "🌙", title: "Late Night Talk", desc: "The classic 'one more thing before we sleep' that lasts 3 hours." },
    { icon: "🐈", title: "Cat Date", desc: "We exchange cat memes until one of us collapses." }
  ];

  const handleSelect = (idx: number) => {
    if (confirmed) return;
    setSelected(idx);
    
    // Auto confirm after brief selection preview
    setTimeout(() => {
      setConfirmed(true);
    }, 800);
  };

  return (
    <div className="w-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Next Order of Business</h2>
        <h1 className="text-3xl font-serif font-bold text-foreground mb-3">Okay, girlfriend...</h1>
        <p className="text-muted-foreground">What should our first official date be?</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {dates.map((date, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => handleSelect(idx)}
            className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 ${
              selected === idx 
                ? 'bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]' 
                : confirmed && selected !== idx
                ? 'opacity-40 grayscale pointer-events-none bg-card border-card-border'
                : 'bg-card border-card-border hover:border-primary/50 hover:shadow-sm'
            }`}
          >
            <div className="text-3xl mb-2">{date.icon}</div>
            <h3 className={`font-bold mb-1 ${selected === idx ? 'text-primary-foreground' : 'text-foreground'}`}>
              {date.title}
            </h3>
            <p className={`text-xs ${selected === idx ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              {date.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {confirmed && selected !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center bg-card p-6 rounded-3xl shadow-sm border border-card-border mb-6"
          >
            <div className="text-4xl mb-3">{dates[selected].icon}</div>
            <h3 className="font-serif font-bold text-xl mb-2">Excellent choice.</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Date #001 has officially entered the queue.
            </p>
            <CuteButton onClick={onNext} fullWidth>
              Confirm itinerary →
            </CuteButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
