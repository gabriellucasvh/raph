import { Package, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TRPCPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <header className="flex items-center gap-3 mb-8">
        <Package size={24} className="text-yellow" />
        <h1 className="text-3xl font-bold text-yellow">tRPC: Tipagem de Ponta a Ponta</h1>
      </header>

      <div className="space-y-8">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/techs/trpc.svg"
            alt="tRPC"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div className="text-gray-300 leading-relaxed">
            <p>
              O <strong>tRPC</strong> é uma poderosa biblioteca TypeScript-first que permite criar APIs totalmente seguras e tipadas sem a necessidade de gerar código ou escrever schemas manuais.
              Ele promove uma integração direta entre client e server, garantindo que a comunicação entre camadas seja feita de forma eficiente, sem perda de tipagem e com validação robusta.
            </p>
            <p className="mt-4">
              Diferente de REST e GraphQL, o tRPC evita boilerplate e entrega uma experiência incrível ao desenvolvedor, com feedback imediato de erros durante o desenvolvimento e suporte nativo a ferramentas modernas como <strong>Zod</strong>, <strong>React Query</strong> e <strong>Next.js</strong>.
              Sua estrutura modular e flexível o torna ideal para aplicações escaláveis, seguras e de alto desempenho.
            </p>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-semibold text-yellow mb-4">Principais Vantagens:</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "Integração perfeita com TypeScript sem código duplicado",
              "Evita erros de runtime com validação via Zod",
              "Autocompletar preciso no client com base nos tipos reais da API",
              "Integração com React Query para gerenciamento automático de cache",
              "Sem necessidade de schemas como no GraphQL",
              "Redução drástica de código boilerplate",
              "Alto desempenho com chamadas diretas ao servidor",
              "Fácil integração com Next.js e roteamento automático"
            ].map((advantage, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight className="text-yellow mt-1" size={16} />
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-yellow mb-4">Links úteis:</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Site oficial:</span>
              <Link
                href="https://trpc.io"
                target="_blank"
                className="hover:underline"
              >
                https://trpc.io
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Repositório:</span>
              <Link
                href="https://github.com/trpc/trpc"
                target="_blank"
                className="hover:underline"
              >
                https://github.com/trpc/trpc
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="text-yellow" size={16} />
              <span>Documentação:</span>
              <Link
                href="https://trpc.io/docs"
                target="_blank"
                className="hover:underline"
              >
                https://trpc.io/docs
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
