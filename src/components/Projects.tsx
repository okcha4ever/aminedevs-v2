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
      image: "/papetoys.png",
      name: "Pape Toys",
      description:
        "I developed an eCommerce website catering to a local library store specializing in school supplies. The platform facilitates seamless management of product, order, and category operations, including features like adding, deleting, and updating. With a robust cart mechanism and various additional functionalities, this project provided valuable insights into the comprehensive construction of a web application. (Translator extension recommended for an enhanced experience.)",
      technologies: ["Next.js", "Next-auth", "Prisma ORM", "Tailwindcss"],
      type: "Freelance",
      status: "COMPLETE",
      github: "",
      demo: "https://pape-toys.vercel.app",
    },

    {
      image: "/k-edc.json",
      name: "K-EDC",
      description:
        "I created a website for a tutor who supports high school students with cheat sheets and more. The site lets you access specific folders from Google Drive and manage them easily—add, delete, and update as needed. Give it a try! (Translator extension recommended)",
      technologies: ["Next.js", "Prisma ORM", "Tailwindcss"],
      type: "Freelance",
      status: "COMPLETE",
      github: "",
      demo: "https://k-edc.vercel.app",
    },

    {
      image: "/justpal.png",
      name: "JustPal",
      description:
        "During the Devfest Hackathon 2023, we created an AI-powered web app with a dual purpose: to amplify the narratives of traumatized individuals by transforming provided keywords into comprehensive descriptions, titles, and images, thus generating compelling stories; and to deliver up-to-date news on Palestine. The app also features 'PalChat,' an AI chatbot ready to engage in discussions about Palestine.",
      technologies: ["Next.js", "Next-auth", "Prisma ORM", "Tailwindcss"],
      type: "Hackathon Event",
      status: "UNCOMPLETED",
      github: "https://github.com/okcha4ever/JustPal/",
      demo: "https://just-pal.vercel.app",
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
