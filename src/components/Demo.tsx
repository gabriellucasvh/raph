"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowingButton from "./ui-components/GlowingButton";
import { floatAnimation } from "../utils/motion";
import { Square, Heart, Star, CircleSlash, RotateCcw, Play } from "lucide-react";

const Demo: React.FC = () => {
    const [activeDemo, setActiveDemo] = useState<"basic" | "advanced" | "custom">(
        "basic"
    );
    const [isAnimating, setIsAnimating] = useState(false);

    const demoTabs = [
        { id: "basic", label: "Animação Básica" },
        { id: "advanced", label: "Efeitos Avançados" },
        { id: "custom", label: "Controles Personalizados" },
    ] as const;

    const resetAnimation = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsAnimating(true);
        }, 100);
    };

    const ShapeComponent = () => {
        const getShape = () => {
            switch (activeDemo) {
                case "basic":
                    return (
                        <motion.div
                            initial={{ scale: 0, rotate: 0 }}
                            animate={
                                isAnimating
                                    ? {
                                        scale: [0, 1, 1, 1, 0],
                                        rotate: [0, 0, 180, 360, 360],
                                        borderRadius: ["20%", "20%", "50%", "20%", "20%"],
                                    }
                                    : { scale: 0 }
                            }
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 0.5,
                            }}
                            className="w-24 h-24 bg-yellow"
                        />
                    );
                case "advanced":
                    return (
                        <motion.div
                            className="w-32 h-32 relative"
                            animate={isAnimating ? { rotate: 360 } : {}}
                            transition={{
                                duration: 8,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{
                                        rotate: `${i * 36}deg`,
                                    }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={
                                            isAnimating
                                                ? {
                                                    scale: [0, 1, 0],
                                                    y: [0, 60, 0],
                                                }
                                                : { scale: 0 }
                                        }
                                        transition={{
                                            duration: 2,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                        className="w-6 h-6 bg-yellow rounded-full"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    );
                case "custom":
                    return (
                        <div className="w-48 h-48 relative">
                            <AnimatePresence>
                                {isAnimating && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                                        >
                                            <div className="relative">
                                                <Square className="w-16 h-16 text-yellow" strokeWidth={2} />
                                                <motion.div
                                                    className="absolute inset-0"
                                                    animate={{
                                                        rotate: [0, 90, 180, 270, 360],
                                                    }}
                                                    transition={{
                                                        duration: 4,
                                                        ease: "linear",
                                                        repeat: Infinity,
                                                    }}
                                                >
                                                    <Heart
                                                        className="w-8 h-8 text-yellow absolute -top-4 left-1/2 transform -translate-x-1/2"
                                                        fill="currentColor"
                                                        strokeWidth={0.5}
                                                    />
                                                    <Star
                                                        className="w-8 h-8 text-yellow absolute top-1/2 -right-4 transform -translate-y-1/2"
                                                        fill="currentColor"
                                                        strokeWidth={0.5}
                                                    />
                                                    <CircleSlash
                                                        className="w-8 h-8 text-yellow absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                                                        strokeWidth={2}
                                                    />
                                                    <Square
                                                        className="w-8 h-8 text-yellow absolute top-1/2 -left-4 transform -translate-y-1/2"
                                                        strokeWidth={2}
                                                    />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="absolute inset-0 -z-10"
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-yellow/10 rounded-full blur-xl"
                                                animate={{
                                                    scale: [0.8, 1.2, 0.8],
                                                    opacity: [0.3, 0.6, 0.3],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                }}
                                            />
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                default:
                    return null;
            }
        };

        return getShape();
    };

    return (
        <section id="demo" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-yellow/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Demonstração <span className="text-yellow">Interativa</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Veja o poderoso sistema de animação do Raph em ação com estas
                        demonstrações interativas.
                    </p>
                </motion.div>

                {/* Demo container */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Demo sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 bg-darkGray rounded-lg p-6 border border-white/5"
                    >
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Play className="w-5 h-5 text-yellow" />
                            <span>Demonstrações de Animação</span>
                        </h3>

                        <div className="flex flex-col gap-2 mb-8">
                            {demoTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveDemo(tab.id);
                                        resetAnimation();
                                    }}
                                    className={`p-3 rounded-md text-left transition-all ${activeDemo === tab.id
                                            ? "bg-yellow/20 text-yellow"
                                            : "hover:bg-white/5"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-medium text-gray-300">Exemplo de Código</h4>
                            <pre className="bg-neutral-900 rounded p-3 overflow-x-auto text-xs">
                                <code>
                                    <span className="text-blue-400">import</span>{" "}
                                    <span className="text-green-400">{"{ motion }"}</span>{" "}
                                    <span className="text-blue-400">from</span>{" "}
                                    <span className="text-orange-300">'raph'</span>
                                    {"\n\n"}
                                    <span className="text-purple-400">function</span>{" "}
                                    <span className="text-yellow">AnimatedBox</span>() {"{"}
                                    {"\n  "}
                                    <span className="text-blue-400">return</span> {"{"}
                                    {"\n    "}
                                    <span className="text-yellow">{"<"}</span>
                                    <span className="text-blue-400">motion.div</span>{"\n      "}
                                    <span className="text-green-400">animate</span>
                                    <span className="text-white">=</span>
                                    <span className="text-orange-300">{"{{"}
                                        scale: [0, 1, 1, 1, 0],{"\n"}
                                        rotate: [0, 0, 180, 360, 360]{"\n"}
                                        {"}}"}</span>
                                    {"\n    "}
                                    <span className="text-yellow">/&gt;</span>
                                    {"\n  "}
                                    {"}"}
                                    {"\n"}
                                    {"}"}
                                </code>
                            </pre>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10">
                            <GlowingButton
                                variant="outline"
                                onClick={resetAnimation}
                                icon={<RotateCcw className="w-4 h-4" />}
                                className="w-full"
                            >
                                Reiniciar Animação
                            </GlowingButton>
                        </div>
                    </motion.div>

                    {/* Demo preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 bg-darkGray rounded-lg p-8 border border-white/5 flex flex-col items-center"
                    >
                        <div className="h-64 w-full flex items-center justify-center">
                            <ShapeComponent />
                        </div>

                        <div className="mt-8 w-full">
                            <div className="bg-neutral-900/50 rounded-lg p-4">
                                <h4 className="font-medium mb-2">
                                    {activeDemo === "basic" && "Animação de Formas Básica"}
                                    {activeDemo === "advanced" && "Sistema de Partículas"}
                                    {activeDemo === "custom" && "Objeto Interativo"}
                                </h4>
                                <p className="text-sm text-gray-400">
                                    {activeDemo === "basic" &&
                                        "Transformações simples de formas usando escala, rotação e raio de borda com controle preciso de tempo."}
                                    {activeDemo === "advanced" &&
                                        "Sistema complexo de partículas com animações aninhadas e atrasos escalonados para criar movimento orgânico."}
                                    {activeDemo === "custom" &&
                                        "Animação composta combinando vários elementos com caminhos de movimento independentes."}
                                </p>
                            </div>

                            <motion.div
                                variants={floatAnimation}
                                animate="animate"
                                className="mt-8 p-4 rounded-md bg-yellow/10 border border-yellow/20 text-center"
                            >
                                <p className="text-sm">
                                    <span className="text-yellow font-medium">Dica pro:</span>{" "}
                                    Todas as animações podem ser personalizadas usando controles de propriedades simples com nossa
                                    API intuitiva.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Demo;