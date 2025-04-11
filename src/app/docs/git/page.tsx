import { GitBranch, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GitPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <header className="flex items-center gap-3 mb-8">
        <GitBranch size={24} className="text-yellow" />
        <h1 className="text-3xl font-bold text-yellow">Git: Controle de Versão</h1>
      </header>

      <div className="space-y-6">
        <div className="flex flex-col gap-4">
          <Image 
            src="/techs/git.svg" 
            alt="Git" 
            width={80} 
            height={80}
            className="rounded-lg self-start"
          />

          <div>
            <p className="text-gray-300 leading-relaxed">
              O <strong>Git</strong> é um sistema de controle de versão distribuído que permite rastrear mudanças no código, colaborar com outros desenvolvedores e reverter alterações com segurança.
              Com configurações modernas, é possível automatizar rotinas e garantir qualidade de código desde o primeiro commit.
            </p>

            <div className="mt-6 p-4 bg-yellow/5 rounded-lg border border-yellow/20">
              <h4 className="font-medium text-yellow mb-2">🚀 Fluxo Automatizado</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-yellow mt-1" size={16} />
                  <span><code>.gitignore</code> personalizado para projetos Next.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-yellow mt-1" size={16} />
                  <span>Hooks pré-commit para verificação de tipos e lint</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="text-yellow mt-1" size={16} />
                  <span>Commits padronizados com mensagens automáticas e integração com linters</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 space-y-2">
              <Link
                href="https://git-scm.com"
                target="_blank"
                className="flex items-center gap-2 text-yellow hover:underline text-sm"
              >
                <ExternalLink size={14} /> https://git-scm.com
              </Link>
              <Link
                href="https://www.atlassian.com/git/tutorials"
                target="_blank"
                className="flex items-center gap-2 text-yellow hover:underline text-sm"
              >
                <ExternalLink size={14} /> https://www.atlassian.com/git/tutorials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
