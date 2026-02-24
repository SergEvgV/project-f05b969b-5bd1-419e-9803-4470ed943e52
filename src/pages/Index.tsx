import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Cases from "@/components/Cases";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyUs />
      <Benefits />
      <Pricing />
      <HowItWorks />
      <Cases />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
