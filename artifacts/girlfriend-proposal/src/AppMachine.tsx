import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '@/data/config';
import { Landing } from '@/pages/Landing';
import { Investigation } from '@/pages/Investigation';
import { Evidence } from '@/pages/Evidence';
import { LongDistance } from '@/pages/LongDistance';
import { ScientificStudy } from '@/pages/ScientificStudy';
import { CatCouncil } from '@/pages/CatCouncil';
import { Confession } from '@/pages/Confession';
import { Decision } from '@/pages/Decision';
import { YesLoading } from '@/pages/YesLoading';
import { YesCelebration } from '@/pages/YesCelebration';
import { YesStats } from '@/pages/YesStats';
import { Certificate } from '@/pages/Certificate';
import { DatePlanner } from '@/pages/DatePlanner';
import { PromisePage } from '@/pages/Promise';
import { Final } from '@/pages/Final';
import { MusicButton } from '@/components/MusicButton';

// All stages of the app
export type AppStage = 
  | 'landing'
  | 'investigation'
  | 'evidence'
  | 'long_distance'
  | 'scientific_study'
  | 'cat_council'
  | 'confession'
  | 'decision'
  | 'yes_loading'
  | 'yes_celebration'
  | 'yes_stats'
  | 'certificate'
  | 'date_planner'
  | 'promise'
  | 'final';

export function AppMachine() {
  const [stage, setStage] = useState<AppStage>('landing');

  // Page variants for Framer Motion
  const variants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const transition = {
    type: 'tween' as const,
    ease: 'easeInOut' as const,
    duration: 0.5,
  };

  const nextStage = (next: AppStage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStage(next);
  };

  // Render the current stage
  const renderStage = () => {
    switch (stage) {
      case 'landing': return <Landing onNext={() => nextStage('investigation')} />;
      case 'investigation': return <Investigation onNext={() => nextStage('evidence')} />;
      case 'evidence': return <Evidence onNext={() => nextStage('long_distance')} />;
      case 'long_distance': return <LongDistance onNext={() => nextStage('scientific_study')} />;
      case 'scientific_study': return <ScientificStudy onNext={() => nextStage('cat_council')} />;
      case 'cat_council': return <CatCouncil onNext={() => nextStage('confession')} />;
      case 'confession': return <Confession onNext={() => nextStage('decision')} />;
      case 'decision': 
        return <Decision 
          onYes={() => nextStage('yes_loading')} 
          onTime={() => alert("We'll implement the time flow within Decision component")} 
        />;
      case 'yes_loading': return <YesLoading onNext={() => nextStage('yes_celebration')} />;
      case 'yes_celebration': return <YesCelebration onNext={() => nextStage('yes_stats')} />;
      case 'yes_stats': return <YesStats onNext={() => nextStage('certificate')} />;
      case 'certificate': return <Certificate onNext={() => nextStage('date_planner')} />;
      case 'date_planner': return <DatePlanner onNext={() => nextStage('promise')} />;
      case 'promise': return <PromisePage onNext={() => nextStage('final')} />;
      case 'final': return <Final onRestart={() => nextStage('landing')} />;
      default: return <Landing onNext={() => nextStage('investigation')} />;
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground overflow-x-hidden flex flex-col relative font-sans relative pb-16">
      {CONFIG.songUrl && <MusicButton url={CONFIG.songUrl} />}
      
      <AnimatePresence mode="wait">
        <motion.main
          key={stage}
          initial="initial"
          animate="in"
          exit="out"
          variants={variants}
          transition={transition}
          className="flex-1 w-full max-w-md mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[100dvh]"
        >
          {renderStage()}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default AppMachine;