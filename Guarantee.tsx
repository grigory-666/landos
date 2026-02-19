import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-dark-secondary">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />
      
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="flex-shrink-0"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/10 flex items-center justify-center border border-[rgba(59,130,246,0.3)]">
                <ShieldCheck className="w-10 h-10 text-[#22D3EE]" />
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                7 дней на тестирование
              </h3>
              <p className="text-lg text-gray-text">
                Если курс не дал пользы — вернём деньги. 
                <span className="text-white font-medium"> Без вопросов и лишних слов.</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
