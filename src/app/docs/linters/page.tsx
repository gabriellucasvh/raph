import { Cpu } from "lucide-react";
import Image from "next/image";

export default function LintersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-yellow">
          <Cpu size={24} />
        </div>
        <h1 className="text-3xl font-bold text-yellow">Linters & Formatters</h1>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-darkGray rounded-xl border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <Image 
                src="/techs/eslint.png" 
                alt="ESLint" 
                width={48} 
                height={48}
                className="rounded-lg"
              />
              <h3 className="font-bold text-yellow">ESLint</h3>
            </div>
            <p className="text-gray-300">
              Identifica problemas no código JavaScript/TypeScript durante o desenvolvimento.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-yellow">•</span>
                <span>Regras para React/Next.js</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow">•</span>
                <span>Integração com Prettier</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-darkGray rounded-xl border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <Image 
                src="/techs/biomejs.svg" 
                alt="Biome" 
                width={48} 
                height={48}
                className="rounded-lg"
              />
              <h3 className="font-bold text-yellow">Biome</h3>
            </div>
            <p className="text-gray-300">
              Alternativa mais rápida ao ESLint + Prettier em Rust.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-yellow">•</span>
                <span>Linting e formatação em uma ferramenta</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow">•</span>
                <span>Até 10x mais rápido</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}