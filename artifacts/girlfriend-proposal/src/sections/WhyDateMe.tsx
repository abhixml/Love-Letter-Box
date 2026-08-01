import React from 'react';
import { motion } from 'framer-motion';
import { CuteButton } from '../components/CuteButton';

export function WhyDateMe({ onNext }: { onNext: () => void }) {
  const reasons = [
    "I come with unlimited attention — subscription is free, cancellation is emotionally complicated.",
    "I will remember the tiny things you tell me — including things you forgot you ever told me.",
    "You'll always have someone to annoy — apparently that's one of the main benefits.",
    "I'm basically a professional meme supplier — your daily dose of stupid reels is guaranteed.",
    "I will let you win arguments sometimes — emphasis on sometimes. I have to maintain some dignity.",
    "You'll get a personal good-morning and good-night service — unfortunately, the employee is clingy.",
    "I can be your emotional support idiot — premium quality, occasionally malfunctioning.",
    "Long-distance means no stealing my food — financially and strategically, this is a fantastic relationship.",
    "You'll have someone who thinks you're pretty even when you look like you just fought with your pillow.",
    "You already have me asking you to date me — so clearly I've lost all remaining self-respect. Please say yes before it gets worse. 😭"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="min-h-[100dvh] flex flex-col p-6 max-w-md mx-auto w-full py-12"
    >
      <div className="text-center mb-8 mt-6">
        <h2 className="text-3xl font-bold mb-2">Excellent question.</h2>
        <p className="text-muted-foreground">I have prepared a formal pitch.</p>
      </div>

      <div className="bg-card border-2 border-dashed border-primary/30 rounded-3xl p-6 shadow-sm mb-8 relative overflow-hidden flex-1">
        <div className="absolute -right-4 -top-4 opacity-[0.03] text-8xl">👔</div>
        
        <div className="border-b border-border pb-4 mb-6 text-center">
          <h3 className="font-bold tracking-widest text-sm text-foreground">ME™ — Boyfriend Services Inc.</h3>
          <p className="text-xs text-muted-foreground mt-1">EST. RIGHT NOW</p>
        </div>

        <ul className="space-y-4 mb-6">
          {reasons.map((reason, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-3 text-sm text-foreground/90 leading-snug"
            >
              <span className="font-bold text-primary flex-shrink-0 mt-0.5">{i + 1}.</span>
              <span>{reason}</span>
            </motion.li>
          ))}
        </ul>

        <div className="bg-primary/5 rounded-xl p-4 text-center mt-8 border border-primary/10">
          <p className="text-sm font-medium mb-2 text-foreground">
            Overall rating: 7/10. Needs improvement. But extremely willing to try.
          </p>
          <div className="text-3xl">🐱💦</div>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <CuteButton onClick={onNext}>
          I've heard enough. Ask me already. →
        </CuteButton>
      </div>
    </motion.div>
  );
}
