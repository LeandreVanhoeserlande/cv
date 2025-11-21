import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Education />
      <Testimonials />
      <Interests />
      <Contact />
    </div>
  );
};

export default Index;
