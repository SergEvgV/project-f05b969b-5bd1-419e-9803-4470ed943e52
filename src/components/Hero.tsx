import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <span className="text-sm font-semibold text-accent-foreground">🎁 Бесплатный тест — 3-5 дней</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              Выведем ваш сайт в{" "}
              <span className="text-gradient">ТОП-3 Яндекса</span>{" "}
              за 7 дней
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Улучшение поведенческих факторов — рост позиций, трафика и заявок. 
              Безопасные методы, результат от 24 часов, более 200 успешных проектов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-all glow-primary"
              >
                Получить предложение
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Смотреть цены
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Users, value: "200+", label: "Проектов" },
                { icon: TrendingUp, value: "ТОП-3", label: "Результат" },
                { icon: Shield, value: "100%", label: "Безопасно" },
                { icon: Clock, value: "24ч", label: "Первый рост" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-3 rounded-xl bg-card border border-border"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <div className="text-xl font-black text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — chart card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl border border-border bg-card shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Рост позиций</div>
                    <div className="text-xs text-muted-foreground">Типичный проект, 30 дней</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-chart-up/10 text-chart-up text-sm font-bold">
                  +247%
                </div>
              </div>

              <div className="flex items-end gap-[3px] h-40 mb-6">
                {[15, 18, 20, 22, 25, 28, 26, 32, 38, 35, 42, 48, 45, 52, 58, 62, 60, 68, 72, 75, 78, 82, 85, 88, 90, 92, 94, 95, 97, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.03, duration: 0.4 }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/40 to-primary"
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                {[
                  { label: "Позиции", value: "ТОП-3", color: "text-primary" },
                  { label: "Трафик", value: "+312%", color: "text-chart-up" },
                  { label: "Заявки", value: "+180%", color: "text-accent-foreground" },
                ].map((m, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-lg font-black ${m.color}`}>{m.value}</div>
                    <div className="text-xs text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
