import { motion } from "framer-motion";
import { Eye, Clock, Layers, MousePointerClick, ArrowDown, TrendingUp } from "lucide-react";

const benefits = [
  { icon: MousePointerClick, title: "Рост CTR в выдаче", desc: "Увеличение кликабельности сайта по целевым запросам" },
  { icon: Clock, title: "Время на сайте", desc: "Увеличение среднего времени визита до 2-4 минут" },
  { icon: Layers, title: "Глубина просмотра", desc: "Просмотр до 5 страниц за одну сессию" },
  { icon: ArrowDown, title: "Снижение отказов", desc: "Уменьшение показателя отказов для лучшего ранжирования" },
  { icon: TrendingUp, title: "Рост позиций", desc: "Устойчивый рост в ТОП-10 по ключевым запросам" },
  { icon: Eye, title: "Невидимо в Метрике", desc: "Технология не оставляет следов в системах аналитики" },
];

const niches = [
  "Стоматология", "Наркология", "Строительство", "Натяжные потолки",
  "Юридические услуги", "Автоподбор", "Септики", "Металлопрокат",
  "E-commerce", "Косметология", "Путешествия", "Недвижимость",
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Что вы <span className="text-gradient">получите</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Комплексное улучшение поведенческих показателей для роста в поиске
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{b.title}</h4>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-bold text-foreground text-lg mb-4">Работаем с любыми тематиками</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {niches.map((niche, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {niche}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
