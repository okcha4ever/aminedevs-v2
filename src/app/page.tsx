import { AboutMe } from "@/components/AboutMe";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import StyledSeparator from "@/components/helpers/StyledSeparator";

const HomePage = () => {
  return (
    <main className="flex items-center justify-center pb-10">
      <div className="w-[100rem] space-y-5 ">
        <Hero />
        <StyledSeparator />
        <AboutMe />
        <StyledSeparator />
        <Projects />
        <StyledSeparator />
        <Contact />
      </div>
    </main>
  );
};

export default HomePage;
