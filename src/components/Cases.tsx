import { motion } from "framer-motion";
import { TrendingUp, MapPin, Key, Calendar } from "lucide-react";

const cases = [
  { niche: "Ветеринарная клиника", geo: "Москва", days: "7 дней", keys: 224, growth: "+180%" },
  { niche: "Натяжные потолки", geo: "Москва", days: "14 дней", keys: 450, growth: "+312%" },
  { niche: "Интернет-магазин плитки", geo: "СПб", days: "7 дней", keys: 179, growth: "+247%" },
  { niche: "Стоматология", geo: "Москва", days: "7 дней", keys: 275, growth: "+195%" },
  { niche: "Модульные дома", geo: "СПб", days: "10 дней", keys: 95, growth: "+260%" },
  { niche: "Косметология", geo: "Пермь", days: "7 дней", keys: 77, growth: "+210%" },
];

const Cases = () => {
  return (
    <section id="cases" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Реальные <span className="text-gradient">результаты</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Растут не только позиции, но и трафик, заявки и продажи
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">{c.niche}</h3>
                <span className="px-3 py-1 rounded-full bg-chart-up/10 text-chart-up text-sm font-bold">
                  {c.growth}
                </span>
              </div>

              {/* Mini chart */}
              <div className="flex items-end gap-[2px] h-16 mb-4">
                {Array.from({ length: 20 }, (_, j) => {
                  const progress = (j / 19);
                  const base = 15 + progress * 75 + Math.sin(j * 0.8) * 8;
                  return (
                    <motion.div
                      key={j}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${Math.min(base, 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.02 }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/30 to-primary"
                    />
                  );
                })}
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{c.geo}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{c.days}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Key className="w-3.5 h-3.5" />
                  <span>{c.keys} запросов</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
