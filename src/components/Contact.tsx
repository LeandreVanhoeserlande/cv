import { Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-background via-muted to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactez-moi</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'une opportunité d'alternance
        </p>
        
        <div className="flex justify-center mb-12">
          <a 
            href="https://www.linkedin.com/in/l%C3%A9andre-vanhoeserlande-786174379/"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-tech text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        <footer className="text-muted-foreground text-sm border-t border-border pt-8">
          <p>© 2024 Léandre Vanhoeserlande. Tous droits réservés.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
