
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="glass max-w-5xl mx-auto p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sourodip Roy
                <span className="block text-2xl md:text-3xl text-sakura dark:text-sakura-dark mt-2">
                  (Equilibrium.dev)
                </span>
              </h1>
              <p className="text-xl mb-6 text-muted-foreground">
                Creating elegant web experiences with precision and personality
              </p>
              <p className="mb-8">
                I'm a passionate developer and designer crafting beautiful, functional digital experiences that balance aesthetics and performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="hero-button bg-primary/80 hover:bg-primary/90 dark:bg-primary/50 dark:hover:bg-primary/60 text-primary-foreground"
                >
                  Hire Me
                </a>
                <a 
                  href="#projects" 
                  className="hero-button flex items-center gap-2"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass p-2 rounded-full hover:bg-white/20 dark:hover:bg-night-light/40 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass p-2 rounded-full hover:bg-white/20 dark:hover:bg-night-light/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="glass p-2 rounded-full hover:bg-white/20 dark:hover:bg-night-light/40 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full glass p-3 animate-float">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/30 dark:border-white/10">
                    {/* Placeholder for profile image - replace with actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-sakura to-sakura-dark dark:from-night-light dark:to-primary flex items-center justify-center text-white text-4xl font-bold">
                      SR
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                  Full-stack Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
