/* eslint-disable */
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlowingButton from "./ui-components/GlowingButton";
import { Terminal, Sparkles, Copy, Check } from "lucide-react";
import { TypewriterText, Cursor } from "../utils/typeAnimateUtils";
import { slideInFromLeft, scaleUp, fadeIn } from "../utils/motion";
import Link from "next/link";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);

  // Track mouse position for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCopy = () => {
    if (!navigator.clipboard) {
      // Fallback for browsers that don't support Clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = "npm create raph-app@latest";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy command:", err);
      }
      document.body.removeChild(textArea);
      return;
    }

    navigator.clipboard.writeText("npm create raph-app@latest")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error("Failed to copy command:", err);
      });
  };

  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-hero-glow opacity-50"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,214,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,214,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-yellow/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-yellow/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10 pt-10 md:pt-0">
        {/* Grid container - improved spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center lg:justify-items-start">
          {/* Text content - improved desktop spacing */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col text-center lg:text-left w-full max-w-xl lg:max-w-none"
          >
            {/* Tag line - centered on mobile */}
            <motion.div
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow/10 border border-yellow/20 w-fit mx-auto lg:mx-0"
              variants={fadeIn}
              custom={0}
            >
              <Sparkles className="text-yellow w-4 h-4" />
              <span className="text-sm text-yellow">Ferramenta CLI de Última Geração</span>
            </motion.div>

            {/* Main title - improved line heights */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight lg:leading-[1.2]"
              variants={slideInFromLeft}
              custom={1}
            >
              Comande seu fluxo de trabalho com{" "}
              <span className="text-yellow">Raph</span>{" "}
              <span className="relative">
                CLI
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-yellow/50 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Dynamic description - improved alignment */}
            <motion.div
              className="mb-10 text-lg text-gray-300"
              variants={slideInFromLeft}
              custom={2}
            >
              <p className="flex items-center justify-center lg:justify-start h-8 text-sm md:text-base">
                <span>Perfeito para </span>
                <TypewriterText
                  text={["automação de tarefas", "fluxos de desenvolvimento", "aumento de produtividade", "maestria de linha de comando"]}
                  className="text-yellow font-medium mx-1"
                />
                <Cursor />
              </p>
              <p className="mt-4 text-gray-400">
                Leve. Poderoso. Amigável para desenvolvedores.
              </p>
            </motion.div>

            {/* CTA section - improved button sizes */}
            <motion.div
              className="flex flex-col-reverse lg:flex-row gap-4 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none"
              variants={fadeIn}
              custom={3}
            >
              <GlowingButton
                variant="outline"
                size="lg"
                icon={<Terminal className="w-5 h-5" />}
                className="flex items-center justify-center gap-2 w-full"
              >
                Ver Documentação
              </GlowingButton>

              <div className="relative group w-full min-w-0">
                <div className="absolute inset-0 bg-yellow/10 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
                <div className="relative bg-darkGray border border-yellowLight shadow-xs shadow-yellow rounded-lg px-4 py-3 flex items-center w-full">
                  <span className="text-green-400 mr-2">$</span>
                  <div className="overflow-x-auto scrollbar-hide flex-1">
                    <input
                      type="text"
                      value="npm create raph-app@latest"
                      readOnly
                      className="bg-transparent border-none outline-none text-white font-mono text-sm md:text-base w-full min-w-max"
                    />
                  </div>
                  <button
                    onClick={handleCopy}
                    className="ml-2 p-1 rounded hover:bg-white/5 text-gray-400 hover:text-white transition-colors flex-shrink-0"
                    title={copied ? "Copiado!" : "Copiar comando"}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Stats - improved desktop sizing */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-white/10 mx-auto lg:mx-0 max-w-md lg:max-w-none"
              variants={fadeIn}
              custom={4}
            >
              {[
                { value: "3+", label: "Estrelas GitHub" },
                { value: "100%", label: "Satisfação" },
                { value: "1000s", label: "Resp. Média" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Terminal preview - improved desktop sizing */}
          <motion.div
            className="relative hidden lg:block w-full max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            custom={2}
          >
            <div className="absolute inset-0 bg-gradient-radial from-yellow/20 to-transparent opacity-30 blur-xl -z-10" />

            <div className="bg-darkGray rounded-lg border border-white/10 shadow-lg">
              {/* Terminal window header */}
              <div className="flex items-center gap-1 py-3 px-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 text-sm text-gray-400 font-mono">Terminal</div>
              </div>

              {/* Terminal content */}
              <pre className="p-4 text-sm font-mono overflow-x-auto">
                <code>
                  <span className="text-green-400">$ </span>
                  <span className="text-white">npm create raph-app@latest</span>
                  {"\n\n"}
                  <span className="text-gray-400">Instalando Raph CLI v1.0.1...</span>
                  {"\n"}
                  <span className="text-gray-400">✓ Dependências instaladas</span>
                  {"\n"}
                  <span className="bg-gradient-to-t from-yellowGlow via-yellow to-yellowLight inline-block text-transparent bg-clip-text">
                    {" ____             _         ____ _     ___ \n"}
                    {"|  _ \\ __ _ _ __ | |__     / ___| |   |_ _|\n"}
                    {"| |_) / _` | '_ \\| '_ \\   | |   | |    | |\n"}
                    {"|  _ < (_| | |_) | | | |  | |___| |___ | |\n"}
                    {"|_| \\_\\__,_| .__/|_| |_|   \\____|_____|___|\n"}
                    {"           |_|"}
                  </span>
                  {"\n"}
                  <span>
                    {"                   /\\_/\\  "}
                    {"\n                  ( ^.^ ) "}
                    {"\n                   > ^ < "}
                  </span>
                  {"\n"}
                  <span className="text-green-400">$ </span>
                  <span className="text-yellow">🚀 Bem-vindo ao gerador de projetos Raph!</span>
                  {"\n"}
                  {"\n"}
                  <span className="text-green-400">? </span>
                  <span className="text-white">Nome do projeto:
                    <Link href={"https://gabriellucasvh.vercel.app"}
                      className="text-blue-400 hover:text-pink-700 text-shadow-lg hover:text-shadow-pink-950 hover:animate-pulse"
                      target="_blank"
                      rel="noopener noreferrer"
                    > "gabriellucasvh"</Link></span>
                  {"\n"}
                  <span className="text-green-400">? </span>
                  <span className="text-white">Qual linguagem deseja usar?<span className="text-blue-400"> TypeScript</span></span>
                  {"\n"}
                  <span className="text-green-400">? </span>
                  <span className="text-white">Deseja usar Tailwind CSS (v4)?<span className="text-blue-400"> Sim</span></span>
                  {"\n"}
                  <span>...</span>
                  {"\n"}
                  <span className="text-gray-400">...</span>
                  {"\n"}
                  <span className="text-gray-600">...</span>
                  {"\n"}
                  <span>
                    {"\n"}
                    <div className="space-y-2">
                      <span className="text-yellow">
                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                      </span>
                      <div className="text-yellowLight">
                        ✨ Projeto "gabriellucasvh" criado com sucesso! ✨
                      </div>
                      <span className="text-yellow">
                        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                      </span>
                    </div>
                  </span>
                  {"\n"}
                  <span className="text-yellow">Obrigado por usar o Raph CLI! Bom desenvolvimento! 🐈🎉</span>
                  {"\n"}
                </code>
              </pre>
            </div>

            {/* Decoration elements */}
            <motion.div
              className="absolute top-10 -right-10 w-20 h-20 bg-yellow/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
            />

            <motion.div
              className="absolute -bottom-5 -left-5 w-16 h-16 bg-yellow/10 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;