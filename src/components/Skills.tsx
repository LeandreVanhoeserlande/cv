import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Shield, Terminal, Globe, Network, Server, Shield as ShieldIcon, AppWindow } from "lucide-react";

const programmingSkills = [
  "Python", "HTML", "CSS", "JavaScript", "SQL", "C", "C++", "Scratch", "PHP"
];

const cyberSkills = [
  "Kali Linux", "WSL", "Cisco"
];

const projects = [
  {
    year: "2022",
    title: "Site Frontend — HTML/CSS (Terminal)",
    icon: Terminal,
    color: "text-primary",
    description: "Développement d'un site web avec interface terminal. Utilisation de HTML et CSS pour créer une expérience utilisateur unique inspirée des interfaces en ligne de commande."
  },
  {
    year: "2023",
    title: "Site Frontend — HTML/CSS/JS",
    icon: Globe,
    color: "text-secondary",
    description: "Création d'un site web interactif avec JavaScript. Mise en place de fonctionnalités dynamiques et amélioration de l'expérience utilisateur grâce à des animations et interactions."
  },
  {
    year: "2023",
    title: "Projet réseaux : Small Enterprise Network (Packet Tracer)",
    icon: Network,
    color: "text-primary",
    description: "Conception et simulation d'un réseau d'entreprise complet avec Packet Tracer. Configuration de routeurs, switches, VLANs et mise en place de politiques de sécurité réseau."
  },
  {
    year: "2023",
    title: "Mini HTTP server en C",
    icon: Server,
    color: "text-secondary",
    description: "Développement d'un serveur HTTP minimaliste en langage C. Gestion des requêtes GET/POST, parsing HTTP et gestion des connexions multiples."
  },
  {
    year: "2024",
    title: "Détection MITM & règles IDS",
    icon: ShieldIcon,
    color: "text-primary",
    description: "Mise en place d'un système de détection d'attaques Man-in-the-Middle. Configuration de règles IDS (Intrusion Detection System) pour identifier et bloquer les menaces réseau."
  },
  {
    year: "2024",
    title: "Gestionnaire de tâches GUI (Python)",
    icon: AppWindow,
    color: "text-secondary",
    description: "Application de gestion de tâches avec interface graphique en Python. Utilisation de Tkinter pour créer une interface intuitive avec fonctionnalités CRUD complètes."
  }
];

const Skills = () => {
  return (
    <section id="competences" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Compétences</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">Mes domaines d'expertise technique</p>
        
        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="programming">Programmation</TabsTrigger>
            <TabsTrigger value="cyber">Cybersécurité</TabsTrigger>
            <TabsTrigger value="projects">Projets</TabsTrigger>
          </TabsList>

          <TabsContent value="programming" className="max-w-4xl mx-auto">
            <Card className="hover:shadow-card transition-all duration-300 animate-fade-in border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Langages de programmation</CardTitle>
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
          </TabsContent>

          <TabsContent value="cyber" className="max-w-4xl mx-auto">
            <Card className="hover:shadow-card transition-all duration-300 animate-fade-in border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Outils de cybersécurité</CardTitle>
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
          </TabsContent>

          <TabsContent value="projects">
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
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
