import { ArrowLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import worldMap from "@/assets/world-map.avif";

// Coordonnées ajustées pour la carte du monde (en pourcentage)
const destinations = [
  { name: "Sicile", country: "Italie", x: 52, y: 38 },
  { name: "Majorque", country: "Espagne", x: 47, y: 36 },
  { name: "Bangkok", country: "Thaïlande", x: 76, y: 50 },
  { name: "Tenerife", country: "Espagne", x: 40, y: 44 },
  { name: "Marrakech", country: "Maroc", x: 44, y: 42 },
  { name: "Tunisie", country: "Tunisie", x: 51, y: 40 },
  { name: "Guadeloupe", country: "France", x: 26, y: 52 },
  { name: "Hurghada", country: "Égypte", x: 57, y: 44 },
  { name: "Saarbrücken", country: "Allemagne", x: 50, y: 30 },
];

const TravelMap = () => {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Mes Voyages</h1>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Découvertes et ouverture sur le monde
        </p>

        {/* World Map Container */}
        <div className="relative w-full aspect-[2/1] rounded-lg border border-border/50 overflow-hidden mb-8">
          {/* Map Background Image */}
          <img 
            src={worldMap} 
            alt="Carte du monde" 
            className="w-full h-full object-cover opacity-60"
          />
          
          {/* Destination pins overlay */}
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="absolute cursor-pointer group"
              style={{ left: `${dest.x}%`, top: `${dest.y}%`, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setHoveredPin(dest.name)}
              onMouseLeave={() => setHoveredPin(null)}
            >
              {/* Pin dot */}
              <div 
                className={`w-3 h-3 rounded-full bg-primary transition-all duration-200 ${
                  hoveredPin === dest.name ? 'scale-150 shadow-lg shadow-primary/50' : ''
                }`}
              />
              
              {/* Tooltip on hover */}
              {hoveredPin === dest.name && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover border border-border rounded text-xs whitespace-nowrap z-10">
                  {dest.name}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Destinations list */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/30 animate-fade-in hover:bg-muted/70 transition-colors"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{dest.name}</p>
                <p className="text-xs text-muted-foreground truncate">{dest.country}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-center text-muted-foreground italic max-w-2xl mx-auto">
          "Les voyages développent ma curiosité, mon adaptabilité et mon ouverture d'esprit — 
          des qualités essentielles dans un environnement professionnel en constante évolution."
        </p>
      </div>
    </div>
  );
};

export default TravelMap;
