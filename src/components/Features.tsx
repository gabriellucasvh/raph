"use client"

import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./ui-components/FeatureCard";
import { staggerContainer } from "../utils/motion";
import {
    Zap,
    Terminal,
    Hammer,
    Globe,
    Package,
    FileCode,
    Settings,
    Gauge,
    Shield,
    Command,
    RefreshCw,
    Medal
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      title: "Velocidade Relâmpago",
      description: "Execução extremamente rápida com overhead mínimo para automação de tarefas instantânea.",
      icon: <Zap strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Experiência de Dev",
      description: "Sintaxe de comando intuitiva e autocompletação excelente para um fluxo de trabalho perfeito.",
      icon: <Terminal strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Ferramentas Poderosas",
      description: "Utilitários integrados para tarefas comuns de desenvolvimento e automação de fluxo de trabalho.",
      icon: <Hammer strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Multiplataforma",
      description: "Funciona em todos os principais sistemas operacionais com comportamento consistente.",
      icon: <Globe strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Sistema de Plugins",
      description: "Arquitetura extensível com um rico ecossistema de plugins da comunidade.",
      icon: <Package strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Suporte a Scripts",
      description: "Execute scripts personalizados e automatize tarefas complexas com facilidade.",
      icon: <FileCode strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Configurável",
      description: "Configurações altamente personalizáveis para corresponder às suas preferências de fluxo de trabalho.",
      icon: <Settings strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Métricas de Desempenho",
      description: "Benchmarking integrado para rastrear e otimizar tempos de execução de comandos.",
      icon: <Gauge strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Segurança Avançada",
      description: "Verificações de segurança integradas e validação de dependências para código mais seguro.",
      icon: <Shield strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Comandos Personalizáveis",
      description: "Crie e compartilhe seus próprios comandos para tarefas específicas do seu projeto.",
      icon: <Command strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Integração Contínua",
      description: "Conecte-se facilmente a pipelines de CI/CD para automação completa do ciclo de vida.",
      icon: <RefreshCw strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
      title: "Suporte Premium",
      description: "Documentação detalhada e comunidade ativa para resolver qualquer problema rapidamente.",
      icon: <Medal strokeWidth={1.5} className="w-6 h-6" />,
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-yellow/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos <span className="text-yellow">Poderosos</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tudo o que você precisa para aumentar a produtividade e otimizar seu 
            fluxo de trabalho diretamente da sua linha de comando.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </motion.div>

        {/* CLI comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 p-6 bg-darkGray rounded-lg border border-white/5 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            Como o Raph CLI se compara a outras ferramentas
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4">Funcionalidade</th>
                  <th className="py-3 px-4 text-yellow">Raph CLI</th>
                  <th className="py-3 px-4 text-gray-400">Ferramenta A</th>
                  <th className="py-3 px-4 text-gray-400">Ferramenta B</th>
                  <th className="py-3 px-4 text-gray-400">Ferramenta C</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Tamanho da Instalação</td>
                  <td className="py-3 px-4 text-yellow font-medium">2.5 MB</td>
                  <td className="py-3 px-4">12 MB</td>
                  <td className="py-3 px-4">8 MB</td>
                  <td className="py-3 px-4">5 MB</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Tempo de Resposta</td>
                  <td className="py-3 px-4 text-yellow font-medium">0.3s</td>
                  <td className="py-3 px-4">1.2s</td>
                  <td className="py-3 px-4">0.8s</td>
                  <td className="py-3 px-4">0.6s</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Autocompletar</td>
                  <td className="py-3 px-4 text-yellow font-medium">✅ Inteligente</td>
                  <td className="py-3 px-4">✅ Básico</td>
                  <td className="py-3 px-4">❌ Nenhum</td>
                  <td className="py-3 px-4">✅ Básico</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Sistema de Plugins</td>
                  <td className="py-3 px-4 text-yellow font-medium">✅ Extensivo</td>
                  <td className="py-3 px-4">❌ Limitado</td>
                  <td className="py-3 px-4">✅ Básico</td>
                  <td className="py-3 px-4">❌ Nenhum</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Scripts Personalizados</td>
                  <td className="py-3 px-4 text-yellow font-medium">✅ Suporte Completo</td>
                  <td className="py-3 px-4">✅ Parcial</td>
                  <td className="py-3 px-4">❌ Nenhum</td>
                  <td className="py-3 px-4">✅ Parcial</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Multiplataforma</td>
                  <td className="py-3 px-4 text-yellow font-medium">✅ Windows/Mac/Linux</td>
                  <td className="py-3 px-4">✅ Linux/Mac</td>
                  <td className="py-3 px-4">✅ Windows</td>
                  <td className="py-3 px-4">✅ Linux</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
        
        {/* Novo testimonal section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">
            O que os <span className="text-yellow">desenvolvedores</span> estão dizendo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Raph CLI transformou completamente meu fluxo de trabalho. Economizo pelo menos 2 horas por dia com automações.",
                author: "Hugo Santos",
                role: "Tech Lead",
                company: "Startup"
              },
              {
                quote: "A melhor ferramenta CLI que já usei. A extensibilidade por meio de plugins é simplesmente incrível.",
                author: "Marcelo Costa",
                role: "Desenvolvedor Full-Stack",
                company: "DevShop Inc."
              },
              {
                quote: "Extremamente rápido e confiável. Usamos o Raph CLI em toda a nossa equipe de 50+ desenvolvedores.",
                author: "Juliana Martins",
                role: "CTO",
                company: "StartApp"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-darkGray rounded-lg p-6 border border-white/5 relative"
              >
                <div className="absolute -top-3 -left-3 text-4xl text-yellow opacity-30">"</div>
                <div className="mb-4 text-gray-300 relative z-10">{testimonial.quote}</div>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="font-medium text-yellow">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
                <div className="absolute -bottom-3 -right-3 text-4xl text-yellow opacity-30">"</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;