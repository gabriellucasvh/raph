import { Shield } from "lucide-react";
import Image from "next/image";

export default function AuthPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-yellow">
          <Shield size={24} />
        </div>
        <h1 className="text-3xl font-bold text-yellow">NextAuth.js</h1>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-shrink-0">
            <Image 
              src="/techs/nextauth.png" 
              alt="NextAuth" 
              width={80} 
              height={80}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-gray-300">
              Solução completa de autenticação para aplicações Next.js com suporte a múltiplos providers.
            </p>
            <div className="mt-4 p-4 bg-darkGray rounded-lg border border-white/10">
              <h4 className="font-medium text-yellow mb-2">Features Incluídas</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>Sessões JWT e banco de dados</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>Proteção de rotas automática</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow">•</span>
                  <span>CSRF protection built-in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}