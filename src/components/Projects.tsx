import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Globe, Network, Server, Shield, AppWindow } from "lucide-react";

const projects = [
  {
    year: "2022",
    title: "Site Frontend — HTML/CSS (Terminal)",
    icon: Terminal,
    color: "text-primary"
  },
  {
    year: "2023",
    title: "Site Frontend — HTML/CSS/JS",
    icon: Globe,
    color: "text-secondary"
  },
  {
    year: "2023",
    title: "Projet réseaux : Small Enterprise Network (Packet Tracer)",
    icon: Network,
    color: "text-primary"
  },
  {
    year: "2023",
    title: "Mini HTTP server en C",
    icon: Server,
    color: "text-secondary"
  },
  {
    year: "2024",
    title: "Détection MITM & règles IDS",
    icon: Shield,
    color: "text-primary"
  },
  {
    year: "2024",
    title: "Gestionnaire de tâches GUI (Python)",
    icon: AppWindow,
    color: "text-secondary"
  }
];

const Projects = () => {
  return (
    <section id="projets" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Projets</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">Une sélection de mes réalisations techniques</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-sm">{project.year}</Badge>
                    <Icon className={`w-6 h-6 ${project.color}`} />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
