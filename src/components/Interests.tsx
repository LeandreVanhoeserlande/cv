import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Plane, Bike, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const interests = [
  {
    name: "Sport",
    icon: Dumbbell,
    color: "text-primary",
    link: "/sports"
  },
  {
    name: "Voyage",
    icon: Plane,
    color: "text-secondary",
    link: "/voyages"
  },
  {
    name: "Moto",
    icon: Bike,
    color: "text-primary",
    link: "/moto"
  },
  {
    name: "Informatique",
    icon: Code2,
    color: "text-secondary",
    link: "/informatique"
  }
];

const Interests = () => {
  return (
    <section id="interets" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Centres d'intérêt</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">Ce qui me passionne au quotidien</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            const cardContent = (
              <Card 
                className="hover:shadow-card transition-all duration-300 hover:scale-110 animate-fade-in border-border/50 text-center cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon className={`w-8 h-8 ${interest.color}`} />
                    </div>
                    <p className="font-semibold text-lg">{interest.name}</p>
                  </div>
                </CardContent>
              </Card>
            );
            
            return interest.link ? (
              <Link key={index} to={interest.link} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={index}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
