import { Target, Rocket, Lightbulb, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div>
            <span className="text-blue-600 font-semibold text-lg">O QUE É FAIRPAY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6 font-poppins">
              Pagamentos Justos e Transparentes para Todos
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              FairPay é uma plataforma de pagamentos moderna construída com um princípio simples:
              <strong className="text-slate-900"> finanças digitais não precisam ser complicadas.</strong>
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-poppins">
                    Para Quem Somos
                  </h3>
                  <p className="text-slate-600">
                    Freelancers, PMEs, startups e qualquer pessoa que quer receber pagamentos online sem enxaquecas. Você controla seu dinheiro.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-600">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-poppins">
                    Como Funciona
                  </h3>
                  <p className="text-slate-600">
                    Crie sua conta em 2 minutos, gere um link de pagamento e comece a receber. Sem burocracia, sem aprovação de crédito, sem espera.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-600">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-poppins">
                    Nossa Missão
                  </h3>
                  <p className="text-slate-600">
                    Democratizar o acesso a pagamentos digitais seguros. Acreditamos que finanças justas são um direito, não um privilégio.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#waitlist"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
              >
                Inscrever-se Agora
              </a>
            </div>
          </div>

          {/* Ilustração / Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-12 rounded-2xl border-2 border-blue-200">
            <div className="space-y-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-lg transition">
                <div className="text-5xl font-bold text-blue-600 mb-2">2 min</div>
                <div className="text-slate-600 font-semibold">Para configurar</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm border-l-4 border-green-600 hover:shadow-lg transition">
                <div className="text-5xl font-bold text-green-600 mb-2">1.5%</div>
                <div className="text-slate-600 font-semibold">Taxa transparente</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm border-l-4 border-purple-600 hover:shadow-lg transition">
                <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-slate-600 font-semibold">Suporte sempre perto</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm border-l-4 border-orange-600 hover:shadow-lg transition">
                <div className="text-5xl font-bold text-orange-600 mb-2">⚡</div>
                <div className="text-slate-600 font-semibold">Pagamentos instantâneos</div>
              </div>

              <div className="pt-6 border-t-2 border-slate-200 text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Conformidade regulatória
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Criptografia de banco
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Sem intermediários
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
