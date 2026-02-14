import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Por Que Escolher FairPay?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Somos mais que uma plataforma de pagamentos. Somos um movimento por justiça financeira.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-emerald-500 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 p-12 rounded-2xl border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-8">
            A Diferença FairPay
          </h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-lg text-slate-600">❌ Métodos Tradicionais</h4>
              {['Taxas que ninguém entende', 'Espera de dias para receber', 'Suporte limitado e lento', 'Medo de segurança'].map((item) => (
                <p key={item} className="text-slate-600 flex items-center gap-3">
                  <span className="text-slate-400">•</span> {item}
                </p>
              ))}
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-lg text-emerald-600">✅ Com FairPay</h4>
              {['Transparência 100%', 'Receba em segundos', 'Suporte sempre disponível', 'Protegido por tecnologia avançada'].map((item) => (
                <p key={item} className="text-slate-600 flex items-center gap-3">
                  <motion.span 
                    className="text-emerald-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    ✓
                  </motion.span> 
                  {item}
                </p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
