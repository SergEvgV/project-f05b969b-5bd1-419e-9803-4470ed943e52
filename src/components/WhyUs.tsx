import { motion } from "framer-motion";
import { ShieldCheck, Zap, Target, BarChart3, Users, Headphones } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Бесплатный тест ПФ",
    description: "Протестируем эффективность на вашем сайте 3-5 дней бесплатно. Убедитесь в результате перед оплатой.",
  },
  {
    icon: Zap,
    title: "Результат от 24 часов",
    description: "Первые улучшения позиций видны уже через сутки. Стабильный рост в ТОП за 7-14 дней.",
  },
  {
    icon: Target,
    title: "Точечная работа с запросами",
    description: "Подбираем и оптимизируем именно те ключевые фразы, которые приносят клиентов и заявки.",
  },
  {
    icon: BarChart3,
    title: "Еженедельная аналитика",
    description: "Снимаем позиции, анализируем динамику и вносим корректировки. Прозрачная отчётность.",
  },
  {
    icon: Users,
    title: "200+ успешных проектов",
    description: "Работаем с конкурентными тематиками: медицина, строительство, финансы, e-commerce и другие.",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Оперативная связь через Telegram. Отвечаем на вопросы и помогаем на каждом этапе.",
  },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Почему выбирают <span className="text-gradient">именно нас</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Собственные разработки, опытная команда и проверенные методики продвижения
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
