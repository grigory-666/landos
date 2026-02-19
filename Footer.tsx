import { Cpu } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[rgba(59,130,246,0.1)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white">100 Промптов</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-muted text-center">
            © 2025 Все права защищены. Не является публичной офертой.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm text-gray-muted">
            <a href="#" className="hover:text-[#22D3EE] transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
