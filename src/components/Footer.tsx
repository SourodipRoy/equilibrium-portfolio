
import { ThemeToggle } from "./ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10">
      <div className="container mx-auto px-4">
        <div className="glass p-6 rounded-xl scroll-reveal">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                &copy; {currentYear} Sourodip Roy (Equilibrium.dev). All rights reserved.
              </p>
              <p className="text-sm mt-1 text-muted-foreground/70 italic">
                "Harmony in design, balance in code"
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#hero" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Back to Top
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
