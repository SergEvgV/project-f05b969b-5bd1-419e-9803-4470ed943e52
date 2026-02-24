import { motion } from "framer-motion";
import { Zap, Star, Crown, Check } from "lucide-react";

const plans = [
  {
    name: "Сайты услуг",
    price: "11 000",
    icon: Zap,
    badge: null,
    queries: "до 3 000 запросов",
    duration: "7 дней",
    features: [
      "Посетители — 5 000",
      "Точки входа — 2",
      "Глубина — 2 страницы",
      "Мобильный трафик",
      "Время на сайте — 2 мин",
      "Подбор ключевых фраз",
      "Геотаргетинг",
    ],
  },
  {
    name: "Стандарт",
    price: "21 000",
    icon: Star,
    badge: "Популярный",
    queries: "до 5 000 запросов",
    duration: "15 дней",
    features: [
      "Посетители — 14 000",
      "Точки входа — 3",
      "Глубина — 3 страницы",
      "Мобильный трафик",
      "Время на сайте — 2 мин",
      "Подбор ключевых фраз",
      "Геотаргетинг",
    ],
  },
  {
    name: "Большие сайты",
    price: "40 000",
    icon: Crown,
    badge: null,
    queries: "до 10 000 запросов",
    duration: "30 дней",
    features: [
      "Посетители — 25 000",
      "Точки входа — 4",
      "Глубина — 5 страниц",
      "Мобильный трафик",
      "Время на сайте — 4 мин",
      "Подбор ключевых фраз",
      "Геотаргетинг",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Стоимость <span className="text-gradient">продвижения</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Бесплатный тест перед заказом. Приступаем к работе в день обращения
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
              className={`relative rounded-2xl border p-7 flex flex-col bg-card ${
                plan.badge
                  ? "border-primary/30 shadow-lg glow-primary ring-1 ring-primary/10"
                  : "border-border shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {plan.badge}
                </div>
              )}

              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  plan.badge ? "bg-primary/10" : "bg-muted"
                }`}>
                  <plan.icon className={`w-5 h-5 ${plan.badge ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{plan.duration}</p>
                </div>
              </div>

              <div className="mb-2">
                <span className="text-4xl font-black text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-1 text-lg">₽</span>
              </div>
              <p className="text-sm text-primary font-semibold mb-6">{plan.queries}</p>

              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-chart-up flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`w-full py-3.5 rounded-xl font-bold text-center transition-all block ${
                  plan.badge
                    ? "bg-primary text-primary-foreground hover:opacity-90 glow-primary"
                    : "bg-muted text-foreground hover:bg-secondary"
                }`}
              >
                Заказать
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Индивидуальные условия для крупных проектов — свяжитесь с нами
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
