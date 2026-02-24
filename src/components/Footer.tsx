import { BarChart3 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">Magic ПФ</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#why" className="text-muted-foreground hover:text-primary transition-colors">Почему мы</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#how" className="text-muted-foreground hover:text-primary transition-colors">Этапы работы</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2025 Magic ПФ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
