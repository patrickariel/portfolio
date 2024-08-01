import avatar from "/avatar.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContact,
  CardContent,
  CardRole,
  CardHeader,
  CardName,
  CardTopic,
  CardBio,
  CardProfile,
  CardContactEntry,
} from "@/components/ui/card";
import {
  Blocks,
  CircleUser,
  CodeXml,
  Droplets,
  FolderGit2,
  GraduationCap,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaRust } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { PiGithubLogoBold } from "react-icons/pi";
import {
  RiNextjsFill,
  RiReactjsLine,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiTrpc, SiNixos, SiPrisma } from "react-icons/si";

export function Portfolio() {
  return (
    <Card>
      <CardHeader>
        <CardProfile>
          <Avatar className="size-[100px]">
            <AvatarImage src={avatar} />
            <AvatarFallback>
              <User size={64} />
            </AvatarFallback>
          </Avatar>
          <CardBio>
            <CardName className="text-5xl [word-spacing:9px]">
              <span>Patrick</span>{" "}
              <span className="font-normal text-sky-300">Ariel</span>
            </CardName>
            <CardRole className="text-xl">Full-stack Web Developer</CardRole>
          </CardBio>
        </CardProfile>
      </CardHeader>

      <CardContent>
        <CardTopic icon={Droplets} label="About" />
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus
          luctus erat non tincidunt. Etiam maximus venenatis pellentesque. In
          hac habitasse platea dictumst. Duis eget enim quis sem venenatis
          ullamcorper. Nam facilisis vel tortor in convallis. Integer id ante a
          lorem cursus dapibus eu vitae massa. Vivamus eu nibh sit amet nibh
          convallis cursus.
        </p>
      </CardContent>

      <CardContent>
        <CardTopic icon={GraduationCap} label="Education" />
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus
          luctus erat non tincidunt. Etiam maximus venenatis pellentesque. In
          hac habitasse platea dictumst. Duis eget enim quis sem venenatis
          ullamcorper. Nam facilisis vel tortor in convallis. Integer id ante a
          lorem cursus dapibus eu vitae massa. Vivamus eu nibh sit amet nibh
          convallis cursus.
        </p>
      </CardContent>

      <CardContent>
        <CardTopic icon={CircleUser} label="Contact" />
        <CardContact>
          <CardContactEntry icon={Phone} label="Phone">
            <a
              href="tel:+6281235678201"
              className="font-medium [word-spacing:0px] hover:underline"
            >
              +62 81235678201
            </a>
          </CardContactEntry>
          <CardContactEntry icon={Mail} label="E-mail">
            <a
              href="mailto:patrickariel709@gmail.com"
              className="font-medium hover:underline"
            >
              patrickariel709@gmail.com
            </a>
          </CardContactEntry>
          <CardContactEntry icon={PiGithubLogoBold} label="GitHub">
            <a
              href="https://github.com/patrickariel"
              className="font-medium hover:underline"
            >
              @patrickariel
            </a>
          </CardContactEntry>
        </CardContact>
      </CardContent>

      <article className="flex flex-col gap-14 sm:flex-row lg:gap-5">
        <CardContent className="sm:w-1/2">
          <CardTopic icon={CodeXml} label="Skills" />
          <p className="flex flex-wrap gap-3 text-muted-foreground">
            <Badge variant="secondary">
              <FaHtml5 className="fill-orange-600" />
              Html
            </Badge>
            <Badge variant="secondary">
              <FaCss3Alt className="fill-blue-400" />
              Css
            </Badge>
            <Badge variant="secondary">
              <RiJavascriptFill className="fill-yellow-400" />
              JavaScript
            </Badge>
            <Badge variant="secondary">
              <BiLogoTypescript className="fill-sky-400" />
              TypeScript
            </Badge>
            <Badge variant="secondary">
              <RiReactjsLine className="fill-sky-300" />
              React
            </Badge>
            <Badge variant="secondary">
              <RiNextjsFill />
              Next.js
            </Badge>
            <Badge variant="secondary">
              <RiTailwindCssFill className="fill-sky-400" />
              Tailwind
            </Badge>
            <Badge variant="secondary">
              <BiLogoPostgresql className="fill-cyan-600" />
              PostgreSQL
            </Badge>
            <Badge variant="secondary">
              <SiPrisma />
              Prisma
            </Badge>
            <Badge variant="secondary">
              <SiTrpc className="fill-sky-500" />
              tRPC
            </Badge>
          </p>
        </CardContent>
        <CardContent className="sm:w-1/2">
          <CardTopic icon={Blocks} label="Hobbies" />
          <p className="flex flex-wrap gap-3 text-muted-foreground">
            <Badge variant="secondary">
              <FcLinux />
              Linux
            </Badge>
            <Badge variant="secondary">
              <SiNixos className="fill-sky-300" />
              NixOS
            </Badge>
            <Badge variant="secondary">
              <FaRust />
              Rust
            </Badge>
          </p>
        </CardContent>
      </article>

      <CardContent>
        <CardTopic icon={FolderGit2} label="Projects" />
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus
          luctus erat non tincidunt. Etiam maximus venenatis pellentesque. In
          hac habitasse platea dictumst. Duis eget enim quis sem venenatis
          ullamcorper. Nam facilisis vel tortor in convallis. Integer id ante a
          lorem cursus dapibus eu vitae massa. Vivamus eu nibh sit amet nibh
          convallis cursus.
        </p>
      </CardContent>
    </Card>
  );
}
