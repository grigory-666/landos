import { motion } from 'framer-motion';
import { GlowButton } from '@/components/GlowButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Sparkles, Clock, Shield } from 'lucide-react';

export function Price() {
  const handleCtaClick = () => {
    // In a real app, this would open a payment modal or redirect to payment
    alert('Здесь будет переход к оплате');
  };

  return (
    <section id="price" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#3B82F6]/15 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.3)] mb-6">
              <Sparkles className="w-4 h-4 text-[#22D3EE]" />
              <span className="text-sm font-medium text-[#22D3EE]">Специальное предложение</span>
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Стоимость доступа
            </h2>
          </div>
        </ScrollReveal>

        {/* Price card */}
        <ScrollReveal delay={0.2}>
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-dark-secondary to-dark-primary border border-[rgba(59,130,246,0.3)] overflow-hidden">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-[#06B6D4]/10 pointer-events-none" />
            
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative z-10">
              {/* Value calculation */}
              <div className="text-center mb-8">
                <p className="text-gray-text mb-2">Реальная стоимость:</p>
                <p className="text-2xl md:text-3xl text-gray-muted line-through">
                  100 промптов × 1 000 ₽ = <span className="text-red-400">100 000 ₽</span>
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent mb-8" />

              {/* Current price */}
              <div className="text-center mb-8">
                <p className="text-gray-text mb-2">Ты получаешь за:</p>
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring' }}
                >
                  <span className="text-5xl md:text-6xl font-extrabold text-gradient">
                    1 490 ₽
                  </span>
                </motion.div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
                  <Shield className="w-4 h-4 text-[#22D3EE]" />
                  <span className="text-sm text-gray-text">Доступ навсегда</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
                  <Clock className="w-4 h-4 text-[#22D3EE]" />
                  <span className="text-sm text-gray-text">Мгновенный доступ</span>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <GlowButton onClick={handleCtaClick} size="large" className="animate-glow-pulse">
                  Получить доступ сейчас
                </GlowButton>

                {/* Urgency */}
                <motion.p
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-4 text-sm text-[#22D3EE] font-medium"
                >
                  ⚡ Цена будет повышена
                </motion.p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
