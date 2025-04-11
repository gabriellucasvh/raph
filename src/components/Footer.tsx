"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Produto",
      links: [
        { label: "Funcionalidades", href: "#features" },
        { label: "Demonstração", href: "#demo" },
        { label: "Documentação", href: "#docs" },
        { label: "Preços", href: "#pricing" },
        { label: "Lançamentos", href: "#releases" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Começando", href: "#" },
        { label: "Tutoriais", href: "#" },
        { label: "Exemplos", href: "#" },
        { label: "Referência API", href: "#" },
        { label: "Comunidade", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre Nós", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carreiras", href: "#" },
        { label: "Contato", href: "#" },
        { label: "Parceiros", href: "#" },
      ],
    },
  ];

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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Logo and info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src={"/logo.png"} alt="Logo" width={40} height={40} className="rounded-lg" />
              <span className="font-bold text-xl text-white">
                <span className="text-yellow">Raph</span>
                <span className="text-outline opacity-60 font-mono">CLI</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              CLI moderna para construir aplicações bonitas e de alta performance
              com uma experiência excepcional para desenvolvedores.
            </p>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/gabriellucasvh/raph"
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((group, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="font-medium text-lg mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-medium text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Receba as últimas atualizações da nossa equipe
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-neutral-900 text-sm px-3 py-2 rounded-l-md border border-white/10 border-r-0 w-full focus:outline-none focus:border-yellow/50"
              />
              <button className="bg-yellow px-3 py-2 text-black rounded-r-md hover:bg-yellowLight transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Raph CLI. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-yellow">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-yellow">
              Termos de Serviço
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-yellow">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;