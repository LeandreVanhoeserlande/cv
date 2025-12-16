import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Terminal, Globe, Network, Server, Shield, AppWindow, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    year: "2022",
    title: "Site Frontend — HTML/CSS (Terminal)",
    icon: Terminal,
    color: "text-primary",
    description: "Développement d'un site web avec interface terminal. Utilisation de HTML et CSS pour créer une expérience utilisateur unique inspirée des interfaces en ligne de commande.",
    technologies: ["HTML", "CSS"]
  },
  {
    year: "2023",
    title: "Site Frontend — HTML/CSS/JS",
    icon: Globe,
    color: "text-secondary",
    description: "Création d'un site web interactif avec JavaScript. Mise en place de fonctionnalités dynamiques et amélioration de l'expérience utilisateur grâce à des animations et interactions.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    year: "2023",
    title: "Projet réseaux : Small Enterprise Network",
    icon: Network,
    color: "text-primary",
    description: "Conception et simulation d'un réseau d'entreprise complet avec Packet Tracer. Configuration de routeurs, switches, VLANs et mise en place de politiques de sécurité réseau.",
    technologies: ["Cisco Packet Tracer", "Réseaux", "VLANs"]
  },
  {
    year: "2023",
    title: "Mini HTTP server en C",
    icon: Server,
    color: "text-secondary",
    description: "Développement d'un serveur HTTP minimaliste en langage C. Gestion des requêtes GET/POST, parsing HTTP et gestion des connexions multiples.",
    technologies: ["C", "HTTP", "Sockets"]
  },
  {
    year: "2024",
    title: "Détection MITM & règles IDS",
    icon: Shield,
    color: "text-primary",
    description: "Mise en place d'un système de détection d'attaques Man-in-the-Middle. Configuration de règles IDS (Intrusion Detection System) pour identifier et bloquer les menaces réseau.",
    technologies: ["Kali Linux", "IDS", "Sécurité réseau"]
  },
  {
    year: "2024",
    title: "Gestionnaire de tâches GUI (Python)",
    icon: AppWindow,
    color: "text-secondary",
    description: "Application de gestion de tâches avec interface graphique en Python. Utilisation de Tkinter pour créer une interface intuitive avec fonctionnalités CRUD complètes.",
    technologies: ["Python", "Tkinter", "GUI"]
  }
];

const Informatique = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Code2 className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mes Projets Informatiques</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez en détail les projets personnels que j'ai réalisés au fil de mes études
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-sm">{project.year}</Badge>
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Informatique;
