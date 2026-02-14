import { motion } from 'framer-motion';
import { Target, Rocket, Lightbulb, CheckCircle } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Conteúdo */}
          <div>
            <motion.span 
              className="text-slate-500 font-semibold text-sm uppercase tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              O QUE É FAIRPAY
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Pagamentos Justos e Transparentes para Todos
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              FairPay é uma plataforma de pagamentos moderna construída com um princípio simples: <strong className="text-slate-900">finanças digitais não precisam ser complicadas.</strong>
            </motion.p>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Target, title: "Para Quem Somos", desc: "Freelancers, PMEs, startups e qualquer pessoa que quer receber pagamentos online sem enxaquecas. Você controla seu dinheiro.", color: "bg-cyan-100 text-cyan-600" },
                { icon: Rocket, title: "Como Funciona", desc: "Crie sua conta em 2 minutos, gere um link de pagamento e comece a receber. Sem burocracia, sem aprovação de crédito, sem espera.", color: "bg-emerald-100 text-emerald-600" },
                { icon: Lightbulb, title: "Nossa Missão", desc: "Democratizar o acesso a pagamentos digitais seguros. Acreditamos que finanças justas são um direito, não um privilégio.", color: "bg-amber-100 text-amber-600" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={itemVariants} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${item.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="#waitlist"
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transition"
              >
                Inscrever-se Agora
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            className="bg-slate-50 p-10 rounded-2xl border border-slate-200"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: "2 min", label: "Para configurar", color: "text-cyan-600" },
                { number: "1.5%", label: "Taxa transparente", color: "text-emerald-600" },
                { number: "24/7", label: "Suporte sempre perto", color: "text-amber-600" },
                { number: "⚡", label: "Pagamentos instantâneos", color: "text-rose-600" }
              ].map((stat) => (
                <motion.div key={stat.label} variants={statVariants} className="p-5 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition text-center">
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}

              <motion.div 
                variants={statVariants}
                className="pt-4 mt-4 border-t border-slate-200 space-y-2"
              >
                {[
                  "Conformidade regulatória",
                  "Criptografia de banco",
                  "Sem intermediários"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
