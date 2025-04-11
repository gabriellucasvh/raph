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
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    const commands = [
        {
            id: "create-basic",
            command: "npm create raph-app@latest",
            description: "Cria um novo projeto Raph com configuração padrão"
        },
        {
            id: "create-with-name",
            command: "npm create raph-app@latest my-project",
            description: "Cria um novo projeto com nome específico"
        },
        {
            id: "create-with-template",
            command: "npm create raph-app@latest --template typescript",
            description: "Cria um projeto usando um template específico"
        },
        {
            id: "create-offline",
            command: "npm create raph-app@latest --offline",
            description: "Cria um projeto usando cache local (modo offline)"
        }
    ];

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
                        Como <span className="text-yellow">Iniciar</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Comece seu projeto Raph com este simples comando e suas variações
                    </p>
                </motion.div>

                {/* Command examples */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 gap-3 sm:gap-4 max-w-3xl mx-auto"
                >
                    {commands.map((cmd, idx) => (
                        <motion.div
                            key={cmd.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                            className="bg-darkGray border border-white/5 rounded-lg p-3 sm:p-4 hover:border-yellow/20 transition-all"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                                        <span className="text-green-400 text-sm sm:text-base">$</span>
                                        <pre className="font-mono text-white text-sm sm:text-base overflow-x-auto py-1">
                                            {cmd.command}
                                        </pre>
                                        <button
                                            onClick={() => handleCopy(cmd.command, cmd.id)}
                                            className="ml-1 p-1 rounded hover:bg-white/5"
                                            title="Copiar comando"
                                        >
                                            {copied === cmd.id ? (
                                                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-400">{cmd.description}</p>
                                </div>
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-yellow/50 mt-1" />
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
                    className="mt-8 sm:mt-16 bg-yellow/10 border border-yellow/20 rounded-lg p-4 sm:p-6 max-w-3xl mx-auto"
                >
                    <div className="flex items-start gap-3 sm:gap-4">
                        <div className="bg-yellow/20 p-1.5 sm:p-2 rounded-full">
                            <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-base sm:text-lg font-semibold text-yellow mb-1.5 sm:mb-2">
                                Dica de Instalação
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-300">
                                Certifique-se de ter o Node.js instalado antes de executar estes comandos.
                            </p>
                            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-400">
                                Para mais opções, execute: <code className="bg-black/20 px-1 py-0.5 rounded text-yellow text-xs sm:text-sm">npm create raph-app@latest --help</code>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CommandExamples;