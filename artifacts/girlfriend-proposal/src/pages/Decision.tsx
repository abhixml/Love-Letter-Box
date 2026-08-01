import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartFloat } from '@/components/HeartFloat';
import { StarField } from '@/components/StarField';
import { getCatUrl } from '@/data/memes';

export function Decision({ onYes, onTime }: { onYes: () => void, onTime: () => void }) {
  const [noCount, setNoCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showTimeFlow, setShowTimeFlow] = useState(false);

  const handleNoClick = () => {
    if (noCount === 0) {
      setShowModal(true);
    } else {
      setNoCount(prev => prev + 1);
    }
  };

  const handleTimeClick = () => {
    setShowTimeFlow(true);
  };

  const handleModalReconsider = () => {
    setShowModal(false);
    setNoCount(1); // progress to the second 'no' state
  };

  const handleModalThinkAboutIt = () => {
    setShowModal(false);
    setShowTimeFlow(true);
  };

  if (showTimeFlow) {
    return (
      <div className="w-full flex flex-col items-center justify-center text-center min-h-[60vh]">
        <HeartFloat />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card p-8 rounded-3xl shadow-lg border border-card-border relative z-10 max-w-sm w-full"
        >
          <div className="text-5xl mb-6">❤️</div>
          <h2 className="text-2xl font-serif font-bold mb-4">Of course.</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Take your time. No pressure at all.
          </p>
          <button 
            onClick={() => window.close()} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors"
          >
            Close this very dramatic website
          </button>
        </motion.div>
      </div>
    );
  }

  // Second + click on NO
  if (noCount >= 1) {
    return (
      <div className="w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <h2 className="text-2xl font-black text-destructive uppercase tracking-widest mb-2">THE CAT IS SAD.</h2>
          <p className="text-muted-foreground mb-6">He has reviewed your decision.</p>
          
          <div className="bg-card p-4 rounded-3xl shadow-sm border border-card-border mb-6 flex flex-col items-center">
            <img 
              src={getCatUrl('sad,cry', 'width=300&height=300')} 
              alt="Crying cat" 
              className="w-48 h-48 object-cover rounded-2xl mb-4"
              onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f0f0f0"/><text x="50" y="50" font-size="40" text-anchor="middle" dy=".3em">😿</text></svg>' }}
            />
            <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-2">His professional opinion:</p>
            <div className="text-6xl mb-2">🥺</div>
          </div>

          {noCount === 1 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <p className="mb-2">Okay okay, I'm not going to emotionally blackmail you.</p>
              <p className="mb-6 font-medium text-muted-foreground">But before you go...</p>
              <button 
                onClick={() => setNoCount(2)}
                className="bg-secondary text-secondary-foreground font-medium px-6 py-3 rounded-2xl hover:bg-secondary/80 transition-colors w-full mb-4"
              >
                One last consideration?
              </button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-left bg-card p-5 rounded-2xl shadow-sm mb-6 border border-card-border">
              <h3 className="font-bold mb-3 text-center">Summary of facts:</h3>
              <ul className="space-y-2 mb-6">
                {["I like you", "You make me happy", "I would like to know you better", "I promise to send you stupid memes", "I will continue blaming geography", "There will probably be cats"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm items-start">
                    <span className="text-primary mt-0.5">☑</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={onYes}
                className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all mb-3 animate-[pulse_2s_infinite]"
              >
                Maybe YES? ❤️
              </button>
              
              <button 
                onClick={() => setNoCount(3)}
                className="w-full bg-transparent text-muted-foreground font-medium text-sm py-2 rounded-xl hover:bg-muted/50 transition-colors"
              >
                No, I really mean no
              </button>
            </motion.div>
          )}

          {noCount >= 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 bg-background z-50 flex flex-col items-center justify-center min-h-[100dvh]">
              <div className="text-5xl mb-4">😴</div>
              <h2 className="text-2xl font-serif font-bold mb-4">Okay. ❤️</h2>
              <p className="text-muted-foreground text-center max-w-xs mb-8">
                Thank you for being honest.<br/>
                The cat council will recover eventually.
              </p>
              <button 
                onClick={() => window.close()} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground underline"
              >
                Close website
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  }

  // Initial Yes/No Screen
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[60vh] relative">
      <HeartFloat />
      <StarField />
      
      <div className="w-full max-w-sm relative z-10 flex flex-col gap-4">
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onYes}
          className="w-full bg-primary text-primary-foreground font-serif text-2xl font-bold py-6 rounded-3xl shadow-[0_10px_20px_-10px_rgba(255,100,130,0.5)] border-2 border-primary/20 hover:shadow-[0_15px_30px_-10px_rgba(255,100,130,0.6)] transition-all"
        >
          YES ❤️
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={handleNoClick}
          className="w-full bg-card text-foreground font-medium text-lg py-4 rounded-2xl shadow-sm border border-card-border hover:bg-muted/50 transition-colors"
        >
          NO 🥺
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={handleTimeClick}
          className="mt-4 text-sm font-medium text-muted-foreground hover:text-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors text-center"
        >
          I NEED SOME TIME
        </motion.button>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-card w-full max-w-xs rounded-3xl p-6 shadow-xl border border-card-border text-center flex flex-col items-center"
            >
              <div className="bg-red-100 text-red-600 font-black text-xl px-4 py-1 rounded-full mb-4 transform -rotate-3">
                WAIT.
              </div>
              <img 
                src={getCatUrl('cry,sad', 'width=150&height=150')} 
                alt="Sad cat" 
                className="w-24 h-24 rounded-full object-cover border-4 border-muted mb-4"
                onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f0f0f0"/><text x="50" y="50" font-size="40" text-anchor="middle" dy=".3em">😿</text></svg>' }}
              />
              <h3 className="text-xl font-bold mb-2">Are you sure? 🥺</h3>
              <p className="text-xs text-muted-foreground mb-6">
                The cat council was not emotionally prepared for this outcome.
              </p>
              
              <div className="flex flex-col gap-3 w-full">
                <button 
                  onClick={handleModalThinkAboutIt}
                  className="bg-muted text-foreground py-3 rounded-xl font-medium text-sm hover:bg-muted/80"
                >
                  I WANT TO THINK ABOUT IT
                </button>
                <button 
                  onClick={handleModalReconsider}
                  className="bg-primary/10 text-primary py-3 rounded-xl font-bold text-sm hover:bg-primary/20"
                >
                  Let me reconsider 😭
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
