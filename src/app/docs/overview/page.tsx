import { BookOpen } from "lucide-react";

export default function OverviewPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <header className="flex items-center gap-3 mb-8">
        <div className="text-yellow">
          <BookOpen size={24} />
        </div>
        <h1 className="text-3xl font-bold text-yellow">Visão Geral da Raph CLI</h1>
      </header>

      <div className="space-y-6">
        <div className="p-6 bg-darkGray rounded-xl border border-white/10">
          <p className="text-lg">
            A Raph CLI é uma ferramenta de linha de comando moderna projetada para acelerar o desenvolvimento
            de aplicações Next.js com App Router. Combinando velocidade, flexibilidade e uma excelente
            experiência do desenvolvedor. Ela permite criar, configurar e otimizar projetos de forma intuitiva e rápida, oferecendo uma configuração padrão otimizada e diversas opções de customização.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-yellow/5 border border-yellow/20 rounded-xl">
            <h3 className="font-bold text-yellow mb-2">⚡ Velocidade</h3>
            <p>Criação de projetos em segundos com configurações otimizadas para Next.js e Tailwind CSS, sem perder a performance.</p>
            <ul className="mt-3 text-gray-300 text-sm space-y-1">
              <li>Inicialização rápida com templates prontos</li>
              <li>Configuração automatizada de TypeScript e Prettier</li>
              <li>Suporte completo a App Router no Next.js</li>
            </ul>
          </div>

          <div className="p-5 bg-yellow/5 border border-yellow/20 rounded-xl">
            <h3 className="font-bold text-yellow mb-2">🧩 Extensibilidade</h3>
            <p>Sistema de plugins para adicionar funcionalidades específicas ao seu projeto, permitindo personalizações avançadas.</p>
            <ul className="mt-3 text-gray-300 text-sm space-y-1">
              <li>Suporte a plugins personalizados de integração</li>
              <li>Adição de bibliotecas como Prisma, NextAuth e tRPC de forma simples</li>
              <li>Facilidade para incluir ferramentas como ESLint, Prettier e Jest</li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-darkGray rounded-xl border border-white/10">
          <h3 className="font-bold text-yellow text-xl mb-4">🛠️ Funcionalidades Principais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-yellow mb-2">🚀 Início Rápido</h4>
              <p className="text-gray-300 text-sm">
                Comece seu projeto rapidamente com templates prontos, eliminando a necessidade de configuração manual para tecnologias como TypeScript, Next.js e Tailwind.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-yellow mb-2">🔒 Segurança</h4>
              <p className="text-gray-300 text-sm">
                A CLI garante práticas seguras, configurando automaticamente arquivos como `.env` e implementando boas práticas de segurança.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-yellow/5 rounded-xl border border-yellow/20">
          <h3 className="font-bold text-yellow mb-4">🌱 Sustentabilidade do Código</h3>
          <p className="text-gray-300">
            A Raph CLI foca não só em performance, mas também em manter um código limpo e sustentável. Seu sistema de geração de código segue princípios de arquitetura limpa, o que torna a manutenção e evolução do sistema mais simples.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-300 text-sm space-y-2">
            <li><strong>Modularidade:</strong> cada parte do código é desacoplada, permitindo alterações rápidas sem comprometer outras funcionalidades.</li>
            <li><strong>Testabilidade:</strong> a estrutura criada pela Raph CLI facilita a integração de ferramentas de testes como Jest e Cypress.</li>
            <li><strong>Boas práticas:</strong> o código gerado segue as melhores práticas da comunidade, desde a organização de pastas até a configuração de hooks no Git.</li>
          </ul>
        </div>

        <div className="p-6 bg-darkGray rounded-xl border border-white/10">
          <h3 className="font-bold text-yellow text-xl mb-4">🔧 Suporte a Ferramentas</h3>
          <p className="text-gray-300">
            Além de suas funcionalidades principais, a Raph CLI suporta diversas ferramentas integradas, como ESLint, Prettier, Prisma e NextAuth. Essa integração permite que você se concentre no desenvolvimento sem se preocupar com configurações adicionais.
          </p>
          <ul className="mt-3 text-gray-300 text-sm space-y-1">
            <li>Configuração automática de ESLint e Prettier com regras adaptadas ao seu projeto</li>
            <li>Integração simplificada com bancos de dados através do Prisma</li>
            <li>Autenticação segura com NextAuth, pronta para uso em seu projeto</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
