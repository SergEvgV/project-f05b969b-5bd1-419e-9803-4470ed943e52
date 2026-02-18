import { TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold text-foreground">Magic ПФ</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#how" className="text-muted-foreground hover:text-foreground transition-colors">Как работает</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
        </nav>

        <a
          href="#contact"
          className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform"
        >
          Заказать
        </a>
      </div>
    </header>
  );
};

export default Header;
