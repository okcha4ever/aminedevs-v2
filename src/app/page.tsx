import { AboutMe } from "@/components/component/AboutMe";
import { Hero } from "@/components/component/Hero";

const HomePage = () => {
  return (
    <main className="space-y-20">
      <Hero />
      <AboutMe />
    </main>
  );
};

export default HomePage;
