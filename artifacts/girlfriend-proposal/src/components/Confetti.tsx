import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Confetti() {
  const [pieces, setPieces] = useState<any[]>([]);

  useEffect(() => {
    const colors = ['#f43f5e', '#a78bfa', '#fbbf24', '#34d399', '#60a5fa'];
    const newPieces = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: 50,
      y: 50,
      angle: Math.random() * Math.PI * 2,
      velocity: 15 + Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 5 + Math.random() * 10,
      rotation: Math.random() * 360,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map(p => {
        const dx = Math.cos(p.angle) * p.velocity * 20;
        const dy = Math.sin(p.angle) * p.velocity * 20 + 200; // gravity effect
        return (
          <motion.div
            key={p.id}
            initial={{ x: '50vw', y: '50vh', scale: 0, rotate: 0, opacity: 1 }}
            animate={{ 
              x: `calc(50vw + ${dx}px)`, 
              y: `calc(50vh + ${dy}px)`, 
              scale: 1,
              rotate: p.rotation + 360,
              opacity: [1, 1, 0]
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute rounded-sm"
            style={{ 
              backgroundColor: p.color,
              width: p.size,
              height: p.size,
            }}
          />
        );
      })}
    </div>
  );
}
