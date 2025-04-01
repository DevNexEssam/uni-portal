import ContactSection from "../components/ContactSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import MobileAppSection from "../components/MobileAppSection";
import PricingSection from "../components/PricingSection";
import SecuritySection from "../components/SecuritySection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <MobileAppSection />
      <SecuritySection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Home;
