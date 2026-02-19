import { SectionHeading } from '@/components/SectionHeading';
import { DirectionCard } from '@/components/DirectionCard';
import { 
  PenTool, 
  Send, 
  Video, 
  ShoppingBag, 
  Briefcase, 
  Package, 
  Settings, 
  BarChart3, 
  User, 
  Zap 
} from 'lucide-react';

const directions = [
  {
    title: 'Продающие тексты',
    description: 'Копирайтинг, продающие посты, email-рассылки. Высокий спрос на качественные тексты.',
    icon: PenTool,
  },
  {
    title: 'Telegram-контент',
    description: 'Оформление каналов, посты, оформление. Каждый бизнес нуждается в контенте.',
    icon: Send,
  },
  {
    title: 'Сценарии Reels',
    description: 'Вирусные сценарии для TikTok, Reels, Shorts. Блогеры платят хорошие деньги.',
    icon: Video,
  },
  {
    title: 'Карточки WB/Ozon',
    description: 'Описания товаров для маркетплейсов. Тысячи продавцов ищут таких специалистов.',
    icon: ShoppingBag,
  },
  {
    title: 'Упаковка фрилансера',
    description: 'Портфолио, резюме, презентации. Помоги другим продавать свои услуги.',
    icon: Briefcase,
  },
  {
    title: 'Мини-продукты',
    description: 'Чек-листы, гайды, шаблоны на продажу. Создай один раз — продавай всегда.',
    icon: Package,
  },
  {
    title: 'Автоматизация бизнеса',
    description: 'Автоответы, воронки, обработка заявок. Бизнес готов платить за экономию времени.',
    icon: Settings,
  },
  {
    title: 'Анализ ниш',
    description: 'Исследование конкурентов, поиск инсайтов. Ценная услуга для предпринимателей.',
    icon: BarChart3,
  },
  {
    title: 'Личный бренд',
    description: 'Контент-стратегия, посты для экспертов. Помоги экспертам стать заметнее.',
    icon: User,
  },
  {
    title: 'Быстрый заработок с ИИ',
    description: 'Задачи на биржах, простые заказы. Начни зарабатывать уже завтра.',
    icon: Zap,
  },
];

export function Directions() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="10 направлений с реальным спросом"
          subtitle="Выбери то, что тебе интересно, и начни зарабатывать"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {directions.map((direction, index) => (
            <DirectionCard
              key={index}
              title={direction.title}
              description={direction.description}
              icon={direction.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
