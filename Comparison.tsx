import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { ScrollReveal } from '@/components/ScrollReveal';
import { X, Check } from 'lucide-react';

const comparisons = [
  {
    free: 'Общие советы',
    course: '100 готовых шаблонов',
  },
  {
    free: 'Теория без применения',
    course: 'Конкретные задачи с примерами',
  },
  {
    free: 'Нет системы',
    course: 'Пошаговый план на 7 дней',
  },
  {
    free: 'Разрозненная информация',
    course: 'Полная структура от А до Я',
  },
  {
    free: 'Нет поддержки',
    course: 'Чёткий путь к результату',
  },
];

export function Comparison() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-dark-secondary">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Этот курс ≠ обычные материалы про ИИ"
          subtitle="Сравни и убедись сам"
        />

        <ScrollReveal>
          <div className="overflow-hidden rounded-xl border border-[rgba(59,130,246,0.2)]">
            {/* Header */}
            <div className="grid grid-cols-2 gap-0">
              <div className="p-4 md:p-6 bg-dark-primary/50 border-b border-r border-[rgba(59,130,246,0.1)]">
                <h3 className="text-lg font-semibold text-gray-text flex items-center gap-2">
                  <X className="w-5 h-5 text-red-400" />
                  Бесплатный контент
                </h3>
              </div>
              <div className="p-4 md:p-6 bg-gradient-to-r from-[rgba(59,130,246,0.1)] to-transparent border-b border-[rgba(59,130,246,0.1)]">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#22D3EE]" />
                  Этот курс
                </h3>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-2 gap-0"
              >
                <div className="p-4 md:p-5 bg-dark-primary/30 border-b border-r border-[rgba(59,130,246,0.1)]">
                  <p className="text-gray-muted">{item.free}</p>
                </div>
                <div className="p-4 md:p-5 bg-gradient-to-r from-[rgba(59,130,246,0.05)] to-transparent border-b border-[rgba(59,130,246,0.1)]">
                  <p className="text-white font-medium">{item.course}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-text">
            <span className="text-gradient font-semibold">100 промптов</span> — это не просто текст. 
            Это <span className="text-white font-semibold">готовый бизнес-инструмент</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
