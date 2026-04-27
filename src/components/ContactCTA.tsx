import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="rounded-3xl border border-primary/15 bg-card p-10 md:p-14 shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
              Бесплатный тест ПФ
            </h2>
            <p className="text-muted-foreground text-lg mb-3 max-w-lg mx-auto">
              Протестируем накрутку поведенческих факторов на вашем сайте бесплатно 5-7 дней. 
              Убедитесь в результате перед заказом.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Напишите нам — ответим в течение 15 минут
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://t.me/Max_Coder_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all glow-primary"
              >
                Написать в Telegram
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
