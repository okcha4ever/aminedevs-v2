import { Projector } from "lucide-react";
import React from "react";
import ProjectCard from "./helpers/ProjectCard";

export type Project = {
  image: string;
  name: string;
  description: string;
  technologies: string[];
  type: string;
  status: "COMPLETE" | "IN-PROGRESS" | "UNCOMPLETED";
  github: string;
  demo: string;
};

const Projects = () => {
  const projectList: Project[] = [
    {
      image: "/k-edc.jpg",
      name: "K-EDC",
      description:
        "I developed a website called ’K-EDC’ using Next.js and React for a high school tutor to share resources with students, integrating the Google Drive API to provide seamless access to materials while maintaining a clean and minimalistic design for an intuitive user experience.",
      technologies: ["Next.js", "Tailwindcss"],
      type: "Freelance",
      status: "COMPLETE",
      github: "",
      demo: "https://k-edc.vercel.app",
    },

    {
      image: "/city-express-clone.jpg",
      name: "City Express Clone",
      description:
        'I developed a clone website for the renowned Swiss delivery company "City Express Sarl" to showcase my skills and understanding of web development. You can check it out',
      technologies: ["Next.js", "Tailwindcss"],
      type: "Personal",
      status: "COMPLETE",
      github: "",
      demo: "https://city-express-clone.vercel.app",
    },

    {
      image: "/devfest.png",
      name: "DevFest Website 2024 for GDG Batna",
      description:
        "The DevFest 2024 registration website for GDG Batna, built with React.js/Vite, Tailwind CSS, and Framer Motion, features smooth transitions and stunning animations. As team leader, I ensured the design met UI/UX expectations.",
      technologies: ["Next.js", "Tailwindcss", "Framer Motion"],
      type: "Club Activity",
      status: "COMPLETE",
      github: "",
      demo: "https://devfest.gdg-batna.com",
    },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center space-y-5"
      id="projects"
    >
      <h2 className="inline-flex items-center gap-2 text-2xl font-bold">
        Projects <Projector />
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-5 px-10">
        {projectList.map((project, idx) => (
          <ProjectCard key={project.name} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
