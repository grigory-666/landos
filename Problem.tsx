import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Play, HelpCircle, MessageSquare, ShieldAlert, GitBranch } from 'lucide-react';

const problems = [
  {
    icon: Play,
    title: 'Смотрят ролики, но не понимают, что делать',
    description: 'Бесконечное consuming контента без реального результата. Ты знаешь, что ИИ крутой, но не знаешь, как применить.',
  },
  {
    icon: HelpCircle,
    title: 'Не знают, какие задачи реально продаются',
    description: 'Нет понимания рынка востребованных услуг. Что именно люди готовы покупать прямо сейчас?',
  },
  {
    icon: MessageSquare,
    title: 'Пишут слабые запросы',
    description: 'Промпты не дают качественного результата. ИИ отвечает шаблонно и бесполезно.',
  },
  {
    icon: ShieldAlert,
    title: 'Боятся VPN',
    description: 'Думают, что ИИ недоступен без сложных настроек. DeepSeek решает эту проблему.',
  },
  {
    icon: GitBranch,
    title: 'Распыляются',
    description: 'Прыгают между задачами, не доводя до конца. Нет чёткой системы и плана действий.',
  },
];

export function Problem() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Почему большинство не зарабатывают на ИИ?"
          subtitle="Эти боли мешают начать зарабатывать на искусственном интеллекте"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group relative p-6 rounded-xl bg-dark-secondary/80 border border-[rgba(59,130,246,0.15)] h-full transition-all duration-300 hover:border-[rgba(59,130,246,0.4)] hover:-translate-y-1"
                whileHover={{ scale: 1.01 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/10 flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {problem.title}
                  </h3>
                  
                  <p className="text-sm text-gray-text leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
