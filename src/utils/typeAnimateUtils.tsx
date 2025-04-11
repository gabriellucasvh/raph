"use client";

import React, { useState, useEffect, useMemo } from 'react';

interface TypewriterProps {
  text: string | string[];
  delay?: number;
  infinite?: boolean;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 50, 
  infinite = true,
  className = ""
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  
  const textArray = useMemo(() => Array.isArray(text) ? text : [text], [text]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentTextFull = textArray[textArrayIndex];
    
    if (isTyping) {
      if (currentIndex < currentTextFull.length) {
        // Still typing
        timeout = setTimeout(() => {
          setCurrentText(prev => prev + currentTextFull[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, delay);
      } else if (infinite) {
        // Finished typing, pause before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (currentIndex > 0) {
        // Deleting
        timeout = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, delay / 2);
      } else {
        // Finished deleting, move to next text
        setIsTyping(true);
        setTextArrayIndex((prev) => (prev + 1) % textArray.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, isTyping, textArray, textArrayIndex]);

  return <span className={className}>{currentText}</span>;
};

interface CursorProps {
  cursorStyle?: string;
}

export const Cursor: React.FC<CursorProps> = ({ 
  cursorStyle = "bg-yellow w-[2px] h-5 ml-1 inline-block animate-pulse" 
}) => {
  return <span className={cursorStyle}></span>;
};