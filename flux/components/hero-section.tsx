"use client";
import { ArrowRight, CreditCard } from "lucide-react";
import { LandingImage } from "./landing-image";
import { useEffect } from "react";
import { useAnimate, motion, stagger } from "motion/react";
export const HeroSection = () => {
  const [scope, animate] = useAnimate();
  const SubheadingWords =
    "AI powered platform to design, visualize, optimize and export production ready database schemas in minutes.";

  const Animationwords = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "linear",
        delay: stagger(0.03), // one by one
      },
    );
  };
  useEffect(() => {
    Animationwords();
  }, []);

  return (
    <div className=" py-16 px-0 ">
      <div className=" max-w-3xl  flex flex-col gap-1 ">
        <div className="flex justify-start ">
          <span className="px-1  border   border-dashed border-secondary-foreground/60 flex items-center font-medium   font-mono tracking-tighter  text-secondary-foreground/70">
            AI powerd DB Schema Mangement
          </span>
        </div>
        <h1 className="text-3xl   sm:text-6xl tracking-tight  font-bold">
          Design Better Database Schemas with{" "}
          <span className="text-primary">AI</span>
        </h1>
      </div>
      <p
        ref={scope}
        className="text-[14px]  inline-block  py-1 max-w-2xl    text-secondary-foreground/80   text-start font-sans"
      >
        {SubheadingWords.split("").map((char, index) => (
          <motion.span
            style={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            key={char + index}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </p>
      <div className="py-1  flex flex-col   justify-start">
        <motion.button
          initial={{
            y: 0,
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.3,
            delay: 0.5,
          }}
          className="group font-medium cursor-pointer  hover:bg-primary/60 duration-300 transition-all ease-in-out font-sans text-[14px]  w-40 justify-center  flex gap-1.5 items-center bg-primary text-white px-1.5 py-1  text-center"
        >
          <span>Try Pro Version</span>
          <ArrowRight className="size-5 group-hover:translate-x-1 duration-300 ease-in-out " />
        </motion.button>

        <motion.span
          initial={{
            y: 0,
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          className="flex px-0.5 gap-0.5 items-center tracking-tight text-[12px] text-secondary-foreground/60 font-medium"
        >
          <CreditCard className="size-4" />
          <span className="mt-0.5">No Card Required</span>
        </motion.span>
      </div>
      <LandingImage />
    </div>
  );
};
