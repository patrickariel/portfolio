import { Badge, BadgeProps } from "@/components/ui/badge";
import {
  SiCss3,
  SiExpress,
  SiGnubash,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiLua,
  SiNextdotjs,
  SiNixos,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";

export function HtmlBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiHtml5 color="default" size="1em" />
      Html
      {children}
    </Badge>
  );
}

export function CssBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiCss3 color="default" size="1em" />
      Css
      {children}
    </Badge>
  );
}

export function JavaScriptBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiJavascript color="default" size="1em" />
      JavaScript
      {children}
    </Badge>
  );
}

export function TypeScriptBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiTypescript color="default" size="1em" />
      TypeScript
      {children}
    </Badge>
  );
}

export function ReactBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiReact color="default" size="1em" />
      React
      {children}
    </Badge>
  );
}

export function NextJsBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiNextdotjs color="default" size="1em" className="stroke-white" />
      Next.js
      {children}
    </Badge>
  );
}

export function TailwindBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiTailwindcss color="default" size="1em" />
      Tailwind
      {children}
    </Badge>
  );
}

export function PostgreSqlBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiPostgresql color="default" size="1em" />
      PostgreSQL
      {children}
    </Badge>
  );
}

export function PrismaBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiPrisma color="default" size="1em" />
      Prisma
      {children}
    </Badge>
  );
}

export function TrpcBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiTrpc color="default" size="1em" />
      tRPC
      {children}
    </Badge>
  );
}

export function LinuxBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiLinux color="default" size="1em" />
      Linux
      {children}
    </Badge>
  );
}

export function NixOsBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiNixos color="default" size="1em" />
      NixOS
      {children}
    </Badge>
  );
}

export function RustBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiRust color="default" size="1em" />
      Rust
      {children}
    </Badge>
  );
}

export function ViteBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiVite color="default" size="1em" />
      Vite
      {children}
    </Badge>
  );
}

export function ExpressBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiExpress color="default" size="1em" />
      Express
      {children}
    </Badge>
  );
}

export function ShellBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiGnubash color="default" size="1em" />
      Shell
      {children}
    </Badge>
  );
}

export function GolangBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiGo color="default" size="1.5em" />
      Go
      {children}
    </Badge>
  );
}

export function PythonBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiPython color="default" size="1em" />
      Python
      {children}
    </Badge>
  );
}

export function LuaBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <SiLua color="default" size="1em" />
      Lua
      {children}
    </Badge>
  );
}

export function AuthJsBadge({ children, ...props }: BadgeProps) {
  return (
    <Badge {...props}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 210 232"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M208.687 31.859L30.0947 167.73C8.16388 127.966 0.567559 79.9975 0 51.2275V33.6181C0 31.0567 2.7788 29.5628 4.16851 29.1356C33.5617 20.2778 93.2465 2.30524 96.8378 1.28069C100.429 0.256138 103.464 0 104.534 0H104.631C105.7 0 108.735 0.256138 112.327 1.28069C115.918 2.30524 175.603 20.2778 204.996 29.1356C206.03 29.4533 207.832 30.3613 208.687 31.859Z"
          fill="url(#paint0_linear_128_61)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.0938 167.952L208.686 32.0815C208.981 32.5983 209.164 33.1842 209.164 33.8406V51.45C208.202 100.223 187.038 204.172 110.081 229.786C109.013 230.213 106.49 231.067 104.951 231.067H104.212C102.673 231.067 100.15 230.213 99.0814 229.786C67.5193 219.281 45.3415 195.6 30.0938 167.952Z"
          fill="url(#paint1_linear_128_61)"
        />
        <path
          d="M111.74 1.28325C108.147 0.25665 105.11 0 104.04 0L103.719 231.305H104.361C105.901 231.305 108.425 230.45 109.494 230.022C186.489 204.357 207.663 100.2 208.625 51.3299V33.6853C208.625 31.1188 205.845 29.6216 204.454 29.1939C175.047 20.3181 115.333 2.30985 111.74 1.28325Z"
          fill="url(#paint2_linear_128_61)"
          fillOpacity="0.21"
        />
        <ellipse
          cx="104.905"
          cy="114.209"
          rx="47.801"
          ry="47.4802"
          fill="#E3E2FA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M96.2435 124.475C92.6077 124.796 83.4111 123.192 78.9197 119.342C74.0971 115.208 71.541 109.718 71.541 101.697C71.541 91.7469 80.5239 81.1654 93.0355 81.4861C104.919 81.7907 112.934 88.4894 114.53 99.1307C115.363 104.684 114.514 107.353 113.854 109.426C113.752 109.749 113.654 110.057 113.568 110.359C113.247 111.429 112.798 113.76 113.568 114.53C114.337 115.3 126.079 126.614 131.854 132.174C132.388 132.816 133.458 134.42 133.458 135.703V141.799C133.458 142.761 133.201 143.082 132.175 143.082H119.342C118.594 142.975 117.096 142.248 117.096 140.195C117.096 138.006 116.863 137.684 116.396 137.039C116.316 136.928 116.228 136.807 116.134 136.666C115.492 135.703 114.209 135.703 112.926 135.703C111.643 135.703 110.68 135.382 110.039 134.741C109.397 134.099 109.397 133.137 109.718 131.854C110.039 130.57 109.718 129.287 109.076 128.966C108.974 128.915 108.856 128.848 108.723 128.772C108.019 128.372 106.896 127.734 105.547 128.004C103.943 128.325 101.697 128.004 100.414 126.721C99.131 125.437 97.5267 124.401 96.2435 124.475ZM87.5814 100.094C90.2391 100.094 92.3936 97.9393 92.3936 95.2816C92.3936 92.6239 90.2391 90.4694 87.5814 90.4694C84.9237 90.4694 82.7692 92.6239 82.7692 95.2816C82.7692 97.9393 84.9237 100.094 87.5814 100.094Z"
          fill="url(#paint3_linear_128_61)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_128_61"
            x1="19.5695"
            y1="96.5644"
            x2="97.5269"
            y2="15.0782"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#45FFC8" />
            <stop offset="1" stopColor="#1DBBF1" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_128_61"
            x1="73.7856"
            y1="143.724"
            x2="170.671"
            y2="190.884"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D14AE8" />
            <stop offset="0.552228" stopColor="#B628E3" />
            <stop offset="1" stopColor="#8315FD" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_128_61"
            x1="155.914"
            y1="21.8152"
            x2="155.914"
            y2="182.542"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#20ABF5" />
            <stop offset="0.398093" stopColor="#2A8CC3" />
            <stop offset="1" stopColor="#A104DC" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_128_61"
            x1="90.1481"
            y1="99.4517"
            x2="129.287"
            y2="138.912"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FE5B01" />
            <stop offset="1" stopColor="#FFB200" />
          </linearGradient>
        </defs>
      </svg>
      Auth.js
      {children}
    </Badge>
  );
}
