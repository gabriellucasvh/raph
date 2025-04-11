import { Terminal, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function NextJSPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-yellow">
          <Terminal size={24} />
        </div>
        <h1 className="text-3xl font-bold text-yellow">Next.js 15</h1>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-shrink-0">
            <Image 
              src="/techs/nextjs.svg" 
              alt="Next.js" 
              width={80} 
              height={80}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="font-bold text-yellow text-xl mb-2">Por que Next.js?</h3>
            <p className="text-gray-300">
              Next.js foi escolhido como framework principal por sua performance, suporte nativo ao App Router,
              e excelente ecossistema. A CLI otimiza a configuração para aproveitar ao máximo:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="text-yellow" size={16} />
                <span>Renderização estática e dinâmica</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-yellow" size={16} />
                <span>API Routes integradas</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-yellow" size={16} />
                <span>Otimizações de imagem e assets</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}