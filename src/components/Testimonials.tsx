import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jean Dupont",
    role: "Maître de stage",
    content: "Léandre a fait preuve d'une grande autonomie et d'une réelle capacité d'apprentissage. Ses compétences techniques sont impressionnantes pour son niveau."
  },
  {
    name: "Marie Laurent",
    role: "Professeur",
    content: "Un étudiant curieux et investi, qui n'hésite pas à aller au-delà du programme. Son travail en cybersécurité est remarquable."
  },
  {
    name: "Thomas Martin",
    role: "Mentor",
    content: "Léandre combine parfaitement théorie et pratique. Sa passion pour l'informatique se ressent dans chacun de ses projets."
  }
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Témoignages</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">Ce qu'ils disent de mon travail</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                <p className="text-muted-foreground mb-6 italic">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
