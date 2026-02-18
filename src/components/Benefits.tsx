import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Target, Users } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Кому подходит",
    items: [
      "Сайты с хорошей SEO-оптимизацией",
      "Сайты в ТОП-30 выдачи Яндекса",
      "Молодые сайты в ТОП-100",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Безопасность",
    items: [
      "Не отображается в Яндекс.Метрике",
      "100% безопасная технология",
      "Гарантия возврата средств",
    ],
  },
  {
    icon: Users,
    title: "Что нужно для старта",
    items: [
      "URL сайта и регион продвижения",
      "Список ключевых запросов в ТОП-30",
      "Доступ к Яндекс.Метрике (желательно)",
    ],
  },
];

const niches = [
  "Коттеджные посёлки", "Кухни на заказ", "Межкомнатные двери",
  "Строительство", "Автозапчасти", "Туризм", "Медицина", "Юридические услуги",
];

const Benefits = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Проверено в <span className="text-gradient">разных нишах</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/50 p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4">{b.title}</h3>
              <ul className="space-y-3">
                {b.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Niche tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {niches.map((n, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-border bg-secondary text-sm text-secondary-foreground"
            >
              {n}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
