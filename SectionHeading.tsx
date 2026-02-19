import { ScrollReveal } from './ScrollReveal';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
  size?: 'default' | 'large';
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className,
  align = 'center',
  size = 'default'
}: SectionHeadingProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
  };

  const sizeStyles = {
    default: 'text-3xl md:text-4xl',
    large: 'text-4xl md:text-5xl',
  };

  return (
    <ScrollReveal className={cn('mb-12 md:mb-16', alignStyles[align], className)}>
      <h2 className={cn(
        'font-bold text-white leading-tight',
        sizeStyles[size]
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-text max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
