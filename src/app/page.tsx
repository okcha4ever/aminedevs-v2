import { AboutMe } from "@/components/AboutMe";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import StyledSeparator from "@/components/helpers/StyledSeparator";

const HomePage = () => {
  return (
    <main className="space-y-5 pb-10">
      <Hero />
      <StyledSeparator />
      <AboutMe />
      <StyledSeparator />
      <Projects />
      <StyledSeparator />
      <Contact />
    </main>
  );
};

export default HomePage;
