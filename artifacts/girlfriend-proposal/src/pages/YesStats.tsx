import React from 'react';
import { motion } from 'framer-motion';
import { CuteButton } from '@/components/CuteButton';
import { HeartFloat } from '@/components/HeartFloat';

export function YesStats({ onNext }: { onNext: () => void }) {
  return (
    <div className="w-full flex flex-col w-full">
      <HeartFloat />
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-serif font-bold text-foreground mb-8 text-center"
      >
        Post-Decision Statistics
      </motion.h1>

      <div className="space-y-4 mb-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card p-5 rounded-2xl shadow-sm border border-card-border"
        >
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Relationship Status</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 opacity-50">
              <span className="w-16 text-xs font-medium">Before:</span>
              <span className="line-through decoration-destructive decoration-2">single + emotionally confused</span>
            </div>
            <div className="flex items-center gap-3 font-bold text-primary">
              <span className="w-16 text-xs font-medium text-foreground">After:</span>
              <span>still emotionally confused but now with a girlfriend ❤️</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-card p-4 rounded-2xl border border-card-border flex flex-col items-center justify-center text-center">
            <div className="text-2xl mb-1">🌍</div>
            <div className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Geography</div>
            <div className="font-bold text-destructive text-sm">ENEMY</div>
          </div>
          <div className="bg-card p-4 rounded-2xl border border-card-border flex flex-col items-center justify-center text-center">
            <div className="text-2xl mb-1">🐈</div>
            <div className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Cat Council</div>
            <div className="font-bold text-green-600 text-sm">VICTORIOUS</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 w-full h-full transform skew-x-[-20deg] translate-x-[-150%] animate-[shimmer_3s_infinite]" />
          <div className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Current State</div>
          <div className="text-2xl font-black tracking-tight">EXTREMELY HAPPY</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <CuteButton onClick={onNext} fullWidth>
          Get official certificate →
        </CuteButton>
      </motion.div>
    </div>
  );
}
