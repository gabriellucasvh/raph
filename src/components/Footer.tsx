"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow/5 rounded-full blur-[100px]"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 pb-12 border-b border-white/10">
          {/* Logo and info */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
              <span className="font-bold text-xl text-white">
                <span className="text-yellow">Raph</span>
                <span className="text-outline opacity-60 font-mono">CLI</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-6 text-center">
              CLI moderna para construir aplicações bonitas e de alta performance
              com uma experiência excepcional para desenvolvedores.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-gray-400">
            © {currentYear} Raph CLI. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400">
            Feito com ❤️ e JavaScript por <Link href={"https://github.com/gabriellucasvh"} rel="noopener noreferrer" target="_blank" className="text-gray-300">Gabriel Gonçalves</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;