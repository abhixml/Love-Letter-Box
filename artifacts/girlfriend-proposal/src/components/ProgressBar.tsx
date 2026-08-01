import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  percentage: number;
  caption?: string;
  isCustomFill?: React.ReactNode;
}

export function ProgressBar({ label, percentage, caption, isCustomFill }: ProgressBarProps) {
  return (
    <div className="mb-6 w-full">
      <div className="flex justify-between items-end mb-2">
        <span className="font-semibold text-sm text-foreground">{label}</span>
        {caption && <span className="text-xs text-muted-foreground italic">{caption}</span>}
      </div>
      <div className="h-4 bg-black/5 rounded-full overflow-hidden relative w-full">
        {isCustomFill ? (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute inset-y-0 left-0 flex items-center px-1 text-sm tracking-widest"
          >
            {isCustomFill}
          </motion.div>
        ) : (
          <motion.div
            className="h-full bg-primary rounded-full relative"
            initial={{ width: 0 }}
            whileInView={{ width: `${Math.min(percentage, 100)}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {percentage > 100 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ delay: 1 }}
                className="absolute -right-4 top-0 bottom-0 flex items-center text-xs"
              >
                🔥
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
