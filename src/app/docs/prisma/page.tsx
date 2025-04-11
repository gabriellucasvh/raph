import { Database } from "lucide-react";
import Image from "next/image";

export default function PrismaPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-yellow">
          <Database size={24} />
        </div>
        <h1 className="text-3xl font-bold text-yellow">Prisma: ORM Moderno</h1>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-shrink-0">
            <Image 
              src="/techs/prisma.svg" 
              alt="Prisma" 
              width={80} 
              height={80}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-gray-300">
              Prisma simplifica o acesso a bancos de dados com um ORM type-safe e intuitivo.
            </p>
            <div className="mt-4 p-4 bg-darkGray rounded-lg border border-white/10">
              <h4 className="font-medium text-yellow mb-2">Configuração Automática</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>Schema inicial para PostgreSQL/MySQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>Migrações prontas para uso</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>TypeScript types automáticos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}