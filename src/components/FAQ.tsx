import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Что такое поведенческие факторы (ПФ)?",
    a: "Поведенческие факторы — это показатели взаимодействия пользователей с сайтом: клики в выдаче, время на сайте, глубина просмотра, возвраты. Яндекс учитывает эти данные при ранжировании. Мы улучшаем эти показатели, что приводит к росту позиций.",
  },
  {
    q: "Безопасна ли накрутка ПФ для сайта?",
    a: "Да, при правильном подходе. Мы используем плавное, естественное наращивание активности с разными сценариями поведения, временем посещения и источниками. Это имитирует реальных пользователей и не вызывает подозрений у алгоритмов.",
  },
  {
    q: "Как быстро будет виден результат?",
    a: "Первые изменения позиций видны уже через 24 часа. Стабильный рост в ТОП-10 — за 7-14 дней. Полный эффект раскрывается в течение месяца при постоянной работе.",
  },
  {
    q: "Что входит в бесплатный тест?",
    a: "Мы запускаем накрутку ПФ по выбранным запросам на 3-5 дней бесплатно. Вы видите динамику позиций и принимаете решение о дальнейшей работе. Никаких обязательств.",
  },
  {
    q: "Видна ли накрутка в Яндекс.Метрике?",
    a: "Нет. Наша технология не оставляет следов в Метрике. Действия выполняются через реальные браузерные профили с уникальными fingerprints, что делает их неотличимыми от обычных посетителей.",
  },
  {
    q: "С какими тематиками вы работаете?",
    a: "С любыми — от услуг и e-commerce до медицины и строительства. У нас есть опыт работы с высококонкурентными нишами: стоматология, наркология, юридические услуги, недвижимость и другие.",
  },
  {
    q: "Какие гарантии вы даёте?",
    a: "Мы даём гарантию роста позиций по согласованным запросам. Если после тестового периода результата нет — вы ничего не платите. Работаем на результат.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
            Вопросы и <span className="text-gradient">ответы</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ответы на частые вопросы о продвижении поведенческими факторами
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
