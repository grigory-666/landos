import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface DirectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function DirectionCard({ title, description, icon: Icon, index }: DirectionCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <div className="relative p-6 rounded-xl bg-gradient-to-br from-[rgba(59,130,246,0.1)] to-[rgba(6,182,212,0.05)] border border-[rgba(59,130,246,0.2)] h-full transition-all duration-300 group-hover:border-[rgba(59,130,246,0.5)] group-hover:shadow-glow">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-[#06B6D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-[#22D3EE]" />
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-sm text-gray-text leading-relaxed">
            {description}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
          <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-[#3B82F6]/50 to-transparent" />
          <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-[#3B82F6]/50 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
