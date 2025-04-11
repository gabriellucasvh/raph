"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Twitter } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Docs", href: "#docs" },
    { name: "Community", href: "#community" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-dark/80 backdrop-blur-lg border-b border-gray-800 shadow-md"
          : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
          <Image src={"/logo.png"} alt="Logo" width={40} height={40} className="rounded-lg"/>
          </div>
          <span className="font-bold text-xl sm:text-2xl text-white">
            <span className="text-yellow-400">Raph</span>
            <span className="text-white/60 font-mono">CLI</span>
          </span>
        </motion.div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="text-gray-300 hover:text-yellow-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-[2px] bg-yellow w-0 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Social/CTA Links */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            whileHover={{ rotate: 2, scale: 1.1 }}
            href="#"
            aria-label="GitHub"
            className="flex items-center gap-2 text-gray-400 hover:text-white p-2"
          >
            <Github size={20} /> Repositório
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-400 md:hidden"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-t border-white/5"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-gray-300 hover:text-yellow-400 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="py-4 flex justify-between">
                <div className="flex gap-4">
                  <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
