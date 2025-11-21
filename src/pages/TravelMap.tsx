import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const visitedPlaces = [
  { name: "France", continent: "Europe", year: "Résidence" },
  { name: "Espagne", continent: "Europe", year: "2019, 2023" },
  { name: "Italie", continent: "Europe", year: "2022" },
  { name: "Royaume-Uni", continent: "Europe", year: "2021" },
  { name: "Allemagne", continent: "Europe", year: "2020" },
];

const TravelMap = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Mes Voyages</h1>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Carte du monde de mes destinations
        </p>

        <div className="mb-12">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Destinations visitées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visitedPlaces.map((place, index) => (
                  <Card 
                    key={index}
                    className="hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{place.name}</h3>
                          <p className="text-sm text-muted-foreground">{place.continent}</p>
                        </div>
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="secondary" className="mt-2">
                        {place.year}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="relative w-full h-[500px] bg-muted/30 rounded-lg border border-border/50 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-12 h-12 text-primary mx-auto animate-pulse" />
              <p className="text-muted-foreground">
                Carte interactive en développement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelMap;
