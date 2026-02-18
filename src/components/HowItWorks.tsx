import { motion } from "framer-motion";
import { Search, MousePointerClick, TrendingUp, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Анализ запросов",
    description: "Подбираем ключевые фразы вашего сайта в ТОП-30 Яндекса — от 50 до 1000 фраз",
  },
  {
    icon: MousePointerClick,
    title: "Поведенческие сигналы",
    description: "Ежедневные переходы из поисковой выдачи с имитацией реального пользовательского поведения",
  },
  {
    icon: BarChart3,
    title: "Глубина взаимодействия",
    description: "Просмотр до 5 страниц, время на сайте от 30 сек до 4 минут, мобильный и десктопный трафик",
  },
  {
    icon: TrendingUp,
    title: "Рост позиций",
    description: "Улучшение видимости по НЧ фразам подтягивает ВЧ запросы — сайт растёт в ТОП",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Как <span className="text-gradient">это работает</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Приватная технология безопасного продвижения через улучшение поведенческих факторов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card/50 p-6 hover:glow-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-mono text-xs text-muted-foreground mb-2">0{i + 1}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 max-w-2xl mx-auto text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">Важно:</span> В Яндекс.Метрике переходы не отображаются, 
            но увеличиваются реальные переходы людей из поиска. Сайт должен соответствовать интенту поисковых фраз.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
