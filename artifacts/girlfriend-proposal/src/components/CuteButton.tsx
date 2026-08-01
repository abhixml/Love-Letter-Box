import React from 'react';
import { motion } from 'framer-motion';

interface CuteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const CuteButton = React.forwardRef<HTMLButtonElement, CuteButtonProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    const baseStyle = "px-6 py-3 rounded-full font-medium transition-all focus:outline-none flex items-center justify-center gap-2 max-w-full text-center";
    
    const variants = {
      primary: "bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 active:scale-95",
      secondary: "bg-accent/20 text-accent-foreground hover:bg-accent/30 active:scale-95",
      ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-black/5 active:scale-95"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);
CuteButton.displayName = 'CuteButton';
