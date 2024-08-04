import avatar from "/avatar.png";
import bingle from "/bingle.png";
import portfolio from "/portfolio.png";
import semicolon from "/semicolon.png";
import {
  AuthJsBadge,
  CssBadge,
  ExpressBadge,
  GolangBadge,
  HtmlBadge,
  JavaScriptBadge,
  LinuxBadge,
  LuaBadge,
  NextJsBadge,
  NixOsBadge,
  PostgreSqlBadge,
  PrismaBadge,
  PythonBadge,
  ReactBadge,
  RustBadge,
  ShellBadge,
  TailwindBadge,
  TrpcBadge,
  TypeScriptBadge,
  ViteBadge,
} from "@/components/badges";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShineBorder } from "@/components/magicui/shine-border";
import TypingAnimation from "@/components/magicui/typing-animation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeContainer } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Contact, ContactEntry } from "@/components/ui/contact";
import {
  Timeline,
  TimelineContent,
  TimelineEntry,
  TimelinePeriod,
} from "@/components/ui/timeline";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Globe, Mail, Phone, User } from "lucide-react";

const BLUR_FADE_DELAY = 0.05;

export function Portfolio() {
  return (
    <main className="flex w-full min-w-[300px] max-w-3xl flex-col gap-10 rounded-xl pt-4 text-card-foreground shadow-sm sm:p-14 sm:pt-11">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <header className="flex flex-col items-center gap-6 sm:flex-row sm:gap-9">
          <ShineBorder
            borderColors={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className="p-0"
            borderRadius={9999}
            borderWidth={2}
          >
            <Avatar className="relative size-[150px] sm:size-[110px]">
              <AvatarImage src={avatar} />
              <AvatarFallback delayMs={800}>
                <User size={64} />
              </AvatarFallback>
            </Avatar>
          </ShineBorder>
          <article className="flex flex-col items-center gap-4 sm:items-start">
            <h1 className="text-nowrap text-5xl font-bold [word-spacing:9px] sm:text-6xl">
              <strong className="bg-gradient-to-b from-white from-40% to-neutral-500 bg-clip-text text-transparent">
                Patrick
              </strong>{" "}
              <span className="bg-gradient-to-b from-sky-200 from-20% to-sky-600 bg-clip-text text-transparent">
                Ariel
              </span>
            </h1>
            <p className="text-center text-xl text-muted-foreground sm:text-start">
              An aspiring full-stack web developer. Passionate coder, curious
              tinkerer, relentless problem-solver.
            </p>
          </article>
        </header>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <article className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">About</h3>
          <p className="text-pretty text-[15px] text-muted-foreground">
            Hi there! I'm a full-stack developer specializing in TypeScript,
            React, Tailwind, and Next.js. With a strong passion for web
            development, I thrive on the blend of creativity and logic that
            coding offers. When I'm not crafting sleek, responsive websites,
            you'll find me exploring the depths of Linux, experimenting with
            Rust, or fine-tuning my OS setup. Let's build something amazing
            together!
          </p>
        </article>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <article className="relative flex flex-col gap-3">
          <h3 className="z-10 text-xl font-bold">Education</h3>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white shadow-2xl dark:from-background" />
          <Timeline>
            <TimelineEntry>
              <TimelineContent>
                <h3>Cita Hati School</h3>
                <p className="text-sm text-muted-foreground">Middle school</p>
              </TimelineContent>
              <TimelinePeriod>2010 - 2013</TimelinePeriod>
            </TimelineEntry>
            <TimelineEntry>
              <TimelineContent>
                <h3>Masa Depan Cerah</h3>
                <p className="text-sm text-muted-foreground">High school</p>
              </TimelineContent>
              <TimelinePeriod>2013 - 2016</TimelinePeriod>
            </TimelineEntry>
            <TimelineEntry>
              <TimelineContent>
                <h3>Imanuel</h3>
                <p className="text-sm text-muted-foreground">High school</p>
              </TimelineContent>
              <TimelinePeriod>2016 - 2017</TimelinePeriod>
            </TimelineEntry>
            <TimelineEntry connect={false}>
              <TimelineContent>
                <h3>Binar Academy</h3>
                <p className="text-sm text-muted-foreground">
                  Full-stack web bootcamp. Received "The Most Progressive
                  Student" certificate.
                </p>
              </TimelineContent>
              <TimelinePeriod>Feb 2024 - Aug 2024</TimelinePeriod>
            </TimelineEntry>
          </Timeline>
        </article>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="flex flex-col gap-14 sm:flex-row sm:gap-5">
          <article className="flex flex-col gap-5 sm:w-1/2">
            <h3 className="text-xl font-bold">Skills</h3>
            <BadgeContainer>
              <HtmlBadge />
              <CssBadge />
              <JavaScriptBadge />
              <TypeScriptBadge />
              <ReactBadge />
              <NextJsBadge />
              <ExpressBadge />
              <TailwindBadge />
              <PostgreSqlBadge />
              <PrismaBadge />
              <TrpcBadge />
            </BadgeContainer>
          </article>
          <article className="flex flex-col gap-5 sm:w-1/2">
            <h3 className="text-xl font-bold">Dabbling</h3>
            <BadgeContainer>
              <LinuxBadge />
              <NixOsBadge />
              <RustBadge />
              <GolangBadge />
              <ShellBadge />
              <PythonBadge />
              <LuaBadge />
            </BadgeContainer>
          </article>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <article className="flex flex-col gap-5">
          <h3 className="text-xl font-bold">Projects</h3>
          <div className="columns-1 gap-4 md:columns-2">
            <ShineBorder
              borderColors={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className="p-0"
            >
              <Card className="relative overflow-hidden">
                <AspectRatio
                  ratio={16 / 9}
                  className="overflow-hidden border-b"
                >
                  <img
                    src={semicolon}
                    className="absolute inset-0 size-full object-cover text-transparent transition-all hover:scale-105"
                  />
                </AspectRatio>
                <CardHeader>
                  <CardTitle>Semicolon</CardTitle>
                  <CardDescription>June 2024 - Aug 2024</CardDescription>
                </CardHeader>
                <CardContent className="text-[15px]">
                  A functional X/Twitter clone with authentication, media
                  upload, profile management, search and more.
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <BadgeContainer>
                    <NextJsBadge variant="secondary" />
                    <TailwindBadge variant="secondary" />
                    <PrismaBadge variant="secondary" />
                    <TrpcBadge variant="secondary" />
                    <AuthJsBadge variant="secondary" />
                  </BadgeContainer>
                  <div className="flex gap-2">
                    <Button asChild size="sm">
                      <a
                        href="https://semicolon.blog"
                        target="_blank"
                        className="flex gap-2"
                      >
                        <Globe size={17} />
                        <span>Website</span>
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a
                        href="https://github.com/semicolon-org/semicolon"
                        target="_blank"
                        className="flex gap-2"
                      >
                        <SiGithub size={17} />
                        <span>Repository</span>
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </ShineBorder>
            <Card className="mt-5 overflow-hidden">
              <AspectRatio ratio={16 / 9} className="overflow-hidden border-b">
                <img
                  src={bingle}
                  className="absolute inset-0 size-full object-cover text-transparent transition-all hover:scale-105"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle>Bingle Shop</CardTitle>
                <CardDescription>March 2024</CardDescription>
              </CardHeader>
              <CardContent className="text-[15px]">
                A simple Next.js e-commerce app backed by an Express API server.
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <BadgeContainer>
                  <NextJsBadge variant="secondary" />
                  <ExpressBadge variant="secondary" />
                  <TailwindBadge variant="secondary" />
                  <PrismaBadge variant="secondary" />
                  <TrpcBadge variant="secondary" />
                </BadgeContainer>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a
                      href="https://github.com/patrickariel/bingle-shop"
                      target="_blank"
                      className="flex gap-2"
                    >
                      <SiGithub size={17} />
                      <span>Repository</span>
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
            <Card className="mt-5 overflow-hidden">
              <AspectRatio ratio={16 / 9} className="overflow-hidden border-b">
                <img
                  src={portfolio}
                  className="absolute inset-0 size-full object-cover text-transparent transition-all hover:scale-105"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
                <CardDescription>Aug 2024</CardDescription>
              </CardHeader>
              <CardContent className="text-[15px]">
                A clean, minimalistic portfolio site designed for my personal
                needs.
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <BadgeContainer>
                  <ViteBadge variant="secondary" />
                  <ReactBadge variant="secondary" />
                  <TailwindBadge variant="secondary" />
                </BadgeContainer>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a
                      href="https://github.com/patrickariel/portfolio"
                      target="_blank"
                      className="flex gap-2"
                    >
                      <SiGithub size={17} />
                      <span>Repository</span>
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
            <article className="flex h-[300px] items-center justify-center border-none bg-none p-5 sm:h-[500px]">
              <TypingAnimation
                className="text-4xl font-semibold leading-none tracking-tight"
                duration={100}
                text="And still building more..."
              />
            </article>
          </div>
        </article>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 11} className="z-10">
        <article className="flex flex-col items-center gap-12 sm:mt-14">
          <h3 className="relative text-nowrap pb-5 text-3xl font-bold sm:text-5xl">
            Get in touch with me
            <div className="absolute bottom-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div className="absolute inset-x-10 bottom-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute bottom-0 right-20 h-[5px] w-1/3 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div className="absolute bottom-0 right-10 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          </h3>
          <Contact>
            <ContactEntry icon={Phone} label="Phone">
              <a
                href="tel:+6281235678201"
                className="font-medium [word-spacing:0px] hover:underline"
              >
                +62 81235678201
              </a>
            </ContactEntry>
            <ContactEntry icon={Mail} label="E-mail">
              <a
                href="mailto:patrickariel709@gmail.com"
                className="font-medium hover:underline"
              >
                patrickariel709@gmail.com
              </a>
            </ContactEntry>
            <ContactEntry icon={SiGithub} label="GitHub">
              <a
                href="https://github.com/patrickariel"
                className="font-medium hover:underline"
                target="_blank"
              >
                @patrickariel
              </a>
            </ContactEntry>
          </Contact>
        </article>
      </BlurFade>
    </main>
  );
}
