import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '@/data/config';
import { CuteButton } from '@/components/CuteButton';
import { Download } from 'lucide-react';
import { HeartFloat } from '@/components/HeartFloat';

export function Certificate({ onNext }: { onNext: () => void }) {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full flex flex-col items-center">
      <HeartFloat />
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * { visibility: hidden; }
          #printable-certificate, #printable-certificate * { visibility: visible; }
          #printable-certificate { position: absolute; left: 0; top: 0; width: 100%; height: 100%; margin: 0; padding: 20px; box-shadow: none; border: none; }
        }
      `}} />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="w-full bg-[#fdfaf6] p-2 md:p-4 rounded-lg shadow-xl mb-8 relative border border-border"
      >
        <div 
          id="printable-certificate"
          ref={certificateRef}
          className="border-[3px] border-double border-[#d4af37] p-6 md:p-8 rounded-sm text-center relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] bg-opacity-50"
        >
          {/* Decorative corners */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#d4af37]"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#d4af37]"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]"></div>

          <h2 className="text-[#8c7322] font-serif font-black text-xl md:text-2xl tracking-widest uppercase mb-6">
            Official Certification
          </h2>
          
          <p className="text-sm font-serif text-muted-foreground italic mb-2">
            This document officially certifies that
          </p>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground my-4 border-b border-muted pb-2 mx-auto max-w-[200px] md:max-w-[250px]">
            {CONFIG.herName}
          </h1>
          
          <p className="text-sm font-serif text-muted-foreground italic mb-2 mt-4">
            has successfully agreed to become
          </p>
          
          <div className="text-2xl md:text-3xl font-black text-primary my-4 tracking-tight">
            MY GIRLFRIEND ❤️
          </div>
          
          <div className="flex justify-between items-end mt-12 pt-4 border-t border-muted/50 text-xs text-muted-foreground">
            <div className="text-left">
              <div className="font-bold border-b border-muted/50 pb-1 mb-1">Date Certified</div>
              <div className="font-mono">{CONFIG.date}</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-1 transform -rotate-12">🐾</div>
              <div className="text-[8px] uppercase tracking-wider font-bold">Intl. Cat Council</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <CuteButton onClick={handlePrint} variant="secondary" className="flex-1 flex gap-2 items-center">
          <Download size={18} /> Save Certificate
        </CuteButton>
        <CuteButton onClick={onNext} className="flex-1">
          Next Steps →
        </CuteButton>
      </div>
    </div>
  );
}
