import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CuteButton } from '@/components/CuteButton';
import { CatMeme } from '@/components/CatMeme';
import { getCatUrl } from '@/data/memes';

export function CatCouncil({ onNext }: { onNext: () => void }) {
  const [showStamp, setShowStamp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStamp(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    { url: getCatUrl('angry,yell', 'width=300&height=300'), caption: "say yes bro", delay: 0.5 },
    { url: getCatUrl('computer', 'width=300&height=300'), caption: "he made an entire website", delay: 1.2 },
    { url: getCatUrl('sad,cry', 'width=300&height=300'), caption: "this man is COOKED", delay: 1.9 },
    { url: getCatUrl('serious,suit', 'width=300&height=300'), caption: "please stop overthinking and ask her already", delay: 2.6 },
  ];

  return (
    <div className="w-full flex flex-col items-center relative">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-serif font-bold text-foreground mb-8 text-center"
      >
        I consulted the cat council.
      </motion.h1>

      <div className="grid grid-cols-2 gap-4 w-full mb-12">
        {cards.map((card, i) => (
          <CatMeme 
            key={i}
            url={card.url}
            caption={card.caption}
            alt={`Council cat ${i+1}`}
            delay={card.delay}
            className="w-full h-full m-0"
          />
        ))}
      </div>

      {showStamp && (
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="bg-background/60 backdrop-blur-sm absolute inset-0 rounded-3xl" />
          
          <motion.div
            initial={{ scale: 3, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: -15 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="relative z-20 border-8 border-green-600 text-green-600 text-5xl md:text-6xl font-black p-4 rounded-xl shadow-2xl tracking-tighter uppercase backdrop-blur-md bg-white/10 mix-blend-multiply"
          >
            APPROVED ✓
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="relative z-20 mt-8 bg-card p-6 rounded-2xl shadow-xl text-center border border-card-border pointer-events-auto"
          >
            <p className="text-xl font-serif font-bold mb-6">The council has spoken.</p>
            <CuteButton onClick={onNext}>
              Okay, I'll ask her →
            </CuteButton>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
