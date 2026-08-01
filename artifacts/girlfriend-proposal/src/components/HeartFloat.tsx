import React from 'react';
import { motion } from 'framer-motion';

export function HeartFloat() {
  const hearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 10 + Math.random() * 20
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(h => (
        <motion.div
          key={h.id}
          className="absolute bottom-[-50px] text-primary/30"
          initial={{ x: `${h.x}vw`, y: 100, opacity: 0, scale: h.size / 20 }}
          animate={{ 
            y: '-110vh', 
            opacity: [0, 1, 1, 0],
            x: [`${h.x}vw`, `${h.x + (Math.random() * 10 - 5)}vw`]
          }}
          transition={{ 
            duration: h.duration, 
            repeat: Infinity, 
            delay: h.delay,
            ease: "linear" 
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
