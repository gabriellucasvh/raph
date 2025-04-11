"use client"

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  index,
  className,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1, duration: 0.5 }
        })
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "bg-darkGray p-6 rounded-lg border border-yellow/10",
        "hover:border-yellow/30 transition-all duration-300",
        "relative overflow-hidden shadow-md group",
        className
      )}
    >
      {/* Glowing background effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow/50 to-transparent" />

      {/* Hover effect highlight */}
      <motion.div 
        className="absolute inset-0 bg-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />

      <div className="flex items-center gap-4 mb-4">
        <motion.div 
          className="p-2 bg-yellow/10 rounded-md text-yellow"
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <p className="text-gray-300 relative z-10">{description}</p>

      {/* Bottom corner accent */}
      <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-yellow/10 transform rotate-45 translate-x-3 translate-y-3 group-hover:bg-yellow/20 transition-colors duration-300" />
      </div>
      
      {/* Animated background glow on hover */}
      <motion.div
        className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-yellow/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow/5 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;