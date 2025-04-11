
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-reveal');
      const pathDots = document.querySelectorAll('.path-dot');
      const pathLines = document.querySelectorAll('.path-line');
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
      
      pathDots.forEach((dot) => {
        const dotTop = dot.getBoundingClientRect().top;
        const dotVisible = 150;
        
        if (dotTop < window.innerHeight - dotVisible) {
          dot.classList.add('visible');
        }
      });
      
      pathLines.forEach((line) => {
        const lineTop = line.getBoundingClientRect().top;
        const lineVisible = 150;
        
        if (lineTop < window.innerHeight - lineVisible) {
          line.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        <HeroSection />
        
        {/* Path connecting Hero to About */}
        <div className="relative h-20">
          <div className="path-line"></div>
          <div className="path-dot -top-2"></div>
        </div>
        
        <AboutSection />
        
        {/* Path connecting About to Projects */}
        <div className="relative h-20">
          <div className="path-line"></div>
          <div className="path-dot -top-2"></div>
        </div>
        
        <ProjectsSection />
        
        {/* Path connecting Projects to Contact */}
        <div className="relative h-20">
          <div className="path-line"></div>
          <div className="path-dot -top-2"></div>
        </div>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
