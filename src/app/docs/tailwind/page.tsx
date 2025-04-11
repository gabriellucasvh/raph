import { Zap, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TailwindPage() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <header className="flex items-center gap-3 mb-10">
        <Zap size={24} className="text-yellow" />
        <h1 className="text-3xl font-bold text-yellow">Tailwind CSS v4</h1>
      </header>

      <div className="flex flex-col items-start gap-6 mb-10">
        <Image
          src="/techs/tailwindcss.svg"
          alt="Tailwind CSS"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-xl font-bold text-yellow mb-2">Tailwind v4 na CLI</h2>
          <p className="text-gray-300 leading-relaxed">
            A versão 4 do <strong>Tailwind CSS</strong> é uma revolução na forma de escrever estilos utilitários. Com performance aprimorada,
            novas capacidades de design e uma estrutura mais limpa, ela é a escolha ideal para projetos modernos. A CLI já vem pronta para
            utilizar seus recursos mais avançados, permitindo que você foque apenas na construção da interface.
          </p>
        </div>
      </div>

      <section className="mb-10">
        <h3 className="text-lg font-semibold text-yellow mb-4">Principais Vantagens:</h3>
        <ul className="space-y-2 text-gray-300">
          {[
            "Compilação ultrarrápida com o novo engine",
            "CSS Nesting nativo",
            "Variáveis CSS modernas com escopo automático",
            "Temas otimizados para dark mode",
            "Classes simplificadas com autocomplete melhorado",
            "Melhor integração com React, Next.js e outros frameworks",
            "Eliminação de estilos não usados (purge) inteligente",
            "Comunidade ativa e atualizações constantes"
          ].map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <ChevronRight className="text-yellow mt-1" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-semibold text-yellow mb-4">Configuração Automática:</h3>
        <div className="p-4 bg-darkGray rounded-lg border border-white/10 text-gray-300 text-sm space-y-3">
          <p>PostCSS já configurado com suporte às novas features, incluindo:</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <span className="text-yellow">•</span>
              <span>CSS Nesting com escopo de classe</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow">•</span>
              <span>Suporte a variáveis CSS com fallback</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow">•</span>
              <span>Estrutura pronta para dark/light themes</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-yellow mb-4">Links úteis:</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <ExternalLink className="text-yellow" size={16} />
            <span>
              Site oficial:{" "}
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                className="hover:underline"
              >
                https://tailwindcss.com
              </Link>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="text-yellow" size={16} />
            <span>
              Repositório:{" "}
              <Link
                href="https://github.com/tailwindlabs/tailwindcss"
                target="_blank"
                className="hover:underline"
              >
                https://github.com/tailwindlabs/tailwindcss
              </Link>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="text-yellow" size={16} />
            <span>
              Documentação:{" "}
              <Link
                href="https://tailwindcss.com/docs"
                target="_blank"
                className="hover:underline"
              >
                https://tailwindcss.com/docs
              </Link>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="text-yellow" size={16} />
            <span>
              X (Twitter):{" "}
              <Link
                href="https://x.com/tailwindcss"
                target="_blank"
                className="hover:underline"
              >
                https://x.com/tailwindcss
              </Link>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="text-yellow" size={16} />
            <span>
              Blog:{" "}
              <Link
                href="https://tailwindcss.com/blog"
                target="_blank"
                className="hover:underline"
              >
                https://tailwindcss.com/blog
              </Link>
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
}
