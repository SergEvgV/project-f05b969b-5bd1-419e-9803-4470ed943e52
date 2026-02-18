import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Magic ПФ — приватная технология продвижения</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6"
        >
          <span className="text-foreground">Ваш сайт в</span>
          <br />
          <span className="text-gradient">ТОП-3 Яндекса</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Безопасное и эффективное повышение видимости сайта в Яндексе через улучшение 
          поведенческих факторов — рост позиций и органического трафика за 7 дней
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg glow-primary hover:scale-105 transition-transform"
          >
            Начать продвижение
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors"
          >
            Как это работает
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "200+", label: "Успешных проектов" },
            { value: "ТОП-3", label: "Средний результат" },
            { value: "100%", label: "Безопасность" },
            { value: "7 дн", label: "Первые результаты" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Chart illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-card shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Рост позиций в Яндексе</span>
              <span className="ml-auto text-xs text-primary font-mono font-bold">+247%</span>
            </div>
            <div className="flex items-end gap-1 h-32">
              {[20, 25, 22, 30, 35, 32, 40, 45, 50, 48, 55, 60, 58, 65, 72, 70, 78, 85, 82, 90, 88, 92, 95, 93, 97, 100, 98, 100, 100, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1 + i * 0.03, duration: 0.4 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary/50 to-primary min-w-[4px]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
