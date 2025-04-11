import { GitBranch, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function GitPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-yellow">
          <GitBranch size={24} />
        </div>
        <h1 className="text-3xl font-bold text-yellow">Git: Controle de Versão</h1>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Image 
              src="/techs/git.svg" 
              alt="Git" 
              width={80} 
              height={80}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-gray-300">
              Configuração automática de repositório Git com hooks e convenções modernas.
            </p>
            <div className="mt-4 p-4 bg-yellow/5 rounded-lg border border-yellow/20">
              <h4 className="font-medium text-yellow mb-2">🚀 Fluxo Automatizado</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="text-yellow" size={16} />
                  <span>.gitignore configurado para Next.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="text-yellow" size={16} />
                  <span>Hooks para verificação de tipos e lint</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}