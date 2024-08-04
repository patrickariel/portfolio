import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import Meteors from "@/components/magicui/meteors";
import { Portfolio } from "@/components/portfolio";
import "@/index.css";
import "@fontsource-variable/inter";

export function App() {
  return (
    <>
      <div className="absolute top-0 h-[250px] w-full overflow-hidden sm:max-w-[50%]">
        <Meteors number={30} />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-white dark:from-background" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background" />
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={0.4}
        repeatDelay={0.1}
        className="fixed inset-x-0 inset-y-[-30%] top-0 h-screen w-full skew-y-12 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
      />
      <Portfolio />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background" />
    </>
  );
}
