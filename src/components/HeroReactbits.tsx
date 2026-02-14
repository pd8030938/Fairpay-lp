import React from 'react';
import { motion } from 'framer-motion';

export default function HeroReactbits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  return (
    <section className="min-h-screen bg-white flex items-center py-20 md:py-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Conteúdo textual */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Marketplace</span>
              <div className="h-px w-8 bg-slate-300"></div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              FairPay: Contrate Profissionais.
              <br />
              <span className="text-slate-400">Com Garantia.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-lg leading-relaxed">
              O marketplace de serviços que Angola merece — seguro, simples e justo.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#waitlist" className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-black transition duration-300">
                Juntar-se à Lista de Espera
              </a>
              <a href="#como-funciona" className="px-6 py-3 border border-slate-300 text-slate-900 font-medium rounded-lg hover:border-slate-400 transition duration-300">
                Saber Mais
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-slate-900">10k+</div>
                <p className="text-sm text-slate-500 mt-1">Na Waitlist</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">99.9%</div>
                <p className="text-sm text-slate-500 mt-1">Uptime</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <p className="text-sm text-slate-500 mt-1">Suporte</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Imagem minimalista */}
          <motion.div variants={imageVariants} className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <motion.img
                  src="https://i.pinimg.com/736x/ad/47/55/ad475517a4256b970b71abd6ad1035f8.jpg"
                  alt="FairPay Marketplace Interface"
                  className="w-full h-[450px] object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
