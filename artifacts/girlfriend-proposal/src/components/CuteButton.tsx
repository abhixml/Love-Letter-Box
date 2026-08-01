import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CuteButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

export function CuteButton({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = "", 
  ...props 
}: CuteButtonProps) {
  const baseClasses = "relative font-medium transition-all duration-300 ease-out flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98]";
  
  const variants = {
    primary: "bg-primary text-primary-foreground rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 px-6 py-3 border border-transparent",
    secondary: "bg-secondary text-secondary-foreground rounded-2xl hover:bg-secondary/80 px-6 py-3 border border-secondary-border shadow-sm",
    ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl px-4 py-2",
  };
  
  return (
    <motion.button
      whileHover={{ scale: variant === 'ghost' ? 1.02 : 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
