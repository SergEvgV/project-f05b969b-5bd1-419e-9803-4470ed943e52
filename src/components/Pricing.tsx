import { motion } from "framer-motion";
import { Zap, Star, Crown } from "lucide-react";

const plans = [
  {
    name: "Эконом",
    price: "11 000",
    icon: Zap,
    description: "Быстро-ТОП до 3000 поисковых запросов",
    duration: "7 дней",
    features: [
      { label: "Поисковые запросы", value: "до 3 000" },
      { label: "Посетители", value: "5 000" },
      { label: "Точки входа", value: "2" },
      { label: "Глубина просмотра", value: "2 страницы" },
      { label: "Мобильный трафик", value: "Да" },
      { label: "Время на сайте", value: "2 мин" },
      { label: "Подбор ключевых фраз", value: "Да" },
      { label: "Геотаргетинг", value: "Да" },
    ],
    highlight: false,
  },
  {
    name: "Стандарт",
    price: "21 000",
    icon: Star,
    description: "Быстро-ТОП до 5000 поисковых запросов",
    duration: "15 дней",
    features: [
      { label: "Поисковые запросы", value: "до 5 000" },
      { label: "Посетители", value: "14 000" },
      { label: "Точки входа", value: "3" },
      { label: "Глубина просмотра", value: "3 страницы" },
      { label: "Мобильный трафик", value: "Да" },
      { label: "Время на сайте", value: "2 мин" },
      { label: "Подбор ключевых фраз", value: "Да" },
      { label: "Геотаргетинг", value: "Да" },
    ],
    highlight: true,
  },
  {
    name: "Бизнес",
    price: "40 000",
    icon: Crown,
    description: "Быстро-ТОП до 10000 поисковых запросов",
    duration: "30 дней",
    features: [
      { label: "Поисковые запросы", value: "до 10 000" },
      { label: "Посетители", value: "25 000" },
      { label: "Точки входа", value: "4" },
      { label: "Глубина просмотра", value: "5 страниц" },
      { label: "Мобильный трафик", value: "Да" },
      { label: "Время на сайте", value: "2 мин" },
      { label: "Подбор ключевых фраз", value: "Да" },
      { label: "Геотаргетинг", value: "Да" },
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient">Тарифы</span> продвижения
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Бесплатный тест ПФ перед заказом. Выберите подходящий план
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                plan.highlight
                  ? "border-primary/30 bg-card shadow-lg glow-primary"
                  : "border-border bg-card shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  Популярный
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  plan.highlight ? "bg-primary/10" : "bg-muted"
                }`}>
                  <plan.icon className={`w-5 h-5 ${plan.highlight ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{plan.duration}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-black text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-1">₽</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{f.label}</span>
                    <span className="font-semibold text-foreground">{f.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:scale-[1.02] glow-primary"
                    : "bg-muted text-foreground hover:bg-muted/70"
                }`}
              >
                Заказать
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          <p>Выполнение действий на сайте · Выбор расписания · Правки не ограничены</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
