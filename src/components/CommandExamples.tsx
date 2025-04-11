"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Code,
    Copy,
    Check,
    ChevronRight,
    FileJson,
    TerminalSquare,
    Search,
    AlertCircle
} from "lucide-react";
import { fadeInUp } from "../utils/motion";

const CommandExamples: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"basic" | "workflow" | "api" | "config">("basic");
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    const tabs = [
        { id: "basic", label: "Comandos Básicos", icon: <TerminalSquare className="w-4 h-4" /> },
        { id: "workflow", label: "Fluxos de Trabalho", icon: <Search className="w-4 h-4" /> },
        { id: "api", label: "Integração API", icon: <Code className="w-4 h-4" /> },
        { id: "config", label: "Configuração", icon: <FileJson className="w-4 h-4" /> },
    ] as const;

    const commands = {
        basic: [
            {
                id: "basic-1",
                command: "raph init projeto-react",
                description: "Inicia um novo projeto React com configuração padrão do Raph",
            },
            {
                id: "basic-2",
                command: "raph install --deps react react-dom",
                description: "Instala dependências específicas no projeto atual",
            },
            {
                id: "basic-3",
                command: "raph run dev",
                description: "Executa o script de desenvolvimento definido no projeto",
            },
            {
                id: "basic-4",
                command: "raph build --optimize",
                description: "Compila o projeto com otimizações avançadas",
            },
        ],
        workflow: [
            {
                id: "workflow-1",
                command: "raph workflow init",
                description: "Configura um novo fluxo de trabalho automatizado no projeto",
            },
            {
                id: "workflow-2",
                command: "raph workflow add lint test build",
                description: "Adiciona etapas específicas ao fluxo de trabalho",
            },
            {
                id: "workflow-3",
                command: "raph workflow run --ci",
                description: "Executa o fluxo de trabalho em modo de integração contínua",
            },
        ],
        api: [
            {
                id: "api-1",
                command: "raph api create users --crud",
                description: "Gera um endpoint de API REST completo para entidade 'users'",
            },
            {
                id: "api-2",
                command: "raph api test --endpoint=/users",
                description: "Executa testes automatizados no endpoint especificado",
            },
            {
                id: "api-3",
                command: "raph api deploy --prod",
                description: "Implanta a API em ambiente de produção",
            },
        ],
        config: [
            {
                id: "config-1",
                command: "raph config init",
                description: "Cria um arquivo de configuração padrão para o projeto",
            },
            {
                id: "config-2",
                command: "raph config set cache.ttl 3600",
                description: "Define um valor específico na configuração do projeto",
            },
            {
                id: "config-3",
                command: "raph config export --format=json",
                description: "Exporta a configuração atual para um arquivo JSON",
            },
        ],
    };

    return (
        <section id="commands" className="py-24 relative bg-dark/50">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,214,0,0.15),transparent_60%)]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow/5 blur-[80px] rounded-full" />
            </div>

            <div className="container mx-auto px-4">
                {/* Section header */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Exemplos de <span className="text-yellow">Comandos</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Descubra o poder e a flexibilidade do Raph CLI com estes exemplos práticos
                        que você pode usar imediatamente em seus projetos.
                    </p>
                </motion.div>

                {/* Command tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${activeTab === tab.id
                                    ? "bg-yellow text-black"
                                    : "bg-darkGray hover:bg-yellow/10"
                                }`}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {tab.icon}
                            {tab.label}
                        </motion.button>
                    ))}
                </div>

                {/* Command examples */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 gap-4 max-w-3xl mx-auto"
                >
                    {commands[activeTab].map((cmd, idx) => (
                        <motion.div
                            key={cmd.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                            className="bg-darkGray border border-white/5 rounded-lg p-4 hover:border-yellow/20 transition-all"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-green-400">$</span>
                                        <pre className="font-mono text-white overflow-x-auto py-1">{cmd.command}</pre>
                                        <button
                                            onClick={() => handleCopy(cmd.command, cmd.id)}
                                            className="ml-2 p-1 rounded hover:bg-white/5"
                                            title="Copiar comando"
                                        >
                                            {copied === cmd.id ? (
                                                <Check className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-400">{cmd.description}</p>
                                </div>

                                <ChevronRight className="w-5 h-5 text-yellow/50 mt-1.5" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pro tip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-yellow/10 border border-yellow/20 rounded-lg p-6 max-w-3xl mx-auto"
                >
                    <div className="flex items-start gap-4">
                        <div className="bg-yellow/20 p-2 rounded-full">
                            <AlertCircle className="w-6 h-6 text-yellow" />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-yellow mb-2">Dica profissional</h4>
                            <p className="text-gray-300">
                                Use <code className="bg-black/20 px-1.5 py-0.5 rounded text-yellow">raph --help</code> para
                                ver todos os comandos disponíveis, ou <code className="bg-black/20 px-1.5 py-0.5 rounded text-yellow">raph [comando] --help</code> para
                                obter ajuda específica sobre qualquer comando.
                            </p>
                            <p className="mt-2 text-gray-400">
                                Todos os comandos também oferecem suporte a flags abreviadas. Por exemplo, <code className="bg-black/20 px-1 py-0.5 rounded text-gray-300">--verbose</code> pode
                                ser usado como <code className="bg-black/20 px-1 py-0.5 rounded text-gray-300">-v</code>.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CommandExamples;