
import { Code, Layout, Server, Star } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-5 h-5" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "RESTful APIs"]
  },
  {
    category: "Design",
    icon: <Layout className="w-5 h-5" />,
    items: ["UI/UX Design", "Figma", "Adobe XD", "Responsive Design", "Wireframing"]
  },
  {
    category: "Other Skills",
    icon: <Star className="w-5 h-5" />,
    items: ["Git", "CI/CD", "Testing", "Performance Optimization", "Agile/Scrum"]
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="glass p-8 md:p-12 rounded-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Sourodip Roy, a passionate Full-Stack Developer and UI/UX enthusiast with a deep love for creating seamless, beautiful web experiences. With several years of professional experience, I specialize in building modern web applications that balance aesthetic appeal with technical excellence.
                </p>
                <p>
                  My journey in development began with a fascination for how design and code intersect to create meaningful user experiences. Today, I approach every project with the same enthusiasm, constantly seeking to push creative boundaries while ensuring solid, maintainable code.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing my knowledge through writing technical articles and mentoring upcoming developers.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">My Journey</h3>
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">2020 - Present</p>
                    <h4 className="font-medium">Senior Frontend Developer</h4>
                    <p className="text-sm">Leading UI development for enterprise applications</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">2018 - 2020</p>
                    <h4 className="font-medium">Full-Stack Developer</h4>
                    <p className="text-sm">Building end-to-end solutions for startups</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">2016 - 2018</p>
                    <h4 className="font-medium">UI/UX Designer</h4>
                    <p className="text-sm">Creating user-centered design solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="glass-card p-5 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      {skillGroup.icon}
                      <h4 className="font-semibold">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-sm glass px-3 py-1 rounded-full text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
