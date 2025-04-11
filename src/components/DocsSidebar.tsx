"use client"

import { BookOpen, Terminal, Zap, Package, Code, Shield, 
  Cpu, Database, GitBranch, Layers, 
  ChevronRight} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
  
  return (
    <motion.aside 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-darkGray px-4 sticky top-0 h-min py-10 mt-10 overflow-y-auto border border-yellow/30 shadow-lg rounded-lg"
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
                  {/* Enhanced sliding indicator */}
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
                  
                  {/* Smooth icon transition */}
                  <motion.span 
                    className="text-yellow"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {section.icon}
                  </motion.span>
                  
                  {/* Clean text animation */}
                  <motion.span
                    className={`flex-1 transition-colors ${
                      isActive ? 'text-yellow font-medium' : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    {section.title}
                  </motion.span>

                  {/* Subtle arrow indicator */}
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