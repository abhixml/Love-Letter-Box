import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  targetPercent: number;
  delay?: number;
}

export function ProgressBar({ label, targetPercent, delay = 0 }: ProgressBarProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercent(targetPercent);
    }, delay * 1000 + 500); // Wait for delay + entrance animation
    
    return () => clearTimeout(timer);
  }, [targetPercent, delay]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-full mb-4"
    >
      <div className="flex justify-between text-sm mb-1.5 font-medium text-foreground">
        <span>{label}</span>
        <span className="font-mono">{percent}%</span>
      </div>
      <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full relative"
          initial={{ width: "0%" }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-white/20 w-full h-full transform skew-x-[-20deg] translate-x-[-100%] animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
