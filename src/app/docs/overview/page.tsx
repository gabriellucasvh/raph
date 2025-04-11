import { BookOpen } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-yellow">
          <BookOpen size={24} />
        </div>
        <h1 className="text-3xl font-bold text-yellow">Visão Geral da Raph CLI</h1>
      </div>
      
      <div className="space-y-6">
        <div className="p-6 bg-darkGray rounded-xl border border-white/10">
          <p className="text-lg">
            A Raph CLI é uma ferramenta de linha de comando moderna projetada para acelerar o desenvolvimento
            de aplicações Next.js com App Router. Combinando velocidade, flexibilidade e uma excelente
            experiência do desenvolvedor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className="p-5 bg-yellow/5 border border-yellow/20 rounded-xl"
          >
            <h3 className="font-bold text-yellow mb-2">⚡ Velocidade</h3>
            <p>Criação de projetos em segundos com configurações otimizadas</p>
          </div>

          <div 
            className="p-5 bg-yellow/5 border border-yellow/20 rounded-xl"
          >
            <h3 className="font-bold text-yellow mb-2">🧩 Extensibilidade</h3>
            <p>Sistema de plugins para adicionar funcionalidades</p>
          </div>
        </div>
      </div>
    </div>
  );
}