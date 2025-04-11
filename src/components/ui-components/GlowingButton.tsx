"use client"

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  onClick,
  className,
  variant = "default",
  size = "md",
  icon,
}) => {
  const variants = {
    default: "bg-yellow text-black hover:bg-yellowLight",
    outline: "bg-transparent border border-yellow text-yellow hover:bg-yellow/10",
    ghost: "bg-transparent text-yellow hover:bg-yellow/10",
  };

  const sizes = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-5 text-base",
    lg: "py-3 px-7 text-lg",
  };
  
  // Pulse animation variants
  const pulseAnimation = {
    initial: { 
      boxShadow: "0 0 10px rgba(255,214,0,0.3)" 
    },
    animate: { 
      boxShadow: ["0 0 10px rgba(255,214,0,0.3)", "0 0 20px rgba(255,214,0,0.5)", "0 0 10px rgba(255,214,0,0.3)"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  // Icon animation variants
  const iconAnimation = {
    initial: { x: 0 },
    hover: { 
      x: variant === "default" ? 3 : 5,
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    }
  };

  return (
    <motion.button
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      variants={pulseAnimation}
      className={cn(
        "relative rounded-md font-medium transition-all duration-300",
        "flex items-center justify-center gap-2",
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
    >
      {icon && (
        <motion.span variants={iconAnimation}>
          {icon}
        </motion.span>
      )}
      {children}

      {/* Animated glow effect */}
      <motion.span
        className="absolute inset-0 -z-10 rounded-md bg-yellow/20 blur-md"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Extra visual effect on hover */}
      <motion.span 
        className="absolute inset-0 -z-20 rounded-md bg-yellow/5 blur-xl"
        initial={{ opacity: 0, scale: 0.6 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
};

export default GlowingButton;