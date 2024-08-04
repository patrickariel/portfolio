import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface TypingAnimationProps {
  text: string;
  duration?: number;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [exposed, setExposed] = useState(false);

  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "0px 0px -280px 0px",
  });

  useEffect(() => {
    if (inView && !exposed) {
      setExposed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (!exposed) {
      return;
    }

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text, exposed]);

  return (
    <h1
      ref={ref}
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
      {...props}
    >
      {displayedText}
    </h1>
  );
}
