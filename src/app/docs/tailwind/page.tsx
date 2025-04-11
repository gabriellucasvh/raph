import { Zap } from "lucide-react";
import Image from "next/image";

export default function TailwindPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-yellow">
          <Zap size={24} />
        </div>
        <h1 className="text-3xl font-bold text-yellow">Tailwind CSS v4</h1>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-shrink-0">
            <Image 
              src="/techs/tailwindcss.svg" 
              alt="Tailwind CSS" 
              width={80} 
              height={80}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="font-bold text-yellow text-xl mb-2">Tailwind v4 na CLI</h3>
            <p className="text-gray-300">
              A nova versão do Tailwind traz melhorias significativas de performance e nossa CLI já vem
              configurada para aproveitar todos os benefícios:
            </p>
            <div className="mt-4 p-4 bg-darkGray rounded-lg border border-white/10">
              <h4 className="font-medium text-yellow mb-2">Configuração Automática</h4>
              <p className="text-sm">
                PostCSS configurado com os plugins necessários e suporte a novas features como:
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>CSS Nesting nativo</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>Variáveis CSS modernas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}