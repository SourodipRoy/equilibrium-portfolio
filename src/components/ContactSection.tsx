
import { useState } from "react";
import { Github, Linkedin, Mail, Map, MessageSquare, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="glass p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
              <p className="text-muted-foreground mb-8">
                Have a project in mind or want to discuss a potential collaboration? Feel free to reach out! I'm always open to new opportunities and interesting discussions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="glass p-3 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-sakura dark:hover:text-sakura-light transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="glass p-3 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-sakura dark:hover:text-sakura-light transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="glass p-3 rounded-full">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      New York, United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-full hover:bg-white/20 dark:hover:bg-night-light/40 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-full hover:bg-white/20 dark:hover:bg-night-light/40 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:contact@example.com" 
                    className="glass p-3 rounded-full hover:bg-white/20 dark:hover:bg-night-light/40 transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" /> Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 glass border-0 focus:ring-2 focus:ring-sakura dark:focus:ring-sakura-dark outline-none rounded-lg"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 glass border-0 focus:ring-2 focus:ring-sakura dark:focus:ring-sakura-dark outline-none rounded-lg"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 glass border-0 focus:ring-2 focus:ring-sakura dark:focus:ring-sakura-dark outline-none rounded-lg resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-2 px-4 bg-primary/80 hover:bg-primary/90 dark:bg-primary/50 dark:hover:bg-primary/60 text-primary-foreground rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
