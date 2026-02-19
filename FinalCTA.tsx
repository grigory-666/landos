import { motion } from 'framer-motion';
import { GlowButton } from '@/components/GlowButton';
import { Sparkles } from 'lucide-react';

export function FinalCTA() {
  const handleCtaClick = () => {
    const priceSection = document.getElementById('price');
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-20 overflow-hidden">
      {/* Intense background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#3B82F6]/25 via-[#06B6D4]/10 to-transparent rounded-full blur-3xl" />
        
        {/* Additional glow layers */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#3B82F6]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.3)] mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#22D3EE]" />
          <span className="text-sm font-medium text-[#22D3EE]">Решение за тобой</span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          ИИ уже зарабатывает деньги.
          <br />
          <span className="text-gradient">Вопрос — будешь ли ты?</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-text mb-10 max-w-2xl mx-auto"
        >
          Тысячи людей уже используют ИИ для заработка. 
          Не упусти момент — технологии не ждут.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <GlowButton onClick={handleCtaClick} size="large" className="animate-glow-pulse">
            Забрать 100 промптов
          </GlowButton>

          <p className="text-lg text-gray-muted">
            <span className="text-gradient font-semibold">1 490 ₽</span> — мгновенный доступ
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2 text-sm text-gray-muted">
            <svg className="w-5 h-5 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Доступ навсегда
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-muted">
            <svg className="w-5 h-5 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Гарантия 7 дней
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-muted">
            <svg className="w-5 h-5 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            100+ довольных клиентов
          </div>
        </motion.div>
      </div>
    </section>
  );
}
