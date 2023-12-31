import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChromeIcon,
  ComponentIcon,
  DatabaseIcon,
  DribbbleIcon,
  Github,
  InstagramIcon,
  LinkedinIcon,
  PiIcon,
} from "lucide-react";
import Link from "next/link";

export function AboutMe() {
  interface BadgeItem {
    className: string;
    icon: JSX.Element;
    text: string;
  }

  interface SocialItem {
    href: string;
    icon: JSX.Element;
  }

  const badgeList: BadgeItem[] = [
    {
      className: "py-1",
      icon: <ChromeIcon className="inline-block h-4 w-4" />,
      text: "JavaScript/Typescript",
    },
    {
      className: "py-1",
      icon: <ComponentIcon className="inline-block h-4 w-4" />,
      text: "React/Nextjs",
    },
    {
      className: "py-1",
      icon: <PiIcon className="inline-block h-4 w-4" />,
      text: "Python",
    },
    {
      className: "py-1",
      icon: <DribbbleIcon className="inline-block h-4 w-4" />,
      text: "Django",
    },

    {
      className: "py-1",
      icon: <DatabaseIcon className="inline-block h-4 w-4" />,
      text: "Prisma ORM",
    },
  ];

  const socialList: SocialItem[] = [
    {
      href: "https://github.com/okcha4ever",
      icon: <Github />,
    },
    {
      href: "https://www.linkedin.com/in/amine-khiari-73b136237/",
      icon: <LinkedinIcon />,
    },

    {
      href: "https://www.instagram.com/okch4m/",
      icon: <InstagramIcon />,
    },
  ];

  return (
    <main className="flex flex-col items-center justify-between space-y-10 p-5 md:flex-row md:items-start md:space-x-10 md:space-y-0 md:px-28">
      <div className="w-full md:w-1/3">
        <Avatar className="mx-auto h-48 w-48 md:mx-0">
          <AvatarImage alt="Amine Khiari" src="/selife.jpg" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
      </div>

      <div className="w-full md:w-2/3">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">About Me</h2>
          </CardHeader>
          <CardContent className="w-fit space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Hello, I'm a passionate software developer and interested in tech
              in general. As a full-stack developer, I have successfully taken
              projects from 0 to 1. I lead teams effectively ensuring an
              environment where people can do their best work and get
              acknowledged. I mostly work with{" "}
              <code>Typescript, Next.js and Prisma ORM</code>.<br />
              <br /> (I also touch grass, go to the gym, and do many fun
              activities.)
            </p>
            <h3 className="text-xl font-bold">Skills & Technologies</h3>
            <div className="flex max-w-screen-sm flex-row flex-wrap gap-2">
              {badgeList.map((badge) => (
                <Badge
                  className={`flex w-fit cursor-default select-none gap-1 overflow-hidden sm:overflow-ellipsis ${badge.className}`}
                  key={badge.text}
                >
                  {badge.icon}
                  {badge.text}
                </Badge>
              ))}
            </div>
            <h3 className="text-xl font-bold">Experience</h3>
            <ul>
              <li>- Freelancing experience.</li>
              <li>
                - Full-stack/Project leader at Devfest (Hackathon event) 2023,
                GDG Batna (Algeria).
              </li>
              <li>
                - Team leader at Code for Qods hackathon. Won at 4th place
                (project selected).
              </li>
            </ul>

            <h3 className="text-xl font-bold">Connect with me</h3>
            <div className="flex space-x-4">
              {socialList.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
