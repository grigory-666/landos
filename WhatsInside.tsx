import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Cpu, Lightbulb, FileText, Users, Calendar } from 'lucide-react';

const modules = [
  {
    number: '01',
    title: 'Доступ к GPT / DeepSeek',
    description: 'Настройка за 5 минут, работа с любыми ограничениями. DeepSeek работает без VPN — просто заходи и используй.',
    icon: Cpu,
    features: ['Регистрация за 5 минут', 'Работа без VPN', 'Альтернативные способы'],
  },
  {
    number: '02',
    title: 'Формула сильного промпта',
    description: '5 элементов идеального запроса. Научись получать именно тот результат, который нужен.',
    icon: Lightbulb,
    features: ['Структура промпта', '5 ключевых элементов', 'Примеры для каждой ниши'],
  },
  {
    number: '03',
    title: '100 промптов',
    description: 'Готовые шаблоны для 10 направлений. Просто копируй, вставляй и получай результат.',
    icon: FileText,
    features: ['10 направлений', 'По 10 промптов каждое', 'Готовые к использованию'],
  },
  {
    number: '04',
    title: 'Поиск клиентов',
    description: 'Где и как находить первых заказчиков. Конкретные площадки и стратегии.',
    icon: Users,
    features: ['Биржи фриланса', 'Социальные сети', 'Холодные продажи'],
  },
  {
    number: '05',
    title: 'План на 7 дней',
    description: 'Поэтапный путь от нуля до первых денег. Чёткий график и контрольные точки.',
    icon: Calendar,
    features: ['День за днём', 'Конкретные действия', 'Результат через неделю'],
  },
];

export function WhatsInside() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-dark-secondary">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Что внутри курса"
          subtitle="5 модулей, которые проведут тебя от нуля до первых денег"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-[#3B82F6]">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#22D3EE] to-transparent"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Modules */}
          <div className="space-y-8">
            {modules.map((module, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="relative flex gap-6 md:gap-8">
                  {/* Node */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center shadow-glow"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-lg md:text-xl font-bold text-white">{module.number}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="p-6 rounded-xl bg-dark-primary border border-[rgba(59,130,246,0.2)] hover:border-[rgba(59,130,246,0.4)] transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <module.icon className="w-5 h-5 text-[#22D3EE]" />
                        <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                      </div>
                      
                      <p className="text-gray-text mb-4">{module.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {module.features.map((feature, fIndex) => (
                          <span
                            key={fIndex}
                            className="px-3 py-1 text-xs rounded-full bg-[rgba(59,130,246,0.15)] text-[#22D3EE]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
