'use client';

import Image from 'next/image';
import WaitlistForm from "@/components/WaitlistForm2";
import Countdown from "@/components/Countdown";
import ViewToggle from "@/components/ViewToggle";
import MobileHome from "@/components/MobileHome";
import { useView } from "@/lib/viewContext";
import { Menu, X, ChevronDown, Shield, Zap, Users, TrendingUp, Globe, Smartphone, Lock, CheckCircle, Star, Award, Briefcase, Code, Palette, Megaphone, FileText, Wrench, Camera } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const { view } = useView();

  // Se for mobile, mostrar versão otimizada para mobile
  if (view === 'mobile') {
    return (
      <>
        <ViewToggle />
        <MobileHome />
      </>
    );
  }

  // Desktop view (versão original)
  return (
    <>
      <ViewToggle />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-cinza-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-azul-primary to-azul-dark bg-clip-text text-transparent">FairPay</div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-cinza-600 hover:text-azul-primary transition font-medium">Como Funciona</a>
            <a href="#categorias" className="text-cinza-600 hover:text-azul-primary transition font-medium">Categorias</a>
            <a href="#faq" className="text-cinza-600 hover:text-azul-primary transition font-medium">FAQ</a>
            <button className="px-6 py-2 bg-gradient-to-r from-azul-primary to-azul-dark text-branco rounded-lg hover-lift shadow-lg">Registar</button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-4 bg-cinza-50 border-t border-cinza-100">
            <a href="#como-funciona" className="block text-cinza-600 hover:text-azul-primary">Como Funciona</a>
            <a href="#categorias" className="block text-cinza-600 hover:text-azul-primary">Categorias</a>
            <a href="#faq" className="block text-cinza-600 hover:text-azul-primary">FAQ</a>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-azul-primary to-azul-dark text-branco rounded-lg">Registar</button>
          </div>
        )}
      </nav>

      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-branco via-azul-light to-branco py-24 md:py-32 px-4 md:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-azul-primary opacity-5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-verde-success opacity-5 rounded-full blur-3xl -z-10 transform -translate-x-1/2"></div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Text */}
              <div>
                <div className="inline-block mb-6 px-4 py-2 bg-azul-light rounded-full text-azul-dark font-semibold text-sm">✨ O Marketplace de Confiança em Angola</div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-cinza-900 leading-tight">FairPay: Contrate Profissionais.<br /><span className="bg-gradient-to-r from-azul-primary to-verde-success bg-clip-text text-transparent">Com Garantia.</span></h1>
                <p className="text-xl text-cinza-600 mb-8">O marketplace de serviços que Angola merece — seguro, simples e justo.</p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a href="#waitlist" className="px-8 py-4 bg-gradient-to-r from-azul-primary to-verde-success text-branco font-bold rounded-lg hover-lift shadow-lg text-lg inline-flex items-center justify-center gap-2">
                    <CheckCircle size={20} /> Juntar-se à Lista de Espera
                  </a>
                  <a href="#como-funciona" className="px-8 py-4 border-2 border-azul-primary text-azul-primary font-bold rounded-lg hover:bg-azul-light transition inline-flex items-center justify-center gap-2">
                    Saber Mais
                  </a>
                </div>
                
                {/* Badges de confiança */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-cinza-600">
                    <Shield size={20} className="text-verde-success" />
                    <span className="font-medium text-sm">100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-cinza-600">
                    <Users size={20} className="text-azul-primary" />
                    <span className="font-medium text-sm">50+ Profissionais</span>
                  </div>
                  <div className="flex items-center gap-2 text-cinza-600">
                    <Award size={20} className="text-laranja-accent" />
                    <span className="font-medium text-sm">Verificados</span>
                  </div>
                </div>
              </div>
              
              {/* Right - Image */}
              <div className="hidden md:flex justify-center items-start">
                <div className="w-full max-w-md flex flex-col gap-8">
                  {/* Main Image Container */}
                  <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border-8 border-branco/20">
                    {/* Main Image */}
                    <img
                      src="https://i.pinimg.com/736x/ad/47/55/ad475517a4256b970b71abd6ad1035f8.jpg"
                      alt="FairPay Marketplace Interface"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cinza-900/30 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Floating Cards - Below Image */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Card 1 - Left */}
                    <div className="bg-branco rounded-xl p-5 shadow-lg border border-cinza-200 transform -rotate-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-verde-light rounded-lg">
                          <CheckCircle size={20} className="text-verde-success" />
                        </div>
                        <span className="text-sm font-bold text-cinza-900">Pagamento<br />Seguro</span>
                      </div>
                      <p className="text-xs text-cinza-600 leading-relaxed">Dinheiro retido até aprovação</p>
                    </div>
                    
                    {/* Card 2 - Right */}
                    <div className="bg-branco rounded-xl p-5 shadow-lg border border-cinza-200 transform rotate-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-laranja-accent/10 rounded-lg">
                          <Star size={20} className="text-laranja-accent fill-laranja-accent" />
                        </div>
                        <span className="text-sm font-bold text-cinza-900">Avaliações<br />Verificadas</span>
                      </div>
                      <p className="text-xs text-cinza-600 leading-relaxed">Profissionais confiáveis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O Problema */}
        <section className="py-24 md:py-32 px-4 md:px-8 bg-cinza-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <AlertIcon className="w-10 h-10 text-laranja-accent" />
              <h2 className="text-4xl md:text-5xl font-bold text-cinza-900">O Problema com Contratar Online em Angola</h2>
            </div>
            <p className="text-lg text-cinza-600 mb-12">Já contrataste alguém online e ficaste com aquele aperto no peito?</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-branco p-8 rounded-xl border-2 border-laranja-accent/20 hover:border-laranja-accent transition card-hover">
                <p className="text-lg font-bold text-cinza-900 italic">"Será que ele vai mesmo entregar?"</p>
              </div>
              <div className="bg-branco p-8 rounded-xl border-2 border-laranja-accent/20 hover:border-laranja-accent transition card-hover">
                <p className="text-lg font-bold text-cinza-900 italic">"E se eu transferir e ele desaparecer?"</p>
              </div>
              <div className="bg-branco p-8 rounded-xl border-2 border-laranja-accent/20 hover:border-laranja-accent transition card-hover">
                <p className="text-lg font-bold text-cinza-900 italic">"Como sei que ele é mesmo bom?"</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-laranja-accent/10 to-transparent p-8 rounded-xl border-l-4 border-laranja-accent">
              <p className="text-2xl font-bold text-cinza-900">Todos perdemos tempo. Todos perdemos dinheiro. Todos perdemos confiança.</p>
            </div>
          </div>
        </section>

        {/* FairPay Solution */}
        <section className="py-24 md:py-32 px-4 md:px-8 bg-branco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-10 h-10 text-verde-success" />
              <h2 className="text-4xl md:text-5xl font-bold text-cinza-900">FairPay: Onde Talento e Oportunidade se Encontram</h2>
            </div>
            <p className="text-xl text-cinza-600 mb-12"><strong>Na FairPay, o teu dinheiro fica protegido até o trabalho estar completo.</strong></p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Code, label: 'Programadores', desc: 'que constroem sites e apps' },
                { icon: Palette, label: 'Designers', desc: 'que criam logotipos incríveis' },
                { icon: Megaphone, label: 'Marketers', desc: 'que fazem as tuas redes sociais crescerem' },
                { icon: FileText, label: 'Tradutores', desc: 'que dominam vários idiomas' },
                { icon: Wrench, label: 'Técnicos', desc: 'que resolvem problemas reais' },
                { icon: Camera, label: 'Criadores', desc: 'que produzem conteúdo de qualidade' },
              ].map((item) => (
                <div key={item.label} className="p-6 bg-cinza-50 rounded-lg card-hover border border-cinza-100 hover:border-azul-primary">
                  <item.icon className="w-8 h-8 text-azul-primary mb-4" />
                  <h3 className="text-lg font-bold text-cinza-900 mb-2">{item.label}</h3>
                  <p className="text-cinza-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="py-24 md:py-32 px-4 md:px-8 bg-cinza-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-azul-light rounded-full">
                <Smartphone className="w-6 h-6 text-azul-primary" />
                <span className="text-azul-dark font-semibold">Simples e Transparente</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-cinza-900">Como Funciona</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-cinza-900 flex items-center gap-3"><Briefcase size={28} className="text-azul-primary" /> Se Precisas Contratar:</h3>
                <div className="space-y-6">
                  {[
                    { num: '1', title: 'Procura o Serviço', desc: 'Usa a barra de pesquisa ou navega pelas categorias' },
                    { num: '2', title: 'Escolhe o Profissional', desc: 'Vê o portfólio, lê as avaliações, compara preços' },
                    { num: '3', title: 'Faz o Pedido', desc: 'Escolhe o pacote que precisas' },
                    { num: '4', title: 'Paga com Segurança', desc: 'Multicaixa Express ou Referência' },
                    { num: '5', title: 'Acompanha o Trabalho', desc: 'Fala com o profissional pelo chat' },
                    { num: '6', title: 'Recebe e Aprova', desc: 'Aprova ou pede ajustes' },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-6">
                      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-azul-primary to-azul-dark text-branco flex items-center justify-center text-3xl font-bold shadow-lg">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-bold text-cinza-900 mb-1">{step.title}</h4>
                        <p className="text-cinza-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-8 text-cinza-900 flex items-center gap-3"><TrendingUp size={28} className="text-verde-success" /> Se és Profissional:</h3>
                <div className="space-y-6">
                  {[
                    { num: '1', title: 'Cria o Teu Perfil', desc: 'Mostra quem és, o que fazes, quanto cobras' },
                    { num: '2', title: 'Publica os Teus Serviços', desc: '"Faço logotipos em 24h por 15.000 Kz"' },
                    { num: '3', title: 'Recebe Pedidos', desc: 'O dinheiro já está garantido' },
                    { num: '4', title: 'Trabalha Tranquilo', desc: 'Sem medo, o cliente já pagou' },
                    { num: '5', title: 'Entrega e Recebe', desc: 'O cliente aprova e tu recebes' },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-6">
                      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-verde-success to-verde-light text-branco flex items-center justify-center text-3xl font-bold shadow-lg">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-bold text-cinza-900 mb-1">{step.title}</h4>
                        <p className="text-cinza-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-azul-light to-verde-light p-8 rounded-xl border-l-4 border-azul-primary">
              <p className="text-lg font-bold text-cinza-900"><CheckCircle className="inline mr-2 text-verde-success" size={24} />O dinheiro só vai para o profissional quando tu aprovares.</p>
            </div>
          </div>
        </section>

        {/* Garantia */}
        <section className="py-24 md:py-32 px-4 md:px-8 bg-branco">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-16">
              <Shield className="w-10 h-10 text-verde-success" />
              <h2 className="text-4xl md:text-5xl font-bold text-cinza-900 text-center">A Nossa Garantia de Proteção</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-azul-light to-branco p-8 rounded-xl border-2 border-azul-primary/20 card-hover">
                <h3 className="text-2xl font-bold mb-8 text-cinza-900 flex items-center gap-2">
                  <Users size={24} className="text-azul-primary" /> Para Clientes
                </h3>
                <ul className="space-y-4">
                  {['Devolução Garantida', 'Qualidade Verificada', 'Suporte Rápido (menos de 24h)', 'Sem Surpresas (preço visto = preço pago)'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-cinza-700">
                      <CheckCircle size={20} className="text-verde-success flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-verde-light to-branco p-8 rounded-xl border-2 border-verde-success/20 card-hover">
                <h3 className="text-2xl font-bold mb-8 text-cinza-900 flex items-center gap-2">
                  <TrendingUp size={24} className="text-verde-success" /> Para Profissionais
                </h3>
                <ul className="space-y-4">
                  {['Pagamento Garantido', 'Plataforma Grátis', 'Proteção contra Golpes', 'Crescimento Profissional'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-cinza-700">
                      <CheckCircle size={20} className="text-azul-primary flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feito para Angola */}
        <section className="py-24 md:py-32 px-4 md:px-8 bg-cinza-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-10 h-10 text-laranja-accent" />
              <h2 className="text-4xl md:text-5xl font-bold text-cinza-900">Feito para Angola</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-branco p-8 rounded-xl border-2 border-laranja-accent/20 card-hover">
                <div className="w-12 h-12 bg-laranja-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone size={24} className="text-laranja-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cinza-900">Pagamento Simples</h3>
                <ul className="space-y-2 text-cinza-600">
                  <li className="font-medium">• Multicaixa Express</li>
                  <li>Paga com telemóvel em segundos</li>
                  <li className="font-medium">• Referência Multicaixa</li>
                  <li>Pagas no ATM ou agente</li>
                  <li className="font-medium">• Tudo em Kwanzas</li>
                  <li>Sem complicações</li>
                </ul>
              </div>
              
              <div className="bg-branco p-8 rounded-xl border-2 border-azul-primary/20 card-hover">
                <div className="w-12 h-12 bg-azul-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap size={24} className="text-azul-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cinza-900">Internet Lenta? Sem Problema</h3>
                <ul className="space-y-3 text-cinza-600">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-verde-success" /> Páginas leves</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-verde-success" /> Carregamento rápido</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-verde-success" /> Zero frustração</li>
                </ul>
              </div>
              
              <div className="bg-branco p-8 rounded-xl border-2 border-verde-success/20 card-hover">
                <div className="w-12 h-12 bg-verde-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Users size={24} className="text-verde-success" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cinza-900">Suporte em Português</h3>
                <p className="text-cinza-600">Uma pessoa real que fala português de Angola, pronta a ajudar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section id="categorias" className="py-24 md:py-32 px-4 md:px-8 bg-branco">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-16">
              <Briefcase className="w-10 h-10 text-azul-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-cinza-900 text-center">Categorias Populares</h2>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: Code, name: 'Tecnologia & Programação' },
                { icon: Palette, name: 'Design & Criatividade' },
                { icon: Megaphone, name: 'Marketing Digital' },
                { icon: FileText, name: 'Escrita & Tradução' },
                { icon: Briefcase, name: 'Negócios' },
                { icon: Camera, name: 'Multimédia' },
                { icon: Wrench, name: 'Serviços Técnicos' },
                { icon: Globe, name: 'Consultorias' },
              ].map((cat) => (
                <div key={cat.name} className="p-6 bg-cinza-50 rounded-xl card-hover border border-cinza-100 hover:border-azul-primary hover:shadow-md transition">
                  <cat.icon className="w-8 h-8 text-azul-primary mb-4" />
                  <h3 className="font-bold text-cinza-900">{cat.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Porquê FairPay */}
        <section className="py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-cinza-50 via-azul-light/30 to-cinza-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-16">
              <Award className="w-10 h-10 text-verde-success" />
              <h2 className="text-4xl md:text-5xl font-bold text-cinza-900 text-center">Porquê a FairPay?</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { num: '1', title: 'Segurança Real', desc: 'O dinheiro fica literalmente retido até tu aprovares' },
                { num: '2', title: 'Talento Verificado', desc: 'Verificamos portfólios e validamos identidades' },
                { num: '3', title: 'Preços Justos', desc: 'Compara e escolhe o melhor preço' },
                { num: '4', title: 'Sem Compromisso', desc: 'Reembolso fácil se não ficar satisfeito' },
                { num: '5', title: 'Crescemos Contigo', desc: 'Benefícios e níveis profissionais' },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 p-6 bg-branco rounded-xl card-hover border border-cinza-100 shadow-sm">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-azul-primary to-azul-dark text-branco flex items-center justify-center text-2xl font-bold shadow-lg">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cinza-900 mb-2">{item.title}</h3>
                    <p className="text-cinza-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Histórias */}
        <section className="py-24 md:py-32 px-4 md:px-8 bg-branco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-16">
              <Star className="w-10 h-10 text-laranja-accent" />
              <h2 className="text-4xl md:text-5xl font-bold text-cinza-900 text-center">Histórias Reais (Em Breve)</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: 'Carlos, Designer em Luanda', story: 'Antes, 30% não pagavam. Hoje, 100% dos trabalhos são pagos.', rating: 5 },
                { name: 'Mariana, Dona de Empresa', story: 'Já fui burlada duas vezes. Na FairPay, sei que estou protegida.', rating: 5 },
                { name: 'João, Programador', story: 'Deixei de perseguir clientes. Agora foco em programar.', rating: 5 },
                { name: 'Fátima, Assistente Virtual', story: 'Finalmente encontrei clientes sérios que valorizam meu trabalho.', rating: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-gradient-to-br from-branco to-cinza-50 p-8 rounded-xl card-hover border-l-4 border-verde-success shadow-md">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-laranja-accent fill-laranja-accent" />
                    ))}
                  </div>
                  <p className="italic mb-4 text-cinza-700">"{t.story}"</p>
                  <p className="font-semibold text-cinza-900">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 md:py-32 px-4 md:px-8 bg-cinza-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-16">
              <HelpIcon className="w-10 h-10 text-azul-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-cinza-900 text-center">Perguntas Frequentes</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { q: 'Quanto custa?', a: 'Clientes: taxa pequena. Profissionais: grátis publicar, 15% ao receber.' },
                { q: 'Como sei que o profissional é bom?', a: 'Portfólio, avaliações, níveis (Novo, Nível 1-2, Top Rated).' },
                { q: 'E se não gostar?', a: '3 dias para revisões gratuitas, depois reembolso.' },
                { q: 'Quanto tempo para receber?', a: 'Após aprovação, 3 dias. Saques para IBAN.' },
                { q: 'É seguro dar dados bancários?', a: 'Sim, encriptação de nível bancário.' },
                { q: 'Posso falar com profissional antes?', a: 'Claro, sistema de mensagens.' }
              ].map((faq) => (
                <div key={faq.q} className="bg-branco rounded-xl border-2 border-cinza-100 overflow-hidden card-hover">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.q ? null : faq.q)}
                    className="w-full px-6 py-4 flex justify-between items-center hover:bg-cinza-50 transition"
                  >
                    <h3 className="font-bold text-cinza-900 text-left">{faq.q}</h3>
                    <ChevronDown size={20} className={`text-azul-primary flex-shrink-0 transition-transform ${expandedFaq === faq.q ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === faq.q && (
                    <div className="px-6 pb-4 text-cinza-600 border-t border-cinza-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-24 md:py-32 px-4 md:px-8 bg-gradient-to-r from-azul-primary via-azul-dark to-azul-primary text-branco">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div id="cta-clientes" className="bg-branco/10 backdrop-blur rounded-xl p-10 text-center card-hover border border-branco/20">
              <Briefcase size={40} className="mx-auto mb-4 text-laranja-accent" />
              <h3 className="text-3xl font-bold mb-4">Se Precisas de Serviços</h3>
              <a href="#waitlist" className="px-8 py-3 bg-gradient-to-r from-azul-primary to-verde-success text-branco font-bold rounded-lg mb-4 hover-lift shadow-lg inline-block w-full">Juntar-se à Lista de Espera</a>
              <p className="text-branco/80">Design. Programação. Marketing. Tudo num só lugar.</p>
            </div>
            <div id="cta-profissionais" className="bg-branco/10 backdrop-blur rounded-xl p-10 text-center card-hover border border-branco/20">
              <TrendingUp size={40} className="mx-auto mb-4 text-verde-light" />
              <h3 className="text-3xl font-bold mb-4">Se és Profissional</h3>
              <a href="#waitlist" className="px-8 py-3 border-2 border-branco text-branco font-bold rounded-lg mb-4 hover:bg-branco hover:text-azul-dark transition inline-block w-full">Juntar-se à Lista de Espera</a>
              <p className="text-branco/80">Mostra o teu trabalho. Conquista clientes. Recebe garantido.</p>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="py-24 md:py-32 px-4 md:px-8 bg-cinza-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cinza-900">Ainda Não Lançámos. Mas Tu Podes Ser dos Primeiros.</h2>
            <p className="text-xl text-cinza-600 mb-12">A FairPay está a chegar. Junta-te ao lançamento.</p>
            
            <Countdown />

            <div className="bg-branco rounded-2xl p-10 mb-8 shadow-lg border border-cinza-100 card-hover">
              <WaitlistForm />
            </div>
            
            <div className="bg-gradient-to-r from-azul-light to-verde-light rounded-xl p-8 mb-8 border border-azul-primary/30">
              <p className="font-bold text-cinza-900 mb-4">Os primeiros 500 inscritos terão:</p>
              <ul className="space-y-3 text-cinza-700">
                <li className="flex items-center justify-center gap-2"><CheckCircle size={20} className="text-verde-success" /> Sem taxas no primeiro mês</li>
                <li className="flex items-center justify-center gap-2"><CheckCircle size={20} className="text-verde-success" /> Badge de "Membro Fundador"</li>
                <li className="flex items-center justify-center gap-2"><CheckCircle size={20} className="text-verde-success" /> Acesso prioritário ao lançamento</li>
              </ul>
            </div>
            
            <p className="text-cinza-600">Lançamento previsto: <strong className="text-azul-primary">45 dias</strong></p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-cinza-900 to-cinza-900/95 text-branco py-20 px-4 md:px-8 border-t border-branco/10">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {/* Brand */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-azul-primary to-verde-success bg-clip-text text-transparent">FairPay</h4>
                <p className="text-branco/70 text-sm leading-relaxed">O marketplace de confiança para Angola. Seguro, simples e justo.</p>
                <div className="flex gap-4 pt-4">
                  <div className="w-10 h-10 bg-azul-primary/20 rounded-lg flex items-center justify-center hover:bg-azul-primary/40 transition cursor-pointer">
                    <Globe size={18} className="text-azul-primary" />
                  </div>
                  <div className="w-10 h-10 bg-verde-success/20 rounded-lg flex items-center justify-center hover:bg-verde-success/40 transition cursor-pointer">
                    <Users size={18} className="text-verde-success" />
                  </div>
                  <div className="w-10 h-10 bg-laranja-accent/20 rounded-lg flex items-center justify-center hover:bg-laranja-accent/40 transition cursor-pointer">
                    <Award size={18} className="text-laranja-accent" />
                  </div>
                </div>
              </div>
              
              {/* Redes Sociais */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Redes Sociais</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-branco/70 hover:text-branco transition inline-flex items-center gap-2"><span className="w-1 h-1 bg-azul-primary rounded-full"></span>Instagram</a></li>
                  <li><a href="#" className="text-branco/70 hover:text-branco transition inline-flex items-center gap-2"><span className="w-1 h-1 bg-verde-success rounded-full"></span>Facebook</a></li>
                  <li><a href="#" className="text-branco/70 hover:text-branco transition inline-flex items-center gap-2"><span className="w-1 h-1 bg-laranja-accent rounded-full"></span>LinkedIn</a></li>
                </ul>
              </div>
              
              {/* Contacto */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg">Contacto</h4>
                <ul className="space-y-3 text-sm text-branco/70">
                  <li className="flex items-center gap-2"><Smartphone size={16} /> +244 9XX XXX XXX</li>
                  <li className="flex items-center gap-2"><Lock size={16} /> ola@fairpay.ao</li>
                  <li className="flex items-center gap-2"><Globe size={16} /> Luanda, Angola</li>
                </ul>
              </div>
            </div>
            
            {/* Divider */}
            <div className="border-t border-branco/10"></div>
            
            {/* Copyright */}
            <div className="pt-8 text-center">
              <p className="text-sm text-branco/60">© 2026 FairPay. Todos os direitos reservados. | <span className="hover:text-branco/80 cursor-pointer transition">Privacidade</span> · <span className="hover:text-branco/80 cursor-pointer transition">Termos</span></p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

// SVG Icons para complementar
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
