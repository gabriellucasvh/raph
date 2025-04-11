"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlowingButton from "./ui-components/GlowingButton";
import { ChevronDown, Terminal, Sparkles, Code, Download, Coffee } from "lucide-react";
import { TypewriterText, Cursor } from "../utils/typeAnimateUtils";
import { slideInFromLeft, scaleUp, fadeIn } from "../utils/motion";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
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
      
      <div className="container mx-auto px-4 relative z-10 pt-10 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Tag line */}
            <motion.div 
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow/10 border border-yellow/20 w-fit"
              variants={fadeIn}
              custom={0}
            >
              <Sparkles className="text-yellow w-4 h-4" />
              <span className="text-sm text-yellow">Ferramenta CLI de Última Geração</span>
            </motion.div>
            
            {/* Main title */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
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
            
            {/* Dynamic description */}
            <motion.div 
              className="mb-8 text-lg text-gray-300"
              variants={slideInFromLeft}
              custom={2}
            >
              <p className="flex items-center h-8">
                <span>Perfeito para </span>
                <TypewriterText 
                  text={["automação de tarefas", "fluxos de desenvolvimento", "aumento de produtividade", "maestria de linha de comando"]}
                  className="text-yellow font-medium mx-1"
                />
                <Cursor />
              </p>
              <p className="mt-3 text-gray-400">
                Leve. Poderoso. Amigável para desenvolvedores.
              </p>
            </motion.div>
            
            {/* CTA buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeIn}
              custom={3}
            >
              <GlowingButton 
                size="lg"
                icon={<Download className="w-5 h-5" />}
              >
                Instalar Agora
              </GlowingButton>
              <GlowingButton 
                variant="outline" 
                size="lg"
                icon={<Terminal className="w-5 h-5" />}
              >
                Ver Documentação
              </GlowingButton>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-2 mt-12 pt-8 border-t border-white/10"
              variants={fadeIn}
              custom={4}
            >
              {[
                { value: "5.2k", label: "Estrelas GitHub" },
                { value: "99%", label: "Satisfação" },
                { value: "0.3s", label: "Resp. Média" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-yellow">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Terminal preview */}
          <motion.div
            className="relative hidden lg:block"
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
                  <span className="text-white">npm install -g raph-cli</span>
                  {"\n\n"}
                  <span className="text-gray-400">Instalando Raph CLI v2.4.0...</span>
                  {"\n"}
                  <span className="text-gray-400">✓ Dependências instaladas</span>
                  {"\n"}
                  <span className="text-gray-400">✓ Configuração criada</span>
                  {"\n"}
                  <span className="text-gray-400">✓ Plugins registrados</span>
                  {"\n\n"}
                  <span className="text-green-400">$ </span>
                  <span className="text-white">raph --version</span>
                  {"\n"}
                  <span className="text-yellow">2.4.0</span>
                  {"\n\n"}
                  <span className="text-green-400">$ </span>
                  <span className="text-white">raph init meu-projeto</span>
                  {"\n"}
                  <span className="text-gray-400">Criando novo projeto: meu-projeto</span>
                  {"\n"}
                  <span className="text-gray-400">✓ Estrutura do projeto criada</span>
                  {"\n"}
                  <span className="text-gray-400">✓ Configuração gerada</span>
                  {"\n"}
                  <span className="text-gray-400">✓ Plugins padrão instalados</span>
                  {"\n\n"}
                  <span className="text-green-400">$ </span>
                  <span className="text-white">raph run meu-projeto</span>
                  {"\n"}
                  <span className="text-yellow">⚡ Executando projeto em modo de desenvolvimento</span>
                  {"\n"}
                  <span className="text-white">Projeto rodando em http://localhost:3000</span>
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
        
        {/* Command badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { command: "raph init", desc: "Iniciar projeto" },
            { command: "raph install", desc: "Instalar pacotes" },
            { command: "raph build", desc: "Construir projeto" },
            { command: "raph deploy", desc: "Publicar aplicação" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="px-4 py-2 bg-darkGray rounded-full border border-white/5 flex items-center gap-3"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 214, 0, 0.3)" }}
            >
              <Code className="text-yellow w-4 h-4" />
              <span className="text-white font-mono text-sm">{item.command}</span>
              <span className="text-gray-400 text-xs">• {item.desc}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Coffee badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-20 right-10 hidden lg:flex items-center gap-2 px-3 py-1.5 bg-yellow/10 rounded-full"
        >
          <Coffee className="text-yellow w-4 h-4" />
          <span className="text-xs text-gray-300">Desenvolvido com ☕ e JavaScript</span>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-sm text-gray-400">Rolar para explorar</span>
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            <ChevronDown className="text-yellow w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;