import { Database, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PrismaPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <header className="flex items-center gap-3 mb-8">
        <Database size={24} className="text-yellow" />
        <h1 className="text-3xl font-bold text-yellow">Prisma: ORM Moderno</h1>
      </header>

      <div className="space-y-8">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/techs/prisma.svg"
            alt="Prisma"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div className="text-gray-300 leading-relaxed">
            <p>
              O <strong>Prisma</strong> é um ORM moderno e type-safe para Node.js e TypeScript que simplifica o acesso a bancos de dados relacionais com uma abordagem declarativa e intuitiva. Com suporte robusto a PostgreSQL, MySQL, SQLite, SQL Server e MongoDB, ele permite escrever consultas eficientes com validação de tipos e integração automática ao seu schema de dados.
            </p>
            <p className="mt-4">
              Utilizando o <code>Prisma Client</code>, as queries são escritas em JavaScript/TypeScript com total autocompletar e segurança de tipos. Além disso, a ferramenta de migração oferece versionamento de schema, integração com CI/CD e facilidade no controle do banco.
            </p>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-semibold text-yellow mb-4">Principais Vantagens:</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "Segurança de tipos em tempo de desenvolvimento com Prisma Client",
              "Geração automática de tipos TypeScript a partir do schema",
              "Migrações de banco controladas por código",
              "Experiência de autocompletar rica e contextual",
              "Compatível com bancos populares: PostgreSQL, MySQL, SQLite e outros",
              "Ferramentas robustas para CI/CD e versionamento",
              "Alta produtividade com queries simplificadas",
              "Integração direta com Next.js, NestJS, Express, etc."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight className="text-yellow mt-1" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="p-4 bg-darkGray rounded-lg border border-white/10">
          <h4 className="font-medium text-yellow mb-2">Configuração Automática:</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-yellow">•</span>
              <span>Schema inicial para PostgreSQL, MySQL, SQLite etc.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow">•</span>
              <span>Migrações automatizadas com versionamento</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow">•</span>
              <span>Geração automática de tipos TypeScript</span>
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
                href="https://www.prisma.io"
                target="_blank"
                className="hover:underline"
              >
                https://www.prisma.io
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Repositório:</span>
              <Link
                href="https://github.com/prisma/prisma"
                target="_blank"
                className="hover:underline"
              >
                https://github.com/prisma/prisma
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Documentação:</span>
              <Link
                href="https://www.prisma.io/docs"
                target="_blank"
                className="hover:underline"
              >
                https://www.prisma.io/docs
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
