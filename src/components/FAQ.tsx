"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from 'lucide-react';

export default function FAQ() {
  const [openQ, setOpenQ] = useState<string | null>(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-slate-600">
            Tudo que você precisa saber sobre FairPay
          </p>
        </motion.div>

        <motion.div 
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.q}
              variants={itemVariants}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition"
            >
              <motion.button
                onClick={() => setOpenQ(openQ === faq.q ? null : faq.q)}
                className="w-full px-6 py-4 text-left font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 transition flex justify-between items-center"
                whileHover={{ backgroundColor: "rgb(248, 250, 252)" }}
              >
                <span>{faq.q}</span>
                <motion.div
                  animate={{ rotate: openQ === faq.q ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-slate-600" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openQ === faq.q && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-white text-slate-700 border-t border-slate-200"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 p-8 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl border border-slate-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Ainda tem dúvidas?
          </h3>
          <p className="text-slate-600 mb-6">
            Entre em contato conosco. Nosso suporte está pronto para ajudar!
          </p>
          <a
            href="mailto:suporte@fairpay.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            <Mail className="w-5 h-5" />
            Enviar Mensagem
          </a>
        </motion.div>
      </div>
    </section>
  );
}
