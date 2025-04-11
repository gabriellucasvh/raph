"use client"

import {
    BookOpen, Terminal, Zap, Package, Code, Shield,
    Cpu, Database, GitBranch, Layers,
    ChevronRight, Menu, X, BookCheck,
    Github,
    Dot,
    Cat
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

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

export function DocsSidebar() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (isMobile) {
        return (
            <>
                {/* Mobile Navbar - Estilo idêntico ao componente Navbar */}
                <motion.header
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                            ? "py-3 bg-dark/80 backdrop-blur-lg border-b border-gray-800 shadow-md"
                            : "py-5"
                        }`}
                >
                    <div className="container mx-auto px-8 flex items-center justify-between">
                        {/* Logo idêntica */}
                        <motion.a
                            href="/"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2"
                        >
                            <div className="relative">
                                <Image src={"/logo.png"} alt="Logo" width={40} height={40} className="rounded-lg" />
                            </div>
                            <span className="font-bold text-xl text-white">
                                <span className="text-yellow-400">Raph</span>
                                <span className="text-white/60 font-mono">CLI</span>
                            </span>
                        </motion.a>

                        {/* Botão de menu e Docs link */}
                        <div className="flex items-center gap-4">
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

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-300 hover:text-yellow-400 transition-colors p-1"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </motion.header>

                {/* Mobile Menu - Estilizado para combinar */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden fixed inset-0 bg-dark/95 backdrop-blur-lg z-40 pt-24 px-8 overflow-y-auto"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ul className="space-y-3">
                                {sections.map((section, index) => {
                                    const isActive = pathname?.includes(section.id);
                                    return (
                                        <motion.li
                                            key={section.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={`/docs/${section.id}`}
                                                className={`w-full text-left flex items-center gap-3 py-3 transition-colors ${isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
                                                    }`}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <motion.span
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    {section.icon}
                                                </motion.span>

                                                <span className="flex-1">
                                                    {section.title}
                                                </span>

                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                    >
                                                        <Cat size={18} className="text-yellow-400" />
                                                    </motion.div>
                                                )}
                                            </Link>

                                            {isActive && (
                                                <motion.div
                                                    className="h-[2px] bg-yellow-400"
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        );
    }

    // Desktop Sidebar (original)
    return (
        <motion.aside
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block w-64 bg-darkGray px-4 sticky top-0 h-min py-10 mt-10 overflow-y-auto border border-yellow/30 shadow-lg rounded-lg"
        >
            <div className="pb-6">
                <motion.h2
                    className="text-2xl font-bold flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                >
                    <BookOpen size={24} /> Documentação
                </motion.h2>
            </div>
            <nav className="mt-6 relative">
                <ul className="space-y-1">
                    {sections.map((section, index) => {
                        const isActive = pathname?.includes(section.id);
                        return (
                            <motion.li
                                key={section.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="relative"
                            >
                                <Link
                                    href={`/docs/${section.id}`}
                                    className="w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg group"
                                >
                                    <motion.div
                                        className="absolute left-0 top-0 h-full w-1 bg-yellow rounded-r-md"
                                        initial={{ scaleY: 0 }}
                                        animate={{
                                            scaleY: isActive ? 1 : 0,
                                            opacity: isActive ? 1 : 0
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 500,
                                            damping: 30
                                        }}
                                    />

                                    <motion.span
                                        className="text-yellow"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 400 }}
                                    >
                                        {section.icon}
                                    </motion.span>

                                    <motion.span
                                        className={`flex-1 transition-colors ${isActive ? 'text-yellow font-medium' : 'text-gray-300 group-hover:text-white'
                                            }`}
                                    >
                                        {section.title}
                                    </motion.span>

                                    <motion.div
                                        className="text-yellow"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileHover={{
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <ChevronRight size={16} />
                                    </motion.div>
                                </Link>
                            </motion.li>
                        );
                    })}
                </ul>
            </nav>
        </motion.aside>
    );
}