"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Terminal, Zap, Package, Code, Shield, 
  Cpu, Database, GitBranch, Layers, ChevronRight 
} from "lucide-react";
import Image from "next/image";

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Visão Geral", icon: <BookOpen size={18} /> },
    { id: "nextjs", title: "Next.js", icon: <Terminal size={18} /> },
    { id: "tailwind", title: "Tailwind CSS", icon: <Zap size={18} /> },
    { id: "trpc", title: "tRPC", icon: <Package size={18} /> },
    { id: "prisma", title: "Prisma", icon: <Database size={18} /> },
    { id: "typescript", title: "TypeScript", icon: <Code size={18} /> },
    { id: "auth", title: "Autenticação", icon: <Shield size={18} /> },
    { id: "linters", title: "Linters", icon: <Cpu size={18} /> },
    { id: "git", title: "Git", icon: <GitBranch size={18} /> },
    { id: "architecture", title: "Arquitetura", icon: <Layers size={18} /> },
  ];

  const techDetails = {
    overview: {
      title: "Visão Geral da Raph CLI",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-darkGray rounded-xl border border-white/10">
            <p className="text-lg">
              A Raph CLI é uma ferramenta de linha de comando moderna projetada para acelerar o desenvolvimento
              de aplicações Next.js com App Router. Combinando velocidade, flexibilidade e uma excelente
              experiência do desenvolvedor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-5 bg-yellow/5 border border-yellow/20 rounded-xl"
            >
              <h3 className="font-bold text-yellow mb-2">⚡ Velocidade</h3>
              <p>Criação de projetos em segundos com configurações otimizadas</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-5 bg-yellow/5 border border-yellow/20 rounded-xl"
            >
              <h3 className="font-bold text-yellow mb-2">🧩 Extensibilidade</h3>
              <p>Sistema de plugins para adicionar funcionalidades</p>
            </motion.div>
          </div>
        </div>
      ),
    },
    nextjs: {
      title: "Next.js 15",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image 
                src="/techs/nextjs.svg" 
                alt="Next.js" 
                width={80} 
                height={80}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-yellow text-xl mb-2">Por que Next.js?</h3>
              <p className="text-gray-300">
                Next.js foi escolhido como framework principal por sua performance, suporte nativo ao App Router,
                e excelente ecossistema. A CLI otimiza a configuração para aproveitar ao máximo:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="text-yellow" size={16} />
                  <span>Renderização estática e dinâmica</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="text-yellow" size={16} />
                  <span>API Routes integradas</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="text-yellow" size={16} />
                  <span>Otimizações de imagem e assets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    tailwind: {
      title: "Tailwind CSS v4",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image 
                src="/techs/tailwindcss.svg" 
                alt="Tailwind CSS" 
                width={80} 
                height={80}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-yellow text-xl mb-2">Tailwind v4 na CLI</h3>
              <p className="text-gray-300">
                A nova versão do Tailwind traz melhorias significativas de performance e nossa CLI já vem
                configurada para aproveitar todos os benefícios:
              </p>
              <div className="mt-4 p-4 bg-darkGray rounded-lg border border-white/10">
                <h4 className="font-medium text-yellow mb-2">Configuração Automática</h4>
                <p className="text-sm">
                  PostCSS configurado com os plugins necessários e suporte a novas features como:
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow">•</span>
                    <span>CSS Nesting nativo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow">•</span>
                    <span>Variáveis CSS modernas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    trpc: {
      title: "tRPC",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image 
                src="/techs/trpc.svg" 
                alt="tRPC" 
                width={80} 
                height={80}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-yellow text-xl mb-2">tRPC: Tipagem de Ponta a Ponta</h3>
              <p className="text-gray-300">
                tRPC permite criar APIs totalmente tipadas entre frontend e backend sem esquemas ou geração de código.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-darkGray rounded-lg border border-white/10">
                  <h4 className="font-medium text-yellow mb-2">🔒 Segurança de Tipos</h4>
                  <p className="text-sm">
                    Elimina erros de runtime com validação automática via Zod e tipos compartilhados
                  </p>
                </div>
                <div className="p-4 bg-darkGray rounded-lg border border-white/10">
                  <h4 className="font-medium text-yellow mb-2">⚡ Performance</h4>
                  <p className="text-sm">
                    Comunicação direta entre client e server sem overhead de REST/GraphQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    prisma: {
      title: "Prisma ORM",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image 
                src="/techs/prisma.svg" 
                alt="Prisma" 
                width={80} 
                height={80}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-yellow text-xl mb-2">Prisma: ORM Moderno</h3>
              <p className="text-gray-300">
                Prisma simplifica o acesso a bancos de dados com um ORM type-safe e intuitivo.
              </p>
              <div className="mt-4 p-4 bg-darkGray rounded-lg border border-white/10">
                <h4 className="font-medium text-yellow mb-2">Configuração Automática</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow">•</span>
                    <span>Schema inicial para PostgreSQL/MySQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow">•</span>
                    <span>Migrações prontas para uso</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow">•</span>
                    <span>TypeScript types automáticos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    typescript: {
      title: "TypeScript",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image 
                src="/techs/typescript.svg" 
                alt="TypeScript" 
                width={80} 
                height={80}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-yellow text-xl mb-2">TypeScript: JavaScript Tipado</h3>
              <p className="text-gray-300">
                TypeScript traz segurança de tipos para toda a aplicação, reduzindo bugs em produção.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-yellow/5 rounded-lg border border-yellow/20">
                  <h4 className="font-medium text-yellow mb-2">🚀 Produtividade</h4>
                  <p className="text-sm">
                    Autocompletar inteligente e documentação embutida no editor
                  </p>
                </div>
                <div className="p-4 bg-yellow/5 rounded-lg border border-yellow/20">
                  <h4 className="font-medium text-yellow mb-2">🛡️ Segurança</h4>
                  <p className="text-sm">
                    Verificação de tipos em tempo de compilação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    auth: {
      title: "Autenticação",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image 
                src="/techs/nextauth.png" 
                alt="NextAuth" 
                width={80} 
                height={80}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-yellow text-xl mb-2">NextAuth.js</h3>
              <p className="text-gray-300">
                Solução completa de autenticação para aplicações Next.js com suporte a múltiplos providers.
              </p>
              <div className="mt-4 p-4 bg-darkGray rounded-lg border border-white/10">
                <h4 className="font-medium text-yellow mb-2">Features Incluídas</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow">•</span>
                    <span>Sessões JWT e banco de dados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow">•</span>
                    <span>Proteção de rotas automática</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow">•</span>
                    <span>CSRF protection built-in</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    linters: {
      title: "Linters & Formatters",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-darkGray rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <Image 
                  src="/techs/eslint.png" 
                  alt="ESLint" 
                  width={48} 
                  height={48}
                  className="rounded-lg"
                />
                <h3 className="font-bold text-yellow">ESLint</h3>
              </div>
              <p className="text-gray-300">
                Identifica problemas no código JavaScript/TypeScript durante o desenvolvimento.
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>Regras para React/Next.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>Integração com Prettier</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-darkGray rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <Image 
                  src="/techs/biomejs.svg" 
                  alt="Biome" 
                  width={48} 
                  height={48}
                  className="rounded-lg"
                />
                <h3 className="font-bold text-yellow">Biome</h3>
              </div>
              <p className="text-gray-300">
                Alternativa mais rápida ao ESLint + Prettier em Rust.
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>Linting e formatação em uma ferramenta</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>Até 10x mais rápido</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    git: {
      title: "Git Integration",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image 
                src="/techs/git.svg" 
                alt="Git" 
                width={80} 
                height={80}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-yellow text-xl mb-2">Git: Controle de Versão</h3>
              <p className="text-gray-300">
                Configuração automática de repositório Git com hooks e convenções modernas.
              </p>
              <div className="mt-4 p-4 bg-yellow/5 rounded-lg border border-yellow/20">
                <h4 className="font-medium text-yellow mb-2">🚀 Fluxo Automatizado</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="text-yellow" size={16} />
                    <span>.gitignore configurado para Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="text-yellow" size={16} />
                    <span>Hooks para verificação de tipos e lint</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    architecture: {
      title: "Arquitetura",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-darkGray rounded-xl border border-white/10">
            <h3 className="font-bold text-yellow text-xl mb-4">Design da CLI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-yellow mb-2">📦 Estrutura Modular</h4>
                <p className="text-gray-300 text-sm">
                  Componentes independentes que podem ser atualizados ou substituídos sem afetar o sistema.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-yellow mb-2">⚡ Performance</h4>
                <p className="text-gray-300 text-sm">
                  Otimizado para inicialização rápida e execução eficiente de comandos.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-yellow/5 rounded-xl border border-yellow/20">
            <h3 className="font-bold text-yellow mb-3">Fluxo de Execução</h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow text-dark text-sm font-bold">1</span>
                <span>Análise de argumentos e ambiente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow text-dark text-sm font-bold">2</span>
                <span>Carregamento de configurações</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow text-dark text-sm font-bold">3</span>
                <span>Execução do comando principal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow text-dark text-sm font-bold">4</span>
                <span>Geração de projeto e pós-processamento</span>
              </li>
            </ol>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="flex min-h-screen bg-dark text-white">
      {/* Enhanced Sidebar Navigation */}
      <aside className="w-64 border-r border-white/10 bg-darkGray sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen size={24} /> Documentação
          </h2>
        </div>
        <nav className="mt-6 relative">
          {/* Active indicator bar */}
          <motion.div
            className="absolute left-0 w-1 bg-yellow rounded-r-lg"
            initial={{ height: 0, y: 0 }}
            animate={{
              height: 44,
              y: sections.findIndex(s => s.id === activeSection) * 44
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          <ul className="space-y-1 px-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "text-yellow bg-yellow/5"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <span className="text-yellow">{section.icon}</span>
                  <span className="flex-1">{section.title}</span>
                  {activeSection === section.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="w-1 h-6 bg-yellow rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content with animations */}
      <main className="flex-1 p-8 overflow-y-auto">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="text-yellow">
              {sections.find(s => s.id === activeSection)?.icon}
            </div>
            <h1 className="text-3xl font-bold text-yellow">
              {techDetails[activeSection as keyof typeof techDetails]?.title}
            </h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            {techDetails[activeSection as keyof typeof techDetails]?.content}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Documentation;