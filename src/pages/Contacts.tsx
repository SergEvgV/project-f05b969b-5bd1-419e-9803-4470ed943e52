import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/thank-you");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Контакты
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Свяжитесь с нами удобным способом или оставьте заявку — ответим в течение 30 минут
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 space-y-6"
            >
              {[
                { icon: MessageCircle, title: "Telegram", value: "@magic_pf", href: "https://t.me/" },
                { icon: Mail, title: "Email", value: "info@magic-pf.ru", href: "mailto:info@magic-pf.ru" },
                { icon: MapPin, title: "Режим работы", value: "Пн–Пт, 9:00–19:00 МСК", href: undefined },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3"
            >
              <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl border border-border bg-card space-y-5">
                <h2 className="text-xl font-bold text-foreground mb-1">Оставить заявку</h2>
                <p className="text-sm text-muted-foreground mb-4">Заполните форму и мы свяжемся с вами</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Имя</label>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Telegram / Телефон</label>
                    <Input placeholder="@username или +7..." required />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">URL сайта</label>
                  <Input placeholder="https://example.com" type="url" required />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Сообщение</label>
                  <Textarea placeholder="Опишите задачу или задайте вопрос..." rows={4} />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
                  <Send className="w-4 h-4" />
                  {loading ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contacts;
