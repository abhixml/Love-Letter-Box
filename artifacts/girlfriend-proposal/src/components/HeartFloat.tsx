import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export function HeartFloat() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generate hearts
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      size: Math.random() * 20 + 10, // 10px to 30px
      duration: Math.random() * 10 + 10, // 10s to 20s
      delay: Math.random() * 10,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-50px] text-primary/30"
          initial={{ x: `${heart.x}vw`, y: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: '-110vh',
            opacity: [0, 1, 1, 0],
            rotate: [0, -10, 10, -10, 0],
            x: [`${heart.x}vw`, `${heart.x - 2}vw`, `${heart.x + 2}vw`, `${heart.x}vw`],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ fontSize: heart.size }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
