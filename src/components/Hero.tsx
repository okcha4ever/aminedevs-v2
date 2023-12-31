"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "lottie-react";
import heroAnimation from "public/pcanimations.json";
import pcAnimation from "public/heropcanimation.json";
import { Button } from "./ui/button";
import { Github, Linkedin } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document?.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="w-full pb-5 pt-12 md:pb-20 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid items-center gap-4 px-10 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sm:pt-10"
            >
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Amine Khiari, <br />
                Full-Stack Developer
              </h1>

              <div className="hidden w-full justify-start md:flex ">
                <div className="w-[300px] ">
                  <Lottie animationData={heroAnimation} />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start space-y-4"
            >
              <div className="hidden w-full justify-end md:flex ">
                <div className="w-[300px] ">
                  <Lottie animationData={pcAnimation} />
                </div>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                With over 3 years in the industry of tech, I specialize in
                building scalable and optimized web applications with modern
                tools.
              </p>
              <div className="inline-flex w-full items-center justify-between pe-10">
                <div className="space-x-2">
                  <Button
                    onClick={() => scrollToProjects()}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  >
                    View Projects
                  </Button>
                  <Button
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    onClick={() => scrollToContact()}
                  >
                    Contact Me
                  </Button>
                </div>
                <div className="space-x-2">
                  <Link href="https://github.com/okcha4ever" target="_blank">
                    <Button className="gap-2 text-center text-sm text-white">
                      <Github /> Github
                    </Button>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/amine-khiari-73b136237"
                    target="_blank"
                  >
                    <Button
                      variant={"ghost"}
                      className="gap-2 border text-center text-sm"
                    >
                      <Linkedin /> LinkedIn
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
