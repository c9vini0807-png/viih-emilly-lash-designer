/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  Star, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  Sparkles,
  ShieldCheck,
  Heart,
  Clock
} from 'lucide-react';

const WHATSAPP_NUMBER = "5511999999999"; // Placeholder
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar um horário para extensão de cílios.`;
const INSTAGRAM_LINK = "https://instagram.com/viihemilly"; // Placeholder

const services = [
  {
    title: "Clássico Fio a Fio",
    description: "Aplicação de um fio sintético sobre cada fio natural.",
    indication: "Ideal para quem busca naturalidade e rímel eterno.",
    result: "Cílios alongados e definidos com aspecto natural.",
    image: "https://images.unsplash.com/photo-1583001931036-6433ff85503d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Volume Brasileiro",
    description: "Fios em formato de Y que proporcionam mais volume que o fio a fio.",
    indication: "Para quem quer um olhar marcante mas ainda delicado.",
    result: "Volume leve, textura macia e preenchimento uniforme.",
    image: "https://images.unsplash.com/photo-1621086839810-66444005615d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Volume Russo",
    description: "Fans artesanais de 3 a 6 fios ultra finos em cada fio natural.",
    indication: "Para quem ama cílios bem cheios e glamourosos.",
    result: "Olhar dramático, denso e extremamente luxuoso.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mega Volume",
    description: "Técnica avançada com fans de até 15 fios ultra leves.",
    indication: "Máximo impacto para eventos ou quem ama volume extremo.",
    result: "Preenchimento total, olhar poderoso e inesquecível.",
    image: "https://images.unsplash.com/photo-1614859324967-bdf281fb1cf1?auto=format&fit=crop&q=80&w=800"
  }
];

const testimonials = [
  {
    name: "Juliana Silva",
    text: "Ficaram perfeitos, super naturais! A Viih é uma artista, o ambiente é maravilhoso.",
    stars: 5
  },
  {
    name: "Mariana Costa",
    text: "Nunca me senti tão bonita. Acordar pronta todos os dias não tem preço. Recomendo muito!",
    stars: 5
  },
  {
    name: "Beatriz Oliveira",
    text: "Atendimento impecável e muito cuidadosa. Meus cílios duram muito mais agora.",
    stars: 5
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1583001931036-6433ff85503d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1621086839810-66444005615d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1614859324967-bdf281fb1cf1?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1589703900794-9878a963bc34?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=600"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <div className="min-h-screen selection:bg-brand-rose/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-serif font-semibold tracking-tighter text-brand-dark">
            Viih Emilly <span className="text-brand-rose">Lash</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-brand-rose transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-rose transition-all">
              Agendar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-serif hover:text-brand-rose transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary mt-4"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-nude">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1583001931036-6433ff85503d?auto=format&fit=crop&q=80&w=1200" 
            alt="Extensão de cílios profissional" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-nude"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-brand-rose font-medium tracking-[0.3em] uppercase mb-4 text-sm">
                Luxo & Sofisticação em São Paulo
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-brand-dark leading-[1.1] mb-6">
                Realce sua beleza com <span className="italic">cílios perfeitos</span> todos os dias
              </h1>
              <p className="text-lg text-brand-dark/70 mb-10 leading-relaxed max-w-lg">
                Extensão de cílios premium com acabamento natural, confortável e duradouro. Sinta-se linda e confiante desde o momento em que acorda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                  <MessageCircle size={20} />
                  AGENDAR PELO WHATSAPP
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Heart, text: "+100 Clientes" },
                  { icon: ShieldCheck, text: "Ambiente Seguro" },
                  { icon: Sparkles, text: "Material Premium" },
                  { icon: Clock, text: "Alta Durabilidade" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-brand-dark/60">
                    <item.icon size={16} className="text-brand-rose" />
                    <span className="text-xs font-medium uppercase tracking-wider">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1595475241949-0f021276d197?auto=format&fit=crop&q=80&w=800" 
                  alt="Viih Emilly Lash Designer" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-rose text-white p-8 rounded-2xl hidden lg:block shadow-xl">
                <p className="font-serif text-2xl mb-1 italic">"Beleza é sentir-se bem na própria pele."</p>
                <p className="text-sm uppercase tracking-widest opacity-80">— Viih Emilly</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8">
                A arte de transformar olhares com <span className="text-brand-rose">delicadeza</span>
              </h2>
              <div className="space-y-6 text-brand-dark/70 leading-relaxed">
                <p>
                  Olá, eu sou <strong>Viih Emilly</strong>, especialista em lash design apaixonada por realçar a beleza natural de cada mulher. Meu trabalho vai além da estética; é sobre devolver a autoestima e a praticidade para o seu dia a dia.
                </p>
                <p>
                  Com anos de experiência e constante especialização nas técnicas mais modernas do mercado, meu foco é oferecer um atendimento individualizado, respeitando a saúde dos seus fios naturais e a harmonia do seu rosto.
                </p>
                <p>
                  Utilizo apenas materiais de altíssima qualidade e sigo rigorosos protocolos de higiene para garantir que sua experiência seja relaxante, segura e com resultados impecáveis.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-brand-rose/20"></div>
                <div className="flex gap-4">
                  <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-rose/30 flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-white transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-rose/30 flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-white transition-all">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="section-padding bg-brand-nude/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Nossos Serviços</h2>
            <p className="text-brand-dark/60">Técnicas exclusivas desenvolvidas para realçar sua beleza de forma personalizada e sofisticada.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif text-brand-dark mb-3">{service.title}</h3>
                  <p className="text-sm text-brand-dark/70 mb-4 line-clamp-2">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex gap-2">
                      <CheckCircle2 size={14} className="text-brand-rose shrink-0 mt-1" />
                      <p className="text-xs text-brand-dark/60"><strong>Indicação:</strong> {service.indication}</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 size={14} className="text-brand-rose shrink-0 mt-1" />
                      <p className="text-xs text-brand-dark/60"><strong>Resultado:</strong> {service.result}</p>
                    </div>
                  </div>
                  
                  <a href={WHATSAPP_LINK} className="text-xs font-bold uppercase tracking-widest text-brand-rose flex items-center gap-2 group-hover:gap-3 transition-all">
                    Saber mais <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-brand-rose/10 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-xl mb-1">Manutenção</h4>
                <p className="text-sm text-brand-dark/60">Mantenha seu olhar sempre impecável.</p>
              </div>
              <a href={WHATSAPP_LINK} className="w-12 h-12 rounded-full bg-brand-rose/10 flex items-center justify-center text-brand-rose">
                <ChevronRight size={20} />
              </a>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-brand-rose/10 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-xl mb-1">Remoção</h4>
                <p className="text-sm text-brand-dark/60">Procedimento seguro e sem danos.</p>
              </div>
              <a href={WHATSAPP_LINK} className="w-12 h-12 rounded-full bg-brand-rose/10 flex items-center justify-center text-brand-rose">
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Galeria de Resultados</h2>
              <p className="text-brand-dark/60">Transformações reais que elevam a autoestima e realçam a beleza única de cada cliente.</p>
            </div>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-rose font-medium flex items-center gap-2 hover:underline">
              Ver mais no Instagram <Instagram size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              >
                <img 
                  src={img} 
                  alt={`Resultado extensão de cílios ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="section-padding bg-brand-nude">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">O que dizem nossas clientes</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#C5A059" className="text-brand-gold" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2rem] shadow-sm relative"
              >
                <div className="absolute -top-4 left-10 bg-brand-rose text-white p-2 rounded-lg">
                  <Sparkles size={16} />
                </div>
                <p className="text-brand-dark/80 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-rose/20 flex items-center justify-center text-brand-rose font-bold">
                    {t.name[0]}
                  </div>
                  <span className="font-medium text-brand-dark">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-brand-dark mb-6">Localização Privilegiada</h2>
              <p className="text-brand-dark/70 mb-8 leading-relaxed">
                Nosso estúdio está localizado em uma região de fácil acesso em <strong>São Paulo — SP</strong>. Pensamos em cada detalhe para oferecer um ambiente calmo, higienizado e luxuoso para o seu momento de cuidado.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-nude flex items-center justify-center text-brand-rose shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-dark">Endereço</h4>
                    <p className="text-brand-dark/60 text-sm">São Paulo - SP (Endereço completo enviado após o agendamento)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-nude flex items-center justify-center text-brand-rose shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-dark">Acesso</h4>
                    <p className="text-brand-dark/60 text-sm">Próximo a estações de metrô e com estacionamento disponível.</p>
                  </div>
                </div>
              </div>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-12 w-full sm:w-auto">
                VER NO MAPA / AGENDAR
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden h-[400px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234132.9032049964!2d-46.73429845!3d-23.5066457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44818353e501%3A0x30197e7433b7300!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1711410000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-brand-dark text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-rose rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Agende seu horário e sinta-se ainda mais <span className="italic text-brand-rose">linda</span> todos os dias
            </h2>
            <p className="text-white/70 text-lg mb-12">
              Não perca tempo com rímel. Acorde pronta e realce o que há de melhor em você com a melhor lash designer de São Paulo.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mx-auto text-lg px-12 py-5">
              👉 QUERO AGENDAR AGORA
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-brand-rose/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <a href="#home" className="text-2xl font-serif font-semibold tracking-tighter text-brand-dark">
                Viih Emilly <span className="text-brand-rose">Lash</span>
              </a>
              <p className="text-sm text-brand-dark/50 mt-2">© 2026 Viih Emilly Lash Designer. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex gap-6">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-dark/60 hover:text-brand-rose transition-colors">
                <Instagram size={24} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-dark/60 hover:text-brand-rose transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm font-medium text-brand-dark">São Paulo — SP</p>
              <p className="text-xs text-brand-dark/40 mt-1">Design Premium para Mulheres Empoderadas</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-brand-dark px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Agende seu horário!
        </span>
      </a>
    </div>
  );
}
