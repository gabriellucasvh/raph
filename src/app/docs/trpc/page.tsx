import { Package } from "lucide-react";
import Image from "next/image";

export default function TRPCPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-yellow">
          <Package size={24} />
        </div>
        <h1 className="text-3xl font-bold text-yellow">tRPC: Tipagem de Ponta a Ponta</h1>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Image 
              src="/techs/trpc.svg" 
              alt="tRPC" 
              width={80} 
              height={80}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-gray-300">
              tRPC permite criar APIs totalmente tipadas entre frontend e backend sem esquemas ou geração de código.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-darkGray rounded-lg border border-white/10">
                <h4 className="font-medium text-yellow mb-2">🔒 Segurança de Tipos</h4>
                <p className="text-sm">
                  Elimina erros de runtime com validação automática via Zod e tipos compartilhados
                </p>
              </div>
              <div className="p-4 bg-darkGray rounded-lg border border-white/10">
                <h4 className="font-medium text-yellow mb-2">⚡ Performance</h4>
                <p className="text-sm">
                  Comunicação direta entre client e server sem overhead de REST/GraphQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}