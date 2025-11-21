import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Footprints, Sword, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sports = [
  {
    name: "Plongée sous-marine",
    icon: Waves,
    color: "text-primary",
    description: "Exploration des fonds marins et découverte de la faune aquatique",
    level: "Niveau 1"
  },
  {
    name: "Football",
    icon: Footprints,
    color: "text-secondary",
    description: "Sport d'équipe pratiqué depuis plusieurs années",
    level: "Amateur"
  },
  {
    name: "Lutte",
    icon: Sword,
    color: "text-primary",
    description: "Art martial de combat au corps à corps",
    level: "Pratiquant"
  }
];

const Sports = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Mes Sports</h1>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Activités sportives pratiquées
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sports.map((sport, index) => {
            const Icon = sport.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 bg-primary/10 rounded-lg`}>
                      <Icon className={`w-8 h-8 ${sport.color}`} />
                    </div>
                    <Badge variant="outline">{sport.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{sport.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{sport.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sports;
