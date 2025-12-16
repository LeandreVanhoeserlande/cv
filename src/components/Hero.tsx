import { Badge } from "@/components/ui/badge";
import { Car, Bike } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-muted to-background">
      <div className="max-w-4xl w-full text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
          Léandre Vanhoeserlande
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
          Étudiant en informatique, passionné par le développement, les réseaux et la cybersécurité. 
          Je recherche une alternance pour mettre mes compétences techniques et ma curiosité au service de projets ambitieux.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <Badge variant="secondary" className="text-base py-2 px-4 flex items-center gap-2">
            <Car className="w-4 h-4" />
            Permis B
          </Badge>
          <Badge variant="secondary" className="text-base py-2 px-4 flex items-center gap-2">
            <Bike className="w-4 h-4" />
            Permis A2
          </Badge>
        </div>
        <div className="flex justify-center gap-4">
          <a href="#competences" className="inline-block">
            <button className="bg-gradient-tech text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105">
              Voir mes compétences
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
