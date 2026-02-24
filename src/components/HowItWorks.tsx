import { motion } from "framer-motion";
import { MessageCircle, Search, Rocket, BarChart3, Settings, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Пишете нам",
    description: "Расскажите про ваш сайт и цели. Предложим бесплатный тест на 3-5 дней.",
  },
  {
    icon: Search,
    num: "02",
    title: "Анализ сайта",
    description: "Изучаем текущие позиции, конкурентов и подбираем эффективные ключевые запросы.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Бесплатный тест",
    description: "Запускаем накрутку ПФ бесплатно. Вы видите рост позиций и убеждаетесь в результате.",
  },
  {
    icon: Settings,
    num: "04",
    title: "Настройка кампании",
    description: "Определяем оптимальный пакет, настраиваем глубину просмотра, время и геотаргетинг.",
  },
  {
    icon: BarChart3,
    num: "05",
    title: "Запуск продвижения",
    description: "Плавная, естественная имитация поведения реальных пользователей на вашем сайте.",
  },
  {
    icon: Trophy,
    num: "06",
    title: "ТОП позиции!",
    description: "Рост трафика, новые клиенты и заявки. Поддержка и удержание позиций.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Этапы <span className="text-gradient">работы</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Начинаем с бесплатного теста — убедитесь в результате перед оплатой
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-6 rounded-2xl border border-border bg-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold text-primary/50">{step.num}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
