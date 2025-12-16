import { ArrowLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const destinations = [
  { name: "Sicile", country: "Italie", x: 54, y: 42 },
  { name: "Majorque", country: "Espagne", x: 50.5, y: 40 },
  { name: "Bangkok", country: "Thaïlande", x: 75, y: 52 },
  { name: "Tenerife", country: "Espagne", x: 43, y: 46 },
  { name: "Marrakech", country: "Maroc", x: 47, y: 44 },
  { name: "Tunisie", country: "Tunisie", x: 52, y: 43 },
  { name: "Guadeloupe", country: "France", x: 28, y: 50 },
  { name: "Hurghada", country: "Égypte", x: 58, y: 46 },
  { name: "Saarbrücken", country: "Allemagne", x: 51, y: 35 },
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
        <div className="relative w-full aspect-[2/1] bg-muted/30 rounded-lg border border-border/50 overflow-hidden mb-8">
          {/* Simple World Map SVG */}
          <svg
            viewBox="0 0 100 50"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Simplified world continents */}
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* Ocean background */}
            <rect width="100" height="50" fill="url(#mapGradient)" />
            
            {/* Simplified continents - stylized shapes */}
            <g fill="hsl(var(--muted-foreground))" fillOpacity="0.15" stroke="hsl(var(--border))" strokeWidth="0.2">
              {/* North America */}
              <path d="M5,10 Q15,8 25,12 Q30,18 28,25 Q20,28 15,22 Q8,20 5,15 Z" />
              {/* South America */}
              <path d="M25,35 Q30,32 32,38 Q30,48 25,48 Q20,45 22,38 Z" />
              {/* Europe */}
              <path d="M45,18 Q55,15 58,20 Q56,28 50,30 Q45,28 44,22 Z" />
              {/* Africa */}
              <path d="M48,32 Q55,30 60,35 Q58,48 52,50 Q45,48 46,40 Z" />
              {/* Asia */}
              <path d="M60,12 Q75,8 85,15 Q88,25 80,32 Q70,35 65,28 Q58,22 60,12 Z" />
              {/* Australia */}
              <path d="M78,38 Q85,36 88,40 Q86,46 80,46 Q76,44 78,38 Z" />
            </g>

            {/* Destination pins */}
            {destinations.map((dest) => (
              <g
                key={dest.name}
                onMouseEnter={() => setHoveredPin(dest.name)}
                onMouseLeave={() => setHoveredPin(null)}
                className="cursor-pointer"
              >
                {/* Pin circle */}
                <circle
                  cx={dest.x}
                  cy={dest.y}
                  r={hoveredPin === dest.name ? 1.5 : 1}
                  fill="hsl(var(--primary))"
                  className="transition-all duration-200"
                />
                {/* Pulse animation ring */}
                <circle
                  cx={dest.x}
                  cy={dest.y}
                  r="1.8"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.3"
                  opacity={hoveredPin === dest.name ? 0.6 : 0}
                  className="transition-opacity duration-200"
                />
                
                {/* Tooltip on hover */}
                {hoveredPin === dest.name && (
                  <g>
                    <rect
                      x={dest.x - 8}
                      y={dest.y - 6}
                      width="16"
                      height="4"
                      rx="0.5"
                      fill="hsl(var(--popover))"
                      stroke="hsl(var(--border))"
                      strokeWidth="0.1"
                    />
                    <text
                      x={dest.x}
                      y={dest.y - 3.5}
                      textAnchor="middle"
                      fontSize="2"
                      fill="hsl(var(--popover-foreground))"
                      className="font-medium"
                    >
                      {dest.name}
                    </text>
                  </g>
                )}
              </g>
            ))}
          </svg>
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
