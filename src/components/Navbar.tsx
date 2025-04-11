"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookCheck, Github } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Docs", href: "/docs" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "py-3 bg-dark/80 backdrop-blur-lg border-b border-gray-800 shadow-md"
          : "py-5"
        }`}
    >
      <div className="container mx-auto px-8 md:px-14 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <Image src={"/logo.png"} alt="Logo" width={40} height={40} className="rounded-lg" />
          </div>
          <span className="font-bold text-xl sm:text-2xl text-white">
            <span className="text-yellow-400">Raph</span>
            <span className="text-white/60 font-mono">CLI</span>
          </span>
        </motion.a>

        {/* Combined Links and GitHub Icon */}
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="flex items-center">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition-colors relative group text-sm sm:text-base px-2 sm:px-4"
              >
                <BookCheck size={16} />{link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] bg-yellow w-0 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <motion.a
            whileHover={{ rotate: 10, scale: 1.1 }}
            href="https://github.com/gabriellucasvh/raph"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
