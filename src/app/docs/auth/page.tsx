import { Shield, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AuthPage() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <header className="flex items-center gap-3 mb-8">
        <Shield size={24} className="text-yellow" />
        <h1 className="text-3xl font-bold text-yellow">NextAuth.js</h1>
      </header>

      <div className="space-y-8">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/techs/nextauth.png"
            alt="NextAuth"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div className="text-gray-300 leading-relaxed">
            <p>
              <strong>NextAuth.js</strong> é uma biblioteca completa de autenticação para aplicações Next.js. Ela oferece suporte nativo a múltiplos provedores de login (Google, GitHub, e-mail, entre outros), com flexibilidade para JWTs ou sessões persistidas em banco de dados. 
            </p>
            <p className="mt-4">
              Ideal para aplicações modernas, permite integração fácil com <strong>Next.js App Router</strong>, suporte a <strong>OAuth 2.0</strong>, rotas protegidas e segurança avançada com CSRF protection.
            </p>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-semibold text-yellow mb-4">Vantagens de usar NextAuth.js</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "Integração direta com o App Router (Next 13+)",
              "Autenticação com e-mail mágico, OAuth, credenciais e muito mais",
              "Sessões seguras com JWT ou banco relacional",
              "API pronta para uso: login, logout, session, etc.",
              "Suporte a múltiplos callbacks para customização",
              "Proteção automática de rotas e CSRF built-in",
              "Escalável para aplicações empresariais"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight className="text-yellow mt-1" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="p-4 bg-darkGray rounded-lg border border-white/10">
          <h4 className="font-medium text-yellow mb-4">Funcionalidades Principais</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-yellow">•</span>
              <span>Sessões com JWT ou banco de dados</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow">•</span>
              <span>Proteção de rotas integrada</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow">•</span>
              <span>CSRF protection automático</span>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-yellow mb-4">Links úteis:</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Site oficial:</span>
              <Link
                href="https://next-auth.js.org"
                target="_blank"
                className="hover:underline"
              >
                https://next-auth.js.org
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Repositório:</span>
              <Link
                href="https://github.com/nextauthjs/next-auth"
                target="_blank"
                className="hover:underline"
              >
                https://github.com/nextauthjs/next-auth
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Documentação:</span>
              <Link
                href="https://next-auth.js.org/getting-started/introduction"
                target="_blank"
                className="hover:underline"
              >
                https://next-auth.js.org/getting-started/introduction
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
