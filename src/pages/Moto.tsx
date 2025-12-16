import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bike, ArrowLeft, Brain, Target, Eye, Shield, Compass, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const softSkills = [
  {
    name: "Anticipation",
    icon: Eye,
    description: "Prévoir les situations et adapter son comportement en conséquence"
  },
  {
    name: "Prise de décision",
    icon: Target,
    description: "Analyser rapidement et agir de manière réfléchie"
  },
  {
    name: "Concentration",
    icon: Brain,
    description: "Maintenir une attention constante sur l'environnement"
  },
  {
    name: "Rigueur",
    icon: Shield,
    description: "Respecter les procédures et les bonnes pratiques"
  },
  {
    name: "Autonomie",
    icon: Compass,
    description: "Gérer seul les imprévus et prendre des initiatives"
  },
  {
    name: "Gestion du risque",
    icon: AlertTriangle,
    description: "Évaluer les dangers et adapter son comportement"
  }
];

const Moto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Bike className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">La Moto</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            La pratique de la moto m'a permis de développer des compétences essentielles 
            transférables au monde professionnel. Elle exige une attention constante, 
            une capacité d'adaptation rapide et une gestion maîtrisée des situations complexes.
          </p>
        </div>

        <Card className="mb-8 animate-fade-in border-border/50" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Badge variant="secondary" className="text-sm">Permis A2</Badge>
              Compétences acquises
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: "0.8s" }}>
          Ces compétences se traduisent directement dans ma façon d'aborder les projets : 
          analyse méthodique, anticipation des problèmes et exécution rigoureuse.
        </p>
      </div>
    </div>
  );
};

export default Moto;
