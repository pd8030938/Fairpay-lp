import { DollarSign, Zap, Lock, Smile, Clock, Sparkles } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      title: "Sem Taxas Ocultas",
      description: "Você vê exatamente o que paga. Sem surpresas, sem letras pequenas.",
      icon: DollarSign,
    },
    {
      title: "Pagamentos Instantâneos",
      description: "Receba seu dinheiro em segundos, não em dias. Sua conta, sob seu controle.",
      icon: Zap,
    },
    {
      title: "Segurança de Banco",
      description: "Criptografia de nível militar. Seus dados estão sempre protegidos.",
      icon: Lock,
    },
    {
      title: "Interface Intuitiva",
      description: "Não precisa ser especialista em finanças. FairPay é feito para todos.",
      icon: Smile,
    },
    {
      title: "Suporte 24/7",
      description: "Dúvidas? Problemas? Nossa equipe está sempre aqui para ajudar.",
      icon: Clock,
    },
    {
      title: "Taxas Justas e Competitivas",
      description: "Nós acreditamos que tecnologia deve ser acessível. Preços que fazem sentido.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-poppins">
            Por Que Escolher FairPay?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
            Somos mais que uma plataforma de pagamentos. Somos um movimento por justiça financeira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br from-blue-50 to-white group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-poppins">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-inter">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-slate-50 p-12 rounded-xl border border-blue-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            A Diferença FairPay
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-slate-700">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-600">❌ Antes (Métodos tradicionais)</h4>
              <ul className="space-y-2">
                <li>• Taxas que ninguém entende</li>
                <li>• Espera de dias para receber</li>
                <li>• Suporte limitado e lento</li>
                <li>• Medo de segurança</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-green-600">✅ Com FairPay</h4>
              <ul className="space-y-2">
                <li>• Transparência 100%</li>
                <li>• Receba em segundos</li>
                <li>• Suporte sempre disponível</li>
                <li>• Protegido por tecnologia avançada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
