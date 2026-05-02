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
      image: "/k-edc-shot.png",
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
      image: "/sleep4fajr-shot.png",
      name: "Sleep4Fajr",
      description: "Sleep4Fajr is a prayer-time and sleep-planning product I built to help users know the best time to sleep before Fajr. It includes a Firefox (Chrome soon) extension that fetches location-based prayer times, calculates ideal bedtimes using 90-minute sleep cycles, shows a live countdown to Fajr, and sends bedtime reminder notifications.",
      technologies: ["Next.js", "Tailwindcss"],
      type: "Personal",
      status: "COMPLETE",
      github: "",
      demo: "https://sleep4fajr.vercel.app",
    },

    {
      image: "/city-express-shot.png",
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
      image: "/devfest24-shot.png",
      name: "DevFest Website 2024 for GDG Batna",
      description:
        "The DevFest 2024 registration website for GDG Batna, built with React.js/Vite, Tailwind CSS, and Framer Motion, features smooth transitions and stunning animations. As team leader, I ensured the design met UI/UX expectations.",
      technologies: ["Next.js", "Tailwindcss", "Framer Motion"],
      type: "Club Activity",
      status: "COMPLETE",
      github: "",
      demo: "https://devfest24-client.vercel.app/",
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
