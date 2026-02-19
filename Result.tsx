import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Cpu, FileText, Briefcase, Users } from 'lucide-react';

const results = [
  {
    icon: Cpu,
    title: 'Навык работы с ИИ',
    description: 'Уверенное владение GPT и DeepSeek. Ты сможешь решать любые задачи с помощью ИИ.',
    highlight: 'Навсегда',
  },
  {
    icon: FileText,
    title: '100 инструментов',
    description: 'Готовые промпты для любой задачи. Просто открывай и используй.',
    highlight: '100 шаблонов',
  },
  {
    icon: Briefcase,
    title: 'Готовая услуга',
    description: 'Что именно ты продаёшь и как это позиционировать. Чёткое понимание.',
    highlight: 'Востребовано',
  },
  {
    icon: Users,
    title: 'Стратегия поиска клиентов',
    description: 'Где брать заказы постоянно. Система, которая работает на автопилоте.',
    highlight: 'Постоянный поток',
  },
];

export function Result() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(59,130,246,0.05)] to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading 
          title="Через 7 дней у тебя будет:"
          subtitle="Конкретный результат, который можно потрогать"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative p-6 rounded-xl bg-gradient-to-br from-[rgba(59,130,246,0.1)] to-transparent border border-[rgba(59,130,246,0.2)] h-full"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(59, 130, 246, 0.5)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/10 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                    <result.icon className="w-7 h-7 text-[#22D3EE]" />
                  </div>

                  {/* Highlight badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[rgba(59,130,246,0.2)] text-[#22D3EE] mb-3">
                    {result.highlight}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {result.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-text leading-relaxed">
                    {result.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#22D3EE] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-text">
            Всё это — <span className="text-gradient font-semibold">через 7 дней</span> с момента старта
          </p>
        </motion.div>
      </div>
    </section>
  );
}
