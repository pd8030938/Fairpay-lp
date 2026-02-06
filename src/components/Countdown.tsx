"use client";

import { useEffect, useState } from "react";

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
      const now = new Date().getTime();
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

  return (
    <section className="py-8 bg-gradient-to-r from-azul-light to-verde-light rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Lançamento em</h2>
      <div className="flex justify-center gap-6 text-cinza-900">
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-extrabold">{timeLeft.days}</p>
          <p className="text-sm mt-1">Dias</p>
        </div>
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-extrabold">{String(timeLeft.hours).padStart(2, '0')}</p>
          <p className="text-sm mt-1">Horas</p>
        </div>
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-extrabold">{String(timeLeft.minutes).padStart(2, '0')}</p>
          <p className="text-sm mt-1">Minutos</p>
        </div>
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-extrabold">{String(timeLeft.seconds).padStart(2, '0')}</p>
          <p className="text-sm mt-1">Segundos</p>
        </div>
      </div>
    </section>
  );
}
