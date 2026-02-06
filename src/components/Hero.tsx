import { Button } from "./ui";
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="text-center px-4 z-10">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-blue-500 bg-opacity-30 backdrop-blur-sm rounded-full text-sm font-semibold border border-blue-300 border-opacity-50">
            🚀 O futuro dos pagamentos chegou
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 font-poppins leading-tight animate-fade-in">
          Bem-vindo ao <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">Fairpay</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-inter text-blue-100 leading-relaxed">
          A solução mais rápida, segura e simples para pagamentos digitais. 
          <span className="block mt-2 text-lg">Faça parte dessa revolução financeira!</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all">
            Entrar para a Waitlist
            <ArrowRight className="w-5 h-5" />
          </Button>
          <button className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold rounded-lg transition-all transform hover:scale-105">
            Saber Mais
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div className="backdrop-blur-sm bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-yellow-300">10k+</div>
            <div className="text-sm text-blue-100">Na Waitlist</div>
          </div>
          <div className="backdrop-blur-sm bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-green-300">99.9%</div>
            <div className="text-sm text-blue-100">Uptime</div>
          </div>
          <div className="backdrop-blur-sm bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
            <div className="text-3xl font-bold text-purple-300">24/7</div>
            <div className="text-sm text-blue-100">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}
