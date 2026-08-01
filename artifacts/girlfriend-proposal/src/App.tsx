import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Intro } from './sections/Intro';
import { Survey } from './sections/Survey';
import { WhySpecial } from './sections/WhySpecial';
import { WhyDateMe } from './sections/WhyDateMe';
import { TheAsk } from './sections/TheAsk';
import { YesScreen } from './sections/YesScreen';
import { NoScreen } from './sections/NoScreen';

type Section = 1 | 2 | 3 | 4 | 5 | 'yes' | 'no';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>(1);

  const renderSection = () => {
    switch (currentSection) {
      case 1: return <Intro key="intro" onNext={() => setCurrentSection(2)} />;
      case 2: return <Survey key="survey" onNext={() => setCurrentSection(3)} />;
      case 3: return <WhySpecial key="special" onNext={() => setCurrentSection(4)} />;
      case 4: return <WhyDateMe key="dateme" onNext={() => setCurrentSection(5)} />;
      case 5: return <TheAsk key="ask" onYes={() => setCurrentSection('yes')} onNo={() => setCurrentSection('no')} />;
      case 'yes': return <YesScreen key="yes" onRestart={() => setCurrentSection(1)} />;
      case 'no': return <NoScreen key="no" onBack={() => setCurrentSection(5)} onRestart={() => setCurrentSection(1)} />;
    }
  };

  return (
    <div className="bg-background text-foreground min-h-[100dvh] font-sans font-medium selection:bg-primary/20">
      <AnimatePresence mode="wait">
        {renderSection()}
      </AnimatePresence>
    </div>
  );
}

export default App;
