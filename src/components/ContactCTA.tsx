import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center rounded-3xl border border-primary/20 bg-card p-12 glow-green"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Бесплатный тест ПФ
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Проведём бесплатный тестовый запуск поведенческих факторов для вашего сайта перед заказом
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform"
            >
              Написать в Telegram
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Ответим в течение 30 минут в рабочее время
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
