import { Cpu, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LintersPage() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <header className="flex items-center gap-3 mb-8">
        <Cpu size={24} className="text-yellow" />
        <h1 className="text-3xl font-bold text-yellow">Linters & Formatters</h1>
      </header>

      <div className="space-y-8">
        <article className="p-6 bg-darkGray rounded-xl border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/techs/eslint.png"
              alt="ESLint"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <h3 className="font-bold text-yellow text-xl">ESLint</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            O <strong>ESLint</strong> é uma ferramenta essencial para identificar e corrigir problemas em código JavaScript e TypeScript. Ele permite aplicar padrões de estilo, detectar erros em tempo de desenvolvimento e garantir que o código siga boas práticas.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="text-yellow mt-1" size={16} />
              <span>Regras específicas para React e Next.js</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="text-yellow mt-1" size={16} />
              <span>Suporte à integração direta com Prettier</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="text-yellow mt-1" size={16} />
              <span>Extensível com plugins e configurações compartilhadas</span>
            </li>
          </ul>
          <div className="mt-4 space-y-2">
            <Link
              href="https://eslint.org"
              target="_blank"
              className="flex items-center gap-2 text-yellow hover:underline text-sm"
            >
              <ExternalLink size={14} /> https://eslint.org
            </Link>
            <Link
              href="https://nextjs.org/docs/app/building-your-application/configuring/eslint"
              target="_blank"
              className="flex items-center gap-2 text-yellow hover:underline text-sm"
            >
              <ExternalLink size={14} /> https://nextjs.org/docs/app/building-your-application/configuring/eslint
            </Link>
          </div>
        </article>

        <article className="p-6 bg-darkGray rounded-xl border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/techs/biomejs.svg"
              alt="Biome"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <h3 className="font-bold text-yellow text-xl">Biome</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            O <strong>Biome</strong> é uma ferramenta moderna, escrita em Rust, que combina linting e formatação em um único pacote. Criado como sucessor do Rome, o Biome promete desempenho elevado com fácil integração.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="text-yellow mt-1" size={16} />
              <span>Substitui ESLint + Prettier com performance superior</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="text-yellow mt-1" size={16} />
              <span>Suporte a TypeScript e JSX integrado</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="text-yellow mt-1" size={16} />
              <span>Execução até 10x mais rápida</span>
            </li>
          </ul>
          <div className="mt-4 space-y-2">
            <Link
              href="https://biomejs.dev"
              target="_blank"
              className="flex items-center gap-2 text-yellow hover:underline text-sm"
            >
              <ExternalLink size={14} /> https://biomejs.dev
            </Link>
            <Link
              href="https://github.com/biomejs/biome"
              target="_blank"
              className="flex items-center gap-2 text-yellow hover:underline text-sm"
            >
              <ExternalLink size={14} /> https://github.com/biomejs/biome
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
