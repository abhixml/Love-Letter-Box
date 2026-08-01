import React from 'react';
import { motion } from 'framer-motion';
import { CuteButton } from '../components/CuteButton';

export function WhySpecial({ onNext }: { onNext: () => void }) {
  const cards = [
    {
      icon: "💬",
      text: "The way you yap? I could listen forever. Talking to you doesn't feel like talking. It feels like home."
    },
    {
      icon: "🧸",
      text: "You're the kind of cute that makes people smile without trying. Childish in the best way. Soft in a world that forgets to be."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="min-h-[100dvh] flex flex-col justify-center p-6 max-w-md mx-auto w-full py-12"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Here's the thing.</h2>

      <div className="space-y-4 mb-8">
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-card border border-card-border rounded-2xl p-5 shadow-sm flex gap-4"
          >
            <div className="text-2xl flex-shrink-0">{card.icon}</div>
            <p className="text-sm leading-relaxed text-card-foreground">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center font-serif text-lg mb-10 text-primary font-medium px-4"
      >
        And somehow, you ended up being someone I really look forward to every day.
      </motion.p>

      <div className="flex justify-center mt-auto">
        <CuteButton onClick={onNext} variant="secondary">
          Okay but why should I date YOU specifically →
        </CuteButton>
      </div>
    </motion.div>
  );
}
