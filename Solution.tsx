import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Cpu, Lightbulb, FileText, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Доступ к GPT или DeepSeek',
    description: 'Без VPN, за 5 минут. Работаем с доступными инструментами.',
  },
  {
    icon: Lightbulb,
    title: 'Формула сильного промпта',
    description: 'Который даёт результат с первого раза. Никаких доработок.',
  },
  {
    icon: FileText,
    title: '100 готовых шаблонов',
    description: 'Для 10 востребованных направлений. Просто копируй и используй.',
  },
  {
    icon: TrendingUp,
    title: 'План выхода на первые деньги',
    description: 'От первого клиента до постоянного дохода. Чёткий путь.',
  },
];

export function Solution() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-b from-[#0A0E17] via-[#111827] to-[#0A0E17]">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                В этом курсе <span className="text-gradient">нет воды.</span>
                <br />
                Только система.
              </h2>
              
              <p className="text-lg text-gray-text mb-8">
                Ты получаешь готовый путь от нуля до первых денег на ИИ. Без теории, только практика.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-5 h-5 text-[#22D3EE]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-text">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right visual */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              {/* Neural network visual */}
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Central glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-radial from-[#3B82F6]/30 via-[#06B6D4]/10 to-transparent rounded-full blur-2xl" />
                
                {/* Nodes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Center node */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center shadow-glow"
                    >
                      <Cpu className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Orbiting nodes */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-12 h-12 rounded-full bg-dark-secondary border border-[rgba(59,130,246,0.3)] flex items-center justify-center"
                        style={{
                          top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 120}px - 24px)`,
                          left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 120}px - 24px)`,
                        }}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          borderColor: ['rgba(59,130,246,0.3)', 'rgba(59,130,246,0.6)', 'rgba(59,130,246,0.3)']
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      >
                        <div className="w-3 h-3 rounded-full bg-[#22D3EE]" />
                      </motion.div>
                    ))}

                    {/* Connection lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                        <line
                          key={i}
                          x1="50%"
                          y1="50%"
                          x2={`${50 + Math.cos((angle * Math.PI) / 180) * 40}%`}
                          y2={`${50 + Math.sin((angle * Math.PI) / 180) * 40}%`}
                          stroke="rgba(59, 130, 246, 0.2)"
                          strokeWidth="1"
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-dark-secondary border border-[rgba(59,130,246,0.3)]"
              >
                <span className="text-sm font-medium text-[#22D3EE]">100 промптов</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg bg-dark-secondary border border-[rgba(59,130,246,0.3)]"
              >
                <span className="text-sm font-medium text-[#22D3EE]">7 дней до результата</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
