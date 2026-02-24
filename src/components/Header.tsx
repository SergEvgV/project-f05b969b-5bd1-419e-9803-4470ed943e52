import { useState } from "react";
import { BarChart3, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-foreground text-lg">Magic ПФ</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#why" className="text-muted-foreground hover:text-primary transition-colors">Почему мы</a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
          <a href="#how" className="text-muted-foreground hover:text-primary transition-colors">Как работает</a>
          <a href="#cases" className="text-muted-foreground hover:text-primary transition-colors">Кейсы</a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity glow-primary"
          >
            Бесплатный тест
          </a>
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-6 py-4 space-y-3">
          {[
            { href: "#why", label: "Почему мы" },
            { href: "#pricing", label: "Цены" },
            { href: "#how", label: "Как работает" },
            { href: "#cases", label: "Кейсы" },
            { href: "#faq", label: "FAQ" },
            { href: "#contact", label: "Контакты" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
