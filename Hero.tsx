import { motion } from 'framer-motion';
import { GlowButton } from '@/components/GlowButton';
import { Check, Zap } from 'lucide-react';

const bullets = [
  '100 готовых шаблонов',
  '10 направлений с реальным спросом',
  'Пошаговая система от доступа до первых клиентов',
  'Подходит даже без VPN (DeepSeek)',
];

export function Hero() {
  const handleCtaClick = () => {
    const priceSection = document.getElementById('price');
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-20 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0E17] pointer-events-none" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#3B82F6]/10 via-transparent to-transparent rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.3)] mb-8"
        >
          <Zap className="w-4 h-4 text-[#22D3EE]" />
          <span className="text-sm font-medium text-[#22D3EE]">GPT / DeepSeek от нуля до первых денег</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-hero font-extrabold text-white leading-tight tracking-tight mb-4"
        >
          <span className="text-gradient">100 ПРОМПТОВ,</span>
          <br />
          <span className="text-white">КОТОРЫЕ ЗАРАБАТЫВАЮТ</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-text mb-6"
        >
          Не теория. Готовые инструменты для GPT и DeepSeek
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-gray-muted max-w-2xl mx-auto mb-10"
        >
          Освой ИИ за 7 дней и начни зарабатывать на самых востребованных задачах 2025–2026 года
        </motion.p>

        {/* Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10"
        >
          {bullets.map((bullet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(17,24,39,0.8)] border border-[rgba(59,130,246,0.2)]"
            >
              <Check className="w-4 h-4 text-[#22D3EE] flex-shrink-0" />
              <span className="text-sm text-gray-text">{bullet}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col items-center gap-4"
        >
          <GlowButton onClick={handleCtaClick} size="large" className="animate-glow-pulse">
            Получить доступ за 1490 ₽
          </GlowButton>
          
          <p className="text-sm text-gray-muted">
            Мгновенный доступ после оплаты
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[rgba(59,130,246,0.3)] flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
