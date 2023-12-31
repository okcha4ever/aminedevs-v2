"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type Project } from "../Projects";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const ProjectCard = ({ project, idx }: { project: Project; idx: number }) => {
  // if card is in the right: animate from right. else: left
  const position = idx % 2 === 0 ? { x: -50 } : { x: 50 };

  return (
    <motion.div
      initial={{ ...position, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ bounce: false }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader className=" space-y-3">
          <CardTitle>
            {project.name} |{" "}
            {(project.status === "COMPLETE" && (
              <code className="text-sm text-green-400">
                {project.status.toLowerCase()}
              </code>
            )) ||
              (project.status === "IN-PROGRESS" && (
                <code className="text-sm text-zinc-500">
                  {project.status.toLowerCase()}
                </code>
              )) ||
              (project.status === "UNCOMPLETED" && (
                <code className="text-sm text-red-500">
                  {project.status.toLowerCase()}
                </code>
              ))}
          </CardTitle>

          <CardDescription>
            <Link
              href={project.demo || "#"}
              target={project.demo ? "_blank" : ""}
            >
              <Image
                src={project.image}
                width={300}
                height={200}
                alt={project.name}
                className="w-full rounded-lg"
              />
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-x-2">
            <code>Technlogies:</code>
            {project.technologies.map((technology) => (
              <Badge>{technology}</Badge>
            ))}
          </div>
          <p className="max-w-lg">{project.description}</p>
        </CardContent>
        <CardFooter className="gap-2">
          {project.github ? (
            <Link href={project.github} target="_blank">
              <Button className="gap-2 rounded-full border" variant={"default"}>
                <Github /> Github
              </Button>
            </Link>
          ) : null}
          {project.demo ? (
            <Link href={project.demo} target="_blank">
              <Button
                className="gap-2 rounded-full border hover:bg-green-400"
                variant={"ghost"}
              >
                <Globe2 /> Live demo
              </Button>
            </Link>
          ) : null}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
