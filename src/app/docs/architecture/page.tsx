import { Layers } from "lucide-react";

export default function ArchitecturePage() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <header className="flex items-center gap-3 mb-8">
        <Layers size={24} className="text-yellow" />
        <h1 className="text-3xl font-bold text-yellow">Arquitetura</h1>
      </header>

      <div className="space-y-6">
        <div className="p-6 bg-darkGray rounded-xl border border-white/10">
          <h3 className="font-bold text-yellow text-xl mb-4">Design da CLI</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-yellow mb-2">📦 Estrutura Modular</h4>
              <p className="text-gray-300 text-sm">
                Componentes independentes que podem ser atualizados ou substituídos sem afetar o sistema.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-yellow mb-2">⚡ Performance</h4>
              <p className="text-gray-300 text-sm">
                Otimizado para inicialização rápida e execução eficiente de comandos.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-yellow/5 rounded-xl border border-yellow/20">
          <h3 className="font-bold text-yellow mb-3">Fluxo de Execução</h3>
          <ol className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow text-dark text-sm font-bold">1</span>
              <span>Análise de argumentos e ambiente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow text-dark text-sm font-bold">2</span>
              <span>Carregamento de configurações</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow text-dark text-sm font-bold">3</span>
              <span>Execução do comando principal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow text-dark text-sm font-bold">4</span>
              <span>Geração de projeto e pós-processamento</span>
            </li>
          </ol>
        </div>

        <div className="p-6 bg-darkGray rounded-xl border border-white/10">
          <h3 className="font-bold text-yellow text-xl mb-4">🧠 Princípios de Arquitetura</h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
            <li><strong>Separação de responsabilidades:</strong> cada módulo executa apenas uma função bem definida.</li>
            <li><strong>Extensibilidade:</strong> fácil adição de novos comandos sem reescrever o core.</li>
            <li><strong>Testabilidade:</strong> uso de funções puras facilita testes unitários e integração contínua.</li>
            <li><strong>Manutenibilidade:</strong> código claro, desacoplado e com diretórios bem definidos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
