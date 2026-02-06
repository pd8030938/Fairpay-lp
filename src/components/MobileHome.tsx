'use client';

import Image from 'next/image';
import WaitlistForm from "@/components/WaitlistForm2";
import Countdown from "@/components/Countdown";
import { Menu, X, ChevronDown, Shield, Zap, Users, TrendingUp, Globe, Smartphone, Lock, CheckCircle, Star, Award, Briefcase, Code, Palette, Megaphone, FileText, Wrench, Camera } from 'lucide-react';
import { useState } from 'react';

export default function MobileHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <>
      {/* Navbar Mobile Otimizado */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-cinza-100">
        <div className="px-3 py-3 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-azul-primary to-azul-dark bg-clip-text text-transparent">FairPay</div>
          
          <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="px-3 pb-3 space-y-2 bg-cinza-50 border-t border-cinza-100">
            <a href="#como-funciona" className="block text-sm text-cinza-600 hover:text-azul-primary py-2">Como Funciona</a>
            <a href="#categorias" className="block text-sm text-cinza-600 hover:text-azul-primary py-2">Categorias</a>
            <a href="#faq" className="block text-sm text-cinza-600 hover:text-azul-primary py-2">FAQ</a>
            <button className="w-full px-3 py-2 bg-gradient-to-r from-azul-primary to-azul-dark text-branco rounded-lg text-sm font-semibold">Registar</button>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Mobile */}
        <section className="relative bg-gradient-to-br from-branco via-azul-light to-branco py-6 px-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-azul-primary opacity-5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-verde-success opacity-5 rounded-full blur-3xl -z-10 transform -translate-x-1/2"></div>
          
          <div>
            <div className="inline-block mb-3 px-3 py-1 bg-azul-light rounded-full text-azul-dark font-semibold text-xs">✨ Marketplace de Confiança</div>
            <h1 className="text-2xl font-bold mb-3 text-cinza-900 leading-tight">FairPay: Contrate Profissionais.<br /><span className="bg-gradient-to-r from-azul-primary to-verde-success bg-clip-text text-transparent">Com Garantia.</span></h1>
            <p className="text-sm text-cinza-600 mb-4">O marketplace de serviços que Angola merece — seguro, simples e justo.</p>
            <div className="flex flex-col gap-2 mb-6">
              <a href="#waitlist" className="px-4 py-3 bg-gradient-to-r from-azul-primary to-verde-success text-branco font-bold rounded-lg shadow-lg text-sm inline-flex items-center justify-center gap-2 w-full">
                <CheckCircle size={16} /> Juntar-se à Lista
              </a>
              <a href="#como-funciona" className="px-4 py-3 border-2 border-azul-primary text-azul-primary font-bold rounded-lg text-sm inline-flex items-center justify-center gap-2 w-full">
                Saber Mais
              </a>
            </div>
            
            {/* Badges de confiança - Mobile */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 text-cinza-600 bg-branco/50 p-2 rounded-lg">
                <Shield size={14} className="text-verde-success flex-shrink-0" />
                <span className="font-medium text-xs">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-cinza-600 bg-branco/50 p-2 rounded-lg">
                <Users size={14} className="text-azul-primary flex-shrink-0" />
                <span className="font-medium text-xs">50+ Prof.</span>
              </div>
            </div>
          </div>
        </section>

        {/* O Problema Mobile */}
        <section className="py-8 px-4 bg-cinza-50">
          <div className="flex items-center gap-2 mb-4">
            <AlertIcon className="w-6 h-6 text-laranja-accent" />
            <h2 className="text-xl font-bold text-cinza-900">O Problema com Contratar Online</h2>
          </div>
          <p className="text-sm text-cinza-600 mb-4">Já contrataste alguém online e ficaste com medo?</p>
          
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="bg-branco p-4 rounded-lg border-2 border-laranja-accent/20">
              <p className="text-sm font-bold text-cinza-900 italic">"Será que ele vai mesmo entregar?"</p>
            </div>
            <div className="bg-branco p-4 rounded-lg border-2 border-laranja-accent/20">
              <p className="text-sm font-bold text-cinza-900 italic">"E se eu transferir e desaparecer?"</p>
            </div>
            <div className="bg-branco p-4 rounded-lg border-2 border-laranja-accent/20">
              <p className="text-sm font-bold text-cinza-900 italic">"Como sei que é mesmo bom?"</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-laranja-accent/10 to-transparent p-4 rounded-lg border-l-4 border-laranja-accent">
            <p className="text-sm font-bold text-cinza-900">Todos perdemos tempo. Todos perdemos dinheiro.</p>
          </div>
        </section>

        {/* FairPay Solution Mobile */}
        <section className="py-8 px-4 bg-branco">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-verde-success" />
            <h2 className="text-xl font-bold text-cinza-900">FairPay: A Solução</h2>
          </div>
          <p className="text-sm text-cinza-600 mb-4"><strong>O teu dinheiro protegido até o trabalho estar completo.</strong></p>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Code, label: 'Programadores' },
              { icon: Palette, label: 'Designers' },
              { icon: Megaphone, label: 'Marketers' },
              { icon: FileText, label: 'Tradutores' },
              { icon: Wrench, label: 'Técnicos' },
              { icon: Camera, label: 'Criadores' },
            ].map((item) => (
              <div key={item.label} className="p-3 bg-cinza-50 rounded-lg border border-cinza-100">
                <item.icon className="w-6 h-6 text-azul-primary mb-2" />
                <h3 className="text-xs font-bold text-cinza-900">{item.label}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Como Funciona Mobile */}
        <section id="como-funciona" className="py-8 px-4 bg-cinza-50">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-azul-light rounded-full">
              <Smartphone className="w-4 h-4 text-azul-primary" />
              <span className="text-azul-dark font-semibold text-xs">Simples</span>
            </div>
            <h2 className="text-xl font-bold text-cinza-900">Como Funciona</h2>
          </div>
          
          {/* Clientes */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-3 text-cinza-900 flex items-center gap-2"><Briefcase size={16} /> Se Precisas:</h3>
            <div className="space-y-3">
              {[
                { num: '1', title: 'Procura', desc: 'Busca o serviço' },
                { num: '2', title: 'Escolhe', desc: 'Vê avaliações' },
                { num: '3', title: 'Paga', desc: 'Seguro e protegido' },
                { num: '4', title: 'Aprova', desc: 'Dinheiro sai' },
              ].map((step) => (
                <div key={step.num} className="flex gap-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-azul-primary to-azul-dark text-branco flex items-center justify-center text-xs font-bold shadow-md">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-cinza-900 text-xs">{step.title}</h4>
                    <p className="text-cinza-600 text-xs">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profissionais */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-cinza-900 flex items-center gap-2"><TrendingUp size={16} /> Se és Prof.:</h3>
            <div className="space-y-3">
              {[
                { num: '1', title: 'Perfil', desc: 'Mostra teu trabalho' },
                { num: '2', title: 'Publica', desc: 'Os teus serviços' },
                { num: '3', title: 'Trabalha', desc: 'Com segurança' },
                { num: '4', title: 'Recebe', desc: 'Garantido' },
              ].map((step) => (
                <div key={step.num} className="flex gap-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-verde-success to-verde-light text-branco flex items-center justify-center text-xs font-bold shadow-md">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-cinza-900 text-xs">{step.title}</h4>
                    <p className="text-cinza-600 text-xs">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Garantia Mobile */}
        <section className="py-8 px-4 bg-branco">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Shield className="w-6 h-6 text-verde-success" />
            <h2 className="text-xl font-bold text-cinza-900">Proteção</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-azul-light/40 p-4 rounded-lg border border-azul-primary/20">
              <h3 className="text-xs font-bold mb-3 text-cinza-900 flex items-center gap-2">
                <Users size={14} /> Clientes
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-cinza-700">
                  <CheckCircle size={12} className="text-verde-success" />
                  Reembolso Garantido
                </li>
                <li className="flex items-center gap-2 text-xs text-cinza-700">
                  <CheckCircle size={12} className="text-verde-success" />
                  Qualidade Verificada
                </li>
                <li className="flex items-center gap-2 text-xs text-cinza-700">
                  <CheckCircle size={12} className="text-verde-success" />
                  Suporte 24h
                </li>
              </ul>
            </div>
            
            <div className="bg-verde-light/40 p-4 rounded-lg border border-verde-success/20">
              <h3 className="text-xs font-bold mb-3 text-cinza-900 flex items-center gap-2">
                <TrendingUp size={14} /> Profissionais
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-cinza-700">
                  <CheckCircle size={12} className="text-azul-primary" />
                  Pagamento Garantido
                </li>
                <li className="flex items-center gap-2 text-xs text-cinza-700">
                  <CheckCircle size={12} className="text-azul-primary" />
                  Plataforma Grátis
                </li>
                <li className="flex items-center gap-2 text-xs text-cinza-700">
                  <CheckCircle size={12} className="text-azul-primary" />
                  Proteção Golpes
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feito para Angola Mobile */}
        <section className="py-8 px-4 bg-cinza-50">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-laranja-accent" />
            <h2 className="text-xl font-bold text-cinza-900">Feito para Angola</h2>
          </div>
          
          <div className="space-y-3">
            <div className="bg-branco p-4 rounded-lg border-2 border-laranja-accent/20">
              <div className="w-8 h-8 bg-laranja-accent/10 rounded-lg flex items-center justify-center mb-2">
                <Smartphone size={16} className="text-laranja-accent" />
              </div>
              <h3 className="text-sm font-bold mb-2 text-cinza-900">Pagamento Simples</h3>
              <ul className="space-y-1 text-xs text-cinza-600">
                <li>• Multicaixa Express</li>
                <li>• Tudo em Kwanzas</li>
              </ul>
            </div>
            
            <div className="bg-branco p-4 rounded-lg border-2 border-azul-primary/20">
              <div className="w-8 h-8 bg-azul-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Zap size={16} className="text-azul-primary" />
              </div>
              <h3 className="text-sm font-bold mb-2 text-cinza-900">Internet Lenta?</h3>
              <p className="text-xs text-cinza-600">Páginas leves e rápidas</p>
            </div>
            
            <div className="bg-branco p-4 rounded-lg border-2 border-verde-success/20">
              <div className="w-8 h-8 bg-verde-success/10 rounded-lg flex items-center justify-center mb-2">
                <Users size={16} className="text-verde-success" />
              </div>
              <h3 className="text-sm font-bold mb-2 text-cinza-900">Suporte Português</h3>
              <p className="text-xs text-cinza-600">Uma pessoa real te ajudando</p>
            </div>
          </div>
        </section>

        {/* Categorias Mobile */}
        <section id="categorias" className="py-8 px-4 bg-branco">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Briefcase className="w-6 h-6 text-azul-primary" />
            <h2 className="text-xl font-bold text-cinza-900 text-center">Categorias</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: Code, name: 'Tecnologia' },
              { icon: Palette, name: 'Design' },
              { icon: Megaphone, name: 'Marketing' },
              { icon: FileText, name: 'Tradução' },
              { icon: Briefcase, name: 'Negócios' },
              { icon: Camera, name: 'Multimédia' },
              { icon: Wrench, name: 'Técnico' },
              { icon: Globe, name: 'Consultorias' },
            ].map((cat) => (
              <div key={cat.name} className="p-3 bg-cinza-50 rounded-lg border border-cinza-100">
                <cat.icon className="w-5 h-5 text-azul-primary mb-2" />
                <h3 className="font-bold text-cinza-900 text-xs">{cat.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Porquê FairPay Mobile */}
        <section className="py-8 px-4 bg-cinza-50">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Award className="w-6 h-6 text-verde-success" />
            <h2 className="text-xl font-bold text-cinza-900 text-center">Porquê FairPay?</h2>
          </div>
          
          <div className="space-y-3">
            {[
              { num: '1', title: 'Segurança', desc: 'Dinheiro retido até aprovação' },
              { num: '2', title: 'Verificado', desc: 'Talento validado' },
              { num: '3', title: 'Justo', desc: 'Melhor preço' },
              { num: '4', title: 'Proteção', desc: 'Reembolso fácil' },
              { num: '5', title: 'Crescimento', desc: 'Benefícios profissionais' },
            ].map((item) => (
              <div key={item.num} className="flex gap-3 p-3 bg-branco rounded-lg border border-cinza-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-azul-primary to-azul-dark text-branco flex items-center justify-center text-xs font-bold shadow-md">
                  {item.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold text-cinza-900">{item.title}</h3>
                  <p className="text-xs text-cinza-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Mobile */}
        <section id="faq" className="py-8 px-4 bg-branco">
          <div className="flex items-center gap-2 justify-center mb-6">
            <HelpIcon className="w-6 h-6 text-azul-primary" />
            <h2 className="text-xl font-bold text-cinza-900 text-center">FAQ</h2>
          </div>
          
          <div className="space-y-2">
            {[
              { q: 'Quanto custa?', a: 'Clientes: pequena taxa. Profissionais: grátis publicar, 15% ao receber.' },
              { q: 'Como sou protegido?', a: 'Profissional verificado, dinheiro retido até aprovação.' },
              { q: 'E se não gostar?', a: '3 dias para revisões gratuitas, depois reembolso.' },
              { q: 'Quanto tempo para receber?', a: 'Após aprovação, 3 dias úteis.' },
              { q: 'É seguro?', a: 'Encriptação de nível bancário em tudo.' },
              { q: 'Posso falar antes?', a: 'Sim, sistema de mensagens integrado.' }
            ].map((faq) => (
              <div key={faq.q} className="bg-cinza-50 rounded-lg border border-cinza-100 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.q ? null : faq.q)}
                  className="w-full px-4 py-3 flex justify-between items-center hover:bg-cinza-100 transition"
                >
                  <h3 className="font-bold text-cinza-900 text-sm text-left">{faq.q}</h3>
                  <ChevronDown size={16} className={`text-azul-primary flex-shrink-0 transition-transform ${expandedFaq === faq.q ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === faq.q && (
                  <div className="px-4 pb-3 text-cinza-600 border-t border-cinza-200 text-xs">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTAs Mobile */}
        <section className="py-8 px-4 bg-gradient-to-r from-azul-primary via-azul-dark to-azul-primary text-branco">
          <div className="grid gap-3">
            <div className="bg-branco/10 backdrop-blur rounded-lg p-4 text-center">
              <Briefcase size={24} className="mx-auto mb-2 text-laranja-accent" />
              <h3 className="text-sm font-bold mb-2">Preciso de Serviços</h3>
              <a href="#waitlist" className="px-4 py-2 bg-gradient-to-r from-azul-primary to-verde-success text-branco font-bold rounded-lg text-xs inline-block w-full">Junte-se</a>
            </div>
            <div className="bg-branco/10 backdrop-blur rounded-lg p-4 text-center">
              <TrendingUp size={24} className="mx-auto mb-2 text-verde-light" />
              <h3 className="text-sm font-bold mb-2">Sou Profissional</h3>
              <a href="#waitlist" className="px-4 py-2 border-2 border-branco text-branco font-bold rounded-lg text-xs inline-block w-full">Junte-se</a>
            </div>
          </div>
        </section>

        {/* Waitlist Mobile */}
        <section id="waitlist" className="py-8 px-4 bg-cinza-50">
          <h2 className="text-lg font-bold mb-2 text-cinza-900 text-center">Lançamento em Breve</h2>
          <p className="text-xs text-cinza-600 mb-4 text-center">Seja dos primeiros inscritos</p>
          
          <Countdown />

          <div className="bg-branco rounded-lg p-6 mb-4 shadow">
            <WaitlistForm />
          </div>
          
          <div className="bg-gradient-to-r from-azul-light to-verde-light rounded-lg p-4 mb-4 border border-azul-primary/30">
            <p className="font-bold text-cinza-900 mb-2 text-xs">Primeiros 500 inscritos:</p>
            <ul className="space-y-1 text-xs text-cinza-700">
              <li className="flex items-center gap-2"><CheckCircle size={12} className="text-verde-success" /> Sem taxas 1º mês</li>
              <li className="flex items-center gap-2"><CheckCircle size={12} className="text-verde-success" /> Badge "Fundador"</li>
              <li className="flex items-center gap-2"><CheckCircle size={12} className="text-verde-success" /> Acesso prioritário</li>
            </ul>
          </div>
          
          <p className="text-xs text-cinza-600 text-center">Lançamento: <strong className="text-azul-primary">45 dias</strong></p>
        </section>

        {/* Footer Mobile */}
        <footer className="bg-gradient-to-b from-cinza-900 to-cinza-900/95 text-branco py-8 px-4 border-t border-branco/10">
          <div className="space-y-6 mb-8">
            {/* Brand */}
            <div className="space-y-2">
              <h4 className="text-lg font-bold bg-gradient-to-r from-azul-primary to-verde-success bg-clip-text text-transparent">FairPay</h4>
              <p className="text-branco/70 text-xs leading-relaxed">Marketplace de confiança para Angola.</p>
            </div>
            
            {/* Links */}
            <div className="space-y-2">
              <h4 className="font-bold text-xs">Redes Sociais</h4>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="text-branco/70 hover:text-branco">Instagram</a></li>
                <li><a href="#" className="text-branco/70 hover:text-branco">Facebook</a></li>
              </ul>
            </div>
            
            {/* Contacto */}
            <div className="space-y-2">
              <h4 className="font-bold text-xs">Contacto</h4>
              <ul className="space-y-1 text-xs text-branco/70">
                <li>+244 9XX XXX XXX</li>
                <li>ola@fairpay.ao</li>
                <li>Luanda, Angola</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-branco/10 pt-4 text-center">
            <p className="text-xs text-branco/60">© 2026 FairPay. Todos os direitos reservados.</p>
          </div>
        </footer>
      </main>
    </>
  );
}

// SVG Icons
function AlertIcon(props: any) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05l-8.47-14.14a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function HelpIcon(props: any) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
