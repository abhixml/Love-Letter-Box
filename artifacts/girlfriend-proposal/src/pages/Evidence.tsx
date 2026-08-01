import React from 'react';
import { motion } from 'framer-motion';
import { CuteButton } from '@/components/CuteButton';
import { CatMeme } from '@/components/CatMeme';
import { getCatUrl } from '@/data/memes';

export function Evidence({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full flex flex-col w-full">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-serif font-bold text-foreground mb-8 text-center"
      >
        I have gathered evidence.
      </motion.h1>

      <div className="space-y-6 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card p-4 rounded-2xl shadow-sm border border-card-border"
        >
          <div className="text-primary font-bold text-sm mb-1 uppercase tracking-wide">Evidence #01</div>
          <p className="text-foreground font-medium mb-3">I really like talking to you.</p>
          <img 
            src={getCatUrl('happy,smile', 'width=300&height=200')} 
            alt="Happy cat" 
            className="w-full h-32 object-cover rounded-xl"
            onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f0f0f0"/><text x="50" y="50" font-size="40" text-anchor="middle" dy=".3em">😸</text></svg>' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-card p-4 rounded-2xl shadow-sm border border-card-border"
        >
          <div className="text-primary font-bold text-sm mb-1 uppercase tracking-wide">Evidence #02</div>
          <p className="text-foreground font-medium mb-3">I think about you a suspicious amount.</p>
          <div className="relative">
            <img 
              src={getCatUrl('stare', 'width=300&height=200')} 
              alt="Staring cat" 
              className="w-full h-32 object-cover rounded-xl"
              onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f0f0f0"/><text x="50" y="50" font-size="40" text-anchor="middle" dy=".3em">👁️👁️</text></svg>' }}
            />
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-md">
              "this is becoming a workplace safety issue"
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="bg-card p-4 rounded-2xl shadow-sm border border-card-border"
        >
          <div className="text-primary font-bold text-sm mb-1 uppercase tracking-wide">Evidence #03</div>
          <p className="text-foreground font-medium mb-4">You're far away.</p>
          
          <div className="flex items-center justify-between text-2xl mb-4 px-4">
            <div className="flex flex-col items-center">
              <span>🧍</span>
              <span className="text-[10px] font-bold mt-1 text-muted-foreground">ME</span>
            </div>
            <div className="flex-1 flex items-center px-2">
              <div className="h-0.5 bg-muted-foreground/30 w-full relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs">✈️</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span>🐈</span>
              <span className="text-[10px] font-bold mt-1 text-muted-foreground">YOU</span>
            </div>
          </div>
          
          <div className="text-center font-bold text-destructive text-lg mb-2">
            GEOGRAPHY IS BEING VERY RUDE.
          </div>
          
          <div className="flex items-center gap-3 bg-muted p-2 rounded-xl">
            <span className="text-3xl">😾</span>
            <p className="text-xs font-medium italic">"I would like to speak to the manager."</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        <CuteButton onClick={onNext} fullWidth>
          Acknowledge evidence →
        </CuteButton>
      </motion.div>
    </div>
  );
}
