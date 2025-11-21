import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Shield } from "lucide-react";

const programmingSkills = [
  "Python", "HTML", "CSS", "JavaScript", "SQL", "C", "C++", "Scratch", "PHP"
];

const cyberSkills = [
  "Kali Linux", "WSL", "Cisco"
];

const Skills = () => {
  return (
    <section id="competences" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Compétences</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">Mes domaines d'expertise technique</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-card transition-all duration-300 animate-slide-in-left border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Programmation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {programmingSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm py-1.5 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-300 animate-slide-in-right border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Cybersécurité</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cyberSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm py-1.5 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
