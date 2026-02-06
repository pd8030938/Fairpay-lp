'use client';

// Mobile optimized landing page component - v2
import WaitlistForm from "@/components/WaitlistForm2";
import Countdown from "@/components/Countdown";
import { ChevronRight, Shield, Users, TrendingUp, CheckCircle, Code, Palette, Megaphone, FileText, Wrench, Camera, Lock, Award } from 'lucide-react';
import { useState } from 'react';

export default function MobileHome() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <main className="bg-branco">
        {/* HERO SECTION - Full Width */}
        <section className="relative w-screen h-96 -mx-[calc((100vw-100%)/2)] bg-gradient-to-r from-azul-primary to-azul-dark overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full -ml-36 -mb-36"></div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-branco">
            <div className="inline-block px-3 py-1 bg-branco/20 backdrop-blur rounded-full text-branco text-xs font-semibold mb-4">
              Marketplace de Confiança
            </div>
            
            <h1 className="text-3xl font-black mb-3 leading-tight">
              FairPay: Contrate com Garantia
            </h1>
            
            <p className="text-sm text-branco/90 mb-8 max-w-sm">
              O marketplace de serviços que Angola merece. Seguro, simples e justo para todos.
            </p>

            <div className="flex gap-3 w-full max-w-xs">
              <button className="flex-1 px-4 py-3 bg-verde-success text-branco font-bold rounded-lg text-xs hover:bg-verde-dark transition">
                Registar Agora
              </button>
              <button className="flex-1 px-4 py-3 bg-branco/20 text-branco font-bold rounded-lg text-xs border border-branco/30 hover:bg-branco/30 transition">
                Saber Mais
              </button>
            </div>
          </div>
        </section>

        {/* PROPOSTA DE VALOR */}
        <section className="px-4 py-8">
          <h2 className="text-2xl font-bold text-cinza-900 mb-2">Por que FairPay?</h2>
          <p className="text-sm text-cinza-600 mb-6">Segurança, transparência e oportunidade para todos</p>

          {/* Cards Estatísticos */}
          <div className="grid grid-cols-1 gap-3 mb-6">
            <div className="p-4 bg-azul-light rounded-xl border border-azul-primary/20">
              <div className="flex items-start gap-3">
                <Shield size={24} className="text-azul-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-2xl font-black text-azul-primary">100%</p>
                  <p className="text-xs text-cinza-600">Dinheiro Protegido</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-verde-light rounded-xl border border-verde-success/20">
              <div className="flex items-start gap-3">
                <Users size={24} className="text-verde-success flex-shrink-0 mt-1" />
                <div>
                  <p className="text-2xl font-black text-verde-success">50+</p>
                  <p className="text-xs text-cinza-600">Profissionais Verificados</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-laranja-accent/10 rounded-xl border border-laranja-accent/20">
              <div className="flex items-start gap-3">
                <Award size={24} className="text-laranja-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-2xl font-black text-laranja-accent">24h</p>
                  <p className="text-xs text-cinza-600">Suporte Rápido</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards de Benefícios */}
          <div className="space-y-3">
            <div className="p-4 bg-branco rounded-xl border border-cinza-200 shadow-sm">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-azul-light rounded-lg flex-shrink-0">
                  <Lock size={18} className="text-azul-primary" />
                </div>
                <div>
                  <p className="font-bold text-cinza-900 text-sm">Segurança Real</p>
                  <p className="text-xs text-cinza-600 mt-0.5">Dinheiro retido até aprovação final</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-branco rounded-xl border border-cinza-200 shadow-sm">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-verde-light rounded-lg flex-shrink-0">
                  <CheckCircle size={18} className="text-verde-success" />
                </div>
                <div>
                  <p className="font-bold text-cinza-900 text-sm">Talento Verificado</p>
                  <p className="text-xs text-cinza-600 mt-0.5">Identidade e portfólio validados</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-branco rounded-xl border border-cinza-200 shadow-sm">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-laranja-accent/10 rounded-lg flex-shrink-0">
                  <TrendingUp size={18} className="text-laranja-accent" />
                </div>
                <div>
                  <p className="font-bold text-cinza-900 text-sm">Crescimento Profissional</p>
                  <p className="text-xs text-cinza-600 mt-0.5">Benefícios e níveis progressivos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS - Cards Grid */}
        <section className="px-4 py-8 bg-cinza-50 -mx-4">
          <div className="px-4">
            <h2 className="text-2xl font-bold text-cinza-900 mb-2">Categorias Disponíveis</h2>
            <p className="text-sm text-cinza-600 mb-6">Encontre o profissional perfeito para seu projeto</p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Code, label: 'Programação', desc: 'Desenvolvimento de apps e sites' },
                { icon: Palette, label: 'Design', desc: 'Logotipos e identidade visual' },
                { icon: Megaphone, label: 'Marketing', desc: 'Redes sociais e campanhas' },
                { icon: FileText, label: 'Tradução', desc: 'Vários idiomas' },
                { icon: Wrench, label: 'Técnico', desc: 'Soluções profissionais' },
                { icon: Camera, label: 'Criadores', desc: 'Fotografia e vídeo' },
              ].map((cat) => (
                <div
                  key={cat.label}
                  className="p-4 bg-branco rounded-xl border border-cinza-200 shadow-sm hover:shadow-md hover:border-azul-primary transition cursor-pointer"
                >
                  <cat.icon size={24} className="text-azul-primary mb-2" />
                  <p className="font-bold text-cinza-900 text-sm">{cat.label}</p>
                  <p className="text-xs text-cinza-600 mt-1">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA - Processo */}
        <section className="px-4 py-8">
          <h2 className="text-2xl font-bold text-cinza-900 mb-2">Como Funciona</h2>
          <p className="text-sm text-cinza-600 mb-6">Três passos simples para começar</p>

          <div className="space-y-4">
            {/* Passo 1 */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-azul-primary to-azul-dark text-branco flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="pt-1">
                <p className="font-bold text-cinza-900">Cria o Teu Perfil</p>
                <p className="text-xs text-cinza-600 mt-1">Mostra quem és e o que procuras</p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="ml-5 h-6 border-l-2 border-dashed border-azul-primary/30"></div>

            {/* Passo 2 */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-azul-primary to-azul-dark text-branco flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="pt-1">
                <p className="font-bold text-cinza-900">Procura ou Publica</p>
                <p className="text-xs text-cinza-600 mt-1">Encontra profissionais ou oferece serviços</p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="ml-5 h-6 border-l-2 border-dashed border-azul-primary/30"></div>

            {/* Passo 3 */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-verde-success to-verde-light text-branco flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="pt-1">
                <p className="font-bold text-cinza-900">Trabalha com Segurança</p>
                <p className="text-xs text-cinza-600 mt-1">Dinheiro protegido até aprovação</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-verde-light/40 rounded-xl border border-verde-success/30">
            <p className="text-xs text-cinza-900 flex items-center gap-2">
              <CheckCircle size={16} className="text-verde-success flex-shrink-0" />
              <span><strong>Simples, seguro e transparente</strong> para clientes e profissionais</span>
            </p>
          </div>
        </section>

        {/* PROBLEMA E SOLUÇÃO */}
        <section className="px-4 py-8 bg-cinza-50 -mx-4">
          <div className="px-4">
            <h2 className="text-2xl font-bold text-cinza-900 mb-6">O Problema</h2>

            <div className="space-y-3 mb-8">
              <div className="p-4 bg-branco rounded-xl border-l-4 border-laranja-accent">
                <p className="font-bold text-cinza-900 text-sm">"Será que ele vai mesmo entregar?"</p>
              </div>
              <div className="p-4 bg-branco rounded-xl border-l-4 border-laranja-accent">
                <p className="font-bold text-cinza-900 text-sm">"E se eu transferir e desaparecer?"</p>
              </div>
              <div className="p-4 bg-branco rounded-xl border-l-4 border-laranja-accent">
                <p className="font-bold text-cinza-900 text-sm">"Como sei que é mesmo bom?"</p>
              </div>
            </div>

            <p className="text-xs text-cinza-600 p-4 bg-laranja-accent/10 rounded-xl">
              <strong>Todos perdemos tempo. Todos perdemos dinheiro. Todos perdemos confiança.</strong>
            </p>
          </div>
        </section>

        {/* FEITO PARA ANGOLA */}
        <section className="px-4 py-8">
          <h2 className="text-2xl font-bold text-cinza-900 mb-6">Feito para Angola</h2>

          <div className="space-y-3">
            <div className="p-4 bg-branco rounded-xl border border-cinza-200 shadow-sm">
              <p className="font-bold text-cinza-900 text-sm mb-1">Pagamento Simples</p>
              <p className="text-xs text-cinza-600">Multicaixa Express ou Referência em Kwanzas</p>
            </div>

            <div className="p-4 bg-branco rounded-xl border border-cinza-200 shadow-sm">
              <p className="font-bold text-cinza-900 text-sm mb-1">Internet Lenta? Sem Problema</p>
              <p className="text-xs text-cinza-600">Páginas leves e rápidas que funcionam em conexões lentas</p>
            </div>

            <div className="p-4 bg-branco rounded-xl border border-cinza-200 shadow-sm">
              <p className="font-bold text-cinza-900 text-sm mb-1">Suporte em Português</p>
              <p className="text-xs text-cinza-600">Uma pessoa real de Angola pronta a ajudar</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-8 bg-cinza-50 -mx-4">
          <div className="px-4">
            <h2 className="text-2xl font-bold text-cinza-900 mb-6">Perguntas Frequentes</h2>

            <div className="space-y-2">
              {[
                { q: 'Quanto custa usar a plataforma?', a: 'Para clientes: taxa pequena por transação. Para profissionais: grátis publicar, 15% ao receber.' },
                { q: 'Como funciona a segurança do pagamento?', a: 'O dinheiro fica retido conosco até você aprovar o trabalho. Só depois é que o profissional recebe.' },
                { q: 'Posso falar com o profissional antes?', a: 'Sim, tem um sistema de mensagens integrado na plataforma para conversa antes e durante o projeto.' },
                { q: 'Quanto tempo leva para receber o dinheiro?', a: 'Após você aprovar o trabalho, o profissional recebe em 3 dias úteis na conta dele.' },
                { q: 'E se não gostar do trabalho?', a: 'Tem 3 dias para pedir ajustes gratuitos. Se mesmo assim não gostar, reembolsamos você.' },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-branco rounded-xl border border-cinza-200 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.q ? null : faq.q)}
                    className="w-full p-4 flex items-center justify-between hover:bg-cinza-50 transition text-left"
                  >
                    <p className="font-bold text-cinza-900 text-sm pr-3">{faq.q}</p>
                    <ChevronRight
                      size={18}
                      className={`text-azul-primary flex-shrink-0 transition-transform ${
                        expandedFaq === faq.q ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {expandedFaq === faq.q && (
                    <div className="px-4 pb-4 text-xs text-cinza-600 border-t border-cinza-200 bg-branco/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-4 py-8">
          <div className="bg-gradient-to-br from-azul-primary to-azul-dark rounded-2xl p-6 text-branco text-center">
            <h2 className="text-2xl font-bold mb-2">Lançamento em Breve</h2>
            <p className="text-sm text-branco/90 mb-4">Seja um dos primeiros a usar FairPay em Angola</p>

            <Countdown />

            <div className="bg-branco/15 backdrop-blur rounded-xl p-4 my-4 text-sm">
              <p className="font-bold mb-2">Primeiros 500 inscritos ganham:</p>
              <ul className="space-y-1 text-xs text-branco/90">
                <li>Sem taxas no primeiro mês</li>
                <li>Badge especial de fundador</li>
                <li>Acesso prioritário à plataforma</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WAITLIST FORM */}
        <section className="px-4 py-8 bg-cinza-50 -mx-4">
          <div className="px-4">
            <div className="bg-branco rounded-xl p-6 shadow-md">
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-cinza-900 text-branco px-4 py-8">
          <div className="mb-6">
            <p className="text-lg font-bold text-azul-primary mb-1">FairPay</p>
            <p className="text-xs text-branco/70">Marketplace de confiança para Angola</p>
          </div>

          <div className="space-y-3 mb-6 text-xs text-branco/70">
            <div>
              <p className="font-bold text-branco mb-1">Contacto</p>
              <p>ola@fairpay.ao</p>
              <p>+244 9XX XXX XXX</p>
              <p>Luanda, Angola</p>
            </div>

            <div>
              <p className="font-bold text-branco mb-1">Siga-nos</p>
              <div className="flex gap-3">
                <a href="https://instagram.com" className="hover:text-branco transition">Instagram</a>
                <a href="https://facebook.com" className="hover:text-branco transition">Facebook</a>
              </div>
            </div>
          </div>

          <div className="border-t border-branco/10 pt-4">
            <p className="text-xs text-branco/60 text-center">© 2026 FairPay. Todos os direitos reservados.</p>
          </div>
        </footer>
      </main>
  );
}
