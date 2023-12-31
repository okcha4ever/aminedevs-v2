import { AboutMe } from "@/components/AboutMe";
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
    </main>
  );
};

export default HomePage;
