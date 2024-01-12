import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center space-y-5"
      id="contact"
    >
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <ul className="flex flex-col space-x-10 sm:flex-row">
        <li>
          <Link href="mailto:aminekhiari72@gmail.com">
            <Button variant={"link"} className="gap-2">
              <Mail size={15} /> aminekhiari72@gmail.com
            </Button>
          </Link>
        </li>

        <li>
          <Link href="https://www.instagram.com/okch4m/" target="_blank">
            <Button variant={"link"} className="gap-2">
              <Instagram size={15} /> @okch4m
            </Button>
          </Link>
        </li>

        <li>
          <Link
            href="https://www.linkedin.com/in/amine-khiari-73b136237/"
            target="_blank"
          >
            <Button variant={"link"} className="gap-2">
              <Linkedin size={15} />
              Amine Khiari
            </Button>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
