import { Terminal, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NextJSPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <header className="flex items-center gap-3 mb-10">
        <Terminal size={24} className="text-yellow" />
        <h1 className="text-3xl font-bold text-yellow">Next.js 15</h1>
      </header>

      <div className="flex flex-col items-start gap-6 mb-10">
        <Image
          src="/techs/nextjs.svg"
          alt="Logo do Next.js"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-xl font-bold text-yellow mb-2">Por que Next.js?</h2>
          <p className="text-gray-300 leading-relaxed">
            O <strong>Next.js 15</strong> é uma das ferramentas mais modernas e poderosas para desenvolvimento front-end com React. Ele oferece 
            uma arquitetura híbrida de renderização, excelente suporte a TypeScript, e está sempre na vanguarda da performance. A CLI do projeto já vem 
            configurada para tirar o máximo proveito de seus recursos, permitindo desenvolvimento ágil, consistente e com foco em escalabilidade.
          </p>
        </div>
      </div>

      <section className="mb-10">
        <h3 className="text-lg font-semibold text-yellow mb-4">Principais Vantagens:</h3>
        <ul className="space-y-2 text-gray-300">
          {[
            "Renderização estática e dinâmica com App Router",
            "API Routes e Middleware nativos",
            "Suporte nativo a layouts, loading e error states",
            "Otimização automática de imagens e assets",
            "Carregamento incremental e edge rendering",
            "Experiência de desenvolvedor incrível com Fast Refresh",
            "SEO avançado e estrutura acessível por padrão",
            "Amplo suporte da comunidade e atualizações frequentes"
          ].map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <ChevronRight className="text-yellow mt-1" size={16} />
              <span>{benefit}</span>
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
              href="https://nextjs.org"
              target="_blank"
              className="hover:underline"
            >
              https://nextjs.org
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="text-yellow" size={16} />
            <span>Repositório:</span>
            <Link
              href="https://github.com/vercel/next.js"
              target="_blank"
              className="hover:underline"
            >
              https://github.com/vercel/next.js
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="text-yellow" size={16} />
            <span>Documentação:</span>
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              className="hover:underline"
            >
              https://nextjs.org/docs
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="text-yellow" size={16} />
            <span>X (Twitter):</span>
            <Link
              href="https://x.com/vercel"
              target="_blank"
              className="hover:underline"
            >
              https://x.com/vercel
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="text-yellow" size={16} />
            <span>Blog:</span>
            <Link
              href="https://vercel.com/blog"
              target="_blank"
              className="hover:underline"
            >
              https://vercel.com/blog
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
}
