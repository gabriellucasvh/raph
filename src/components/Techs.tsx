"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { floatAnimation } from "../utils/motion";

const technologies = [
  { id: "tailwind", name: "Tailwind v4", image: "/techs/tailwindcss.svg" },
  { id: "nextjs", name: "Next.js 15", image: "/techs/nextjs.svg" },
  { id: "trpc", name: "tRPC", image: "/techs/trpc.svg" },
  { id: "prisma", name: "Prisma", image: "/techs/prisma.svg" },
  { id: "eslint", name: "ESLint", image: "/techs/eslint.png" },
  { id: "biome", name: "Biome", image: "/techs/biomejs.svg" },
  { id: "javascript", name: "JavaScript", image: "/techs/javascript.svg" },
  { id: "typescript", name: "TypeScript", image: "/techs/typescript.svg" },
  { id: "postgresql", name: "PostgreSQL", image: "/techs/postgresql.svg" },
  { id: "mysql", name: "MySQL", image: "/techs/mysql.svg" },
  { id: "nextauth", name: "NextAuth", image: "/techs/nextauth.png" },
  { id: "git", name: "Git", image: "/techs/git.svg" },
] as const;

const Techs: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

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
            Tecnologias <span className="text-yellow">Utilizadas</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Conheça as principais tecnologias e ferramentas que compõem nossa CLI para
            desenvolvimento moderno e eficiente.
          </p>
        </motion.div>

        {/* Technologies grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredTech(tech.id)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative bg-darkGray rounded-lg p-6 border border-white/5 flex flex-col items-center gap-4 hover:border-yellow/20 transition-colors"
            >
              <div className="relative w-16 h-16">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-center">{tech.name}</p>
              
              {hoveredTech === tech.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 -z-10 bg-yellow/5 rounded-lg blur-sm"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Info box */}
        <motion.div
          variants={floatAnimation}
          animate="animate"
          className="mt-12 p-6 rounded-lg bg-yellow/10 border border-yellow/20 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm">
            <span className="text-yellow font-medium">Nota:</span>{" "}
            Todas estas tecnologias são cuidadosamente selecionadas e integradas para
            oferecer a melhor experiência de desenvolvimento possível.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Techs;