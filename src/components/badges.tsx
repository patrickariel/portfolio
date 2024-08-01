import { Badge } from "@/components/ui/badge";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaRust } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import {
  RiNextjsFill,
  RiReactjsLine,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiTrpc, SiNixos, SiPrisma } from "react-icons/si";

export function HtmlBadge() {
  return (
    <Badge variant="secondary">
      <FaHtml5 className="fill-orange-600" />
      Html
    </Badge>
  );
}

export function CssBadge() {
  return (
    <Badge variant="secondary">
      <FaCss3Alt className="fill-blue-400" />
      Css
    </Badge>
  );
}

export function JavaScriptBadge() {
  return (
    <Badge variant="secondary">
      <RiJavascriptFill className="fill-yellow-400" />
      JavaScript
    </Badge>
  );
}

export function TypeScriptBadge() {
  return (
    <Badge variant="secondary">
      <BiLogoTypescript className="fill-sky-400" />
      TypeScript
    </Badge>
  );
}

export function ReactBadge() {
  return (
    <Badge variant="secondary">
      <RiReactjsLine className="fill-sky-300" />
      React
    </Badge>
  );
}

export function NextJsBadge() {
  return (
    <Badge variant="secondary">
      <RiNextjsFill />
      Next.js
    </Badge>
  );
}

export function TailwindBadge() {
  return (
    <Badge variant="secondary">
      <RiTailwindCssFill className="fill-sky-400" />
      Tailwind
    </Badge>
  );
}

export function PostgreSqlBadge() {
  return (
    <Badge variant="secondary">
      <BiLogoPostgresql className="fill-cyan-600" />
      PostgreSQL
    </Badge>
  );
}

export function PrismaBadge() {
  return (
    <Badge variant="secondary">
      <SiPrisma />
      Prisma
    </Badge>
  );
}

export function TrpcBadge() {
  return (
    <Badge variant="secondary">
      <SiTrpc className="fill-sky-500" />
      tRPC
    </Badge>
  );
}

export function LinuxBadge() {
  return (
    <Badge variant="secondary">
      <FcLinux />
      Linux
    </Badge>
  );
}

export function NixOsBadge() {
  return (
    <Badge variant="secondary">
      <SiNixos className="fill-sky-300" />
      NixOS
    </Badge>
  );
}

export function RustBadge() {
  return (
    <Badge variant="secondary">
      <FaRust />
      Rust
    </Badge>
  );
}
