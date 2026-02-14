"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const launchDate = new Date("2026-03-30").getTime();
    
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = launchDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-8 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 mb-8 border border-slate-200"
    >
      <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-8 text-slate-900">Lançamento em:</motion.h2>
      <motion.div 
        className="flex justify-center gap-4 md:gap-8 text-slate-900"
        variants={containerVariants}
      >
        {[
          { value: timeLeft.days, label: "Dias" },
          { value: timeLeft.hours, label: "Horas", pad: true },
          { value: timeLeft.minutes, label: "Minutos", pad: true },
          { value: timeLeft.seconds, label: "Segundos", pad: true }
        ].map((item, idx) => (
          <motion.div key={item.label} variants={itemVariants} className="text-center">
            <motion.p 
              className="text-4xl md:text-5xl font-extrabold text-slate-900"
              key={item.value}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {item.pad ? String(item.value).padStart(2, '0') : item.value}
            </motion.p>
            <p className="text-sm mt-2 text-slate-600 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
