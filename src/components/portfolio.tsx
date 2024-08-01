import avatar from "/avatar.png";
import {
  CssBadge,
  HtmlBadge,
  JavaScriptBadge,
  LinuxBadge,
  NextJsBadge,
  NixOsBadge,
  PostgreSqlBadge,
  PrismaBadge,
  ReactBadge,
  RustBadge,
  TailwindBadge,
  TrpcBadge,
  TypeScriptBadge,
} from "@/components/badges";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeContainer } from "@/components/ui/badge";
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
import { Pane, PaneContent, PaneTab } from "@/components/ui/pane";
import {
  Blocks,
  CircleUser,
  CodeXml,
  Droplets,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { PiGithubLogoBold } from "react-icons/pi";

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
          <BadgeContainer>
            <HtmlBadge />
            <CssBadge />
            <JavaScriptBadge />
            <TypeScriptBadge />
            <ReactBadge />
            <NextJsBadge />
            <TailwindBadge />
            <PostgreSqlBadge />
            <PrismaBadge />
            <TrpcBadge />
          </BadgeContainer>
        </CardContent>
        <CardContent className="sm:w-1/2">
          <CardTopic icon={Blocks} label="Hobbies" />
          <BadgeContainer>
            <LinuxBadge />
            <NixOsBadge />
            <RustBadge />
          </BadgeContainer>
        </CardContent>
      </article>

      <CardContent>
        <CardTopic icon={FolderGit2} label="Projects" />
        <Pane>
          <PaneTab>
            <a
              href="https://github.com/semicolon-org/semicolon"
              className="flex w-fit flex-row items-center gap-2 border-b border-transparent hover:border-white"
            >
              <ExternalLink size={19} /> <span>Semicolon</span>
            </a>
          </PaneTab>
          <PaneContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus luctus erat non tincidunt. Etiam maximus venenatis
              pellentesque. In hac habitasse platea dictumst.
            </p>
            <BadgeContainer>
              <NextJsBadge />
              <TailwindBadge />
              <PrismaBadge />
            </BadgeContainer>
          </PaneContent>
        </Pane>
      </CardContent>
    </Card>
  );
}
