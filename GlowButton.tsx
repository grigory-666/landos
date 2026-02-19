import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'default' | 'large';
  variant?: 'primary' | 'secondary';
}

export function GlowButton({ 
  children, 
  onClick, 
  className,
  size = 'default',
  variant = 'primary'
}: GlowButtonProps) {
  const baseStyles = "relative font-semibold rounded-xl transition-all duration-300 overflow-hidden group";
  
  const sizeStyles = {
    default: "px-8 py-4 text-base",
    large: "px-12 py-5 text-lg",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white shadow-glow hover:shadow-glow-lg",
    secondary: "bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10",
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#06B6D4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
