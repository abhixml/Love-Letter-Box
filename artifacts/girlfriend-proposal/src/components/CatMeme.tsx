import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CatMemeProps {
  url: string;
  caption: string;
  alt: string;
  className?: string;
  delay?: number;
}

export function CatMeme({ url, caption, alt, className = "", delay = 0 }: CatMemeProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`bg-card p-3 rounded-2xl shadow-sm border border-card-border overflow-hidden flex flex-col items-center max-w-sm mx-auto ${className}`}
    >
      <div className="w-full aspect-square bg-muted rounded-xl overflow-hidden flex items-center justify-center relative mb-3">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground animate-pulse">
            Loading cat... 🐾
          </div>
        )}
        {imgError ? (
          <div className="text-6xl">🐱</div>
        ) : (
          <img
            src={url}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <p className="font-sans font-medium text-foreground text-center pb-1 text-sm sm:text-base">
        "{caption}"
      </p>
    </motion.div>
  );
}
