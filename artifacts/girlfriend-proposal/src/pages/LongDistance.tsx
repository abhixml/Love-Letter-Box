import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CuteButton } from '@/components/CuteButton';
import { Check } from 'lucide-react';

export function LongDistance({ onNext }: { onNext: () => void }) {
  const [distanceValue, setDistanceValue] = useState(0);
  
  const getMessage = (val: number) => {
    if (val < 20) return "Okay this is manageable.";
    if (val < 40) return "Hmm. Slightly inconvenient.";
    if (val < 60) return "Who invented geography?";
    if (val < 80) return "I would like to file a complaint.";
    if (val < 100) return "THIS IS PERSONAL.";
    return "DISTANCE.EXE HAS CRASHED";
  };

  const getEmoji = (val: number) => {
    if (val < 20) return "🚶";
    if (val < 40) return "🚗";
    if (val < 60) return "🚆";
    if (val < 80) return "✈️";
    if (val < 100) return "🚀";
    return "😭";
  };

  const checklistItems = [
    "Get food together",
    "Annoy you in person",
    "Steal your fries",
    "Go on random walks",
    "Sit together doing absolutely nothing",
    "Annoy you again",
    "Probably annoy you even more"
  ];

  return (
    <div className="w-full flex flex-col">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-serif font-bold text-foreground mb-2 text-center"
      >
        LONG DISTANCE SIMULATOR™
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground mb-8 text-center"
      >
        Let's calculate how annoying this distance is.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-card p-6 rounded-3xl shadow-sm border border-card-border mb-10"
      >
        <div className="flex justify-between items-end mb-4">
          <label className="font-bold text-sm text-primary uppercase tracking-wider">Distance Level</label>
          <span className="font-mono font-bold text-xl">{distanceValue}%</span>
        </div>
        
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={distanceValue}
          onChange={(e) => setDistanceValue(parseInt(e.target.value))}
          className="w-full h-4 bg-muted rounded-full appearance-none cursor-pointer outline-none accent-primary mb-6"
        />
        
        <div className="flex flex-col items-center justify-center h-24 bg-muted/50 rounded-2xl">
          <div className="text-4xl mb-2 transition-transform duration-300 transform" style={{ scale: 1 + (distanceValue/100) * 0.5 }}>
            {getEmoji(distanceValue)}
          </div>
          <div className={`font-medium text-center px-4 transition-colors ${distanceValue === 100 ? 'text-destructive font-bold' : 'text-foreground'}`}>
            {getMessage(distanceValue)}
          </div>
        </div>
      </motion.div>

      {distanceValue >= 100 && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-8"
        >
          <h3 className="font-bold text-foreground mb-4">Things I would do if you lived closer:</h3>
          <div className="space-y-3 mb-6">
            {checklistItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 + 0.5 }}
                className="flex items-center gap-3 bg-card p-3 rounded-xl shadow-sm border border-card-border"
              >
                <div className="bg-primary/20 text-primary p-1 rounded-md">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span className="font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: checklistItems.length * 0.15 + 1.5 }}
            className="mt-8 mb-8"
          >
            <p className="text-center text-muted-foreground text-sm mb-2">Unfortunately...</p>
            <div className="bg-destructive text-destructive-foreground font-mono font-bold p-4 rounded-xl text-center shadow-lg border-2 border-red-900/20 transform -rotate-2">
              ⚠️ SYSTEM ERROR:<br/>DISTANCE.EXE HAS CRASHED
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: checklistItems.length * 0.15 + 2.5 }}
          >
            <CuteButton onClick={onNext} fullWidth>
              Reboot system →
            </CuteButton>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
