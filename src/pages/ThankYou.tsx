import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-primary" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
          Спасибо за заявку!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Мы получили вашу заявку и свяжемся с вами в течение 30 минут в рабочее время.
        </p>

        <Button asChild size="lg" className="gap-2">
          <Link to="/">
            <ArrowLeft className="w-4 h-4" />
            Перейти на главную
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default ThankYou;
