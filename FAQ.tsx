import { SectionHeading } from '@/components/SectionHeading';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Нужен ли VPN?',
    answer: 'Нет. Курс включает работу с DeepSeek, который доступен без VPN из любой точки мира. Также показываем альтернативные способы доступа к GPT, если они понадобятся.',
  },
  {
    question: 'Подойдёт ли новичку?',
    answer: 'Да. Курс построен от самых основ. Не нужно никаких предварительных знаний — ни программирования, ни опыта с ИИ. Всё объясняем простым языком с нуля.',
  },
  {
    question: 'Сколько времени займёт?',
    answer: 'Основной материал — 3-4 часа чтения. Практика — по твоему темпу. План рассчитан на 7 дней: каждый день конкретные действия, которые приведут к результату.',
  },
  {
    question: 'Будут ли обновления?',
    answer: 'Да. Все обновления курса бесплатны для действующих участников. Мы постоянно добавляем новые промпты и актуализируем материал под изменения в ИИ.',
  },
  {
    question: 'Какой формат курса?',
    answer: 'Текстовые уроки + видео-разборы + готовые шаблоны. Доступ навсегда — можешь возвращаться к материалу в любое время. Работает на компьютере, планшете и телефоне.',
  },
];

export function FAQ() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-3xl mx-auto">
        <SectionHeading 
          title="Частые вопросы"
          subtitle="Отвечаем на то, что волнует большинство"
        />

        <ScrollReveal delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[rgba(59,130,246,0.2)] rounded-xl overflow-hidden bg-dark-secondary/50 px-6 data-[state=open]:border-[rgba(59,130,246,0.4)]"
              >
                <AccordionTrigger className="text-left text-white font-semibold py-5 hover:no-underline hover:text-[#22D3EE] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-text pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
