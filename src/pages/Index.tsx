import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Education />
      <Testimonials />
      <Skills />
      <Interests />
      <Contact />
    </div>
  );
};

export default Index;
