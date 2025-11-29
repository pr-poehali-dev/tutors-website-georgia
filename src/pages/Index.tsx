import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TutorCatalog from '@/components/TutorCatalog';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TutorCatalog />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;