import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const Education = () => {
  return (
    <section id="formation" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Formation</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">Mon parcours académique</p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="hover:shadow-card transition-all duration-300 hover:scale-105 animate-slide-in-left border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">École d'Ingénieur</CardTitle>
                  <p className="text-sm text-muted-foreground">En cours</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                2ème année — Spécialisation informatique
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-300 hover:scale-105 animate-slide-in-right border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <School className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Baccalauréat</CardTitle>
                  <p className="text-sm text-muted-foreground">2023 - 2024</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Diplôme obtenu
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
