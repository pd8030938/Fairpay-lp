"use client";

import { useState } from "react";
import { ChevronDown, Mail } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como FairPay garante segurança dos meus dados?",
      a: "Usamos criptografia de nível militar (AES-256) e conformidade total com LGPD, PCI-DSS e regulações internacionais. Seus dados são armazenados em servidores certificados com backup redundante.",
    },
    {
      q: "Quanto tempo leva para receber meu dinheiro?",
      a: "Com FairPay, você recebe em segundos após a confirmação da transação. Não há espera de 1-3 dias como em métodos tradicionais. É instantâneo.",
    },
    {
      q: "Quais são as taxas do FairPay?",
      a: "Somos transparentes: taxa fixa de 1.5% + R$0.50 por transação processada. Sem taxas ocultas, sem surpresas. Veja tudo claramente no seu dashboard.",
    },
    {
      q: "Posso usar FairPay em qualquer lugar?",
      a: "Por enquanto, FairPay está em fase de pré-lançamento. Ao se inscrever na nossa waitlist, você será um dos primeiros a ter acesso assim que abrirmos para o público.",
    },
    {
      q: "Qual é o valor mínimo/máximo de transação?",
      a: "Valor mínimo: R$1. Valor máximo: R$100.000 por transação. Para transações maiores, entre em contato com nosso suporte.",
    },
    {
      q: "FairPay é regulado?",
      a: "Sim, estamos em processo de regulação junto ao Banco Central. Operamos com total conformidade regulatória e transparência.",
    },
    {
      q: "Como o suporte ao cliente funciona?",
      a: "Oferecemos chat 24/7, email, e telefone. Tempo médio de resposta inferior a 2 minutos. Sua satisfação é nossa prioridade.",
    },
    {
      q: "Posso integrar FairPay na minha aplicação?",
      a: "Absolutamente! Temos API robusta, webhooks, e SDKs para principais linguagens. Documentação completa disponível para developers.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-poppins">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-slate-600 font-inter">
            Tudo que você precisa saber sobre FairPay
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-200 rounded-lg overflow-hidden hover:border-blue-500 transition hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-semibold text-slate-900 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-50 hover:to-blue-100 transition flex justify-between items-center"
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 bg-gradient-to-b from-blue-50 to-white text-slate-700 border-t-2 border-slate-200 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 text-center hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 font-poppins">
            Ainda tem dúvidas?
          </h3>
          <p className="text-slate-600 mb-6 font-inter">
            Entre em contato conosco. Nosso suporte está pronto para ajudar!
          </p>
          <a
            href="mailto:suporte@fairpay.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  );
}
