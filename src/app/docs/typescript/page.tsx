import { Code } from "lucide-react";
import Image from "next/image";

export default function TypeScriptPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-yellow">
          <Code size={24} />
        </div>
        <h1 className="text-3xl font-bold text-yellow">TypeScript: JavaScript Tipado</h1>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-shrink-0">
            <Image 
              src="/techs/typescript.svg" 
              alt="TypeScript" 
              width={80} 
              height={80}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-gray-300">
              TypeScript traz segurança de tipos para toda a aplicação, reduzindo bugs em produção.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow/5 rounded-lg border border-yellow/20">
                <h4 className="font-medium text-yellow mb-2">🚀 Produtividade</h4>
                <p className="text-sm">
                  Autocompletar inteligente e documentação embutida no editor
                </p>
              </div>
              <div className="p-4 bg-yellow/5 rounded-lg border border-yellow/20">
                <h4 className="font-medium text-yellow mb-2">🛡️ Segurança</h4>
                <p className="text-sm">
                  Verificação de tipos em tempo de compilação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}