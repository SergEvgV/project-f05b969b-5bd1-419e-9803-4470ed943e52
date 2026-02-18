import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold text-foreground">ПФ Продвижение</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Улучшение поведенческих факторов в Яндексе
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
