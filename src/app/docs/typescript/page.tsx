import { Code, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TypeScriptPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <header className="flex items-center gap-3 mb-8">
        <Code size={24} className="text-yellow" />
        <h1 className="text-3xl font-bold text-yellow">TypeScript: JavaScript Tipado</h1>
      </header>

      <div className="space-y-8">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/techs/typescript.svg"
            alt="TypeScript"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div className="text-gray-300 leading-relaxed">
            <p>
              <strong>TypeScript</strong> é uma linguagem de programação desenvolvida pela Microsoft que adiciona tipagem estática opcional ao JavaScript. Ele permite detectar erros em tempo de desenvolvimento, melhora a escalabilidade de projetos e proporciona uma experiência de desenvolvimento mais robusta, segura e produtiva.
            </p>
            <p className="mt-4">
              Com integração perfeita com frameworks modernos como Next.js, React, Angular e Node.js, TypeScript se tornou o padrão de fato para aplicações web escaláveis.
            </p>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-semibold text-yellow mb-4">Por que usar TypeScript?</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "Autocompletar inteligente baseado em tipos",
              "Erros detectados antes mesmo da execução",
              "Refatoração segura e assistida",
              "Integração nativa com editores como VSCode",
              "Mais clareza na leitura e manutenção do código",
              "Ampla adoção e comunidade ativa",
              "Melhora a documentação da base de código",
              "Adoção oficial em frameworks como Angular, Next.js e NestJS"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight className="text-yellow mt-1" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-yellow/5 rounded-lg border border-yellow/20">
            <h4 className="font-medium text-yellow mb-2">🚀 Produtividade</h4>
            <p className="text-sm text-gray-300">
              Autocompletar inteligente, refatorações seguras e documentação automática no editor
            </p>
          </div>
          <div className="p-4 bg-yellow/5 rounded-lg border border-yellow/20">
            <h4 className="font-medium text-yellow mb-2">🛡️ Segurança</h4>
            <p className="text-sm text-gray-300">
              Erros de tipagem são detectados antes de ir para produção
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-yellow mb-4">Links úteis:</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Site oficial:</span>
              <Link
                href="https://www.typescriptlang.org"
                target="_blank"
                className="hover:underline"
              >
                https://www.typescriptlang.org
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Repositório:</span>
              <Link
                href="https://github.com/microsoft/TypeScript"
                target="_blank"
                className="hover:underline"
              >
                https://github.com/microsoft/TypeScript
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Documentação:</span>
              <Link
                href="https://www.typescriptlang.org/docs"
                target="_blank"
                className="hover:underline"
              >
                https://www.typescriptlang.org/docs
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
